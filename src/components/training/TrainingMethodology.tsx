import { ArrowRight, ArrowDown, CheckCircle2 } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const steps = [
  {
    step: "01",
    phase: "Fase 1",
    title: "Partimos de una necesidad real.",
    description:
      "Identificamos las tareas y objetivos de los participantes para orientar la formación hacia aplicaciones relevantes y agentes con una función bien definida.",
    indicator: "next",
  },
  {
    step: "02",
    phase: "Fase 2",
    title: "Adaptamos el nivel y las herramientas.",
    description:
      "Diseñamos el recorrido según la experiencia del equipo y las soluciones disponibles en la empresa: Copilot, ChatGPT, Claude, Gemini u otras.",
    indicator: "next",
  },
  {
    step: "03",
    phase: "Fase 3",
    title: "Aprendemos construyendo.",
    description:
      "Combinamos explicaciones, demostraciones y ejercicios. En los itinerarios de creación de agentes, los participantes desarrollan y prueban un asistente aplicado a su trabajo.",
    indicator: "down",
  },
  {
    step: "04",
    phase: "Fase 4",
    title: "Enseñamos a evaluar y mejorar.",
    description:
      "Crear un agente también implica comprobar cómo responde, detectar carencias y ajustar sus instrucciones. Trabajamos con casos habituales y situaciones difíciles para valorar su comportamiento.",
    indicator: "next",
  },
  {
    step: "05",
    phase: "Fase 5",
    title: "Dejamos recursos para continuar.",
    description:
      "Plantillas de instrucciones, ejemplos, pautas de revisión y configuraciones de referencia que facilitan trasladar el aprendizaje al puesto de trabajo.",
    indicator: "next",
  },
  {
    step: "06",
    phase: "Fase 6",
    title: "La supervisión forma parte del diseño.",
    description:
      "Trabajamos la verificación de información, la confidencialidad, los permisos y los límites de actuación de cada agente, conforme a las políticas de la organización.",
    indicator: "complete",
  },
];

export function TrainingMethodology() {
  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-white border-t border-slate-100">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <RevealOnScroll variant="fade-right" duration="fast" delay={0}>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-700 mb-3">
              Metodología
            </div>
          </RevealOnScroll>
          <RevealOnScroll variant="fade-right" duration="fast" delay={60}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight">
              Cómo trabajamos
            </h2>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {steps.map((item, index) => {
            return (
              <RevealOnScroll
                key={item.title}
                variant="fade-right"
                duration="fast"
                delay={index * 50}
              >
                <div className="group relative h-full rounded-2xl border border-slate-200/90 bg-slate-50/50 p-6 sm:p-7 transition-all duration-300 hover:bg-white hover:shadow-md hover:border-indigo-300 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2.5">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white font-mono text-sm font-bold shadow-xs">
                          {item.step}
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                          {item.phase}
                        </span>
                      </div>

                      {/* Desktop Sequence Connectors */}
                      {item.indicator === "next" && (
                        <div className="hidden lg:flex items-center text-slate-400 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all">
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      )}
                      {item.indicator === "down" && (
                        <div className="hidden lg:flex items-center text-slate-400 group-hover:text-indigo-500 group-hover:translate-y-1 transition-all">
                          <ArrowDown className="h-4 w-4" />
                        </div>
                      )}
                      {item.indicator === "complete" && (
                        <div className="hidden lg:flex items-center text-emerald-600">
                          <CheckCircle2 className="h-4 w-4" />
                        </div>
                      )}
                    </div>

                    <h3 className="text-lg font-display font-bold text-slate-900 leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-slate-600 text-sm leading-relaxed">
                      {item.description}
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
