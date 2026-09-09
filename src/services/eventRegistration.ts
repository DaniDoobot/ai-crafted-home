/**
 * Event Registration Service (Decoupled Frontend Layer)
 * 
 * Architecture:
 * EventRegistrationForm
 *         ↓
 * submitEventRegistration()
 *         ↓
 * POST /api/event-registration (Same-origin API route)
 *         ↓
 * Server Adapter (src/server/eventRegistrationHandler.ts) — Autoritative source of truth
 *         ↓
 * Google Apps Script Web App
 *         ↓
 * ├── Google Sheets (Pestaña "Inscripciones")
 * └── Notificaciones internas por Email (patricia@doobot.ai, angel@doobot.ai)
 * 
 * Safety & Privacy:
 * - Server is the single source of truth for LIVE vs DISABLED via server-side EVENT_REGISTRATION_MODE.
 * - The frontend NEVER calls external Google Apps Script / APIs directly.
 * - No sensitive URLs or API tokens are exposed in VITE_* variables.
 * - In "mock" mode (optional dev flag), simulates immediate UX for frontend testing.
 * - In standard operation, submits to same-origin POST /api/event-registration and reacts to server status.
 */

export interface EventRegistrationPayload {
  fullName: string;
  phone: string;
  email: string;
  company: string;
  comments?: string;
  privacyAccepted: boolean;
}

export type EventRegistrationStatus = "registration_disabled" | "success" | "error";

export interface EventRegistrationResult {
  status: EventRegistrationStatus;
  message: string;
}

export const EVENT_REGISTRATION_CONFIG = {
  // Optional local dev flag to simulate instant UI response without touching the server.
  // When not 'mock', the frontend always calls the server endpoint /api/event-registration.
  isMock: import.meta.env.VITE_EVENT_REGISTRATION_MODE === "mock",
};

/**
 * Submits the registration for the event "Bot de Voz: calienta que sales...!!"
 */
export async function submitEventRegistration(
  data: EventRegistrationPayload
): Promise<EventRegistrationResult> {
  // Client-side quick validation
  if (!data.fullName?.trim() || !data.email?.trim() || !data.phone?.trim() || !data.company?.trim()) {
    return {
      status: "error",
      message: "Por favor, completa todos los campos obligatorios.",
    };
  }

  if (!data.privacyAccepted) {
    return {
      status: "error",
      message: "Debes aceptar la Política de Privacidad para continuar.",
    };
  }

  // 1. MOCK MODE (Dev / QA simulation only when explicitly requested)
  if (EVENT_REGISTRATION_CONFIG.isMock) {
    await new Promise((resolve) => setTimeout(resolve, 600));
    return {
      status: "success",
      message: "Hemos recibido correctamente tu solicitud de inscripción para el taller. Nuestro equipo gestionará tu plaza.",
    };
  }

  // 2. STANDARD: Authoritative call to same-origin endpoint /api/event-registration
  try {
    const response = await fetch("/api/event-registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.fullName.trim(),
        phone: data.phone.trim(),
        email: data.email.trim(),
        company: data.company.trim(),
        comments: data.comments?.trim() || "",
        privacyAccepted: data.privacyAccepted,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        status: "error",
        message: result?.error || "Error al procesar la solicitud.",
      };
    }

    if (result.status === "registration_disabled") {
      return {
        status: "registration_disabled",
        message: result.message || "El registro online estará disponible próximamente.",
      };
    }

    return {
      status: "success",
      message: result?.message || "Hemos recibido correctamente tu solicitud de inscripción para el taller. Nuestro equipo gestionará tu plaza.",
    };
  } catch {
    return {
      status: "error",
      message: "No se pudo conectar con el servidor. Por favor, inténtalo de nuevo más tarde.",
    };
  }
}
