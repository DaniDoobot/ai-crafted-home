# Integración Definitiva: Formulario de Evento, Google Sheets y Notificaciones por Email

Este documento detalla la arquitectura, el protocolo de aplicación y la guía paso a paso para conectar las solicitudes de inscripción del evento **"Bot de Voz: calienta que sales…!!"** con Google Sheets y las notificaciones internas automáticas por correo electrónico.

---

## 1. Arquitectura y Protocolo de Comunicación

```
[Navegador del Usuario]
       ↓ (POST formulario: name, phone, email, company, comments, privacyAccepted)
POST /api/event-registration (Mismo origen en servidor web de doobot.ai)
       ↓ (Valida datos, inyecta campaign="contact-center-2026", createdAt y secret)
Google Apps Script Web App
       ↓ (Valida secret, sanitiza fórmula/CSV)
       ├─► 1. Google Sheets: Inserta fila en pestaña "Inscripciones"
       └─► 2. MailApp: Envía notificación interna a patricia@doobot.ai y angel@doobot.ai (desde la cuenta que despliega Apps Script: dani@doobot.ai)
```

### Protocolo de Aplicación JSON (Sin dependencia de HTTP status codes de Google)
Google Apps Script Web Apps ejecutados a través de `ContentService.createTextOutput()` no garantizan el paso de códigos de estado HTTP arbitrarios (403, 500, etc.) a través de los proxies y redirecciones de Google. Por ello, la comunicación entre Google Apps Script y el servidor de doobot.ai se basa en un **protocolo JSON de aplicación estandarizado**:

| Código de Aplicación | `ok` | `saved` | `notificationSent` | Significado |
| :--- | :---: | :---: | :---: | :--- |
| `registration_saved` | `true` | `true` | `true` | Éxito total: fila guardada en Sheets y email enviado. |
| `registration_saved_notification_failed` | `true` | `true` | `false` | Éxito de guardado: fila guardada en Sheets; el email falló tras reintento. |
| `forbidden` | `false` | `false` | - | Secreto compartido ausente o incorrecto. |
| `invalid_payload` | `false` | `false` | - | Payload rechazado por validación de campos/límites. |
| `sheets_error` | `false` | `false` | - | Error al acceder o escribir en Google Sheets. |
| `internal_error` | `false` | `false` | - | Excepción técnica no controlada en Apps Script. |

### Principios de Seguridad
1. **Zero Client Secrets**: El navegador nunca se comunica directamente con Google Apps Script. No se expone ninguna URL de script, token ni secreto en variables `VITE_*`.
2. **Server-to-Server Shared Secret**: La llamada desde nuestro servidor a Google Apps Script viaja con `secret: GOOGLE_APPS_SCRIPT_SECRET`. Si no coincide con `REGISTRATION_SHARED_SECRET`, Apps Script responde `{ ok: false, code: "forbidden" }` sin escribir en la hoja ni enviar emails.
3. **Protección Anti Formula Injection**: Todos los campos de texto se sanitizan en Apps Script. Si un valor comienza por `=`, `+`, `-`, `@`, `\t` o `\r` (como teléfonos con prefijo `+34`), se almacena con un apóstrofe `'` inicial para forzar a Google Sheets a interpretarlo como texto literal puro.

---

## 2. Configuración de Google Sheets

- **Spreadsheet URL**: `https://docs.google.com/spreadsheets/d/12pEWyXQUwH1PWKyC_akf7I8Yvxfx4vwzV4vzvwfJR4w/edit?gid=0#gid=0`
- **Spreadsheet ID**: `12pEWyXQUwH1PWKyC_akf7I8Yvxfx4vwzV4vzvwfJR4w`
- **Nombre de la pestaña**: `Inscripciones`

### Estructura Exacta de las 8 Columnas (Fila 1)

| Columna | Nombre de Cabecera | Formato / Tipo | Ejemplo |
| :---: | :--- | :--- | :--- |
| **A** | `Fecha y hora` | Formato fecha `dd/MM/yyyy HH:mm:ss` (Europe/Madrid) | `08/09/2026 16:30:00` |
| **B** | `Nombre y apellidos` | Texto sanitizado | `Ana García López` |
| **C** | `Teléfono` | Texto sanitizado (formato texto `@`) | `+34 600 000 000` |
| **D** | `Email` | Texto sanitizado | `ana@ejemplo.com` |
| **E** | `Empresa` | Texto sanitizado | `Empresa Soluciones S.L.` |
| **F** | `Comentarios` | Texto sanitizado (cadena vacía `""` si no hay) | `Interesados en bots para selección` |
| **G** | `Privacidad aceptada` | Valor fijo `"Sí"` | `Sí` |
| **H** | `Campaña` | Valor fijo `"contact-center-2026"` | `contact-center-2026` |

---

## 3. Notificaciones por Email

