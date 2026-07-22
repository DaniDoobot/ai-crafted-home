export interface SolutionNavItem {
  label: string;
  href: string;
  published: boolean;
  external?: boolean;
}

export const navigationVisibility = {
  examples: false,
  voiceDemo: false,
};

export const solutionNavigation: SolutionNavItem[] = [
  {
    label: "Chat Bot WhatsApp",
    href: "/chat-bot-whatsapp-2/",
    published: false,
  },
  {
    label: "Chat Bot Web",
    href: "/chat-bot-web-2/",
    published: false,
  },
  {
    label: "AI Analytics",
    href: "/ia-analytics/",
    published: false,
  },
  {
    label: "Voice Bots Teléfono",
    href: "/voice-bot-telefono/",
    published: false,
  },
  {
    label: "AI ecommerce",
    href: "https://nwee.ai/",
    published: false,
    external: true,
  },
  {
    label: "Vídeo AI Analytics",
    href: "/video-ai-analytics/",
    published: false,
  },
];

export const mainNavigation = [
  {
    label: "Ejemplos y demos",
    href: "/ejemplos-y-demos/",
    visible: navigationVisibility.examples,
  },
  {
    label: "Demo Voice Bot Asistencia",
    href: "/demo-voice-bot-asistencia/",
    visible: navigationVisibility.voiceDemo,
  },
  {
    label: "Premio Mejor Tecnología",
    href: "/premio-mejor-tecnologia/",
    visible: true,
  },
];
