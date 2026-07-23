import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { PhoneCall, FileText, Filter, CheckCircle2, Mic, Activity } from "lucide-react";

export function VoiceControlAnalytics() {
  return (
    <section className="py-[95px] lg:py-[110px] bg-[#060B28] text-white relative overflow-hidden">
      {/* Background Radial Glow */}
      <div
        className="pointer-events-none absolute left-1/3 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full opacity-20 blur-[140px]"
        style={{
          background: "radial-gradient(circle, rgba(124, 58, 237, 0.4) 0%, rgba(6, 182, 212, 0.3) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Copy & Value points */}
          <div className="lg:col-span-6">
            <RevealOnScroll variant="fade-right" duration="medium" delay={0}>
              <span className="inline-block rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-violet-300">
                Supervisión y Análisis Telefónico
              </span>

              <h2 className="mt-5 font-display font-bold text-white text-[clamp(34px,3.5vw,52px)] leading-[1.12] tracking-tight">
                Visibilidad sobre la actividad y las conversaciones
              </h2>

              <p className="mt-5 font-normal text-slate-200 text-[18px] sm:text-[20px] leading-[1.6]">
                Las llamadas y la información asociada pueden quedar disponibles para su consulta, seguimiento y análisis según la configuración del servicio.
              </p>

              <div className="mt-8 flex flex-col gap-4">
                {[
                  {
                    title: "Historial completo de llamadas",
                    desc: "Registro de llamadas atendidas, origen, duración y estado final.",
                  },
                  {
                    title: "Grabación y transcripción",
                    desc: "Acceso al texto y archivo de audio cuando la finalidad del proyecto lo requiera.",
                  },
                  {
                    title: "Categorización por motivo de contacto",
                    desc: "Clasificación de las dudas más frecuentes para optimizar los procesos de atención.",
                  },
                  {
                    title: "Filtros y búsquedas de gestión",
                    desc: "Localización rápida de interacciones por fecha, número o temática.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 backdrop-blur-md"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-cyan-400 shrink-0" />
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

              {/* Legal Note */}
              <div className="mt-6">
                <p className="text-xs italic text-slate-400">
                  * La grabación y tratamiento de las llamadas se realizará conforme a la finalidad, configuración y requisitos legales aplicables.
                </p>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Call Control & Log Dashboard Mockup */}
          <div className="lg:col-span-6">
            <RevealOnScroll variant="fade-left" duration="medium" delay={150}>
              <div className="rounded-3xl border border-white/15 bg-slate-900/90 p-5 sm:p-7 shadow-2xl backdrop-blur-xl">
                {/* Header Bar */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/20 text-violet-300">
                      <Activity className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-white text-base">
                        Consola de Gestión Telefónica
                      </h4>
                      <p className="text-xs text-slate-400">Supervisión y registro de llamadas</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-violet-500/20 px-3 py-1 text-xs font-semibold text-violet-300">
                    Registro activo
                  </span>
                </div>

                {/* Simulated Call Record Card */}
                <div className="mt-5 flex flex-col gap-4">
                  <div className="rounded-2xl border border-violet-500/30 bg-slate-950/70 p-4">
                    <div className="flex items-center justify-between text-xs text-violet-300 font-semibold mb-2">
                      <span className="flex items-center gap-1.5">
                        <PhoneCall className="h-4 w-4 text-cyan-400" /> Registro #TEL-4910
                      </span>
                      <span>Atención completada</span>
                    </div>
                    <p className="text-xs text-slate-200 leading-relaxed">
                      "Cliente consulta fecha de intervención técnica. El Voice Bot verifica los datos autorizados, confirma la fecha y envía confirmación al sistema."
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1 rounded-md bg-cyan-500/20 px-2 py-0.5 text-[11px] font-semibold text-cyan-300">
                        Consulta de cita
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-md bg-violet-500/20 px-2 py-0.5 text-[11px] font-semibold text-violet-300">
                        Gestión resuelta
                      </span>
                    </div>
                  </div>

                  {/* Descriptive Analytics Metrics (No fake numbers) */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-xs text-slate-400">Trazabilidad</div>
                      <div className="mt-1 font-display font-semibold text-base text-white">Historial de audio y texto</div>
                      <div className="mt-1 flex items-center gap-1 text-[11px] text-cyan-400">
                        Registro por llamada
                      </div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-xs text-slate-400">Clasificación</div>
                      <div className="mt-1 font-display font-semibold text-base text-white">Motivos categorizados</div>
                      <div className="mt-1 text-[11px] text-slate-400">Filtros por fecha</div>
                    </div>
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
