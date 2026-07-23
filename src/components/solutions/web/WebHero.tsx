import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ArrowRight, Bot, Globe, MessageSquareText, Search, Sparkles } from "lucide-react";
import { WHATSAPP_DEMO_URL } from "@/config/contact";

export function WebHero() {
  return (
    <section className="relative overflow-hidden bg-[#030A1D] pt-32 pb-20 lg:pt-36 lg:pb-28 text-white min-h-[720px] flex items-center">
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

          {/* Right Column: Browser Window & Interactive Web Assistant Graphic */}
          <div className="lg:col-span-6">
            <RevealOnScroll variant="fade-left" duration="medium" delay={150}>
              <div className="rounded-3xl border border-white/15 bg-slate-900/90 p-4 sm:p-5 shadow-2xl backdrop-blur-xl">
                {/* Browser Top Window Bar */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3 px-2">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500/80" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                    <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-1 text-xs text-slate-300 max-w-[280px] w-full truncate">
                    <Globe className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                    <span className="truncate">https://empresa.com/servicios</span>
                  </div>
                  <div className="w-12" />
                </div>

                {/* Simulated Web Page Content with Integrated Assistant Widget */}
                <div className="relative mt-4 min-h-[360px] rounded-2xl bg-slate-950 p-5 border border-white/5 overflow-hidden">
                  {/* Web Page Skeleton Header */}
                  <div className="flex items-center justify-between border-b border-white/5 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="h-7 w-24 rounded-md bg-white/10" />
                      <div className="hidden sm:flex gap-3 text-[11px] text-slate-400">
                        <span>Servicios</span>
                        <span>Soluciones</span>
                        <span>Contacto</span>
                      </div>
                    </div>
                    <div className="h-7 w-20 rounded-full bg-cyan-500/20 text-cyan-300 text-xs flex items-center justify-center font-medium">
                      Portal Web
                    </div>
                  </div>

                  {/* Web Page Article Preview */}
                  <div className="mt-4 max-w-sm space-y-2">
                    <div className="h-4 w-3/4 rounded bg-white/15" />
                    <div className="h-3 w-full rounded bg-white/5" />
                    <div className="h-3 w-5/6 rounded bg-white/5" />
                  </div>

                  {/* Overlay Conversational Widget */}
                  <div className="mt-6 rounded-2xl border border-cyan-500/40 bg-gradient-to-b from-slate-900 to-indigo-950/80 p-4 shadow-xl">
                    <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-500 text-slate-950 font-bold">
                          <Bot className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white flex items-center gap-1.5">
                            Asistente Web Doobot
                            <Sparkles className="h-3 w-3 text-cyan-400" />
                          </div>
                          <div className="text-[10px] text-cyan-300">En línea · 24/7</div>
                        </div>
                      </div>
                      <div className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    </div>

                    {/* Chat Messages */}
                    <div className="mt-3 space-y-2.5 text-xs">
                      {/* User Bubble */}
                      <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-xs bg-cyan-600/30 border border-cyan-400/30 p-2.5 text-slate-100">
                        ¿Cuáles son las opciones de integración con nuestro CRM actual?
                      </div>

                      {/* Assistant Bubble */}
                      <div className="mr-auto max-w-[90%] rounded-2xl rounded-tl-xs bg-white/10 border border-white/10 p-2.5 text-slate-200">
                        Disponemos de conectores directos por API REST y RPA. Puedo mostrarte el proceso de sincronización o concertar una breve sesión técnica con un especialista.
                      </div>
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