- **Remitente**: Cuenta que ejecuta/despliega la Web App de Apps Script (actualmente `dani@doobot.ai`).
- **Destinatarios**: `patricia@doobot.ai,angel@doobot.ai`
- **Asunto**: `Nueva inscripción · Bot de Voz · Contact Center 2026`
- **Nota**: No se envía email automático al usuario inscrito; las notificaciones son exclusivamente internas para el equipo de gestión.
- **Cuerpo del mensaje**:
  ```
  Nueva inscripción recibida para el taller:

  "Bot de Voz: calienta que sales…!!"

  Nombre y apellidos:
  {nombre}

  Teléfono:
  {telefono}

  Email:
  {email}

  Empresa:
  {empresa}

  Comentarios:
  {comentarios || "Sin comentarios"}

  Fecha de inscripción:
  {fechaHora}

  Campaña:
  Contact Center 2026
  ```

---

## 4. Orden de Operaciones y Tolerancia a Fallos (Secuencial, No Atómico)

La interacción entre Google Sheets y MailApp **no constituye una transacción atómica** de base de datos. Por diseño, se aplica el siguiente orden secuencial con tolerancia a fallos:

1. **Paso 1: Validación del payload**: Se verifican campos obligatorios, formatos y límites.
2. **Paso 2: Inserción en Google Sheets**:
   - Si la inserción falla: Apps Script devuelve `{ ok: false, code: "sheets_error", saved: false }`. El servidor informa del error al usuario. **No se muestra confirmación falsa**, permitiendo al usuario reintentar o llamar por teléfono.
3. **Paso 3: Notificación por email**:
   - Si Sheets se guardó con éxito, se intenta enviar el email a los destinatarios.
   - Si el primer intento falla, se realiza un segundo intento tras 1 segundo.
   - Si el segundo intento falla: Apps Script devuelve `{ ok: true, code: "registration_saved_notification_failed", saved: true, notificationSent: false }`.
   - **Comportamiento con el usuario**: El servidor web **considera la inscripción un éxito** y le muestra el mensaje de confirmación, ya que el dato está a salvo en Google Sheets. Esto evita que el usuario reenvíe el formulario y genere duplicados en la hoja. Se registra un aviso técnico genérico en el servidor sin incluir PII.

---

## 5. Código Completo de Google Apps Script

El código definitivo completo se encuentra en:  
[`docs/google-apps-script/Code.gs`](file:///c:/Users/danim/Proyectos/ai-crafted-home/docs/google-apps-script/Code.gs).

---

## 6. Pasos Manuales en Google (Guía Exacta de Ejecución)

1. **Abrir Google Sheet**: Acceder a la hoja de cálculo con ID `12pEWyXQUwH1PWKyC_akf7I8Yvxfx4vwzV4vzvwfJR4w`.
2. **Extensiones → Apps Script**: Abrir el editor de secuencias de comandos.
3. **Pegar `Code.gs`**: Reemplazar todo el contenido de `Código.gs` con el código de [`docs/google-apps-script/Code.gs`](file:///c:/Users/danim/Proyectos/ai-crafted-home/docs/google-apps-script/Code.gs) y guardar (`Ctrl+S`).
4. **Configurar Script Properties** (⚙️ Configuración del proyecto > Propiedades de la secuencia de comandos):
   - `SPREADSHEET_ID`: `12pEWyXQUwH1PWKyC_akf7I8Yvxfx4vwzV4vzvwfJR4w`
   - `REGISTRATION_SHARED_SECRET`: Generar una cadena secreta segura (ej. token de 32 caracteres).
5. **Ejecutar `setupSheet()`**: En el editor, seleccionar la función `setupSheet` en la barra superior y pulsar **Ejecutar**.
6. **Autorizar**: Conceder permisos de acceso a la cuenta de Google cuando aparezca la ventana de autorización. Verificar en la hoja que la pestaña `Inscripciones` se ha creado con sus 8 cabeceras en negrita y la fila 1 congelada.
7. **Implementar como Web App**:
   - Clic en **Implementar** (Deploy) > **Nueva implementación** (New deployment).
   - Tipo: **Aplicación web**.
   - *Ejecutar como*: **Yo** *(tu cuenta de Google)*.
   - *Quién tiene acceso*: **Cualquier usuario** *(Anyone)*.
8. **Copiar URL**: Copiar la URL de la aplicación web generada (termina en `/exec`).
9. **Configurar secretos server-side**: En las variables de entorno privadas del servidor web de doobot.ai (Cloudflare / runtime):
   ```env
   EVENT_REGISTRATION_MODE="live"
   GOOGLE_APPS_SCRIPT_URL="https://script.google.com/macros/s/AKfycb.../exec"
   GOOGLE_APPS_SCRIPT_SECRET="[el mismo token configurado en el paso 4]"
   ```
10. **Realizar una única prueba E2E ficticia**: Enviar el formulario desde la web con datos de prueba ficticios y verificar que aparece una fila en Sheets y se reciben los emails en `patricia@doobot.ai` y `angel@doobot.ai`.
