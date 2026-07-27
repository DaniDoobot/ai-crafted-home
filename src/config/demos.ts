// ─────────────────────────────────────────────────────────────────────────────
// Experiencias y demostraciones verificadas — doobot.ai
// Solo se incluyen elementos con respaldo real en el sitio de referencia.
// ─────────────────────────────────────────────────────────────────────────────

export type DemoStatus = "available" | "coming-soon";

export interface Demo {
  id: string;
  type: "video" | "phone";
  title: string;
  description: string;
  badge: string;
  status: DemoStatus;
  /** Enlace directo (tel: o ruta interna) */
  href?: string;
  /** CTA del botón */
  ctaLabel: string;
  /** Anchor del scroll dentro de esta misma página */
  scrollTo?: string;
}

export const demos: Demo[] = [
  {
    id: "voice-bot-video",
    type: "video",
    title: "Voice Bot con IA Generativa",
    description:
      "Vídeo demostrativo de un asistente de voz capaz de mantener una conversación natural, responder consultas y realizar gestiones según la configuración e integraciones del proyecto.",
    badge: "Vídeo demostrativo",
    status: "available",
    ctaLabel: "Ver demostración",
    scrollTo: "demo-video-voicebot",
  },
  {
    id: "voice-bot-telefono",
    type: "phone",
    title: "Habla con nuestro Voice Bot",
    description:
      "Llama a nuestro Voice Bot para dejar un mensaje o solicitar que nuestro equipo comercial se ponga en contacto contigo.",
    badge: "Experiencia telefónica",
    status: "available",
    ctaLabel: "Llamar al Voice Bot",
    href: "tel:+34911674317",
  },
];
