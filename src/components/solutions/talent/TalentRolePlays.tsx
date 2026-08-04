import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Users, Award, ShieldAlert, Sparkles } from "lucide-react";

export function TalentRolePlays() {
  const cases = [
    {
      icon: Users,
      title: "Simulación de Situaciones Reales (Role Plays)",
      description:
        "Evalúa la capacidad de resolución de conflictos, la comunicación verbal y la empatía del candidato frente a escenarios típicos del puesto.",
    },
    {
      icon: ShieldAlert,
      title: "Identificación de Riesgos & Oportunidades",
      description:
        "La IA detecta automáticamente incoherencias en el discurso o fortalezas destacadas para alertar al equipo de Recursos Humanos.",
    },
    {
      icon: Award,
      title: "Informe Comparativo de Terna Finalista",
      description:
        "Genera un cuadro de mando resumido que compara los 3 mejores perfiles seleccionados antes de la entrevista presencial final.",
    },
  ];

  return (
    <section className="relative bg-background py-16 lg:py-22 border-b border-border/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Text & Features */}
          <div className="lg:col-span-6">
            <RevealOnScroll variant="fade-right" duration="fast">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-500">
                Evaluación Situacional
              </span>
            </RevealOnScroll>
            <RevealOnScroll variant="fade-right" duration="fast" delay={100}>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Pon a prueba el talento antes de la contratación
              </h2>
            </RevealOnScroll>
            <RevealOnScroll variant="fade-right" duration="medium" delay={200}>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                Nuestra plataforma somete a los candidatos a situaciones prácticas y mide sus respuestas para que las decisiones se basen en competencias demostradas.
              </p>
            </RevealOnScroll>

            <div className="mt-8 space-y-4">
              {cases.map((item, idx) => (
                <RevealOnScroll key={item.title} variant="fade-right" delay={250 + idx * 75}>
                  <div className="flex items-start gap-3.5 rounded-xl border border-border/60 bg-card p-4 shadow-soft">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-bold text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Conceptual Card */}
          <div className="lg:col-span-6">
            <RevealOnScroll variant="fade-left" duration="medium" delay={150}>
              <div className="relative rounded-3xl border border-border/80 bg-card p-6 shadow-elevated">
                <div className="flex items-center justify-between border-b border-border/60 pb-4">
                  <div className="flex items-center gap-2.5">
                    <Sparkles className="h-5 w-5 text-emerald-500" />
                    <span className="font-display text-sm font-bold text-foreground">
                      Consola del Responsables de Selección
                    </span>
                  </div>
                  <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    Scoring Multimodal
                  </span>
                </div>

                <div className="mt-5 space-y-4">
                  {/* Conceptual Query Display */}
                  <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-xs text-foreground space-y-1">
                    <div className="font-bold text-emerald-600 dark:text-emerald-300">
                      “Pregunta a la IA sobre los candidatos:”
                    </div>
                    <p className="text-muted-foreground italic">
                      “¿Cuáles son los principales riesgos y fortalezas de la terna finalista para el puesto comercial?”
                    </p>
                  </div>

                  {/* Conceptual Result Card */}
                  <div className="rounded-xl border border-border/60 bg-muted/30 p-4 space-y-3">
                    <div className="flex items-center justify-between text-xs font-bold text-foreground">
                      <span>Candidato A (Scoring: 94/100)</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Terna Finalista</span>
                    </div>
                    <div className="text-xs text-muted-foreground leading-relaxed">
                      Excelentes habilidades de negociación en el role play. Respuesta sólida en gestión de objeciones.
                    </div>
                  </div>

                  {/* Discrete Conceptual Disclaimer */}
                  <div className="mt-4 border-t border-border/40 pt-3 text-center">
                    <p className="text-[11px] text-muted-foreground/80 italic">
                      Las interfaces mostradas son representaciones conceptuales de las funcionalidades descritas.
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
