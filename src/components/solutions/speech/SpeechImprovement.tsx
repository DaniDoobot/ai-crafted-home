import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { GraduationCap, Award, Headphones, RefreshCw } from "lucide-react";

export function SpeechImprovement() {
  const steps = [
    {
      icon: Headphones,
      step: "01",
      title: "Auditoría Sistemática",
      description:
        "Permite analizar de forma sistemática grandes volúmenes de audio, registrando aspectos relevantes de la interacción sin depender exclusivamente de revisiones manuales.",
    },
    {
      icon: Award,
      step: "02",
      title: "Detección de Buenas Prácticas",
      description:
        "Identifica patrones de éxito comercial o de resolución efectiva para difundirlos entre el resto del equipo.",
    },
    {
      icon: GraduationCap,
      step: "03",
      title: "Feedback Orientado a Formación",
      description:
        "Facilita a los supervisores ejemplos concretos para guiar sesiones de coaching y mejora continua de agentes.",
    },
    {
      icon: RefreshCw,
      step: "04",
      title: "Seguimiento de Evolución",
      description:
        "Compara el progreso operativo tras aplicar planes de formación o cambios en las guías de atención.",
    },
  ];

  return (
    <section className="relative bg-muted/30 py-16 lg:py-22">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <RevealOnScroll variant="fade-up" duration="fast">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-500">
              Mejora Continua & QA
            </span>
          </RevealOnScroll>
          <RevealOnScroll variant="fade-up" duration="fast" delay={100}>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              De la auditoría de llamadas al desarrollo del equipo
            </h2>
          </RevealOnScroll>
          <RevealOnScroll variant="fade-up" duration="medium" delay={200}>
            <p className="mt-4 text-lg text-muted-foreground">
              Un enfoque integral que transforma la supervisión de calidad en un recurso para potenciar la capacitación y el valor prestado.
            </p>
          </RevealOnScroll>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, idx) => (
            <RevealOnScroll key={item.title} variant="fade-up" delay={idx * 100}>
              <div className="relative h-full rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:border-teal-500/40 hover:shadow-elevated">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-xs font-bold text-teal-500/70">
                    {item.step}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
