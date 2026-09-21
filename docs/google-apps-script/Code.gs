/**
 * ============================================================================
 * doobot.ai — Event Registration Backend (Google Apps Script)
 * Campaña: "Bot de Voz: calienta que sales…!!" (Semana Contact Center 2026)
 * ============================================================================
 * 
 * Protocolo de Comunicación:
 * El Web App devuelve SIEMPRE un payload JSON de aplicación válido mediante ContentService.
 * NO depende de códigos de estado HTTP personalizados (403, 500, etc.) ya que Google
 * Apps Script no garantiza su preservación a través de los proxies y redirecciones de Google.
 * 
 * Garantía de Idempotencia y Estado de Notificación (Columnas I y J):
 * 1. LockService: Serializa peticiones concurrentes para evitar condiciones de carrera.
 * 2. Columna I (Submission ID): Identificador único persistente en toda la columna I
 *    (buscado mediante TextFinder desde I2 hasta la última fila con datos).
 * 3. Columna J (Notificación enviada):
 *    - "Sí": correo confirmado como enviado.
 *    - "No": MailApp lanzó error y se puede reintentar.
 *    - "Enviando": estado transitorio / ambiguo. Si la ejecución se interrumpe o falla
 *      la actualización posterior a "Sí", NO se reenvía automáticamente el email en
 *      reintentos para prevenir duplicados (requiere revisión manual en caso excepcional).
 * 4. Gestión de Reintentos (Retry):
 *    - Si una fila existe y J="Sí": no se añade fila ni se envía correo (idempotente).
 *    - Si una fila existe y J="No": NO se añade una segunda fila; pasa J a "Enviando" y
 *      reintenta ÚNICAMENTE el envío del correo pendiente (si éxito -> "Sí", si error -> "No").
 *    - Si una fila existe y J="Enviando": estado ambiguo de ejecución previa; NO se añade
 *      fila y NO se reenvía automáticamente el correo por seguridad anti-duplicados.
 * 5. CacheService: Acelerador temporal L1 (guarda "sent" solo tras confirmación de envío con J="Sí").
 *
 * Códigos de Aplicación:
 * - registration_saved: Éxito total (hoja guardada y notificación enviada, o duplicado resuelto)
 * - registration_saved_notification_failed: Hoja guardada con éxito, pero falló el email
 * - registration_saved_notification_unconfirmed: Hoja guardada, notificación en estado ambiguo ("Enviando")
 * - forbidden: Secreto compartido ausente o no coincidente
 * - invalid_payload: Faltan campos obligatorios o superan límites
 * - sheets_error: Error al acceder o escribir en la hoja de cálculo
 * - lock_timeout: El servidor está ocupado procesando otra solicitud concurrente
 * - internal_error: Excepción imprevista capturada en tiempo de ejecución
 * 
 * Script Properties requeridas (⚙️ Configuración del proyecto > Propiedades de la secuencia de comandos):
 * 1. SPREADSHEET_ID: 12pEWyXQUwH1PWKyC_akf7I8Yvxfx4vwzV4vzvwfJR4w
 * 2. REGISTRATION_SHARED_SECRET: [Cadena secreta compartida con el servidor de la web]
 */

var DEFAULT_SPREADSHEET_ID = "12pEWyXQUwH1PWKyC_akf7I8Yvxfx4vwzV4vzvwfJR4w";
var SHEET_NAME = "Inscripciones";
// Destinatarios comerciales internos aprobados (intactos)
var EMAIL_RECIPIENTS = "patricia@doobot.ai,angel@doobot.ai";
var EMAIL_SUBJECT = "Nueva inscripción · Bot de Voz · Contact Center 2026";
var CAMPAIGN_NAME = "contact-center-2026";

/**
 * 1. CONFIGURACIÓN DE LA HOJA (setupSheet)
 * Solo para inicializar hojas nuevas. NO modifica hojas que ya contengan datos.
 */
