import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { MessageSquare, Bot, Cpu, TrendingUp } from "lucide-react";

const PILLARS = [
  {
    num: "01",
    title: "Atención omnicanal 24×7",
    description:
      "Soluciones para Web, WhatsApp y Voice Bots capaces de facilitar información y atender necesidades en cualquier momento.",
    icon: MessageSquare,
  },
  {
    num: "02",
    title: "Automatización operativa",
    description:
      "Gestión, confirmación, cambio y recordatorio de citas, encuestas y seguimiento automatizado de clientes.",
    icon: Bot,
  },
  {
    num: "03",
    title: "IA adaptada a cada negocio",
    description:
      "Integración de modelos y plataformas de inteligencia artificial como ChatGPT, Gemini y Dialogflow dentro de soluciones llave en mano.",
    icon: Cpu,
  },
  {
    num: "04",
    title: "Engagement y actividad comercial",
    description:
      "Interacciones más ágiles y personalizadas que ayudan a mejorar la relación, promover servicios y acompañar el ciclo comercial.",
    icon: TrendingUp,
  },
];

export function AwardTechnology() {
  return (
    <section
      className="relative overflow-hidden py-[110px] lg:py-[125px]"
      style={{
        background: "linear-gradient(135deg, #02021A 0%, #050547 50%, #0A0A5C 100%)",
      }}
    >
      {/* Background Ambient Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[600px] rounded-full opacity-20 blur-[130px]"
        style={{
          background: "radial-gradient(circle, rgba(104, 94, 201, 0.4) 0%, rgba(245, 158, 11, 0.2) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-[900px] text-center">
          <RevealOnScroll variant="fade-left" duration="fast" delay={0}>
            <h2 className="font-display font-bold text-white text-[clamp(36px,3.5vw,54px)] leading-[1.12] tracking-tight max-w-[850px] mx-auto">
              La tecnología detrás del reconocimiento
            </h2>
          </RevealOnScroll>
          <RevealOnScroll variant="fade-left" duration="fast" delay={150}>
            <p className="mt-5 font-normal text-slate-200 text-[20px] sm:text-[21px] leading-[1.6] max-w-[900px] mx-auto">
              El reconocimiento refleja una forma de aplicar la inteligencia artificial a procesos reales de relación con clientes, combinando automatización, disponibilidad y capacidad de integración.
            </p>
          </RevealOnScroll>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 lg:gap-7 md:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <RevealOnScroll
                key={pillar.num}
                variant="fade-left"
                duration="slow"
                delay={100 * idx}
                className="h-full"
              >
                <div className="relative flex h-full min-h-[270px] flex-col justify-between rounded-3xl border border-white/14 bg-white/5 p-7 sm:p-8 backdrop-blur-md transition-all hover:border-amber-400/40 hover:bg-white/10 shadow-lg">
                  <div>
                    {/* Number & Larger Icon Header */}
                    <div className="flex items-center justify-between border-b border-white/12 pb-5">
                      <span className="font-mono text-[17px] font-bold text-amber-300 tracking-wider">
                        {pillar.num}
                      </span>
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400/15 text-amber-300">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>

                    {/* Pillar Title */}
                    <h3 className="mt-6 font-display font-bold text-white text-[22px] leading-[1.25]">
                      {pillar.title}
                    </h3>

                    {/* Pillar Description */}
                    <p className="mt-3.5 font-normal text-slate-200 text-[17px] leading-[1.55]">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
