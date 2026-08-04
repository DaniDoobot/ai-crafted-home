import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { FileText, Cpu, Mic, Sparkles, Award, ArrowRight } from "lucide-react";

export function TalentFunnelSection() {
  const steps = [
    {
      icon: FileText,
      step: "01",
      title: "Recepción & Cribado de CVs",
      description: "Recepción masiva y lectura estructurada de candidaturas y experiencia.",
    },
    {
      icon: Cpu,
      step: "02",
      title: "Matching & Scoring",
      description: "Puntuación de adecuación del candidato respecto a los requisitos de la posición.",
    },
    {
      icon: Mic,
      step: "03",
      title: "Entrevistas de Voz & Role Plays",
      description: "Entrevistas personales automáticas por voz y simulaciones situacionales.",
    },
    {
      icon: Sparkles,
      step: "04",
      title: "Análisis IA Multimodal",
      description: "Evaluación holística combinando datos de CV, desempeño verbal y competencias.",
    },
    {
      icon: Award,
      step: "05",
      title: "Terna Finalista",
      description: "Selección rápida de los perfiles óptimos con informe consolidado para RRHH.",
    },
  ];

  return (
    <section className="relative bg-background py-16 lg:py-22 border-b border-border/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <RevealOnScroll variant="fade-up" duration="fast">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-500">
              Proceso de Selección en 5 Fases
            </span>
          </RevealOnScroll>
          <RevealOnScroll variant="fade-up" duration="fast" delay={100}>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Del currículum a la terna finalista en cinco etapas estructuradas
            </h2>
          </RevealOnScroll>
          <RevealOnScroll variant="fade-up" duration="medium" delay={200}>
            <p className="mt-4 text-lg text-muted-foreground">
              Procesa cientos de candidaturas, evalúa competencias por voz y obtén un ranking objetivo sin sesgos iniciales.
            </p>
          </RevealOnScroll>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((item, idx) => (
            <RevealOnScroll key={item.title} variant="fade-up" delay={idx * 75}>
              <div className="relative h-full rounded-2xl border border-border/60 bg-card p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-elevated flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-[11px] font-bold text-emerald-500/80">
                      FASE {item.step}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-sm font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>

                {idx < steps.length - 1 && (
                  <div className="mt-4 hidden xl:flex items-center gap-1 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                    <span>Sig. fase</span>
                    <ArrowRight className="h-3 w-3" />
                  </div>
                )}
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