function setupSheet() {
  var props = PropertiesService.getScriptProperties();
  var spreadsheetId = props.getProperty("SPREADSHEET_ID") || DEFAULT_SPREADSHEET_ID;
  
  var ss = SpreadsheetApp.openById(spreadsheetId);
  var sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    var allSheets = ss.getSheets();
    if (allSheets.length === 1 && allSheets[0].getLastRow() === 0 && allSheets[0].getLastColumn() === 0) {
      sheet = allSheets[0];
      sheet.setName(SHEET_NAME);
    } else {
      sheet = ss.insertSheet(SHEET_NAME);
    }
  }

  var headers = [
    "Fecha y hora",
    "Nombre y apellidos",
    "Teléfono",
    "Email",
    "Empresa",
    "Comentarios",
    "Privacidad aceptada",
    "Campaña",
    "Submission ID",
    "Notificación enviada"
  ];

  if (sheet.getLastRow() === 0) {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold");
    sheet.setFrozenRows(1);
    
    // Formato de texto para columnas de teléfono
    sheet.getRange("C:C").setNumberFormat("@");
    sheet.autoResizeColumns(1, headers.length);
    Logger.log("Pestaña 'Inscripciones' configurada con éxito.");
  } else {
    Logger.log("La pestaña ya contiene datos o cabeceras. No se modificó.");
  }
}

/**
 * 2. SANITIZACIÓN CONTRA INYECCIÓN DE FÓRMULAS
 */
function sanitizeForSheet(value) {
  if (value === null || value === undefined) {
    return "";
  }
  var str = String(value).trim();
  if (str.length === 0) {
    return "";
  }
  var firstChar = str.charAt(0);
  if (firstChar === "=" || firstChar === "+" || firstChar === "-" || firstChar === "@" || firstChar === "\t" || firstChar === "\r") {
    return "'" + str;
  }
  return str;
}

/**
 * 3. RESPUESTA JSON ESTÁNDAR
 */
function jsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * 4. CONTROLADOR PRINCIPAL HTTP POST (doPost)
 */
