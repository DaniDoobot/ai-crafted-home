import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { BarChart3, Search, Filter, MessageSquare, CheckCircle2, TrendingUp } from "lucide-react";

export function WebControlAnalytics() {
  return (
    <section className="py-[95px] lg:py-[110px] bg-[#030A1D] text-white relative overflow-hidden">
      {/* Background Radial Glow */}
      <div
        className="pointer-events-none absolute left-1/3 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full opacity-20 blur-[140px]"
        style={{
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.35) 0%, rgba(6, 182, 212, 0.25) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Text Content & Key Advantages */}
          <div className="lg:col-span-6">
            <RevealOnScroll variant="fade-right" duration="medium" delay={0}>
              <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-300">
                Supervisión e Inteligencia Web
              </span>

              <h2 className="mt-5 font-display font-bold text-white text-[clamp(34px,3.5vw,52px)] leading-[1.12] tracking-tight">
                Visibilidad sobre lo que preguntan y necesitan tus visitantes
              </h2>

              <p className="mt-5 font-normal text-slate-200 text-[18px] sm:text-[20px] leading-[1.6]">
                Las conversaciones quedan disponibles para su consulta y análisis, facilitando el seguimiento de la actividad y la identificación de temas recurrentes.
              </p>

              <div className="mt-8 flex flex-col gap-4">
                {[
                  {
                    title: "Historial completo y trazabilidad",
                    desc: "Registro de los diálogos mantenidos para revisar el contexto y las respuestas ofrecidas.",
                  },
                  {
                    title: "Búsqueda y filtros avanzados",
                    desc: "Localización rápida de interacciones por fecha, temática o interés del visitante.",
                  },
                  {
                    title: "Identificación de temas frecuentes",
                    desc: "Detección de las dudas más habituales para mejorar la información del sitio web.",
                  },
                  {
                    title: "Seguimiento de oportunidades de contacto",
                    desc: "Consolidación de los datos recogidos durante las sesiones de atención.",
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
            </RevealOnScroll>
          </div>

          {/* Right Column: Conceptual Dashboard Mockup */}
          <div className="lg:col-span-6">
            <RevealOnScroll variant="fade-left" duration="medium" delay={150}>
              <div className="rounded-3xl border border-white/15 bg-slate-900/90 p-5 sm:p-7 shadow-2xl backdrop-blur-xl">
                {/* Header Bar */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-300">
                      <BarChart3 className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-white text-base">
                        Consola de Análisis Web
                      </h4>
                      <p className="text-xs text-slate-400">Seguimiento de actividad y consultas</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-semibold text-cyan-300">
                    Registro activo
                  </span>
                </div>

                {/* Simulated Web Interaction Log & Analytics Card */}
                <div className="mt-5 flex flex-col gap-4">
                  {/* Web Session Log Item */}
                  <div className="rounded-2xl border border-cyan-500/30 bg-slate-950/60 p-4">
                    <div className="flex items-center justify-between text-xs text-cyan-300 font-semibold mb-2">
                      <span className="flex items-center gap-1.5">
                        <MessageSquare className="h-4 w-4" /> Sesión Web #WEB-9124
                      </span>
                      <span>Registro completado</span>
                    </div>
                    <p className="text-xs text-slate-200 leading-relaxed">
                      "Visitante consulta condiciones de implantación en la sección de Servicios. Asistente facilita la información solicitada y recoge los datos para agendar una sesión explicativa."
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1 rounded-md bg-cyan-500/20 px-2 py-0.5 text-[11px] font-semibold text-cyan-300">
                        Interés en servicios
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-md bg-blue-500/20 px-2 py-0.5 text-[11px] font-semibold text-blue-300">
                        Contacto registrado
                      </span>
                    </div>
                  </div>

                  {/* Descriptive Analytics Metrics (No fake numbers) */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-xs text-slate-400">Consultas recurrentes</div>
                      <div className="mt-1 font-display font-semibold text-base text-white">Temas categorizados</div>
                      <div className="mt-1 flex items-center gap-1 text-[11px] text-cyan-400">
                        Análisis automático
                      </div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-xs text-slate-400">Trazabilidad</div>
                      <div className="mt-1 font-display font-semibold text-base text-white">Historial disponible</div>
                      <div className="mt-1 text-[11px] text-slate-400">Filtros por temática</div>
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
