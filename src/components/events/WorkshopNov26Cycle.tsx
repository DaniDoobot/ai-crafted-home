import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ArrowRight, BarChart3, Bot, Headphones, RefreshCw, Sparkles, UserCheck } from "lucide-react";

interface Step {
  step: string;
  badge: string;
  title: string;
  description: string;
  icon: typeof BarChart3;
  color: {
    badgeBg: string;
    badgeBorder: string;
    badgeText: string;
    iconBg: string;
    iconText: string;
    cardBorder: string;
  };
}

const steps: Step[] = [
  {
    step: "01",
    badge: "Evaluación",
    title: "Evaluación: analizar las conversaciones",
    description:
      "La IA analiza automáticamente las conversaciones según criterios definidos para cada servicio: cumplimiento de procedimientos, calidad de la argumentación, escucha, empatía y gestión de situaciones difíciles. Así identifica qué hace bien cada agente y qué necesita reforzar.",
    icon: BarChart3,
    color: {
      badgeBg: "bg-cyan-500/10",
      badgeBorder: "border-cyan-500/30",
      badgeText: "text-cyan-300",
      iconBg: "bg-cyan-500/20",
      iconText: "text-cyan-400",
      cardBorder: "hover:border-cyan-500/40",
    },
  },
  {
    step: "02",
    badge: "Coaching",
    title: "Coaching: crear un plan personalizado",
    description:
      "A partir de la evaluación, la IA propone objetivos y actividades concretas para cada agente. El coordinador revisa las conclusiones, ajusta las prioridades y valida el plan antes de ponerlo en marcha.",
    icon: UserCheck,
    color: {
      badgeBg: "bg-blue-500/10",
      badgeBorder: "border-blue-500/30",
      badgeText: "text-blue-300",
      iconBg: "bg-blue-500/20",
      iconText: "text-blue-400",
      cardBorder: "hover:border-blue-500/40",
    },
  },
  {
    step: "03",
    badge: "Training",
    title: "Training: practicar con bots de voz",
    description:
      "Con el plan validado, la IA genera roleplays adaptados a las necesidades del agente: responder a objeciones, explicar procedimientos, gestionar conversaciones difíciles o mejorar el cierre. Cada práctica está vinculada a los objetivos de mejora establecidos.",
    icon: Headphones,
    color: {
      badgeBg: "bg-indigo-500/10",
      badgeBorder: "border-indigo-500/30",
      badgeText: "text-indigo-300",
      iconBg: "bg-indigo-500/20",
      iconText: "text-indigo-400",
      cardBorder: "hover:border-indigo-500/40",
    },
  },
  {
    step: "04",
    badge: "Seguimiento",
    title: "Seguimiento: dar continuidad a la mejora",
    description:
      "La IA evalúa los entrenamientos y ofrece feedback sobre los avances y los aspectos pendientes. Un informe general recoge los resultados y alimenta el siguiente ciclo, adaptando el trabajo a la evolución de cada persona.",
    icon: RefreshCw,
    color: {
      badgeBg: "bg-purple-500/10",
      badgeBorder: "border-purple-500/30",
      badgeText: "text-purple-300",
      iconBg: "bg-purple-500/20",
      iconText: "text-purple-400",
      cardBorder: "hover:border-purple-500/40",
    },
  },
];

export function WorkshopNov26Cycle() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-[#030718] text-white">
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] rounded-full opacity-15 blur-[160px]"
        style={{
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, rgba(99, 102, 241, 0.3) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <RevealOnScroll variant="fade-up" duration="fast" delay={0}>
            <span className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cyan-300">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Proceso continuo de mejora</span>
            </span>
            <h2 className="mt-4 font-display font-bold text-white text-[clamp(28px,3.8vw,48px)] leading-[1.12] tracking-tight">
              Ciclo continuo con IA y bots de voz
            </h2>
            <p className="mt-3 font-normal text-slate-300 text-[17px] sm:text-[19px] leading-[1.55]">
              No son herramientas aisladas, sino un sistema integrado donde cada fase alimenta a la siguiente bajo la supervisión del coordinador.
            </p>
          </RevealOnScroll>
        </div>

        {/* 4 Cards Grid with Cycle Visual Flow */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={item.step} className="relative flex flex-col h-full">
                <RevealOnScroll
                  variant="fade-up"
                  duration="medium"
                  delay={index * 100}
                  className="flex-1 flex flex-col"
                >
                  <div className={`flex-1 flex flex-col justify-between rounded-3xl border border-white/10 bg-slate-900/70 p-6 sm:p-7 shadow-xl backdrop-blur-xl transition-all duration-300 ${item.color.cardBorder} hover:shadow-cyan-950/30 hover:-translate-y-1`}>
                    <div>
                      {/* Top Row: Badge, Step Number & Icon */}
                      <div className="flex items-center justify-between gap-3">
                        <span className={`inline-flex items-center gap-1.5 rounded-full ${item.color.badgeBg} border ${item.color.badgeBorder} px-3 py-1 text-xs font-bold uppercase tracking-wider ${item.color.badgeText}`}>
                          {item.badge}
                        </span>
                        <span className="text-2xl font-mono font-bold text-slate-500/60">
                          {item.step}
                        </span>
                      </div>

                      {/* Icon */}
                      <div className="mt-5">
                        <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${item.color.iconBg} ${item.color.iconText} shadow-inner`}>
                          <Icon className="h-6 w-6" />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="mt-4 text-lg sm:text-xl font-bold text-white leading-snug">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Step Flow Indicator */}
                    <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                      <span>Fase {item.step}</span>
                      {index < 3 ? (
                        <span className="inline-flex items-center gap-1 text-cyan-300 font-medium">
                          Siguiente <ArrowRight className="h-3 w-3" />
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-purple-300 font-medium">
                          ↺ Reinicia el ciclo
                        </span>
                      )}
                    </div>
                  </div>
                </RevealOnScroll>
              </div>
            );
          })}
        </div>

        {/* Bottom Loop Continuity Callout */}
        <div className="mt-10 sm:mt-12">
          <RevealOnScroll variant="fade-up" duration="fast" delay={400}>
            <div className="rounded-2xl border border-cyan-500/25 bg-gradient-to-r from-cyan-950/40 via-slate-900/60 to-purple-950/40 p-5 sm:p-6 text-center max-w-3xl mx-auto shadow-lg backdrop-blur-md">
              <p className="text-sm sm:text-base font-medium text-slate-200 inline-flex flex-wrap items-center justify-center gap-2">
                <RefreshCw className="h-4 w-4 text-cyan-400 shrink-0 animate-spin [animation-duration:8s]" />
                <span className="text-cyan-300 font-bold">Ciclo continuo:</span>
                <span>Los informes de seguimiento alimentan de nuevo la evaluación y el coaching para el siguiente período de mejora.</span>
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
