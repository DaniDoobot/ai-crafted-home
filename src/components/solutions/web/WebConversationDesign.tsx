import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Sliders, Sparkles, MessageSquareCode, ShieldAlert, CheckCircle2 } from "lucide-react";

export function WebConversationDesign() {
  return (
    <section className="py-[95px] lg:py-[110px] bg-[#030A1D] text-white relative overflow-hidden">
      {/* Background Radial Glow */}
      <div
        className="pointer-events-none absolute right-1/3 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full opacity-20 blur-[140px]"
        style={{
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, rgba(99, 102, 241, 0.3) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-[860px] text-center">
          <RevealOnScroll variant="fade-left" duration="fast" delay={0}>
            <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-300">
              Lógica y Comportamiento Flexible
            </span>
            <h2 className="mt-4 font-display font-bold text-white text-[clamp(34px,3.6vw,52px)] leading-[1.12] tracking-tight">
              Define cómo debe actuar sin construir interminables árboles de conversación
            </h2>
            <p className="mt-4 font-normal text-slate-200 text-[18px] sm:text-[20px] leading-[1.6]">
              El comportamiento del asistente se configura indicando qué información debe facilitar, qué datos debe recoger y cómo debe responder en cada situación.
            </p>
          </RevealOnScroll>
        </div>

        {/* Wide Conceptual Configuration Panel */}
        <div className="mt-14 max-w-[1180px] mx-auto">
          <RevealOnScroll variant="fade-left" duration="medium" delay={150}>
            <div className="rounded-3xl border border-white/15 bg-slate-900/90 p-6 sm:p-9 shadow-2xl backdrop-blur-xl">
              {/* Header Bar */}
              <div className="flex flex-wrap items-center justify-between border-b border-white/10 pb-5 gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-300">
                    <Sliders className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-lg">
                      Panel de Instrucciones y Reglas de Actuación
                    </h3>
                    <p className="text-xs text-slate-400">Configuración adaptativa mediante IA</p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 rounded-xl bg-cyan-500/10 border border-cyan-400/20 px-3.5 py-1.5 text-xs text-cyan-300 font-medium">
                  <Sparkles className="h-4 w-4" />
                  <span>Sin diagramas de flujo cerrados</span>
                </div>
              </div>

              {/* Conceptual Rule Blocks Grid */}
              <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
                {/* Rule 1 */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center gap-2 text-cyan-300 font-bold text-sm">
                    <MessageSquareCode className="h-4 w-4" />
                    Objetivo y tono de comunicación
                  </div>
                  <p className="mt-2.5 text-xs text-slate-300 leading-relaxed">
                    Instrucciones claras sobre el estilo corporativo, tratamiento al usuario y lenguaje institucional adecuado.
                  </p>
                </div>

                {/* Rule 2 */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center gap-2 text-blue-300 font-bold text-sm">
                    <Sliders className="h-4 w-4" />
                    Información requerida a solicitar
                  </div>
                  <p className="mt-2.5 text-xs text-slate-300 leading-relaxed">
                    Definición de los campos y datos clave que el asistente debe recopilar durante la conversación.
                  </p>
                </div>

                {/* Rule 3 */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center gap-2 text-indigo-300 font-bold text-sm">
                    <ShieldAlert className="h-4 w-4" />
                    Límites y criterios de actuación
                  </div>
                  <p className="mt-2.5 text-xs text-slate-300 leading-relaxed">
                    Reglas estrictas sobre los temas permitidos, derivaciones obligatorias y políticas de privacidad.
                  </p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Feature Points Grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 max-w-[1180px] mx-auto">
          {[
            {
              title: "Instrucciones en lenguaje natural",
              desc: "Se especifican las pautas de respuesta mediante directrices comprensibles sin programaciones complejas.",
            },
            {
              title: "Actualización ágil y centralizada",
              desc: "Permite adaptar condiciones y temas de respuesta de forma rápida ante cambios en los productos o servicios.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-cyan-400 shrink-0" />
                <h4 className="font-display font-bold text-white text-lg">
                  {item.title}
                </h4>
              </div>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
