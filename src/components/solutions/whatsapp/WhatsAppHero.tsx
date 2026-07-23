import { MessageSquare, ArrowRight, ArrowDown } from "lucide-react";
import { WHATSAPP_DEMO_URL } from "@/config/contact";

export function WhatsAppHero() {
  return (
    <section
      className="relative flex min-h-[720px] flex-col justify-center overflow-hidden py-16 lg:py-24"
      style={{
        background: "linear-gradient(135deg, #02021A 0%, #050547 55%, #0B0B5C 100%)",
      }}
    >
      {/* Background Subtle Radial Illumination (WhatsApp Emerald Accent Glow) */}
      <div
        className="pointer-events-none absolute right-[10%] top-1/2 -translate-y-1/2 h-[550px] w-[550px] rounded-full opacity-20 blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(37, 211, 102, 0.4) 0%, rgba(104, 94, 201, 0.3) 60%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Text & CTAs (Cols 1-7) - Rendered Immediately */}
          <div className="flex flex-col justify-center lg:col-span-7">
            {/* Glassmorphic Badge */}
            <div>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 backdrop-blur-md">
                <MessageSquare className="h-4 w-4 text-emerald-400" />
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300 sm:text-sm">
                  Chat Bot WhatsApp con IA Generativa
                </span>
              </div>
            </div>

            {/* H1 Title */}
            <h1 className="mt-6 font-display font-bold text-white max-w-[760px] text-[clamp(40px,4.2vw,72px)] leading-[1.08] tracking-tight">
              Atiende, gestiona y vende a través de WhatsApp
            </h1>

            {/* Main Text */}
            <p className="mt-6 font-normal text-slate-100 max-w-[720px] text-[clamp(19px,1.4vw,22px)] leading-[1.5]">
              Conecta con tus clientes a través del canal de mensajería más utilizado y cercano.
            </p>

            {/* Secondary Text */}
            <p className="mt-3 font-normal text-slate-300 max-w-[720px] text-[17px] sm:text-[18px] leading-[1.6]">
              Resuelve dudas, recoge datos y registra gestiones en tus sistemas para asistir a cada usuario las 24 horas.
            </p>

            {/* Action CTAs */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              {/* Primary CTA */}
              <a
                href={WHATSAPP_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-gradient-brand px-7 py-3.5 text-[16px] sm:text-[17px] font-bold text-white shadow-elevated transition-transform hover:scale-[1.02]"
              >
                <span>Agendar una demo</span>
                <ArrowRight className="h-5 w-5" />
              </a>

              {/* Secondary CTA */}
              <a
                href="#capacidades-whatsapp"
                className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-[16px] sm:text-[17px] font-semibold text-slate-200 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10 hover:text-white"
              >
                <span>Descubrir capacidades</span>
                <ArrowDown className="h-4.5 w-4.5 text-emerald-400" />
              </a>
            </div>
          </div>

          {/* Right Column: Composited WhatsApp Product Visual (Cols 8-12) */}
          <div className="relative flex flex-col items-center justify-center lg:col-span-5 lg:items-end">
            <div className="relative w-full max-w-[540px]">
              {/* Emerald Glow Behind Device Frame */}
              <div className="absolute -inset-4 rounded-[36px] bg-gradient-to-tr from-emerald-500/20 via-indigo-500/20 to-emerald-400/15 blur-2xl opacity-75" />

              {/* Polished Glassmorphic Frame */}
              <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-slate-900/80 p-3 sm:p-4 shadow-2xl backdrop-blur-xl">
                {/* Top Chat Interface Bar */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3 px-3">
                  <div className="flex items-center gap-3">
                    <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white font-bold text-sm shadow-md">
                      <span>WA</span>
                      <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-slate-900 bg-emerald-400" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white flex items-center gap-1.5">
                        <span>doobot.ai Assistant</span>
                        <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-400">
                          24/7 AI
                        </span>
                      </div>
                      <div className="text-[11px] text-emerald-400 font-medium">
                        En línea · Respuesta instantánea
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hero Feature Image */}
                <div className="relative mt-3 overflow-hidden rounded-2xl border border-white/10 bg-slate-950">
                  <img
                    src="/doobot/solutions/whatsapp-hero.webp"
                    alt="Interfaz de Chat Bot WhatsApp con IA de doobot.ai"
                    className="h-auto w-full object-cover block"
                  />
                </div>

                {/* Floating Micro Status Pill */}
                <div className="mt-3 flex items-center justify-between rounded-xl bg-white/5 px-4 py-2.5 border border-white/10 text-xs text-slate-300">
                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    Conectado con CRM corporativo
                  </span>
                  <span className="text-emerald-400 font-semibold">100% Automatizado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
