import { ArrowRight, BarChart3, Search, Sparkles, TrendingUp } from "lucide-react";
import { WHATSAPP_DEMO_URL } from "@/config/contact";

export function AnalyticsHero() {
  return (
    <>
      <style>{`
        @keyframes ah-slide-up {
          from { transform: translateY(8px); }
          to   { transform: translateY(0); }
        }
        @keyframes ah-panel-pop {
          from { transform: translateY(8px) scale(0.99); }
          to   { transform: translateY(0) scale(1); }
        }
        .ah-anim {
          opacity: 1;
          animation: ah-slide-up 0.45s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .ah-panel-anim {
          opacity: 1;
          animation: ah-panel-pop 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .ah-d1 { animation-delay: 0ms; }
        .ah-d2 { animation-delay: 50ms; }
        .ah-d3 { animation-delay: 100ms; }
        .ah-d4 { animation-delay: 150ms; }
        @media (prefers-reduced-motion: reduce) {
          .ah-anim, .ah-panel-anim { animation: none !important; transform: none !important; }
        }
      `}</style>

      <section className="relative overflow-hidden bg-[#080C24] pt-32 pb-20 lg:pt-36 lg:pb-28 text-white min-h-[720px] flex items-center">
        {/* Radial Glows */}
        <div
          className="pointer-events-none absolute -left-20 top-1/4 h-[550px] w-[550px] rounded-full opacity-25 blur-[140px]"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.45) 0%, rgba(139,92,246,0.35) 100%)" }}
        />
        <div
          className="pointer-events-none absolute right-0 bottom-10 h-[500px] w-[500px] rounded-full opacity-20 blur-[150px]"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.4) 0%, rgba(37,99,235,0.25) 100%)" }}
        />

        <div className="relative mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">

            {/* ── Left: Copy & Actions ── */}
            <div className="lg:col-span-6">
              <div className="ah-anim ah-d1 inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-1.5 backdrop-blur-md">
                <BarChart3 className="h-4 w-4 text-indigo-300" />
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-300">
                  AI Analytics con IA Generativa
                </span>
              </div>

              <h1 className="ah-anim ah-d2 mt-6 font-display font-bold text-white text-[clamp(38px,4vw,64px)] leading-[1.08] tracking-tight">
                Convierte conversaciones y datos en información accionable
              </h1>

              <p className="ah-anim ah-d3 mt-6 font-normal text-slate-200 text-[19px] sm:text-[21px] leading-[1.55]">
                Analiza grandes volúmenes de información para descubrir patrones, entender lo que ocurre y mejorar la toma de decisiones.
              </p>
              <p className="ah-anim ah-d3 mt-3 font-normal text-slate-300/90 text-[16px] sm:text-[17px] leading-[1.6]">
                Consulta los datos en lenguaje natural y accede a hallazgos que ayudan a supervisar la actividad, detectar desviaciones y orientar las siguientes acciones.
              </p>

              <div className="ah-anim ah-d4 mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={WHATSAPP_DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-indigo-500 via-violet-600 to-blue-600 px-8 py-4 text-[17px] font-bold text-white shadow-lg shadow-indigo-500/20 transition-all hover:scale-[1.03] hover:shadow-indigo-500/30"
                >
                  <span>Agendar una demo</span>
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href="#capacidades-analytics"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-[16px] font-semibold text-white backdrop-blur-sm transition-all hover:border-indigo-400/40 hover:bg-white/10"
                >
                  Descubrir capacidades
                </a>
              </div>
            </div>

            {/* ── Right: Dashboard Panel ── */}
            <div className="lg:col-span-6">
              <div className="ah-panel-anim ah-d4 rounded-3xl border border-white/15 bg-slate-900/90 p-5 sm:p-7 shadow-2xl backdrop-blur-xl">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-300">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <div>
                      <h2 className="font-display font-bold text-white text-base">
                        Panel de Análisis
                      </h2>
                      <p className="text-xs text-slate-400">Inteligencia operativa</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-indigo-500/20 px-3 py-1 text-xs font-semibold text-indigo-300">
                    Consulta inteligente
                  </span>
                </div>

                <div className="mt-5 flex flex-col gap-4">
                  {/* NL Search Box */}
                  <div className="rounded-2xl border border-indigo-500/40 bg-slate-950 p-3.5 flex items-center gap-3 shadow-inner">
                    <Search className="h-4 w-4 text-indigo-400 shrink-0" />
                    <span className="text-xs text-slate-200 truncate">
                      "¿Cuáles han sido los motivos de consulta más frecuentes en el último mes?"
                    </span>
                  </div>

                  {/* AI Response Block */}
                  <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 space-y-3">
                    <div className="flex items-center justify-between text-xs text-indigo-300 font-semibold">
                      <span className="flex items-center gap-1.5">
                        <TrendingUp className="h-4 w-4 text-violet-400" /> Resumen de hallazgos
                      </span>
                      <span>Análisis consolidado</span>
                    </div>

                    <p className="text-xs text-slate-200 leading-relaxed">
                      Las interacciones del periodo se concentraron principalmente en dos temáticas: información sobre servicios activos y seguimiento de solicitudes.
                    </p>

                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <div className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-center">
                        <div className="text-[11px] text-slate-400">Tema principal</div>
                        <div className="text-xs font-bold text-white mt-0.5">Consultas de servicio</div>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-center">
                        <div className="text-[11px] text-slate-400">Tendencia</div>
                        <div className="text-xs font-bold text-indigo-300 mt-0.5">Estabilidad operativa</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
