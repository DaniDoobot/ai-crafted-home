# Integración: Formulario de Evento, Google Sheets y Notificaciones por Email

Este documento detalla la arquitectura, el protocolo de aplicación y la configuración necesaria para conectar las solicitudes de inscripción del evento **"Bot de Voz: calienta que sales…!!"** con Google Sheets y las notificaciones internas automáticas por correo electrónico.

---

## 1. Arquitectura del Flujo

```
[Navegador del Usuario]
       ↓ (Bloqueo síncrono isSubmittingRef + submissionId único de sesión + desmontaje de form en éxito)
POST /api/event-registration (Mismo origen, serverless / Nitro)
       ↓ (Valida datos, timeout preventivo de 25s, inyecta secret y submissionId)
Google Apps Script Web App
       ↓ (LockService + comprobación de idempotencia por submissionId en Columna I y caché)
       ├─► 1. Google Sheets: Inserta fila con submissionId en pestaña "Inscripciones"
       └─► 2. MailApp: Envía notificación interna a patricia@doobot.ai y angel@doobot.ai (desde dani@doobot.ai)
```

---

## 2. Prevención de Duplicados e Idempotencia

1. **Frontend (`EventRegistrationForm.tsx`)**:
   - **Bloqueo síncrono (`isSubmittingRef`)**: Bloquea el formulario en memoria de inmediato antes de que React procese cambios de estado, evitando que un doble clic rápido o doble Enter dispare más de una petición.
   - **Identificador de sesión (`submissionId`)**: Se genera un `submissionId` único por sesión (`reg_<uuid>`) que se mantiene en reintentos.
   - **Desmontaje tras éxito**: Cuando el registro concluye con éxito, el formulario se desmonta y se muestra la tarjeta de confirmación aprobada (*"¡Inscripción recibida!"*), impidiendo reenvíos.
2. **Servidor (`src/server/eventRegistrationHandler.ts`)**:
   - Recibe y propaga el `submissionId`.
   - Timeout preventivo fijado en **25 segundos** con `AbortController` para evitar abortos prematuros durante arranques en frío (*cold start*) de Google Apps Script.
   - Cero PII en logs.
3. **Google Apps Script (`docs/google-apps-script/Code.gs`)**:
   - **`LockService`**: Serializa peticiones concurrentes con `lock.tryLock(15000)`.
   - **`CacheService`**: Acelerador temporal L1 (guarda `"sent"` solo tras confirmación de envío con J = `"Sí"`).
   - **Persistencia en Columnas I y J**:
     - **Columna I (`Submission ID`)**: Garantiza que no haya dos filas para la misma inscripción (búsqueda con `TextFinder` desde I2 hasta la última fila).
     - **Columna J (`Notificación enviada`)**:
       - `"Sí"`: correo confirmado como enviado.
       - `"No"`: MailApp lanzó error y se puede reintentar.
       - `"Enviando"`: estado transitorio / ambiguo. Si la ejecución previa se interrumpió o no se pudo confirmar la actualización a `"Sí"`, NO se reenvía automáticamente para evitar duplicados.
   - **Manejo de Reintentos (Retry)**:
     - Si la fila existe y J = `"Sí"`: devuelve éxito idempotente inmediatamente (0 filas nuevas, 0 emails).
     - Si la fila existe y J = `"No"`: **no inserta una segunda fila**; pasa J a `"Enviando"` y reintenta UNA sola llamada a `MailApp.sendEmail` (si éxito -> `"Sí"`, si error -> `"No"`).
     - Si la fila existe y J = `"Enviando"`: estado ambiguo de ejecución previa; **no inserta fila** y **no reenvía correo** por seguridad anti-duplicados (requeriría revisión manual en caso excepcional).
   - **Inscripción nueva**: Inserta fila con J = `"Enviando"`, ejecuta UNA sola llamada a `MailApp.sendEmail` y, tras completarse con éxito, actualiza J a `"Sí"` y almacena `"sent"` en `CacheService`. Si falla expresamente, actualiza J a `"No"`.

---

## 3. Configuración de Google Sheets

- **Spreadsheet ID**: `12pEWyXQUwH1PWKyC_akf7I8Yvxfx4vwzV4vzvwfJR4w`
- **Pestaña**: `Inscripciones`

### Estructura de Columnas (Fila 1)

| Columna | Nombre de Cabecera | Tipo / Contenido |
| :---: | :--- | :--- |
| **A** | `Fecha y hora` | Formato fecha `dd/MM/yyyy HH:mm:ss` (Europe/Madrid) |
| **B** | `Nombre y apellidos` | Texto sanitizado |
| **C** | `Teléfono` | Texto sanitizado (formato texto `@`) |
| **D** | `Email` | Texto sanitizado |
| **E** | `Empresa` | Texto sanitizado |
| **F** | `Comentarios` | Texto sanitizado (o vacío) |
| **G** | `Privacidad aceptada` | Fijo `"Sí"` |
| **H** | `Campaña` | Fijo `"contact-center-2026"` |
| **I** | `Submission ID` | Identificador único de idempotencia (ej. `reg_...`) |
| **J** | `Notificación enviada` | Estado del email: `"Sí"`, `"No"` o `"Enviando"` |

> **Nota para producción**: En la hoja de cálculo existente, basta con escribir `Submission ID` en la celda **I1** y `Notificación enviada` en la celda **J1**. Si existen filas previas donde las columnas I y J estén vacías, el código las gestiona con total compatibilidad.

---

## 4. Notificaciones por Email

- **Remitente**: Cuenta que ejecuta la Web App de Apps Script (`dani@doobot.ai`).
- **Destinatarios**: `patricia@doobot.ai,angel@doobot.ai` (sin cambios).
- **Asunto**: `Nueva inscripción · Bot de Voz · Contact Center 2026` (sin cambios).
- **Destinatarios externos**: Ninguno (no se envía email al usuario).

---

## 5. Procedimiento para Actualizar Google Apps Script

1. Abrir la hoja con ID `12pEWyXQUwH1PWKyC_akf7I8Yvxfx4vwzV4vzvwfJR4w`.
2. Escribir `Submission ID` en la celda **I1** de la pestaña `Inscripciones`.
3. Ir a **Extensiones → Apps Script**.
4. Sustituir el código de `Código.gs` por el contenido de [`docs/google-apps-script/Code.gs`](file:///c:/Users/danim/Proyectos/ai-crafted-home/docs/google-apps-script/Code.gs) y guardar (`Ctrl + S`).
5. Clic en **Implementar → Administrar implementaciones**.
6. Seleccionar la Web App activa, pulsar el icono de **Editar** (lápiz), seleccionar **Nueva versión** y pulsar **Implementar**.
