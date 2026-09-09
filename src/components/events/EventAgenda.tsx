import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { CheckCircle2, Headphones, Mic, PhoneCall, UserCheck } from "lucide-react";

const AGENDA_ITEMS = [
  {
    title: "Selección y Evaluación",
    points: [
      "Entrevistas automáticas en base al CV",
      "Role Plays flexibles con evaluación IA",
    ],
    icon: UserCheck,
    accent: "from-cyan-500/15 to-blue-500/5",
    border: "border-cyan-500/25",
    iconBg: "bg-cyan-500/15 text-cyan-300",
    checkColor: "text-cyan-400",
  },
  {
    title: "Entrenamiento agentes",
    points: [
      "Feedback automático a agente",
      "Entrenamiento personalizado con bots de voz",
    ],
    icon: Headphones,
    accent: "from-purple-500/15 to-indigo-500/5",
    border: "border-purple-500/25",
    iconBg: "bg-purple-500/15 text-purple-300",
    checkColor: "text-purple-400",
  },
  {
    title: "Venta y Servicio 24x7 directa o en desbordamiento",
    points: [
      "Tipificación y distribución inteligente de llamadas",
      "Atención transaccional completa por API",
    ],
    icon: PhoneCall,
    accent: "from-blue-500/15 to-cyan-500/5",
    border: "border-blue-500/25",
    iconBg: "bg-blue-500/15 text-blue-300",
    checkColor: "text-blue-400",
  },
  {
    title: "Uso de aplicativos por voz",
    points: [
      "Uso de la voz como alternativa al teclado",
      "Múltiples solicitudes en una sola instrucción por voz",
    ],
    icon: Mic,
    accent: "from-emerald-500/15 to-teal-500/5",
    border: "border-emerald-500/25",
    iconBg: "bg-emerald-500/15 text-emerald-300",
    checkColor: "text-emerald-400",
  },
];

export function EventAgenda() {
  return (
    <section id="que-veremos" className="relative py-10 sm:py-14 lg:py-16 bg-[#03071C] text-white">
      <div className="relative mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <RevealOnScroll variant="fade-up" duration="fast" delay={0}>
            <span className="inline-block rounded-full bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cyan-300">
              Contenido de la sesión
            </span>
            <h2 className="mt-3.5 font-display font-bold text-white text-[clamp(28px,3.5vw,44px)] leading-[1.12] tracking-tight">
              Qué veremos en el taller
            </h2>
            <p className="mt-3 font-normal text-slate-300 text-[16px] sm:text-[18px] leading-[1.55]">
              Aprende cómo aplicar Bots de Voz basados en IA en diferentes ámbitos, para optimizar la experiencia de cliente, la precisión en las operaciones y los costes.
            </p>
          </RevealOnScroll>
        </div>

        {/* 4 Compact Thematic Cards Grid */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
          {AGENDA_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <RevealOnScroll key={item.title} variant="fade-up" duration="medium" delay={idx * 80}>
                <div className={`h-full rounded-2xl sm:rounded-3xl border ${item.border} bg-gradient-to-br ${item.accent} bg-slate-900/60 p-5 sm:p-6 lg:p-7 backdrop-blur-xl shadow-xl flex flex-col justify-start transition-transform hover:scale-[1.01]`}>
                  <div className="flex items-start gap-3">
                    <div className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${item.iconBg}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display font-bold text-white text-xl sm:text-[22px] leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  <ul className="mt-3.5 space-y-2.5">
                    {item.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <CheckCircle2 className={`h-4 w-4 ${item.checkColor} shrink-0 mt-0.5`} />
                        <span className="leading-snug">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
