import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ArrowUpRight, Bot, CalendarCheck, Database, Layers, PhoneCall } from "lucide-react";

const OTHER_SOLUTIONS = [
  {
    title: "AI CRM gestionado por voz",
    description: "Conectado directamente con agendas corporativas, CRM y procesos de negocio en tiempo real.",
    href: "/ai-crm-omnicanal/",
    icon: PhoneCall,
    tag: "CRM + Voz",
  },
  {
    title: "Procedimientos controlados mediante voz",
    description: "Operativa guiada y ejecución de tareas complejas paso a paso mediante lenguaje natural.",
    href: "/voice-bot-telefono/",
    icon: Layers,
    tag: "Operativa",
  },
  {
    title: "AI Data Analytics",
    description: "Consultas y análisis de información de negocio en lenguaje natural sin requerir código SQL.",
    href: "/ia-analytics/",
    icon: Database,
    tag: "Analítica",
  },
  {
    title: "Bots para gestión y agendamiento de citas",
    description: "Automatización integral de citas, recordatorios y coordinación de horarios multicanal.",
    href: "/voice-bot-telefono/",
    icon: CalendarCheck,
    tag: "Agendamiento",
  },
];

export function EventVoiceEcosystem() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-[#060B28] text-white overflow-hidden">
      {/* Subtle background glow */}
      <div
        className="pointer-events-none absolute right-1/4 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full opacity-15 blur-[140px]"
        style={{
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(6, 182, 212, 0.3) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Text & Solution Cards (Cols 1-7) */}
          <div className="lg:col-span-7">
            <RevealOnScroll variant="fade-right" duration="fast" delay={0}>
              <span className="inline-block rounded-full bg-purple-500/10 border border-purple-500/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-purple-300">
                Ecosistema de soluciones
              </span>
              <h2 className="mt-4 font-display font-bold text-white text-[clamp(28px,3.5vw,46px)] leading-[1.12] tracking-tight">
                Mucho más que un bot de voz
              </h2>
              <p className="mt-4 font-normal text-slate-300 text-[17px] sm:text-[19px] leading-[1.55]">
                Durante la sesión mostraremos también otras soluciones de IA por voz desarrolladas por doobot.ai.
              </p>
            </RevealOnScroll>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {OTHER_SOLUTIONS.map((sol, idx) => {
                const Icon = sol.icon;
                return (
                  <RevealOnScroll key={sol.title} variant="fade-up" duration="medium" delay={100 + idx * 75}>
                    <a
                      href={sol.href}
                      className="group flex flex-col justify-between h-full rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-md transition-all hover:border-cyan-400/40 hover:bg-slate-900/90 hover:shadow-lg hover:shadow-cyan-500/10"
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-cyan-400 transition-colors group-hover:bg-cyan-500/20">
                            <Icon className="h-5 w-5" />
                          </div>
                          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                            {sol.tag}
                          </span>
                        </div>

                        <h3 className="mt-4 font-display font-bold text-white text-lg group-hover:text-cyan-300 transition-colors">
                          {sol.title}
                        </h3>
                        <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                          {sol.description}
                        </p>
                      </div>

                      <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-cyan-400 group-hover:translate-x-0.5 transition-transform">
                        <span>Ver solución</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </div>
                    </a>
                  </RevealOnScroll>
                );
              })}
            </div>
          </div>

          {/* Right Column: Campaign Vertical Poster (Cols 8-12) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <RevealOnScroll variant="fade-left" duration="medium" delay={150}>
              <div className="relative mx-auto max-w-[340px]">
                {/* Poster Glow */}
                <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-tr from-emerald-500/20 via-cyan-500/20 to-purple-500/20 blur-2xl opacity-75" />

                <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-slate-900/80 p-3 shadow-2xl backdrop-blur-xl">
                  <img
                    src="/doobot/events/cartel-evento-contact-center-2026.webp"
                    alt="Cartel oficial del evento: Bot de Voz, calienta que sales!! - doobot.ai"
                    className="h-auto w-full rounded-2xl block object-cover shadow-md"
                    loading="lazy"
                  />
                  <div className="mt-2.5 px-2 py-1 text-center">
                    <span className="text-[11px] font-semibold text-slate-300 tracking-wide">
                      Semana Contact Center 2026 · AEERC
                    </span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
