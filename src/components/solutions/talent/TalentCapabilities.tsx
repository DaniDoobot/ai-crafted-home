import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { CheckCircle2, Mic, Sparkles, MessageSquare } from "lucide-react";

export function TalentCapabilities() {
  const capabilities = [
    {
      icon: CheckCircle2,
      title: "Matching y Scoring de CVs",
      tag: "Evaluación Inicial",
      description:
        "Analiza la idoneidad de las ofertas frente a la experiencia del candidato, asignando una puntuación basada en los criterios específicos del puesto.",
      bullets: [
        "Cribado automático de requisitos indispensables",
        "Puntuación objetiva por adecuación a la vacante",
        "Filtrado rápido de candidaturas descartables",
      ],
    },
    {
      icon: Mic,
      title: "Entrevistas Personales por Bots de Voz",
      tag: "Interacción de Voz",
      description:
        "Los candidatos realizan la primera ronda de entrevista conversacional por voz mediante asistentes IA disponibles 24/7.",
      bullets: [
        "Preguntas personalizadas según la oferta",
        "Disponibilidad horaria total para el candidato",
        "Transcripción y análisis inmediato de respuestas",
      ],
    },
    {
      icon: Sparkles,
      title: "Análisis por IA Multimodal",
      tag: "Evaluación Avanzada",
      description:
        "Combina el análisis de texto de los currículums con el tono y respuestas verbales durante los role plays para un perfilado holístico.",
      bullets: [
        "Evaluación de habilidades duras y blandas",
        "Identificación de puntos fuertes y áreas de mejora",
        "Informe consolidado para el responsable de selección",
      ],
    },
    {
      icon: MessageSquare,
      title: "Consultas en Lenguaje Natural",
      tag: "Asistente para Recruiter",
      description:
        "Pregunta directamente a la IA sobre los candidatos, compara perfiles, detecta posibles riesgos u oportunidades para guiar la decisión.",
      bullets: [
        "Búsqueda conversacional entre postulantes",
        "Comparativa directa entre finalistas",
        "Resumen ejecutivo de idoneidad",
      ],
    },
  ];

  return (
    <section id="capacidades-talent" className="relative bg-muted/30 py-16 lg:py-22">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <RevealOnScroll variant="fade-up" duration="fast">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-500">
              Capacidades Principales
            </span>
          </RevealOnScroll>
          <RevealOnScroll variant="fade-up" duration="fast" delay={100}>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Tecnología diseñada para potenciar a los equipos de selección
            </h2>
          </RevealOnScroll>
          <RevealOnScroll variant="fade-up" duration="medium" delay={200}>
            <p className="mt-4 text-lg text-muted-foreground">
              Herramientas de evaluación objetiva que reducen los tiempos de contratación y elevan la calidad de la terna finalista.
            </p>
          </RevealOnScroll>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {capabilities.map((cap, idx) => (
            <RevealOnScroll key={cap.title} variant="fade-up" delay={idx * 100}>
              <div className="h-full rounded-2xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:border-emerald-500/40 hover:shadow-elevated flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      <cap.icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
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
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
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
