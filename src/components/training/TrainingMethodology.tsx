import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const steps = [
  {
    step: "01",
    title: "Partimos de una necesidad real.",
    description:
      "Identificamos las tareas y objetivos de los participantes para orientar la formación hacia aplicaciones relevantes y agentes con una función bien definida.",
  },
  {
    step: "02",
    title: "Adaptamos el nivel y las herramientas.",
    description:
      "Diseñamos el recorrido según la experiencia del equipo y las soluciones disponibles en la empresa: Copilot, ChatGPT, Claude, Gemini u otras.",
  },
  {
    step: "03",
    title: "Aprendemos construyendo.",
    description:
      "Combinamos explicaciones, demostraciones y ejercicios. En los itinerarios de creación de agentes, los participantes desarrollan y prueban un asistente aplicado a su trabajo.",
  },
  {
    step: "04",
    title: "Enseñamos a evaluar y mejorar.",
    description:
      "Crear un agente también implica comprobar cómo responde, detectar carencias y ajustar sus instrucciones. Trabajamos con casos habituales y situaciones difíciles para valorar su comportamiento.",
  },
  {
    step: "05",
    title: "Dejamos recursos para continuar.",
    description:
      "Plantillas de instrucciones, ejemplos, pautas de revisión y configuraciones de referencia que facilitan trasladar el aprendizaje al puesto de trabajo.",
  },
  {
    step: "06",
    title: "La supervisión forma parte del diseño.",
    description:
      "Trabajamos la verificación de información, la confidencialidad, los permisos y los límites de actuación de cada agente, conforme a las políticas de la organización.",
  },
];

export function TrainingMethodology() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-white border-t border-slate-100">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <RevealOnScroll variant="fade-right" duration="fast" delay={0}>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-700 mb-4">
              Metodología
            </div>
          </RevealOnScroll>
          <RevealOnScroll variant="fade-right" duration="fast" delay={60}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight">
              Cómo trabajamos
            </h2>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((item, index) => {
            return (
              <RevealOnScroll
                key={item.title}
                variant="fade-right"
                duration="fast"
                delay={index * 60}
              >
                <div className="h-full rounded-2xl border border-slate-200/90 bg-slate-50/50 p-7 sm:p-8 transition-all duration-300 hover:bg-white hover:shadow-md hover:border-indigo-300 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white font-mono text-sm font-bold shadow-sm">
                        {item.step}
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                        Paso {index + 1}
                      </span>
                    </div>

                    <h3 className="text-xl font-display font-bold text-slate-900 leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
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
