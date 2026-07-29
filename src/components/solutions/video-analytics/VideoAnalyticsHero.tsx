import { ArrowRight, Video, Sparkles } from "lucide-react";
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

            {/* ── Right Column: Clean Floating Lego Visual (No Card Frame / Border) ── */}
            <div className="lg:col-span-6">
              <div className="va-panel-anim va-d4 relative mx-auto max-w-[620px] flex flex-col items-center">
                {/* Fuchsia & Purple Glow Behind Image */}
                <div className="pointer-events-none absolute -inset-6 rounded-full bg-gradient-to-tr from-fuchsia-500/30 via-purple-500/25 to-blue-500/20 blur-3xl opacity-80" />

                <div className="relative w-full">
                  <img
                    src="/doobot/solutions/video-analytics/video-analytics-hero-v1.webp"
                    alt="Análisis Visual e Inspección por Vídeo AI Analytics de doobot.ai"
                    className="h-auto w-full max-h-[520px] object-contain block mx-auto drop-shadow-[0_20px_40px_rgba(217,70,239,0.25)] transition-transform duration-500 hover:scale-[1.02]"
                  />

                  {/* HTML/CSS Status Pill rendered separately below image */}
                  <div className="mt-3 mx-auto max-w-md flex items-center justify-between rounded-full bg-white/10 px-5 py-2.5 border border-white/15 backdrop-blur-md text-xs text-slate-200 shadow-lg">
                    <span className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-fuchsia-400 animate-pulse" />
                      Procesamiento Multimodal e Inspección Visual
                    </span>
                    <span className="text-fuchsia-300 font-semibold flex items-center gap-1">
                      <Sparkles className="h-3.5 w-3.5 text-fuchsia-300" />
                      Prompt + RAG
                    </span>
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
