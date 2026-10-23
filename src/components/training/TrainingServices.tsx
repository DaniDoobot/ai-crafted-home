import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const services = [
  {
    number: "01",
    title: "Primeros pasos con la IA y los agentes",
    description:
      "Para profesionales que quieren empezar con una base clara. Qué puede aportar la IA, cómo darle instrucciones útiles y cuándo conviene utilizar una conversación o configurar un asistente especializado. Con ejercicios aplicables desde el primer día.",
  },
  {
    number: "02",
    title: "Productividad con IA en el trabajo diario",
    description:
      "Talleres para incorporar la IA a tareas frecuentes: redactar, resumir, investigar, analizar información y preparar reuniones o presentaciones. Identificamos qué usos merece la pena convertir en asistentes reutilizables.",
  },
  {
    number: "03",
    title: "Talleres de creación de agentes",
    description:
      "Formación práctica para diseñar y configurar un agente con un objetivo concreto: definir su función, establecer instrucciones y límites, incorporar documentación de referencia y determinar cómo debe responder.\n\nLos participantes prueban su comportamiento con casos representativos, detectan errores y ajustan su configuración para mejorar los resultados.",
  },
  {
    number: "04",
    title: "Agentes y aplicaciones de IA por área",
    description:
      "Sesiones centradas en los retos de un departamento. Trabajamos sobre sus necesidades para desarrollar asistentes y recursos adaptados a su actividad: consulta de procedimientos, preparación de propuestas, análisis de información o revisión de documentos.",
  },
  {
    number: "05",
    title: "IA y agentes para directivos y responsables",
    description:
      "Formación para identificar oportunidades, priorizar casos de uso y orientar la adopción de la IA en los equipos. Abordamos qué tareas pueden apoyarse en agentes, qué supervisión necesitan y cómo valorar su utilidad.",
  },
  {
    number: "06",
    title: "Agentes avanzados y conexión con procesos",
    description:
      "Para equipos que quieren avanzar hacia agentes que utilicen herramientas, consulten otras fuentes o participen en procesos de varias etapas. Trabajamos el diseño del flujo, los permisos, las validaciones y los puntos de intervención humana, según las capacidades y licencias de cada plataforma.",
  },
  {
    number: "07",
    title: "Acompañamiento y mejora continua",
    description:
      "Sesiones de seguimiento para resolver dudas, revisar aplicaciones reales y mejorar los agentes creados. Una forma de consolidar hábitos, actualizar instrucciones y extender las buenas prácticas dentro del equipo.",
  },
];

export function TrainingServices() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-slate-50/70 border-t border-slate-100">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <RevealOnScroll variant="fade-right" duration="fast" delay={0}>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-700 mb-4">
              Modalidades
            </div>
          </RevealOnScroll>
          <RevealOnScroll variant="fade-right" duration="fast" delay={60}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight">
              Servicios de formación
            </h2>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const isLast = index === services.length - 1;
            return (
              <RevealOnScroll
                key={service.title}
                variant="fade-right"
                duration="fast"
                delay={index * 50}
                className={isLast ? "md:col-span-2 lg:col-span-1" : ""}
              >
                <div className="h-full rounded-2xl border border-slate-200/90 bg-white p-7 sm:p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-indigo-300 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-2xl font-bold tracking-tight text-indigo-600">
                        {service.number}
                      </span>
                      <span className="h-1.5 w-8 rounded-full bg-indigo-100" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-slate-900 leading-snug">
                      {service.title}
                    </h3>
                    <div className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                      {service.description}
                    </div>
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
