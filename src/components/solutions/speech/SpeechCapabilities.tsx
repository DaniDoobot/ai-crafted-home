import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Mic, Search, CheckCircle2, BarChart2 } from "lucide-react";

export function SpeechCapabilities() {
  const capabilities = [
    {
      icon: Mic,
      title: "Transcripción y Estructuración",
      tag: "Conversión de Audio",
      description:
        "Convierte automáticamente el canal de voz en texto enriquecido con identificación de interlocutores (diarización) y momentos clave de la conversación.",
      bullets: [
        "Separación clara entre agente y cliente",
        "Sellos de tiempo precisos por fragmento",
        "Resúmenes sintéticos por llamada",
      ],
    },
    {
      icon: CheckCircle2,
      title: "Evaluación Automática de Calidad",
      tag: "QA Asistido",
      description:
        "Supervisa pautas operativas, protocolos de atención y cumplimiento de criterios definidos para cada servicio.",
      bullets: [
        "Checklist de calidad personalizable",
        "Puntuación objetiva de interacciones",
        "Detección de omisiones o desvíos",
      ],
    },
    {
      icon: Search,
      title: "Búsqueda y Clasificación Semántica",
      tag: "Exploración de Audio",
      description:
        "Localiza llamadas por conceptos, palabras clave, expresiones o categorías temáticas sin necesidad de escuchar horas de grabaciones.",
      bullets: [
        "Búsqueda por intención y contexto",
        "Etiquetado automático de llamadas",
        "Filtros avanzados por fecha o servicio",
      ],
    },
    {
      icon: BarChart2,
      title: "Análisis de Tendencias y Motivos",
      tag: "Inteligencia Operativa",
      description:
        "Descubre cuáles son los motivos principales de consulta o reclamación y cómo evoluciona la satisfacción y resolución en el tiempo.",
      bullets: [
        "Categorización automática de temas",
        "Comparativa por equipos o campañas",
        "Cuadros de mando configurables",
      ],
    },
  ];

  return (
    <section id="capacidades-speech" className="relative bg-muted/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <RevealOnScroll variant="fade-up" duration="fast">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-500">
              Capacidades Principales
            </span>
          </RevealOnScroll>
          <RevealOnScroll variant="fade-up" duration="fast" delay={100}>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Tecnología diseñada para analizar y optimizar canales de voz
            </h2>
          </RevealOnScroll>
          <RevealOnScroll variant="fade-up" duration="medium" delay={200}>
            <p className="mt-4 text-lg text-muted-foreground">
              Herramientas avanzadas para estructurar la voz, automatizar auditorías y capacitar a los equipos con información precisa.
            </p>
          </RevealOnScroll>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {capabilities.map((cap, idx) => (
            <RevealOnScroll key={cap.title} variant="fade-up" delay={idx * 100}>
              <div className="h-full rounded-2xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:border-teal-500/40 hover:shadow-elevated flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400">
                      <cap.icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-teal-500/10 px-3 py-1 text-xs font-semibold text-teal-600 dark:text-teal-400">
                      {cap.tag}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-foreground">
                    {cap.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {cap.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-border/60 pt-5">
                  <ul className="space-y-2.5">
                    {cap.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2.5 text-xs text-foreground/80">
                        <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
