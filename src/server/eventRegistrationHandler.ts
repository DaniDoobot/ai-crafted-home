/**
 * Server-side API Handler for Event Registration
 * Endpoint: POST /api/event-registration
 * 
 * Safety, Privacy & Architecture:
 * - Authoritative server decision for LIVE vs DISABLED persistence via EVENT_REGISTRATION_MODE.
 * - Runtime environment variables read per-request inside function scope (Cloudflare Workers & Node/Bun compatible).
 * - Application-level JSON contract with Google Apps Script (does not rely on custom HTTP status codes).
 * - Server-to-server shared secret authentication with Google Apps Script Web App.
 * - Strict timeout protection (10s) using AbortController.
 * - ZERO PII logging (never logs name, phone, email, company, comments or secrets).
 * - Never exposes Google Apps Script internal URLs, secrets or stack traces in client responses.
 */

export interface ValidatedServerRegistrationPayload {
  name: string;
  phone: string;
  email: string;
  company: string;
  comments: string;
  privacyAccepted: true;
  campaign: "contact-center-2026";
  createdAt: string;
  secret?: string;
}

export interface GoogleAppsScriptResponse {
  ok?: boolean;
  code?: string;
  saved?: boolean;
  notificationSent?: boolean;
  error?: string;
}

export async function handleEventRegistrationRequest(
  request: Request,
  env?: unknown
): Promise<Response> {
  if (request.method !== "POST") {
    return new Response(
      JSON.stringify({
        status: "error",
        error: "Method not allowed",
      }),
      {
        status: 405,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  try {
    const body = (await request.json()) as Record<string, unknown>;
    
    // Support name or fullName key
    const rawName = typeof body?.name === "string" ? body.name : body?.fullName;
    const name = typeof rawName === "string" ? rawName.trim() : "";
    const phone = typeof body?.phone === "string" ? body.phone.trim() : "";
    const email = typeof body?.email === "string" ? body.email.trim() : "";
    const company = typeof body?.company === "string" ? body.company.trim() : "";
    const comments = typeof body?.comments === "string" ? body.comments.trim() : "";
    const privacyAccepted = body?.privacyAccepted === true;

    // 1. Server-side validation
    if (!name || name.length < 3 || name.length > 100) {
      return new Response(
        JSON.stringify({ status: "error", error: "Nombre y apellidos no válidos." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email) || email.length > 120) {
      return new Response(
        JSON.stringify({ status: "error", error: "Dirección de email no válida." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const phoneDigits = phone.replace(/\D/g, "");
    if (!phone || phoneDigits.length < 8 || phone.length > 40) {
      return new Response(
        JSON.stringify({ status: "error", error: "Teléfono no válido." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    if (!company || company.length < 2 || company.length > 100) {
      return new Response(
        JSON.stringify({ status: "error", error: "Nombre de empresa no válido." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    if (comments && comments.length > 1000) {
      return new Response(
        JSON.stringify({ status: "error", error: "Los comentarios no pueden superar los 1.000 caracteres." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    if (!privacyAccepted) {
      return new Response(
        JSON.stringify({ status: "error", error: "Debe aceptar la Política de Privacidad." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // 2. Server runtime environment variables read per-request inside function scope
    // Supports Cloudflare Workers bindings (env) and Node/Bun process.env
    const cfEnv = (typeof env === "object" && env !== null ? env : {}) as Record<string, string | undefined>;
    const procEnv = (typeof process !== "undefined" && process.env ? process.env : {}) as Record<string, string | undefined>;

    const registrationMode = cfEnv.EVENT_REGISTRATION_MODE || procEnv.EVENT_REGISTRATION_MODE || "disabled";
    const googleAppsScriptUrl = cfEnv.GOOGLE_APPS_SCRIPT_URL || procEnv.GOOGLE_APPS_SCRIPT_URL;
    const googleAppsScriptSecret = cfEnv.GOOGLE_APPS_SCRIPT_SECRET || procEnv.GOOGLE_APPS_SCRIPT_SECRET;

    // 3. Validation: If LIVE mode is requested but configuration is incomplete, fail safely
    if (registrationMode === "live") {
      if (!googleAppsScriptUrl || !googleAppsScriptSecret) {
        console.error("[EventRegistration] Configuración incompleta en modo live (falta GOOGLE_APPS_SCRIPT_URL o GOOGLE_APPS_SCRIPT_SECRET en variables del servidor).");
        return new Response(
          JSON.stringify({
            status: "error",
            error: "El servicio de registro no está configurado adecuadamente en el servidor.",
          }),
          { status: 500, headers: { "Content-Type": "application/json" } }
        );
      }
    } else {
      // DISABLED MODE (Default safe fallback when persistence is not active)
      return new Response(
        JSON.stringify({
          status: "registration_disabled",
          message: "El registro online estará disponible próximamente.",
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // 4. LIVE Integration with Google Apps Script
    const serverPayload: ValidatedServerRegistrationPayload = {
      name,
      phone,
      email,
      company,
      comments: comments || "",
      privacyAccepted: true,
      campaign: "contact-center-2026",
      createdAt: new Date().toISOString(),
      secret: googleAppsScriptSecret,
    };

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

    try {
      const gasResponse = await fetch(googleAppsScriptUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(serverPayload),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      // Unexpected HTTP level failure from Google infrastructure (e.g. 500, 502, 503)
      if (!gasResponse.ok) {
        console.error(`[EventRegistration] Error HTTP inesperado de Google Apps Script: ${gasResponse.status}`);
        return new Response(
          JSON.stringify({
            status: "error",
            error: "Error de comunicación con el servicio de registro.",
          }),
          { status: 502, headers: { "Content-Type": "application/json" } }
        );
      }

      let gasResult: GoogleAppsScriptResponse;
      try {
        gasResult = (await gasResponse.json()) as GoogleAppsScriptResponse;
      } catch {
        console.error("[EventRegistration] Respuesta no JSON recibida de Google Apps Script.");
        return new Response(
          JSON.stringify({
            status: "error",
            error: "Respuesta inesperada del servidor de registro.",
          }),
          { status: 502, headers: { "Content-Type": "application/json" } }
        );
      }

      // Application-level JSON code interpretation:
      // Case A: Success (Sheet saved, notification sent or failed gracefully)
      if (
        gasResult.code === "registration_saved" ||
        gasResult.code === "registration_saved_notification_failed" ||
        (gasResult.ok === true && gasResult.saved === true)
      ) {
        if (
          gasResult.notificationSent === false ||
          gasResult.code === "registration_saved_notification_failed"
        ) {
          console.warn("[EventRegistration] Inscripción guardada en Sheets con éxito, pero la notificación por email falló.");
        }

        return new Response(
          JSON.stringify({
            status: "success",
            message: "Hemos recibido correctamente tu solicitud de inscripción para el taller. Nuestro equipo gestionará tu plaza.",
          }),
          {
            status: 200,
            headers: { "Content-Type": "application/json" },
          }
        );
      }

      // Case B: Forbidden (Shared secret mismatch)
      if (gasResult.code === "forbidden") {
        console.error("[EventRegistration] Error de autenticación server-to-server con Apps Script (secreto no coincide).");
        return new Response(
          JSON.stringify({
            status: "error",
            error: "Error de autenticación interna en el servicio de registro.",
          }),
          { status: 500, headers: { "Content-Type": "application/json" } }
        );
      }

      // Case C: Google Sheets write failure
      if (gasResult.code === "sheets_error") {
        console.error("[EventRegistration] Google Apps Script reportó error al escribir en Sheets.");
        return new Response(
          JSON.stringify({
            status: "error",
            error: "No se pudo guardar la inscripción en la base de datos.",
          }),
          { status: 500, headers: { "Content-Type": "application/json" } }
        );
      }

      // Case D: Payload validation failure in Apps Script
      if (gasResult.code === "invalid_payload") {
        console.error("[EventRegistration] Google Apps Script rechazó el payload por validación.");
        return new Response(
          JSON.stringify({
            status: "error",
            error: "Los datos enviados no son válidos.",
          }),
          { status: 400, headers: { "Content-Type": "application/json" } }
        );
      }

      // Case E: Any other unhandled application error
      console.error(`[EventRegistration] Apps Script reportó error genérico: ${gasResult.code || "desconocido"}`);
      return new Response(
        JSON.stringify({
          status: "error",
          error: "No se pudo procesar la inscripción.",
        }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );

    } catch (fetchErr: unknown) {
      clearTimeout(timeoutId);
      const isAbort = fetchErr instanceof Error && fetchErr.name === "AbortError";
      if (isAbort) {
        console.error("[EventRegistration] Timeout al conectar con Google Apps Script (>10s).");
        return new Response(
          JSON.stringify({
            status: "error",
            error: "Tiempo de espera agotado al conectar con el servicio de registro.",
          }),
          { status: 504, headers: { "Content-Type": "application/json" } }
        );
      }

      console.error("[EventRegistration] Error de red al contactar con Google Apps Script.");
      return new Response(
        JSON.stringify({
          status: "error",
          error: "Error de conexión con el servicio de registro.",
        }),
        { status: 502, headers: { "Content-Type": "application/json" } }
      );
    }

  } catch {
    return new Response(
      JSON.stringify({ status: "error", error: "Petición no válida." }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }
}
