import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ArrowRight, Database, Sparkles, MessageSquare, Phone, Globe, Mic } from "lucide-react";
import { WHATSAPP_DEMO_URL } from "@/config/contact";

export function CrmHero() {
  return (
    <section className="relative overflow-hidden bg-[#070D28] pt-32 pb-20 lg:pt-36 lg:pb-28 text-white min-h-[700px] flex items-center">
      {/* Radial Glows (Amber & Cyan accents) */}
      <div
        className="pointer-events-none absolute -left-20 top-1/4 h-[550px] w-[550px] rounded-full opacity-25 blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(245, 158, 11, 0.45) 0%, rgba(6, 182, 212, 0.35) 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute right-0 bottom-10 h-[500px] w-[500px] rounded-full opacity-20 blur-[150px]"
        style={{
          background:
            "radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, rgba(99, 102, 241, 0.25) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-6">
            <RevealOnScroll variant="fade-right" duration="fast" delay={0}>
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-4 py-1.5 backdrop-blur-md">
                <Database className="h-4 w-4 text-amber-300" />
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                  AI CRM Omnicanal
                </span>
              </div>
            </RevealOnScroll>

            <RevealOnScroll variant="fade-right" duration="fast" delay={100}>
              <h1 className="mt-6 font-display font-bold text-white text-[clamp(38px,4vw,64px)] leading-[1.08] tracking-tight">
                Gestión integral de tu negocio impulsada por IA y control por voz
              </h1>
            </RevealOnScroll>

            <RevealOnScroll variant="fade-right" duration="medium" delay={200}>
              <p className="mt-6 font-normal text-slate-200 text-[19px] sm:text-[21px] leading-[1.55]">
                Un CRM completo que unifica la gestión de clientes, reuniones, agendas, facturación y embudo de ventas en una sola plataforma inteligente.
              </p>
              <p className="mt-3 font-normal text-slate-300/90 text-[16px] sm:text-[17px] leading-[1.6]">
                Puedes hablarle de forma natural: entiende tus peticiones y permite coordinar todo tu negocio a través de comandos de voz, WhatsApp, chat web y llamadas.
              </p>
            </RevealOnScroll>

            <RevealOnScroll variant="fade-right" duration="medium" delay={300}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={WHATSAPP_DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-amber-500 via-orange-600 to-cyan-600 px-8 py-4 text-[17px] font-bold text-white shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.03] hover:shadow-amber-500/30"
                >
                  <span>Agendar una demo</span>
                  <ArrowRight className="h-5 w-5" />
                </a>

                <a
                  href="#capacidades-crm"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-[16px] font-semibold text-white backdrop-blur-sm transition-all hover:border-amber-400/40 hover:bg-white/10"
                >
                  Descubrir capacidades
                </a>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Floating Integrated Hero Visual */}
          <div className="lg:col-span-6">
            <RevealOnScroll variant="fade-left" duration="medium" delay={150}>
              <div className="relative mx-auto max-w-[620px] flex flex-col items-center">
                {/* Amber & Cyan Glow Behind Image */}
                <div className="pointer-events-none absolute -inset-6 rounded-full bg-gradient-to-tr from-amber-500/30 via-orange-500/25 to-cyan-500/20 blur-3xl opacity-80" />

                <div className="relative w-full">
                  <img
                    src="/doobot/solutions/crm/crm-hero-v1.webp"
                    alt="Plataforma AI CRM Omnicanal con gestión por voz de doobot.ai"
                    className="h-auto w-full max-h-[520px] object-contain block mx-auto drop-shadow-[0_20px_40px_rgba(245,158,11,0.25)] transition-transform duration-500 hover:scale-[1.02]"
                  />

                  {/* Integrated Floating Status Pill */}
                  <div className="mt-2 mx-auto max-w-md flex items-center justify-between rounded-full bg-white/10 px-5 py-2 border border-white/15 backdrop-blur-md text-xs text-slate-200 shadow-lg">
                    <span className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
                      Gestión por Voz & Omnicanal
                    </span>
                    <span className="text-amber-300 font-semibold flex items-center gap-1">
                      <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                      Todo en Uno
                    </span>
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
