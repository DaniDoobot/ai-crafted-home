import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Phone, Bot, Database, BarChart3, FileSpreadsheet, Shield } from "lucide-react";

export function SpeechIntegrations() {
  const sources = [
    {
      icon: Phone,
      title: "Centralitas & Telefonía IP",
      description: "Conexión directa con grabaciones de llamadas telefónicas comerciales y de atención.",
    },
    {
      icon: Bot,
      title: "Voice Bots & Asistentes",
      description: "Análisis de conversaciones atendidas por asistentes virtuales de voz.",
    },
    {
      icon: Database,
      title: "Archivos de Audio & Storage",
      description: "Procesamiento por lotes de archivos de audio almacenados en repositorios corporativos.",
    },
    {
      icon: BarChart3,
      title: "Sistemas CRM & BI",
      description: "Exportación de métricas y datos estructurados hacia cuadros de mando corporativos.",
    },
  ];

  return (
    <section className="relative bg-background py-16 lg:py-22 border-b border-border/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <RevealOnScroll variant="fade-up" duration="fast">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-500">
              Integración & Fuentes de Datos
            </span>
          </RevealOnScroll>
          <RevealOnScroll variant="fade-up" duration="fast" delay={100}>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Compatible con tus canales y sistemas de información
            </h2>
          </RevealOnScroll>
          <RevealOnScroll variant="fade-up" duration="medium" delay={200}>
            <p className="mt-4 text-lg text-muted-foreground">
              Integra el procesamiento de voz en tu infraestructura existente para unificar el análisis conversacional sin cambiar de herramientas de trabajo.
            </p>
          </RevealOnScroll>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sources.map((item, idx) => (
            <RevealOnScroll key={item.title} variant="fade-up" delay={idx * 100}>
              <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-soft transition-all duration-300 hover:border-teal-500/40 hover:shadow-elevated">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400">
                  <item.icon className="h-5.5 w-5.5" />
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
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
