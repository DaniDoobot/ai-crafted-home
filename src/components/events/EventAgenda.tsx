import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Award, BarChart3, CheckCircle2, Headphones, Sparkles, UserCheck } from "lucide-react";

const AGENDA_ITEMS = [
  {
    badge: "Selección IA",
    title: "Selección y evaluación",
    description: "Bots de voz para entrevistas, selección y evaluación de candidatos.",
    points: [
      "Entrevistas telefónicas iniciales estructuradas.",
      "Evaluación objetiva de respuestas y competencias clave.",
      "Agilización de procesos de reclutamiento para equipos de atención.",
    ],
    icon: UserCheck,
    accent: "from-cyan-500/20 to-blue-500/10",
    border: "border-cyan-500/30",
    iconColor: "text-cyan-400",
    badgeBg: "bg-cyan-500/20 text-cyan-300",
  },
  {
    badge: "Role plays & Simulación",
    title: "Formación y role plays",
    description: "Entrenamiento de agentes mediante situaciones conversacionales simuladas.",
    points: [
      "Simulación de llamadas complejas con clientes exigentes.",
      "Práctica continuada sin riesgo operativo ni coste de supervisión manual.",
      "Feedback interactivo inmediato tras cada interacción simulada.",
    ],
    icon: Headphones,
    accent: "from-purple-500/20 to-indigo-500/10",
    border: "border-purple-500/30",
    iconColor: "text-purple-400",
    badgeBg: "bg-purple-500/20 text-purple-300",
  },
  {
    badge: "Supervisión & Calidad",
    title: "Análisis inteligente",
    description: "Evaluación mediante IA de conversaciones, desempeño y oportunidades de mejora.",
    points: [
      "Detección de patrones conversacionales y calidad del discurso.",
      "Identificación de fortalezas y áreas concretas de formación.",
      "Métricas y hallazgos cuantitativos y cualitativos automáticos.",
    ],
    icon: BarChart3,
    accent: "from-blue-500/20 to-cyan-500/10",
    border: "border-blue-500/30",
    iconColor: "text-blue-400",
    badgeBg: "bg-blue-500/20 text-blue-300",
  },
  {
    badge: "Casos Reales",
    title: "Casos reales en producción",
    description: "Ejemplos prácticos de soluciones ya aplicadas con resultados tangibles.",
    points: [
      "Demostración en vivo de casos desplegados en producción.",
      "Resultados tangibles en optimización de tiempos y curva de aprendizaje.",
      "Lecciones aprendidas y mejores prácticas de implantación.",
    ],
    icon: Sparkles,
    accent: "from-emerald-500/20 to-teal-500/10",
    border: "border-emerald-500/30",
    iconColor: "text-emerald-400",
    badgeBg: "bg-emerald-500/20 text-emerald-300",
  },
];

export function EventAgenda() {
  return (
    <section id="que-veremos" className="relative py-12 sm:py-16 lg:py-20 bg-[#03071C] text-white">
      <div className="relative mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <RevealOnScroll variant="fade-up" duration="fast" delay={0}>
            <span className="inline-block rounded-full bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cyan-300">
              Contenido de la sesión
            </span>
            <h2 className="mt-3.5 font-display font-bold text-white text-[clamp(28px,3.5vw,46px)] leading-[1.12] tracking-tight">
              Qué veremos en el taller
            </h2>
            <p className="mt-3.5 font-normal text-slate-300 text-[16px] sm:text-[18px] leading-[1.55]">
              Aprende cómo aplicar bots de voz basados en IA para entrenar, evaluar y poner a prueba a personas y equipos mediante conversaciones y situaciones reales.
            </p>
          </RevealOnScroll>
        </div>

        {/* 4 Thematic Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {AGENDA_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <RevealOnScroll key={item.title} variant="fade-up" duration="medium" delay={idx * 100}>
                <div className={`h-full rounded-3xl border ${item.border} bg-gradient-to-br ${item.accent} bg-slate-900/60 p-6 sm:p-8 backdrop-blur-xl shadow-xl flex flex-col justify-between transition-transform hover:scale-[1.01]`}>
                  <div>
                    <div className="flex items-center justify-between">
                      <div className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 ${item.iconColor}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className={`rounded-full px-3 py-1 text-xs font-bold tracking-wide ${item.badgeBg}`}>
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="mt-6 font-display font-bold text-white text-2xl sm:text-[26px] leading-[1.2]">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 font-medium text-slate-200 text-base leading-relaxed">
                      {item.description}
                    </p>

                    <ul className="mt-6 space-y-3">
                      {item.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2.5 text-sm text-slate-300">
                          <CheckCircle2 className={`h-4 w-4 ${item.iconColor} shrink-0 mt-0.5`} />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
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
