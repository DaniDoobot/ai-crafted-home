import { ArrowRight, BarChart3 } from "lucide-react";
import { WHATSAPP_DEMO_URL } from "@/config/contact";

export function AnalyticsHero() {
  return (
    <section className="relative overflow-hidden bg-[#080C24] pt-32 pb-20 lg:pt-36 lg:pb-28 text-white min-h-[700px] flex items-center">
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
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-1.5 backdrop-blur-md">
              <BarChart3 className="h-4 w-4 text-indigo-300" />
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-300">
                AI Analytics con IA Generativa
              </span>
            </div>

            <h1 className="mt-6 font-display font-bold text-white text-[clamp(38px,4vw,64px)] leading-[1.08] tracking-tight">
              Convierte conversaciones y datos en información accionable
            </h1>

            <p className="mt-6 font-normal text-slate-200 text-[19px] sm:text-[21px] leading-[1.55]">
              Analiza grandes volúmenes de información para descubrir patrones, entender lo que ocurre y mejorar la toma de decisiones.
            </p>
            <p className="mt-3 font-normal text-slate-300/90 text-[16px] sm:text-[17px] leading-[1.6]">
              Consulta los datos en lenguaje natural y accede a hallazgos que ayudan a supervisar la actividad, detectar desviaciones y orientar las siguientes acciones.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
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

          {/* ── Right: AI Analytics Hero Image Visual ── */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-[620px] flex flex-col items-center">
              {/* Violet & Indigo Ambient Glow Behind Visual */}
              <div className="pointer-events-none absolute -inset-6 rounded-full bg-gradient-to-tr from-indigo-500/30 via-violet-500/25 to-blue-500/20 blur-3xl opacity-80" />

              <div className="relative w-full">
                <img
                  src="/doobot/solutions/analytics/analytics-hero-v2.webp"
                  alt="Panel de Análisis Inteligente AI Analytics de doobot.ai"
                  className="h-auto w-full max-h-[520px] object-contain block mx-auto drop-shadow-[0_20px_40px_rgba(99,102,241,0.25)] transition-transform duration-500 hover:scale-[1.02]"
                />

                {/* Floating Status Pill */}
                <div className="mt-2 mx-auto max-w-sm flex items-center justify-between rounded-full bg-white/10 px-5 py-2 border border-white/15 backdrop-blur-md text-xs text-slate-200 shadow-lg">
                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
                    Consultas en lenguaje natural
                  </span>
                  <span className="text-indigo-300 font-semibold">Inteligencia Operativa</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
