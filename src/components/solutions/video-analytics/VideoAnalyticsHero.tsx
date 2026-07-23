import { ArrowRight, Video, Play, Sparkles, Eye, ShieldCheck, Film } from "lucide-react";
import { WHATSAPP_DEMO_URL } from "@/config/contact";

export function VideoAnalyticsHero() {
  return (
    <>
      <style>{`
        @keyframes va-slide-up {
          from { transform: translateY(8px); }
          to   { transform: translateY(0); }
        }
        @keyframes va-panel-pop {
          from { transform: translateY(8px) scale(0.99); }
          to   { transform: translateY(0) scale(1); }
        }
        .va-anim {
          opacity: 1;
          animation: va-slide-up 0.45s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .va-panel-anim {
          opacity: 1;
          animation: va-panel-pop 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .va-d1 { animation-delay: 0ms; }
        .va-d2 { animation-delay: 50ms; }
        .va-d3 { animation-delay: 100ms; }
        .va-d4 { animation-delay: 150ms; }
        @media (prefers-reduced-motion: reduce) {
          .va-anim, .va-panel-anim { animation: none !important; transform: none !important; }
        }
      `}</style>

      <section className="relative overflow-hidden bg-[#080C24] pt-32 pb-20 lg:pt-36 lg:pb-28 text-white min-h-[720px] flex items-center">
        {/* Radial Glows (Magenta & Electric Blue) */}
        <div
          className="pointer-events-none absolute -left-20 top-1/4 h-[550px] w-[550px] rounded-full opacity-25 blur-[140px]"
          style={{ background: "radial-gradient(circle, rgba(217,70,239,0.4) 0%, rgba(37,99,235,0.3) 100%)" }}
        />
        <div
          className="pointer-events-none absolute right-0 bottom-10 h-[500px] w-[500px] rounded-full opacity-20 blur-[150px]"
          style={{ background: "radial-gradient(circle, rgba(37,99,235,0.4) 0%, rgba(147,51,234,0.25) 100%)" }}
        />

        <div className="relative mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">

            {/* ── Left Column: Copy & CTAs ── */}
            <div className="lg:col-span-6">
              <div className="va-anim va-d1 inline-flex items-center gap-2 rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 px-4 py-1.5 backdrop-blur-md">
                <Video className="h-4 w-4 text-fuchsia-300" />
                <span className="text-xs font-bold uppercase tracking-wider text-fuchsia-300">
                  Vídeo AI Analytics con IA Multimodal
                </span>
              </div>

              <h1 className="va-anim va-d2 mt-6 font-display font-bold text-white text-[clamp(38px,4vw,64px)] leading-[1.08] tracking-tight">
                Convierte imágenes y vídeo en información útil para tu negocio
              </h1>

              <p className="va-anim va-d3 mt-6 font-normal text-slate-200 text-[19px] sm:text-[21px] leading-[1.55]">
                Analiza contenido visual para identificar situaciones relevantes y transformar lo observado en información estructurada.
              </p>
              <p className="va-anim va-d3 mt-3 font-normal text-slate-300/90 text-[16px] sm:text-[17px] leading-[1.6]">
                Facilita la revisión de eventos, el seguimiento de la actividad y la conexión de los resultados con los procesos y la toma de decisiones de tu empresa.
              </p>

              <div className="va-anim va-d4 mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={WHATSAPP_DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-fuchsia-600 via-purple-600 to-blue-600 px-8 py-4 text-[17px] font-bold text-white shadow-lg shadow-fuchsia-500/20 transition-all hover:scale-[1.03] hover:shadow-fuchsia-500/30"
                >
                  <span>Agendar una demo</span>
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href="#capacidades-video-analytics"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-[16px] font-semibold text-white backdrop-blur-sm transition-all hover:border-fuchsia-400/40 hover:bg-white/10"
                >
                  Descubrir capacidades
                </a>
              </div>
            </div>

            {/* ── Right Column: Video Analytics Player UI Mockup ── */}
            <div className="lg:col-span-6">
              <div className="va-panel-anim va-d4 rounded-3xl border border-white/15 bg-slate-900/90 p-5 sm:p-7 shadow-2xl backdrop-blur-xl">
                {/* Header Bar */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-fuchsia-500/20 text-fuchsia-300">
                      <Film className="h-5 w-5" />
                    </div>
                    <div>
                      <h2 className="font-display font-bold text-white text-base">
                        Consola de Análisis Visual
                      </h2>
                      <p className="text-xs text-slate-400">Procesamiento multimodal</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-300">
                    Análisis por Prompt + RAG
                  </span>
                </div>

                {/* Simulated Video Player Box */}
                <div className="mt-5 flex flex-col gap-4">
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950 p-4 aspect-[16/9] flex flex-col justify-between">
                    {/* Simulated Camera View Overlay */}
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span className="flex items-center gap-1.5 text-fuchsia-400 font-semibold">
                        <span className="h-2 w-2 rounded-full bg-fuchsia-500 animate-pulse" />
                        Secuencia analizada
                      </span>
                      <span className="font-mono text-[11px]">CAM_01 · 1080p</span>
                    </div>

                    {/* Central Region of Interest Box (Conceptual, no faces) */}
                    <div className="my-auto mx-auto max-w-[280px] rounded-xl border border-dashed border-fuchsia-400/60 bg-fuchsia-500/10 p-3 text-center backdrop-blur-sm">
                      <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-fuchsia-200">
                        <Eye className="h-3.5 w-3.5 text-fuchsia-400" /> Evento identificado
                      </div>
                      <p className="mt-1 text-[11px] text-slate-300">
                        Evaluación de estado / Parámetro verificado
                      </p>
                    </div>

                    {/* Timeline Scrubber Bar */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                        <span>01:42</span>
                        <span className="text-fuchsia-300 font-bold">Evento en t=01:42</span>
                        <span>04:15</span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden relative">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-fuchsia-500 w-[42%]" />
                        <div className="absolute top-0 left-[42%] h-full w-2 bg-white rounded-full shadow" />
                      </div>
                    </div>
                  </div>

                  {/* Summary Card below Player */}
                  <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 space-y-2.5">
                    <div className="flex items-center justify-between text-xs text-fuchsia-300 font-semibold">
                      <span className="flex items-center gap-1.5">
                        <Sparkles className="h-4 w-4 text-fuchsia-400" /> Resultado del Análisis
                      </span>
                      <span className="text-[11px] text-slate-400">Contexto estructurado</span>
                    </div>
                    <p className="text-xs text-slate-200 leading-relaxed">
                      La secuencia analiza la escena identificando condiciones según los criterios definidos para el caso de uso operativo.
                    </p>
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <div className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-center">
                        <div className="text-[11px] text-slate-400">Aplicación</div>
                        <div className="text-xs font-bold text-white mt-0.5">Inspección / Formación</div>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-center">
                        <div className="text-[11px] text-slate-400">Estado</div>
                        <div className="text-xs font-bold text-blue-300 mt-0.5">Registro procesado</div>
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
