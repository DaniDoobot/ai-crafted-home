import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Filter, Calendar, Receipt, FileText } from "lucide-react";

export function CrmCapabilities() {
  const capabilities = [
    {
      icon: Filter,
      title: "Gestión de Leads & Funnel de Negocios",
      tag: "Pipeline Comercial",
      description:
        "Visualiza y organiza las etapas del embudo de ventas, asignando automáticamente oportunidades y puntuando la cualificación de cada contacto.",
      bullets: [
        "Etapas de embudo configurables",
        "Asignación automática de oportunidades",
        "Seguimiento comercial asistido por IA",
      ],
    },
    {
      icon: Calendar,
      title: "Agendas, Citas & Reuniones",
      tag: "Coordinación Inteligente",
      description:
        "Reserva automática de citas y coordinación de agendas conectadas con WhatsApp, voz y formularios web para evitar solapamientos.",
      bullets: [
        "Sincronización multi-calendario",
        "Confirmación automática por WhatsApp",
        "Recordatorios inteligentes a clientes",
      ],
    },
    {
      icon: Receipt,
      title: "Facturación & Ficha de Clientes",
      tag: "Módulo Financiero & CRM",
      description:
        "Historial unificado de transacciones, presupuestos emitidos y facturas asociadas a cada ficha de cliente para control del negocio.",
      bullets: [
        "Registro consolidado de clientes",
        "Control de facturas y presupuestos",
        "Consultas financieras por voz",
      ],
    },
    {
      icon: FileText,
      title: "Resúmenes Automáticos de Reuniones",
      tag: "Inteligencia Documental",
      description:
        "Genera actas y resúmenes de cada reunión o llamada, extrayendo acuerdos, compromisos y siguientes pasos a realizar.",
      bullets: [
        "Extracción automática de compromisos",
        "Registro inmediato en la ficha del lead",
        "Búsqueda semántica de acuerdos",
      ],
    },
  ];

  return (
    <section id="capacidades-crm" className="relative bg-muted/30 py-16 lg:py-22">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <RevealOnScroll variant="fade-up" duration="fast">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-500">
              Módulos del Sistema
            </span>
          </RevealOnScroll>
          <RevealOnScroll variant="fade-up" duration="fast" delay={100}>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Todos los módulos que tu empresa necesita en una sola solución
            </h2>
          </RevealOnScroll>
          <RevealOnScroll variant="fade-up" duration="medium" delay={200}>
            <p className="mt-4 text-lg text-muted-foreground">
              Herramientas integradas para cubrir el ciclo completo de ventas, atención y administración del cliente.
            </p>
          </RevealOnScroll>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {capabilities.map((cap, idx) => (
            <RevealOnScroll key={cap.title} variant="fade-up" delay={idx * 100}>
              <div className="h-full rounded-2xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:border-amber-500/40 hover:shadow-elevated flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                      <cap.icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-600 dark:text-amber-400">
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
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
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
