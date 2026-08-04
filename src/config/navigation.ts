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
    label: "Voice Bots",
    href: "/voice-bot-telefono/",
    published: true,
  },
  {
    label: "AI CRM",
    href: "/ai-crm-omnicanal/",
    published: true,
  },
  {
    label: "AI Speech Analytics",
    href: "/speech-analytics/",
    published: true,
  },
  {
    label: "AI Talent",
    href: "/ai-talent/",
    published: true,
  },
  {
    label: "AI Data Analytics",
    href: "/ia-analytics/",
    published: true,
  },
  {
    label: "AI Video Analytics",
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
  {
    label: "Contacto",
    href: "/contacto/",
    visible: true,
  },
];
