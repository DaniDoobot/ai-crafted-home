const LOGOS = [
  { src: "https://doobot.ai/wp-content/uploads/2025/08/11-logo-MS-Teams.webp", alt: "Microsoft Teams" },
  { src: "https://doobot.ai/wp-content/uploads/2025/08/12-logo-meta-1024x206.webp", alt: "Meta" },
  { src: "https://doobot.ai/wp-content/uploads/2025/08/1-logo-hubspot-1024x300.webp", alt: "HubSpot" },
  { src: "https://doobot.ai/wp-content/uploads/2025/08/2-logo-google-workspace-1024x132.webp", alt: "Google Workspace" },
  { src: "https://doobot.ai/wp-content/uploads/2025/08/3-logo-salesforce.webp", alt: "Salesforce" },
  { src: "https://doobot.ai/wp-content/uploads/2025/08/4-logo-whatsapp-1024x303.webp", alt: "WhatsApp" },
  { src: "https://doobot.ai/wp-content/uploads/2025/08/5-logo-twilio-1024x307.webp", alt: "Twilio" },
  { src: "https://doobot.ai/wp-content/uploads/2025/08/6-logo-genesys-1024x683.webp", alt: "Genesys" },
  { src: "https://doobot.ai/wp-content/uploads/2025/08/7-logo-looker-1024x272.webp", alt: "Looker" },
  { src: "https://doobot.ai/wp-content/uploads/2025/08/8-logo-openai-1024x278.webp", alt: "OpenAI" },
  { src: "https://doobot.ai/wp-content/uploads/2025/08/9-logo-Azure-1024x296.webp", alt: "Microsoft Azure" },
  { src: "https://doobot.ai/wp-content/uploads/2025/08/10-logo-MS-Dynamics-1024x576.webp", alt: "Microsoft Dynamics" },
];

export function Integrations() {
  const doubled = [...LOGOS, ...LOGOS];
  return (
    <section className="border-y border-border bg-muted/40 py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Integrados con
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            La automatización con todos tus entornos y aplicativos para una gestión
            unificada en tiempo real.
          </p>
        </div>

        <div
          className="group relative mt-10 overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div className="flex w-max animate-marquee items-center gap-14 group-hover:[animation-play-state:paused]">
            {doubled.map((logo, i) => (
              <div
                key={i}
                className="flex h-20 w-44 shrink-0 items-center justify-center"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  className="max-h-12 w-auto max-w-full opacity-85 grayscale transition hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
