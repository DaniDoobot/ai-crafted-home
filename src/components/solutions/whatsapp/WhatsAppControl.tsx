import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Sliders, ShieldCheck, Eye, Search, CheckCircle2 } from "lucide-react";

export function WhatsAppControl() {
  return (
    <section className="py-[95px] lg:py-[110px] bg-white">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-[850px] text-center">
          <RevealOnScroll variant="fade-right" duration="fast" delay={0}>
            <span className="inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-900">
              Supervisión y Control
            </span>
            <h2 className="mt-4 font-display font-bold text-[#050547] text-[clamp(34px,3.6vw,52px)] leading-[1.12] tracking-tight">
              Control sobre cada conversación y cada gestión
            </h2>
            <p className="mt-4 font-normal text-[#555B66] text-[18px] sm:text-[20px] leading-[1.6]">
              Consulta la actividad del asistente, revisa conversaciones y analiza el funcionamiento del servicio desde un entorno centralizado.
            </p>
          </RevealOnScroll>
        </div>

        {/* Full-width Central Control Mockup */}
        <div className="mt-14 max-w-[1150px] mx-auto">
          <RevealOnScroll variant="fade-right" duration="medium" delay={150}>
            <div className="rounded-3xl border border-indigo-100 bg-slate-900 text-white p-6 sm:p-8 shadow-2xl">
              {/* Top Filter & Search Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300">
                    <Eye className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-lg">
                      Entorno de Control Centralizado
                    </h3>
                    <p className="text-xs text-slate-400">Supervisión y trazabilidad en tiempo real</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 rounded-xl bg-white/10 px-3.5 py-2 text-xs text-slate-300">
                    <Search className="h-4 w-4" />
                    <span>Buscar por teléfono o referencia...</span>
                  </div>
                </div>
              </div>

              {/* Central Control Dashboard Content */}
              <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
                {/* Control Column 1 */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                    <ShieldCheck className="h-4 w-4" />
                    Seguimiento de actividad
                  </div>
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                    Monitoreo constante del estado del servicio, número de diálogos en curso y rendimiento general.
                  </p>
                </div>

                {/* Control Column 2 */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center gap-2 text-indigo-300 font-bold text-sm">
                    <Eye className="h-4 w-4" />
                    Revisión de diálogos
                  </div>
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                    Acceso rápido al historial de interacciones para auditar la precisión de las respuestas facilitadas.
                  </p>
                </div>

                {/* Control Column 3 */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center gap-2 text-amber-300 font-bold text-sm">
                    <Sliders className="h-4 w-4" />
                    Trazabilidad de gestiones
                  </div>
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                    Registro detallado de datos recogidos y acciones ejecutadas en tus sistemas corporativos.
                  </p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Additional Points */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 max-w-[1150px] mx-auto">
          {[
            {
              title: "Visión clara y centralizada",
              desc: "Acceso a la información sin complicaciones técnicas para supervisar el rendimiento en cualquier momento.",
            },
            {
              title: "Filtros y búsquedas avanzadas",
              desc: "Permite localizar interacciones por fecha, estado de gestión o motivo de contacto.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-indigo-100 bg-slate-50 p-6">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                <h4 className="font-display font-bold text-[#050547] text-lg">
                  {item.title}
                </h4>
              </div>
              <p className="mt-2 text-sm text-[#555B66] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