function doPost(e) {
  var lock = LockService.getScriptLock();
  var hasLock = false;

  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonResponse({
        ok: false,
        code: "invalid_payload",
        saved: false,
        error: "Petición vacía"
      });
    }

    var data;
    try {
      data = JSON.parse(e.postData.contents);
    } catch (parseErr) {
      return jsonResponse({
        ok: false,
        code: "invalid_payload",
        saved: false,
        error: "JSON mal formado"
      });
    }

    // A. Validación de Seguridad mediante Shared Secret
    var props = PropertiesService.getScriptProperties();
    var expectedSecret = props.getProperty("REGISTRATION_SHARED_SECRET");

    if (expectedSecret && expectedSecret.length > 0) {
      if (!data.secret || data.secret !== expectedSecret) {
        return jsonResponse({
          ok: false,
          code: "forbidden",
          saved: false,
          error: "Acceso no autorizado"
        });
      }
    }

    // B. Validación del Payload
    var name = typeof data.name === "string" ? data.name.trim() : "";
    var phone = typeof data.phone === "string" ? data.phone.trim() : "";
    var email = typeof data.email === "string" ? data.email.trim() : "";
    var company = typeof data.company === "string" ? data.company.trim() : "";
    var comments = typeof data.comments === "string" ? data.comments.trim() : "";
    var privacyAccepted = data.privacyAccepted === true;
    var submissionId = typeof data.submissionId === "string" ? data.submissionId.trim() : "";

    if (!name || name.length < 3 || name.length > 100) {
      return jsonResponse({ ok: false, code: "invalid_payload", saved: false, error: "Nombre inválido" });
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email) || email.length > 120) {
      return jsonResponse({ ok: false, code: "invalid_payload", saved: false, error: "Email inválido" });
    }

    var phoneDigits = phone.replace(/\D/g, "");
    if (!phone || phoneDigits.length < 8 || phone.length > 40) {
      return jsonResponse({ ok: false, code: "invalid_payload", saved: false, error: "Teléfono inválido" });
    }

    if (!company || company.length < 2 || company.length > 100) {
      return jsonResponse({ ok: false, code: "invalid_payload", saved: false, error: "Empresa inválida" });
    }

    if (comments && comments.length > 1000) {
      return jsonResponse({ ok: false, code: "invalid_payload", saved: false, error: "Comentarios exceden límite" });
    }

    if (!privacyAccepted) {
      return jsonResponse({ ok: false, code: "invalid_payload", saved: false, error: "Privacidad no aceptada" });
    }

    // C. Control de Concurrencia (LockService)
    try {
      hasLock = lock.tryLock(15000); // Serializar hasta 15 segundos
    } catch (lockErr) {
      hasLock = false;
    }

    if (!hasLock) {
      return jsonResponse({
        ok: false,
        code: "lock_timeout",
        saved: false,
        error: "El servicio está procesando otra solicitud. Por favor, reintente en unos instantes."
      });
    }

    // D. Control de Idempotencia y Estado de Notificación
    var cache = CacheService.getScriptCache();

    // D1. Comprobación rápida en caché (solo responde éxito si el email ya se envió)
    if (submissionId) {
      var cachedStatus = cache.get("sub_" + submissionId);
      if (cachedStatus === "sent") {
        return jsonResponse({
          ok: true,
          code: "registration_saved",
          saved: true,
          notificationSent: true,
          idempotent: true
        });
      }
    }

    // E. Acceso a Google Sheets (Persistencia)
    var spreadsheetId = props.getProperty("SPREADSHEET_ID") || DEFAULT_SPREADSHEET_ID;
    var sheet;
    try {
      var ss = SpreadsheetApp.openById(spreadsheetId);
      sheet = ss.getSheetByName(SHEET_NAME);
      if (!sheet) {
        setupSheet();
        sheet = ss.getSheetByName(SHEET_NAME);
      }
    } catch (sheetErr) {
      Logger.log("Error al abrir Spreadsheet: " + sheetErr.toString());
      return jsonResponse({
        ok: false,
        code: "sheets_error",
        saved: false,
        error: "Error al acceder a Google Sheets"
      });
    }

    var now = new Date();
    var dateFormatted = Utilities.formatDate(now, "Europe/Madrid", "dd/MM/yyyy HH:mm:ss");

    var emailBody = "Nueva inscripción recibida para el taller:\n\n" +
      "\"Bot de Voz: calienta que sales…!!\"\n\n" +
      "Nombre y apellidos:\n" + name + "\n\n" +
      "Teléfono:\n" + phone + "\n\n" +
      "Email:\n" + email + "\n\n" +
      "Empresa:\n" + company + "\n\n" +
      "Comentarios:\n" + (comments.length > 0 ? comments : "Sin comentarios") + "\n\n" +
      (submissionId ? ("ID de solicitud:\n" + submissionId + "\n\n") : "") +
      "Fecha de inscripción:\n" + dateFormatted + "\n\n" +
      "Campaña:\nContact Center 2026\n";

    // D2. Comprobación persistente en Google Sheets (Columna I en toda la columna desde I2)
    var lastRow = sheet.getLastRow();
    var maxCols = sheet.getLastColumn();

    if (submissionId && lastRow > 1 && maxCols >= 9) {
      var searchRange = sheet.getRange(2, 9, lastRow - 1, 1);
      var match = searchRange.createTextFinder(submissionId).matchEntireCell(true).findNext();

      if (match) {
        var existingRow = match.getRow();
        var notificationStatus = maxCols >= 10 ? String(sheet.getRange(existingRow, 10).getValue()).trim() : "";

        // CASO A: Fila existente con email ya enviado previamente (J = "Sí")
        if (notificationStatus === "Sí") {
          cache.put("sub_" + submissionId, "sent", 21600);
          return jsonResponse({
            ok: true,
            code: "registration_saved",
            saved: true,
            notificationSent: true,
            idempotent: true
          });
        }

        // CASO B: Estado ambiguo ("Enviando")
        // Significa que la ejecución anterior pudo quedar interrumpida sin poder determinar
        // con fiabilidad si MailApp completó el envío. Por seguridad estricta contra DUPLICADOS:
        // - NO volver a enviar automáticamente el email
        // - NO añadir fila
        // - Mantener la inscripción existente
        // - Devolver saved=true, notificationSent=false (estado no confirmado)
        // (Nota: este estado requeriría revisión manual únicamente en caso excepcional).
        if (notificationStatus === "Enviando") {
          return jsonResponse({
            ok: true,
            code: "registration_saved_notification_unconfirmed",
            saved: true,
            notificationSent: false,
            idempotent: true
          });
        }

        // CASO C: Fila existente pero email falló expresamente (J = "No")
        // NO añadir fila; cambiar primero J a "Enviando" y ejecutar UNA sola llamada a MailApp
        sheet.getRange(existingRow, 10).setValue("Enviando");

        var retrySent = false;
        try {
          MailApp.sendEmail(EMAIL_RECIPIENTS, EMAIL_SUBJECT, emailBody);
          retrySent = true;
        } catch (errRetry) {
          Logger.log("Aviso: reintento de email falló para submissionId=" + submissionId + ": " + errRetry.toString());
          retrySent = false;
        }

        if (retrySent) {
          sheet.getRange(existingRow, 10).setValue("Sí");
          cache.put("sub_" + submissionId, "sent", 21600);
          return jsonResponse({
            ok: true,
            code: "registration_saved",
            saved: true,
            notificationSent: true,
            idempotent: true
          });
        } else {
          try {
            sheet.getRange(existingRow, 10).setValue("No");
          } catch (eSetNo) {}
          return jsonResponse({
            ok: true,
            code: "registration_saved_notification_failed",
            saved: true,
            notificationSent: false,
            idempotent: true
          });
        }
      }
    }

    // F. Inserción de Fila en Google Sheets (Inscripción nueva)
    // Se inserta con J = "Enviando" inicialmente para registrar la intención y evitar duplicados
    var rowData = [
      dateFormatted,
      sanitizeForSheet(name),
      sanitizeForSheet(phone),
      sanitizeForSheet(email),
      sanitizeForSheet(company),
      comments.length > 0 ? sanitizeForSheet(comments) : "",
      "Sí",
      CAMPAIGN_NAME,
      submissionId, // Columna I: Submission ID
      "Enviando"    // Columna J: Notificación enviada (inicialmente "Enviando")
    ];

    try {
      sheet.appendRow(rowData);
    } catch (appendErr) {
      Logger.log("Error al insertar fila en Sheets: " + appendErr.toString());
      return jsonResponse({
        ok: false,
        code: "sheets_error",
        saved: false,
        error: "Error al escribir en Google Sheets"
      });
    }

    var insertedRow = sheet.getLastRow();

    // G. Notificación interna por Email (UNA sola llamada sin reintentos inmediatos)
    var notificationSent = false;
    try {
      MailApp.sendEmail(EMAIL_RECIPIENTS, EMAIL_SUBJECT, emailBody);
      notificationSent = true;
    } catch (errMail) {
      Logger.log("Aviso: falló el envío de la notificación por email: " + errMail.toString());
      notificationSent = false;
    }

    if (notificationSent) {
      // Actualizar Columna J de la fila recién insertada a "Sí"
      sheet.getRange(insertedRow, 10).setValue("Sí");
      if (submissionId) {
        cache.put("sub_" + submissionId, "sent", 21600);
      }
      return jsonResponse({
        ok: true,
        code: "registration_saved",
        saved: true,
        notificationSent: true
      });
    } else {
      // Si MailApp falló expresamente, marcamos J = "No" para permitir reintento futuro
      try {
        sheet.getRange(insertedRow, 10).setValue("No");
      } catch (eSetNo) {}
      return jsonResponse({
        ok: true,
        code: "registration_saved_notification_failed",
        saved: true,
        notificationSent: false
      });
    }

  } catch (unexpectedErr) {
    Logger.log("Excepción no controlada en doPost: " + unexpectedErr.toString());
    return jsonResponse({
      ok: false,
      code: "internal_error",
      saved: false,
      error: "Error interno en Google Apps Script"
    });
  } finally {
    if (hasLock) {
      try {
        lock.releaseLock();
      } catch (e) {}
    }
  }
}
