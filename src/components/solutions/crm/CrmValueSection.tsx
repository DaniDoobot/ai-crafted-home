import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Mic, Layers, Zap, FileSpreadsheet } from "lucide-react";

export function CrmValueSection() {
  const valueProps = [
    {
      icon: Mic,
      title: "Gestión por Voz Natural",
      description:
        "Habla directamente a tu CRM para consultar métricas, crear contactos, agendar reuniones o actualizar negocios sin escribir a mano.",
    },
    {
      icon: Layers,
      title: "Omnicanalidad Integrada",
      description:
        "Sincroniza en tiempo de operación WhatsApp, chat web y llamadas telefónicas en una vista unificada de cada cliente.",
    },
    {
      icon: Zap,
      title: "Fácil, Sencillo y Potente",
      description:
        "Diseñado para eliminar fricciones operativas con automatizaciones inteligentes y resúmenes estructurados de cada interacción.",
    },
    {
      icon: FileSpreadsheet,
      title: "Todo en Uno",
      description:
        "Centraliza clientes, pipeline comercial, agendas, citas, actas de reuniones y facturación sin necesidad de herramientas dispersas.",
    },
  ];

  return (
    <section className="relative bg-background py-16 lg:py-22 border-b border-border/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <RevealOnScroll variant="fade-up" duration="fast">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-500">
              Control Unificado
            </span>
          </RevealOnScroll>
          <RevealOnScroll variant="fade-up" duration="fast" delay={100}>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              La inteligencia conversacional aplicada a la gestión de tu empresa
            </h2>
          </RevealOnScroll>
          <RevealOnScroll variant="fade-up" duration="medium" delay={200}>
            <p className="mt-4 text-lg text-muted-foreground">
              Una plataforma integral que entiende el lenguaje natural y coordina todas las áreas de contacto y ventas de tu negocio.
            </p>
          </RevealOnScroll>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((prop, idx) => (
            <RevealOnScroll key={prop.title} variant="fade-up" delay={idx * 100}>
              <div className="h-full rounded-2xl border border-border/60 bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/40 hover:shadow-elevated">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                  <prop.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                  {prop.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {prop.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
