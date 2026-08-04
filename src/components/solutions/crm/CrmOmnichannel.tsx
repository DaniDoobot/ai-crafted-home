import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { MessageSquare, Globe, Phone, Share2 } from "lucide-react";

export function CrmOmnichannel() {
  const channels = [
    {
      icon: MessageSquare,
      name: "Bots WhatsApp",
      color: "text-emerald-500 bg-emerald-500/10",
      description: "Captación, cualificación de contactos y respuestas inmediatas en el canal de mensajería directo.",
    },
    {
      icon: Globe,
      name: "Web Chat Conversacional",
      color: "text-cyan-500 bg-cyan-500/10",
      description: "Asistente integrado en tu sitio web para acompañar a los visitantes y recoger datos clave durante la navegación.",
    },
    {
      icon: Phone,
      name: "Voice Bots Telefónicos",
      color: "text-amber-500 bg-amber-500/10",
      description: "Atención por voz 24/7 capaz de gestionar llamadas, agendar citas y actualizar el estado del cliente.",
    },
  ];

  return (
    <section className="relative bg-background py-16 lg:py-22 border-b border-border/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Information */}
          <div className="lg:col-span-6">
            <RevealOnScroll variant="fade-right" duration="fast">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-500">
                Omnicanalidad Integrada
              </span>
            </RevealOnScroll>
            <RevealOnScroll variant="fade-right" duration="fast" delay={100}>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Todos tus canales conversacionales conectados al mismo núcleo
              </h2>
            </RevealOnScroll>
            <RevealOnScroll variant="fade-right" duration="medium" delay={200}>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                Olvídate de la información fragmentada. AI CRM conecta WhatsApp, web chat y asistentes telefónicos para que toda consulta o gestión se registre automáticamente en la ficha del negocio.
              </p>
            </RevealOnScroll>

            <div className="mt-8 space-y-4">
              {channels.map((ch, idx) => (
                <RevealOnScroll key={ch.name} variant="fade-right" delay={250 + idx * 75}>
                  <div className="flex items-start gap-4 rounded-xl border border-border/60 bg-card p-4 shadow-soft">
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${ch.color}`}>
                      <ch.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-bold text-foreground">
                        {ch.name}
                      </h3>
                      <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                        {ch.description}
                      </p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Connection Diagram Card */}
          <div className="lg:col-span-6">
            <RevealOnScroll variant="fade-left" duration="medium" delay={150}>
              <div className="relative rounded-3xl border border-border/80 bg-card p-7 shadow-elevated">
                <div className="flex items-center justify-between border-b border-border/60 pb-4">
                  <div className="flex items-center gap-2.5">
                    <Share2 className="h-5 w-5 text-amber-500" />
                    <span className="font-display text-sm font-bold text-foreground">
                      Sincronización Multicanal Unificada
                    </span>
                  </div>
                  <span className="rounded-full bg-amber-500/10 px-2.5 py-0.5 text-xs font-semibold text-amber-600 dark:text-amber-400">
                    Único Núcleo AI
                  </span>
                </div>

                <div className="mt-6 space-y-4">
                  {/* Central Node Display */}
                  <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-5 text-center">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                      Motor Central AI CRM
                    </span>
                    <p className="mt-1 text-xs text-foreground/80">
                      Ficha de Cliente · Historial Conversacional · Agenda · Facturación
                    </p>
                  </div>

                  {/* Connected Nodes */}
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="rounded-xl border border-border/60 bg-muted/40 p-3">
                      <div className="text-[11px] text-muted-foreground">WhatsApp</div>
                      <div className="mt-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">Conectado</div>
                    </div>
                    <div className="rounded-xl border border-border/60 bg-muted/40 p-3">
                      <div className="text-[11px] text-muted-foreground">Web Chat</div>
                      <div className="mt-1 text-xs font-bold text-cyan-600 dark:text-cyan-400">Conectado</div>
                    </div>
                    <div className="rounded-xl border border-border/60 bg-muted/40 p-3">
                      <div className="text-[11px] text-muted-foreground">Voz IP</div>
                      <div className="mt-1 text-xs font-bold text-amber-600 dark:text-amber-400">Conectado</div>
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
