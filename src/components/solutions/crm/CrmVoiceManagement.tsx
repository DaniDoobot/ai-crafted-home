import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Mic, Volume2, Sparkles, CheckCircle } from "lucide-react";

export function CrmVoiceManagement() {
  const voiceFeatures = [
    {
      title: '“Muéstrame las citas agendadas para hoy”',
      detail: "Acceso instantáneo por voz a la agenda de reuniones y llamadas del día.",
    },
    {
      title: '“Crea un nuevo lead de la llamada anterior”',
      detail: "Procesamiento automático y extracción de datos relevantes a la ficha comercial.",
    },
    {
      title: '“¿Cuál es el resumen de la reunión con el cliente X?”',
      detail: "Síntesis inmediata de acuerdos y compromisos fijados sin buscar documentos.",
    },
  ];

  return (
    <section className="relative bg-muted/30 py-16 lg:py-22 border-b border-border/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <RevealOnScroll variant="fade-up" duration="fast">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-500">
              Interacción por Voz
            </span>
          </RevealOnScroll>
          <RevealOnScroll variant="fade-up" duration="fast" delay={100}>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Puedes hablarle, él entiende todo. Gestiona tu negocio desde la voz.
            </h2>
          </RevealOnScroll>
          <RevealOnScroll variant="fade-up" duration="medium" delay={200}>
            <p className="mt-4 text-lg text-muted-foreground">
              Interactúa con tu sistema CRM como si hablaras con tu mejor asistente ejecutivo.
            </p>
          </RevealOnScroll>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {voiceFeatures.map((feat, idx) => (
            <RevealOnScroll key={feat.title} variant="fade-up" delay={idx * 100}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:border-amber-500/40 hover:shadow-elevated flex flex-col justify-between">
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                    <Mic className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold text-foreground italic">
                    {feat.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {feat.detail}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs text-amber-600 dark:text-amber-400 font-semibold">
                  <CheckCircle className="h-4 w-4" />
                  <span>Procesado por IA</span>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
