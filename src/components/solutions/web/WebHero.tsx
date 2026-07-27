import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ArrowRight, Globe } from "lucide-react";
import { WHATSAPP_DEMO_URL } from "@/config/contact";

export function WebHero() {
  return (
    <section className="relative overflow-hidden bg-[#030A1D] pt-32 pb-20 lg:pt-36 lg:pb-28 text-white min-h-[700px] flex items-center">
      {/* Subtle Radial Glows (Cyan & Deep Blue accents) */}
      <div
        className="pointer-events-none absolute -left-20 top-1/4 h-[550px] w-[550px] rounded-full opacity-25 blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(6, 182, 212, 0.45) 0%, rgba(99, 102, 241, 0.3) 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute right-0 bottom-10 h-[500px] w-[500px] rounded-full opacity-20 blur-[150px]"
        style={{
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(6, 182, 212, 0.2) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-6">
            <RevealOnScroll variant="fade-right" duration="fast" delay={0}>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 backdrop-blur-md">
                <Globe className="h-4 w-4 text-cyan-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                  Chat Bot Web con IA Generativa
                </span>
              </div>
            </RevealOnScroll>

            <RevealOnScroll variant="fade-right" duration="fast" delay={100}>
              <h1 className="mt-6 font-display font-bold text-white text-[clamp(38px,4vw,64px)] leading-[1.08] tracking-tight">
                Convierte tu web en un canal activo de atención y captación
              </h1>
            </RevealOnScroll>

            <RevealOnScroll variant="fade-right" duration="medium" delay={200}>
              <p className="mt-6 font-normal text-slate-200 text-[19px] sm:text-[21px] leading-[1.55]">
                Respuestas precisas en tu sitio web mediante inteligencia artificial conversacional.
              </p>
              <p className="mt-3 font-normal text-slate-300/90 text-[16px] sm:text-[17px] leading-[1.6]">
                Atiende a tus visitantes las 24 horas, resuelve consultas y acompáñalos durante la navegación sin obligarlos a abandonar la página.
              </p>
            </RevealOnScroll>

            <RevealOnScroll variant="fade-right" duration="medium" delay={300}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={WHATSAPP_DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 px-8 py-4 text-[17px] font-bold text-white shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.03] hover:shadow-cyan-500/30"
                >
                  <span>Agendar una demo</span>
                  <ArrowRight className="h-5 w-5" />
                </a>

                <a
                  href="#capacidades-web"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-[16px] font-semibold text-white backdrop-blur-sm transition-all hover:border-cyan-400/40 hover:bg-white/10"
                >
                  Descubrir capacidades
                </a>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Enlarge New Web Assistant Image Visual (+18%) */}
          <div className="lg:col-span-6">
            <RevealOnScroll variant="fade-left" duration="medium" delay={150}>
              <div className="relative mx-auto max-w-[590px]">
                {/* Cyan Glow Behind Frame */}
                <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-tr from-cyan-500/20 via-blue-500/20 to-indigo-500/15 blur-2xl opacity-75" />

                <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-slate-900/90 p-4 sm:p-5 shadow-2xl backdrop-blur-xl">
                  <img
                    src="/doobot/solutions/web/web-hero-v2.webp"
                    alt="Asistente Chat Bot Web con Inteligencia Artificial de doobot.ai"
                    className="h-auto w-full max-h-[495px] object-contain block mx-auto rounded-xl"
                  />
                  <div className="mt-3 flex items-center justify-between rounded-xl bg-white/5 px-4 py-2.5 border border-white/10 text-xs text-slate-300">
                    <span className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                      Widget Conversacional Web
                    </span>
                    <span className="text-cyan-300 font-semibold">Integración Directa</span>
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
