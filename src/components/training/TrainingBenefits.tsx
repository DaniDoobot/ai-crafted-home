import {
  Bot,
  Clock,
  TrendingUp,
  Lightbulb,
  ArrowUpRight,
  Share2,
  ShieldCheck,
  UserCheck,
  Sparkles,
  Zap,
  ArrowRight,
} from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const benefits = [
  {
    num: "01",
    title: "Crear agentes especializados.",
    description:
      "Configurar asistentes con instrucciones, criterios y documentación de referencia para apoyar tareas concretas de un área o puesto.",
    icon: Bot,
    color: "from-cyan-500/20 to-blue-500/10 text-cyan-600 border-cyan-200",
  },
  {
    num: "02",
    title: "Optimizar tiempos.",
    description:
      "Agilizar la preparación de documentos, la síntesis de información y otras tareas habituales.",
    icon: Clock,
    color: "from-indigo-500/20 to-purple-500/10 text-indigo-600 border-indigo-200",
  },
  {
    num: "03",
    title: "Ampliar su capacidad de análisis.",
    description:
      "Comparar alternativas, relacionar información, identificar patrones y formular mejores preguntas.",
    icon: TrendingUp,
    color: "from-blue-500/20 to-cyan-500/10 text-blue-600 border-blue-200",
  },
  {
    num: "04",
    title: "Generar y desarrollar ideas.",
    description:
      "Explorar enfoques, enriquecer propuestas y encontrar soluciones a problemas concretos.",
    icon: Lightbulb,
    color: "from-amber-500/20 to-yellow-500/10 text-amber-600 border-amber-200",
  },
  {
    num: "05",
    title: "Pasar de la idea a la acción.",
    description:
      "Transformar una propuesta inicial en un plan de trabajo, una presentación, un procedimiento o un agente que ayude a ejecutarlo.",
    icon: ArrowUpRight,
    color: "from-emerald-500/20 to-teal-500/10 text-emerald-600 border-emerald-200",
  },
  {
    num: "06",
    title: "Compartir buenas prácticas.",
    description:
      "Convertir instrucciones y conocimientos del equipo en asistentes reutilizables, con pautas comunes de trabajo.",
    icon: Share2,
    color: "from-violet-500/20 to-purple-500/10 text-violet-600 border-violet-200",
  },
  {
    num: "07",
    title: "Trabajar con criterio.",
    description:
      "Contrastar las respuestas, reconocer las limitaciones de la IA y mantener la supervisión humana.",
    icon: ShieldCheck,
    color: "from-teal-500/20 to-emerald-500/10 text-teal-600 border-teal-200",
  },
];

export function TrainingBenefits() {
  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-slate-50/60 border-t border-slate-100">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <RevealOnScroll variant="fade-right" duration="fast" delay={0}>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-700 mb-3">
              Capacidades
            </div>
          </RevealOnScroll>
          <RevealOnScroll variant="fade-right" duration="fast" delay={60}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight">
              Qué conseguirá tu equipo
            </h2>
          </RevealOnScroll>
        </div>

        {/* 4 + 3 balanced grid: row 1 has 4 cards (col-span-3), row 2 has 3 cards (col-span-4) on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 lg:gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const isFirstRow = index < 4;
            const colSpanClass = isFirstRow
              ? "lg:col-span-3"
              : "lg:col-span-4";
            const isLastOnTablet = index === benefits.length - 1;

            return (
              <RevealOnScroll
                key={benefit.title}
                variant="fade-right"
                duration="fast"
                delay={index * 40}
                className={`${colSpanClass} ${isLastOnTablet ? "md:col-span-2 lg:col-span-4" : ""}`}
              >
                <div className="group relative h-full rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs transition-all duration-300 hover:shadow-md hover:border-indigo-300 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${benefit.color} border shadow-xs transition-transform duration-300 group-hover:scale-105`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-indigo-600 transition-colors">
                        {benefit.num}
                      </span>
                    </div>

                    <h3 className="text-lg font-display font-bold text-slate-900 leading-snug">
                      {benefit.title}
                    </h3>
                    <p className="mt-2.5 text-slate-600 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

        {/* Visual Block 1: Persona → IA → Agente especializado → Resultado / acción */}
        <RevealOnScroll variant="fade-right" duration="medium" delay={150}>
          <div className="mt-10 rounded-2xl border border-slate-200 bg-white/90 p-4 sm:p-5 shadow-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 items-center">
              <div className="flex items-center gap-3 rounded-xl bg-slate-50 px-3.5 py-2.5 border border-slate-100">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                  <UserCheck className="h-4.5 w-4.5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 block">Paso 1</span>
                  <span className="text-sm font-semibold text-slate-900 truncate block">Persona / Equipo</span>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-slate-50 px-3.5 py-2.5 border border-slate-100">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-50 text-cyan-600">
                  <Sparkles className="h-4.5 w-4.5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 block">Paso 2</span>
                  <span className="text-sm font-semibold text-slate-900 truncate block">Herramientas IA</span>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-slate-50 px-3.5 py-2.5 border border-slate-100">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  <Bot className="h-4.5 w-4.5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 block">Paso 3</span>
                  <span className="text-sm font-semibold text-slate-900 truncate block">Agente especializado</span>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-indigo-50/60 px-3.5 py-2.5 border border-indigo-100">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-600 text-white">
                  <Zap className="h-4.5 w-4.5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 block">Paso 4</span>
                  <span className="text-sm font-semibold text-indigo-950 truncate block">Resultado / acción</span>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
