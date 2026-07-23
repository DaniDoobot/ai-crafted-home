import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { LayoutDashboard, Search, Film, CheckCircle2, Clock, Filter, Eye } from "lucide-react";

export function VideoAnalyticsControl() {
  const events = [
    { id: "EVT-8021", time: "10:14:22", type: "Inspección de estado", status: "Revisado", statusCls: "bg-blue-500/20 text-blue-300" },
    { id: "EVT-8022", time: "10:22:05", type: "Evaluación de parámetro", status: "Pendiente", statusCls: "bg-purple-500/20 text-purple-300" },
    { id: "EVT-8023", time: "10:45:18", type: "Comprobación de proceso", status: "Completado", statusCls: "bg-emerald-500/20 text-emerald-300" },
  ];

  return (
    <section className="relative overflow-hidden py-[80px] lg:py-[95px] bg-[#080C24] text-white">
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute left-1/3 top-0 h-[500px] w-[600px] rounded-full opacity-15 blur-[140px]"
        style={{ background: "radial-gradient(circle, rgba(217,70,239,0.4) 0%, rgba(37,99,235,0.3) 100%)" }}
      />

      <div className="relative mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">

          {/* ── Left Column: Copy ── */}
          <div className="lg:col-span-5">
            <RevealOnScroll variant="fade-right" duration="fast" delay={0}>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 backdrop-blur-md mb-5">
                <LayoutDashboard className="h-4 w-4 text-blue-300" />
                <span className="text-xs font-bold uppercase tracking-wider text-blue-300">
                  Cuadros de Mando e Históricos
                </span>
              </div>

              <h2 className="font-display font-bold text-white text-[clamp(30px,3.2vw,46px)] leading-[1.15] tracking-tight">
                Visibilidad sobre el contenido analizado y sus resultados
              </h2>
              <p className="mt-4 text-slate-300 text-[18px] leading-[1.6] font-normal">
                La actividad puede consultarse mediante históricos, filtros, cuadros de mando y preguntas formuladas en lenguaje natural.
              </p>

              <ul className="mt-7 flex flex-col gap-3">
                {[
                  "Registros de imágenes o vídeos analizados.",
                  "Estados de revisión y seguimiento de tareas.",
                  "Categorías y eventos identificados.",
                  "Búsquedas por filtros y periodos.",
                  "Consultas en texto libre basadas en IA.",
                  "Visión consolidada de la actividad corporativa.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] text-slate-300">
                    <CheckCircle2 className="h-5 w-5 text-fuchsia-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </RevealOnScroll>
          </div>

          {/* ── Right Column: HTML/CSS Control Dashboard Mockup ── */}
          <div className="lg:col-span-7">
            <RevealOnScroll variant="fade-left" duration="medium" delay={150}>
              <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 backdrop-blur-xl space-y-4">
                {/* Header bar */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <Film className="h-4 w-4 text-fuchsia-400" />
                    <span className="text-sm font-bold text-white">Histórico de Análisis Visual</span>
                  </div>
                  <span className="text-xs text-slate-400 font-mono">Consola Unificada</span>
                </div>

                {/* Natural Language Query Bar */}
                <div className="rounded-2xl border border-fuchsia-500/30 bg-slate-950 p-3.5 flex items-center gap-3 shadow-inner">
                  <Search className="h-4 w-4 text-fuchsia-400 shrink-0" />
                  <span className="text-xs text-slate-200 truncate">
                    "¿Qué situaciones requieren revisión durante este periodo?"
                  </span>
                </div>

                {/* Structured Result Answer */}
                <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 space-y-2">
                  <div className="text-xs font-bold text-fuchsia-300 uppercase tracking-wider">
                    Resumen de consulta libre
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Se han identificado 3 registros etiquetados para revisión según las reglas configuradas. La actividad se mantiene estable.
                  </p>
                </div>

                {/* Events Log Table Mock */}
                <div className="space-y-2 pt-1">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-semibold px-1">
                    <span className="flex items-center gap-1"><Filter className="h-3.5 w-3.5" /> Registros recientes</span>
                    <span>Estado</span>
                  </div>

                  {events.map((evt) => (
                    <div
                      key={evt.id}
                      className="flex items-center justify-between rounded-xl border border-white/8 bg-white/5 p-3 text-xs"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-slate-400">{evt.id}</span>
                        <span className="font-medium text-white">{evt.type}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-slate-400 font-mono flex items-center gap-1">
                          <Clock className="h-3 w-3" /> {evt.time}
                        </span>
                        <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${evt.statusCls}`}>
                          {evt.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </RevealOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
}
