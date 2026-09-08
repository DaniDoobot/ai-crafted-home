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
 * Códigos de Aplicación:
 * - registration_saved: Éxito total (hoja guardada y notificación enviada)
 * - registration_saved_notification_failed: Hoja guardada con éxito, pero falló el email
 * - forbidden: Secreto compartido ausente o no coincidente
 * - invalid_payload: Faltan campos obligatorios o superan límites
 * - sheets_error: Error al acceder o escribir en la hoja de cálculo
 * - internal_error: Excepción imprevista capturada en tiempo de ejecución
 * 
 * Script Properties requeridas (⚙️ Configuración del proyecto > Propiedades de la secuencia de comandos):
 * 1. SPREADSHEET_ID: 12pEWyXQUwH1PWKyC_akf7I8Yvxfx4vwzV4vzvwfJR4w
 * 2. REGISTRATION_SHARED_SECRET: [Cadena secreta compartida con el servidor de la web]
 */

var DEFAULT_SPREADSHEET_ID = "12pEWyXQUwH1PWKyC_akf7I8Yvxfx4vwzV4vzvwfJR4w";
var SHEET_NAME = "Inscripciones";
// Notificaciones internas: enviadas por la cuenta que ejecuta Apps Script (dani@doobot.ai) a los destinatarios comerciales
var EMAIL_RECIPIENTS = "patricia@doobot.ai,angel@doobot.ai";
var EMAIL_SUBJECT = "Nueva inscripción · Bot de Voz · Contact Center 2026";
var CAMPAIGN_NAME = "contact-center-2026";

/**
 * 1. CONFIGURACIÓN DE LA HOJA (setupSheet)
 * Ejecutar manualmente UNA ÚNICA VEZ desde el editor de Apps Script.
 * Crea la pestaña "Inscripciones" si no existe, escribe las 8 cabeceras en negrita,
 * congela la fila 1 y fija formato texto en la columna de teléfono.
 */
function setupSheet() {
  var props = PropertiesService.getScriptProperties();
  var spreadsheetId = props.getProperty("SPREADSHEET_ID") || DEFAULT_SPREADSHEET_ID;
  
  var ss = SpreadsheetApp.openById(spreadsheetId);
  var sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    var allSheets = ss.getSheets();
    // Si la primera pestaña está completamente vacía, la renombramos
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
    "Campaña"
  ];

  // Si la fila 1 está vacía, escribir cabeceras
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
 * 2. SANITIZACIÓN CONTRA INYECCIÓN DE FÓRMULAS (Formula / CSV Injection)
 * Antepone un apóstrofe si el valor empieza por =, +, -, @, \t o \r.
 * Preserva números de teléfono como +34... como texto literal puro.
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
 * Devuelve siempre un objeto ContentService JSON válido.
 */
function jsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * 4. CONTROLADOR PRINCIPAL HTTP POST (doPost)
 * Recibe y procesa las inscripciones enviadas desde el servidor de doobot.ai.
 */
function doPost(e) {
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
        // Secreto inválido: no loguear jamás el secreto recibido ni el esperado
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

    // C. Guardar en Google Sheets (Paso 1: Prioridad absoluta para no perder el dato)
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

    var rowData = [
      dateFormatted,
      sanitizeForSheet(name),
      sanitizeForSheet(phone),
      sanitizeForSheet(email),
      sanitizeForSheet(company),
      comments.length > 0 ? sanitizeForSheet(comments) : "",
      "Sí",
      CAMPAIGN_NAME
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

    // D. Notificación interna por Email (Paso 2: Tolerante a fallos)
    var notificationSent = false;
    var emailBody = "Nueva inscripción recibida para el taller:\n\n" +
      "\"Bot de Voz: calienta que sales…!!\"\n\n" +
      "Nombre y apellidos:\n" + name + "\n\n" +
      "Teléfono:\n" + phone + "\n\n" +
      "Email:\n" + email + "\n\n" +
      "Empresa:\n" + company + "\n\n" +
      "Comentarios:\n" + (comments.length > 0 ? comments : "Sin comentarios") + "\n\n" +
      "Fecha de inscripción:\n" + dateFormatted + "\n\n" +
      "Campaña:\nContact Center 2026\n";

    // Intento 1
    try {
      MailApp.sendEmail(EMAIL_RECIPIENTS, EMAIL_SUBJECT, emailBody);
      notificationSent = true;
    } catch (err1) {
      // Reintento controlado tras 1 segundo
      try {
        Utilities.sleep(1000);
        MailApp.sendEmail(EMAIL_RECIPIENTS, EMAIL_SUBJECT, emailBody);
        notificationSent = true;
      } catch (err2) {
        Logger.log("Aviso: falló el envío de la notificación por email tras dos intentos.");
        notificationSent = false;
      }
    }

    // Respuesta JSON definitiva
    if (notificationSent) {
      return jsonResponse({
        ok: true,
        code: "registration_saved",
        saved: true,
        notificationSent: true
      });
    } else {
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
  }
}
