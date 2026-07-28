export interface SolutionNavItem {
  label: string;
  href: string;
  published: boolean;
  external?: boolean;
}

export const navigationVisibility = {
  examples: true,
};

export const solutionNavigation: SolutionNavItem[] = [
  {
    label: "Chat Bot WhatsApp",
    href: "/chat-bot-whatsapp-2/",
    published: true,
  },
  {
    label: "Chat Bot Web",
    href: "/chat-bot-web-2/",
    published: true,
  },
  {
    label: "Voice Bots Teléfono",
    href: "/voice-bot-telefono/",
    published: true,
  },
  {
    label: "Speech Analytics",
    href: "/speech-analytics/",
    published: true,
  },
  {
    label: "AI Analytics",
    href: "/ia-analytics/",
    published: true,
  },
  {
    label: "Vídeo AI Analytics",
    href: "/video-ai-analytics/",
    published: true,
  },
  {
    label: "AI ecommerce",
    href: "https://nwee.ai/",
    published: false,
    external: true,
  },
];

export const mainNavigation = [
  {
    label: "Ejemplos y demos",
    href: "/ejemplos-y-demos/",
    visible: navigationVisibility.examples,
  },
  {
    label: "Premio Mejor Tecnología",
    href: "/premio-mejor-tecnologia/",
    visible: true,
  },
];
