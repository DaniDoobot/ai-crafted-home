import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { AlertCircle, SlidersHorizontal, Layers, Activity } from "lucide-react";

export function SpeechInsights() {
  const insights = [
    {
      icon: AlertCircle,
      title: "Detección de Incidencias Recurrentes",
      description:
        "Agrupa conversaciones que mencionan problemas técnicos, dudas de facturación o bloqueos en procesos para actuar sobre la causa raíz.",
    },
    {
      icon: SlidersHorizontal,
      title: "Comparativa entre Equipos y Campañas",
      description:
        "Analiza diferencias de rendimiento, tasa de resolución o adhesión a guiones entre distintos turnos, centros o proveedores.",
    },
    {
      icon: Layers,
      title: "Supervisión de Desvíos de Protocolo",
      description:
        "Identifica de forma proactiva cuándo una llamada no cumple con las pautas de transparencia o verificación necesarias.",
    },
    {
      icon: Activity,
      title: "Evolución por Periodos Operativos",
      description:
        "Mide cómo impactan los cambios organizativos o nuevas campañas en la dinámica de las conversaciones telefónicas.",
    },
  ];

  return (
    <section className="relative bg-background py-16 lg:py-22 border-b border-border/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left: Text & Features */}
          <div className="lg:col-span-6">
            <RevealOnScroll variant="fade-right" duration="fast">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-500">
                Insights Operativos
              </span>
            </RevealOnScroll>
            <RevealOnScroll variant="fade-right" duration="fast" delay={100}>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Supervisión clara para mejorar la gestión del servicio
              </h2>
            </RevealOnScroll>
            <RevealOnScroll variant="fade-right" duration="medium" delay={200}>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                Nuestra plataforma permite a los responsables de operaciones acceder a métricas consolidadas sobre el comportamiento de las llamadas y el cumplimiento de estándares.
              </p>
            </RevealOnScroll>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {insights.map((item, idx) => (
                <RevealOnScroll key={item.title} variant="fade-right" delay={250 + idx * 75}>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
                      <item.icon className="h-4.5 w-4.5 text-teal-500 shrink-0" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>

          {/* Right: Visual Conceptual Mockup Panel */}
          <div className="lg:col-span-6">
            <RevealOnScroll variant="fade-left" duration="medium" delay={150}>
              <div className="relative rounded-3xl border border-border/80 bg-card p-6 shadow-elevated">
                <div className="flex items-center justify-between border-b border-border/60 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="h-3 w-3 rounded-full bg-teal-500" />
                    <span className="font-display text-sm font-bold text-foreground">
                      Panel de Control Speech Analytics
                    </span>
                  </div>
                  <span className="rounded-full bg-teal-500/10 px-2.5 py-0.5 text-xs font-semibold text-teal-600 dark:text-teal-400">
                    Resumen Operativo
                  </span>
                </div>

                <div className="mt-5 space-y-4">
                  {/* Conceptual Row 1 */}
                  <div className="rounded-xl border border-border/60 bg-muted/40 p-4">
                    <div className="flex items-center justify-between text-xs font-medium text-foreground">
                      <span>Evaluación de Calidad Media</span>
                      <span className="text-teal-600 dark:text-teal-400 font-bold">Conforme a Pautas</span>
                    </div>
                    <div className="mt-2 h-2 w-full rounded-full bg-muted overflow-hidden">
                      <div className="h-full bg-teal-500 w-[88%]" />
                    </div>
                  </div>

                  {/* Conceptual Row 2 */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-border/60 bg-muted/40 p-3">
                      <div className="text-xs text-muted-foreground">Motivo Principal</div>
                      <div className="mt-1 text-sm font-bold text-foreground">Consulta de Estado</div>
                    </div>
                    <div className="rounded-xl border border-border/60 bg-muted/40 p-3">
                      <div className="text-xs text-muted-foreground">Cumplimiento Script</div>
                      <div className="mt-1 text-sm font-bold text-teal-600 dark:text-teal-400">Verificado</div>
                    </div>
                  </div>

                  {/* Conceptual Transcript Snippet */}
                  <div className="rounded-xl border border-border/60 bg-muted/20 p-3.5 text-xs text-muted-foreground space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-semibold text-foreground/80">
                      <span>Fragmento de Transcripción</span>
                      <span className="text-teal-500">Agente / Cliente</span>
                    </div>
                    <p className="italic">
                      "Bienvenido al servicio de atención. ¿En qué puedo ayudarle hoy?"
                    </p>
                  </div>
                </div>

                {/* Single Discrete Conceptual Disclaimer Note */}
                <div className="mt-5 border-t border-border/40 pt-3 text-center">
                  <p className="text-[11px] text-muted-foreground/80 italic">
                    Las interfaces mostradas son representaciones conceptuales de las funcionalidades descritas.
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
