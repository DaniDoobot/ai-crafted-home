import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { FileText, BarChart3, Tag, TrendingUp, CheckCircle2 } from "lucide-react";

export function WhatsAppAnalytics() {
  return (
    <section className="py-[100px] lg:py-[120px] bg-[#02021A] text-white relative overflow-hidden">
      {/* Subtle Background Radial Glow */}
      <div
        className="pointer-events-none absolute left-1/4 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full opacity-20 blur-[130px]"
        style={{
          background: "radial-gradient(circle, rgba(104, 94, 201, 0.4) 0%, rgba(37, 211, 102, 0.3) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-6">
            <RevealOnScroll variant="fade-right" duration="medium" delay={0}>
              <span className="inline-block rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-300">
                Análisis e Inteligencia
              </span>

              <h2 className="mt-5 font-display font-bold text-white text-[clamp(34px,3.5vw,52px)] leading-[1.12] tracking-tight">
                Cada conversación se convierte en información útil
              </h2>

              <p className="mt-5 font-normal text-slate-200 text-[18px] sm:text-[20px] leading-[1.6]">
                Las conversaciones quedan registradas en texto para facilitar su consulta, seguimiento y análisis.
              </p>

              <div className="mt-8 flex flex-col gap-4">
                {[
                  {
                    title: "Historial completo de conversaciones",
                    desc: "Registro íntegro y trazable de cada interacción realizada por el asistente.",
                  },
                  {
                    title: "Métricas operativas y de atención",
                    desc: "Seguimiento de volúmenes, horarios de mayor actividad y resolución autónoma.",
                  },
                  {
                    title: "Clasificación y análisis con IA",
                    desc: "Categorización automática de intenciones y temas más consultados por los usuarios.",
                  },
                  {
                    title: "Tendencias y oportunidades de mejora",
                    desc: "Detección de patrones recurrentes para optimizar respuestas y procesos.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 backdrop-blur-md"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
                      <h3 className="font-display font-bold text-white text-base sm:text-lg">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-1.5 pl-8 text-sm text-slate-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Conceptual HTML/CSS Analytical Dashboard Mockup */}
          <div className="lg:col-span-6">
            <RevealOnScroll variant="fade-left" duration="medium" delay={150}>
              <div className="rounded-3xl border border-white/15 bg-slate-900/90 p-5 sm:p-7 shadow-2xl backdrop-blur-xl">
                {/* Header Bar */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-300">
                      <BarChart3 className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-white text-base">
                        Panel de Análisis IA
                      </h4>
                      <p className="text-xs text-slate-400">Trazabilidad y registro de actividad</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-indigo-500/20 px-3 py-1 text-xs font-semibold text-indigo-300">
                    Registro de actividad
                  </span>
                </div>

                {/* Simulated Conversation Log & Metric Cards */}
                <div className="mt-5 flex flex-col gap-4">
                  {/* AI Summary Card */}
                  <div className="rounded-2xl border border-indigo-500/30 bg-indigo-950/40 p-4">
                    <div className="flex items-center justify-between text-xs text-indigo-300 font-semibold mb-2">
                      <span className="flex items-center gap-1.5">
                        <FileText className="h-4 w-4" /> Resumen de Conversación #WA-4892
                      </span>
                      <span>Resumen generado</span>
                    </div>
                    <p className="text-xs text-slate-200 leading-relaxed">
                      "Cliente solicita confirmación de cita médica para el jueves a las 10:30. Asistente IA verifica disponibilidad en agenda, confirma reserva y envía recordatorio por WhatsApp."
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1 rounded-md bg-emerald-500/20 px-2 py-0.5 text-[11px] font-semibold text-emerald-300">
                        <Tag className="h-3 w-3" /> Cita médica
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-md bg-indigo-500/20 px-2 py-0.5 text-[11px] font-semibold text-indigo-300">
                        Atención automatizada
                      </span>
                    </div>
                  </div>

                  {/* Operational Metrics Breakdown (Descriptive, no fake numbers) */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-xs text-slate-400">Clasificación</div>
                      <div className="mt-1 font-display font-semibold text-base text-white">Intenciones identificadas</div>
                      <div className="mt-1 flex items-center gap-1 text-[11px] text-indigo-300">
                        Categorización mediante IA
                      </div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-xs text-slate-400">Registro de datos</div>
                      <div className="mt-1 font-display font-semibold text-base text-white">Conversación registrada</div>
                      <div className="mt-1 text-[11px] text-slate-400">Trazabilidad disponible</div>
                    </div>
                  </div>

                  {/* Discrete Disclaimer */}
                  <div className="pt-1 text-right">
                    <span className="text-[11px] font-normal italic text-slate-400/80">
                      * Representación conceptual
                    </span>
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
