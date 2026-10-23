import {
  Bot,
  Clock,
  TrendingUp,
  Lightbulb,
  ArrowUpRight,
  Share2,
  ShieldCheck,
} from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const benefits = [
  {
    title: "Crear agentes especializados.",
    description:
      "Configurar asistentes con instrucciones, criterios y documentación de referencia para apoyar tareas concretas de un área o puesto.",
    icon: Bot,
    color: "from-cyan-500/20 to-blue-500/10 text-cyan-600",
  },
  {
    title: "Optimizar tiempos.",
    description:
      "Agilizar la preparación de documentos, la síntesis de información y otras tareas habituales.",
    icon: Clock,
    color: "from-indigo-500/20 to-purple-500/10 text-indigo-600",
  },
  {
    title: "Ampliar su capacidad de análisis.",
    description:
      "Comparar alternativas, relacionar información, identificar patrones y formular mejores preguntas.",
    icon: TrendingUp,
    color: "from-blue-500/20 to-cyan-500/10 text-blue-600",
  },
  {
    title: "Generar y desarrollar ideas.",
    description:
      "Explorar enfoques, enriquecer propuestas y encontrar soluciones a problemas concretos.",
    icon: Lightbulb,
    color: "from-amber-500/20 to-yellow-500/10 text-amber-600",
  },
  {
    title: "Pasar de la idea a la acción.",
    description:
      "Transformar una propuesta inicial en un plan de trabajo, una presentación, un procedimiento o un agente que ayude a ejecutarlo.",
    icon: ArrowUpRight,
    color: "from-emerald-500/20 to-teal-500/10 text-emerald-600",
  },
  {
    title: "Compartir buenas prácticas.",
    description:
      "Convertir instrucciones y conocimientos del equipo en asistentes reutilizables, con pautas comunes de trabajo.",
    icon: Share2,
    color: "from-violet-500/20 to-purple-500/10 text-violet-600",
  },
  {
    title: "Trabajar con criterio.",
    description:
      "Contrastar las respuestas, reconocer las limitaciones de la IA y mantener la supervisión humana.",
    icon: ShieldCheck,
    color: "from-teal-500/20 to-emerald-500/10 text-teal-600",
  },
];

export function TrainingBenefits() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-slate-50/60 border-t border-slate-100">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <RevealOnScroll variant="fade-right" duration="fast" delay={0}>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-700 mb-4">
              Capacidades
            </div>
          </RevealOnScroll>
          <RevealOnScroll variant="fade-right" duration="fast" delay={60}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight">
              Qué conseguirá tu equipo
            </h2>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const isLast = index === benefits.length - 1;
            return (
              <RevealOnScroll
                key={benefit.title}
                variant="fade-right"
                duration="fast"
                delay={index * 50}
                className={isLast ? "md:col-span-2 lg:col-span-1" : ""}
              >
                <div className="h-full rounded-2xl border border-slate-200/90 bg-white p-7 sm:p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-indigo-300 flex flex-col justify-between">
                  <div>
                    <div
                      className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${benefit.color} mb-5`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-slate-900 leading-snug">
                      {benefit.title}
                    </h3>
                    <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                      {benefit.description}
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
