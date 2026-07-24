// ─────────────────────────────────────────────────────────────────────────────
// Experiencias y demostraciones verificadas — doobot.ai
// Solo se incluyen elementos con respaldo real en el sitio de referencia.
// ─────────────────────────────────────────────────────────────────────────────

export type DemoStatus = "available" | "coming-soon";

export interface Demo {
  id: string;
  type: "video" | "interactive";
  title: string;
  description: string;
  badge: string;
  status: DemoStatus;
  /** Ruta interna (solo si status === "available" y existe la página) */
  href?: string;
  /** CTA del botón */
  ctaLabel: string;
  /** Anchor del scroll dentro de esta misma página */
  scrollTo?: string;
}

/**
 * Únicos dos elementos verificados en la fuente original.
 * La Demo Voice Bot Asistencia se activará en la Subfase 4B.
 */
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
    id: "voice-bot-asistencia",
    type: "interactive",
    title: "Demo Voice Bot Asistencia",
    description:
      "Experiencia de demostración de atención telefónica asistida mediante Voice Bot.",
    badge: "Demo interactiva",
    status: "coming-soon",
    ctaLabel: "Próximamente",
  },
];
