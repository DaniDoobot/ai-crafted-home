import {
  Sparkles,
  Zap,
  Bot,
  Layers,
  Compass,
  Network,
  RefreshCw,
  Cpu,
  ArrowRight,
} from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const services = [
  {
    number: "01",
    title: "Primeros pasos con la IA y los agentes",
    description:
      "Para profesionales que quieren empezar con una base clara. Qué puede aportar la IA, cómo darle instrucciones útiles y cuándo conviene utilizar una conversación o configurar un asistente especializado. Con ejercicios aplicables desde el primer día.",
    icon: Sparkles,
    accent: "from-indigo-500/20 to-blue-500/10 text-indigo-600 border-indigo-200",
  },
  {
    number: "02",
    title: "Productividad con IA en el trabajo diario",
    description:
      "Talleres para incorporar la IA a tareas frecuentes: redactar, resumir, investigar, analizar información y preparar reuniones o presentaciones. Identificamos qué usos merece la pena convertir en asistentes reutilizables.",
    icon: Zap,
    accent: "from-cyan-500/20 to-teal-500/10 text-cyan-600 border-cyan-200",
  },
  {
    number: "03",
    title: "Talleres de creación de agentes",
    description:
      "Formación práctica para diseñar y configurar un agente con un objetivo concreto: definir su función, establecer instrucciones y límites, incorporar documentación de referencia y determinar cómo debe responder.\n\nLos participantes prueban su comportamiento con casos representativos, detectan errores y ajustan su configuración para mejorar los resultados.",
    icon: Bot,
    accent: "from-emerald-500/20 to-green-500/10 text-emerald-600 border-emerald-200",
  },
  {
    number: "04",
    title: "Agentes y aplicaciones de IA por área",
    description:
      "Sesiones centradas en los retos de un departamento. Trabajamos sobre sus necesidades para desarrollar asistentes y recursos adaptados a su actividad: consulta de procedimientos, preparación de propuestas, análisis de información o revisión de documentos.",
    icon: Layers,
    accent: "from-amber-500/20 to-orange-500/10 text-amber-600 border-amber-200",
  },
  {
    number: "05",
    title: "IA y agentes para directivos y responsables",
    description:
      "Formación para identificar oportunidades, priorizar casos de uso y orientar la adopción de la IA en los equipos. Abordamos qué tareas pueden apoyarse en agentes, qué supervisión necesitan y cómo valorar su utilidad.",
    icon: Compass,
    accent: "from-blue-500/20 to-indigo-500/10 text-blue-600 border-blue-200",
  },
  {
    number: "06",
    title: "Agentes avanzados y conexión con procesos",
    description:
      "Para equipos que quieren avanzar hacia agentes que utilicen herramientas, consulten otras fuentes o participen en procesos de varias etapas. Trabajamos el diseño del flujo, los permisos, las validaciones y los puntos de intervención humana, según las capacidades y licencias de cada plataforma.",
    icon: Network,
    accent: "from-violet-500/20 to-purple-500/10 text-violet-600 border-violet-200",
  },
];

const service07 = {
  number: "07",
  title: "Acompañamiento y mejora continua",
  description:
    "Sesiones de seguimiento para resolver dudas, revisar aplicaciones reales y mejorar los agentes creados. Una forma de consolidar hábitos, actualizar instrucciones y extender las buenas prácticas dentro del equipo.",
  icon: RefreshCw,
  accent: "from-teal-500/20 to-cyan-500/10 text-teal-600 border-teal-200",
};

export function TrainingServices() {
  const Icon07 = service07.icon;

  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-slate-50/70 border-t border-slate-100">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <RevealOnScroll variant="fade-right" duration="fast" delay={0}>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-700 mb-3">
              Modalidades
            </div>
          </RevealOnScroll>
          <RevealOnScroll variant="fade-right" duration="fast" delay={60}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight">
              Servicios de formación
            </h2>
          </RevealOnScroll>
        </div>

        {/* 3 + 3 + 1 grid: 6 cards in 3 cols, and the 7th card featured horizontally across columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 lg:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <RevealOnScroll
                key={service.title}
                variant="fade-right"
                duration="fast"
                delay={index * 40}
                className="lg:col-span-4"
              >
                <div className="group relative h-full rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs transition-all duration-300 hover:shadow-md hover:border-indigo-300 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${service.accent} border shadow-xs transition-transform duration-300 group-hover:scale-105`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-2xl font-bold tracking-tight text-indigo-600/70 group-hover:text-indigo-600 transition-colors">
                        {service.number}
                      </span>
                    </div>

                    <h3 className="text-lg font-display font-bold text-slate-900 leading-snug">
                      {service.title}
                    </h3>
                    <div className="mt-2.5 text-slate-600 text-sm leading-relaxed whitespace-pre-line">
                      {service.description}
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}

          {/* Service 07: Featured Horizontal Banner Card */}
          <RevealOnScroll
            variant="fade-right"
            duration="fast"
            delay={280}
            className="md:col-span-2 lg:col-span-12"
          >
            <div className="group relative rounded-2xl border border-indigo-200/80 bg-gradient-to-r from-white via-indigo-50/20 to-cyan-50/20 p-6 sm:p-7 shadow-xs transition-all duration-300 hover:shadow-md hover:border-indigo-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
                <div className="lg:col-span-4 flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500/20 to-cyan-500/10 text-teal-600 border border-teal-200 shadow-xs">
                    <Icon07 className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-2xl font-bold tracking-tight text-teal-600">
                        {service07.number}
                      </span>
                      <span className="rounded bg-teal-50 px-2 py-0.5 text-[11px] font-semibold text-teal-700 border border-teal-200">
                        Consolidación
                      </span>
                    </div>
                    <h3 className="text-lg font-display font-bold text-slate-900 leading-snug mt-1">
                      {service07.title}
                    </h3>
                  </div>
                </div>

                <div className="lg:col-span-8 border-t lg:border-t-0 lg:border-l border-slate-200/80 pt-4 lg:pt-0 lg:pl-6">
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {service07.description}
                  </p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Visual Block 2: Modelos IA → Entorno empresa → Agentes adaptados */}
        <RevealOnScroll variant="fade-right" duration="medium" delay={150}>
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white/90 p-4 sm:p-5 shadow-xs">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-center lg:text-left">
              <div className="flex flex-wrap items-center justify-center gap-2">
                <span className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700">
                  Microsoft Copilot
                </span>
                <span className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700">
                  ChatGPT
                </span>
                <span className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700">
                  Claude
                </span>
                <span className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700">
                  Gemini
                </span>
              </div>

              <div className="hidden lg:flex items-center text-slate-400">
                <ArrowRight className="h-4 w-4" />
              </div>

              <div className="flex items-center gap-2 rounded-xl bg-slate-100/80 px-3.5 py-1.5 border border-slate-200 text-xs font-medium text-slate-700">
                <Cpu className="h-4 w-4 text-indigo-600 shrink-0" />
                <span>Instrucciones, contexto y documentación de la empresa</span>
              </div>

              <div className="hidden lg:flex items-center text-slate-400">
                <ArrowRight className="h-4 w-4" />
              </div>

              <div className="flex items-center gap-2 rounded-xl bg-indigo-50 px-3.5 py-1.5 border border-indigo-200 text-xs font-semibold text-indigo-900">
                <Bot className="h-4 w-4 text-indigo-600 shrink-0" />
                <span>Agentes y asistentes adaptados al equipo</span>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
