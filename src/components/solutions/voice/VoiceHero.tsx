import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ArrowRight, Phone, PhoneCall, Mic, Sparkles, Volume2, User } from "lucide-react";
import { WHATSAPP_DEMO_URL } from "@/config/contact";

export function VoiceHero() {
  return (
    <section className="relative overflow-hidden bg-[#060B28] pt-32 pb-20 lg:pt-36 lg:pb-28 text-white min-h-[720px] flex items-center">
      {/* Subtle Radial Glows (Cyan & Violet accents) */}
      <div
        className="pointer-events-none absolute -left-20 top-1/4 h-[550px] w-[550px] rounded-full opacity-25 blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(6, 182, 212, 0.45) 0%, rgba(124, 58, 237, 0.35) 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute right-0 bottom-10 h-[500px] w-[500px] rounded-full opacity-20 blur-[150px]"
        style={{
          background:
            "radial-gradient(circle, rgba(124, 58, 237, 0.4) 0%, rgba(6, 182, 212, 0.2) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-6">
            <RevealOnScroll variant="fade-right" duration="fast" delay={0}>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 backdrop-blur-md">
                <PhoneCall className="h-4 w-4 text-cyan-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                  Voice Bots con IA Generativa
                </span>
              </div>
            </RevealOnScroll>

            <RevealOnScroll variant="fade-right" duration="fast" delay={100}>
              <h1 className="mt-6 font-display font-bold text-white text-[clamp(38px,4vw,64px)] leading-[1.08] tracking-tight">
                Conversaciones naturales por voz para atender y gestionar llamadas
              </h1>
            </RevealOnScroll>

            <RevealOnScroll variant="fade-right" duration="medium" delay={200}>
              <p className="mt-6 font-normal text-slate-200 text-[19px] sm:text-[21px] leading-[1.55]">
                Habla con tus clientes mediante asistentes de voz capaces de comprender, responder y ejecutar gestiones.
              </p>
              <p className="mt-3 font-normal text-slate-300/90 text-[16px] sm:text-[17px] leading-[1.6]">
                Una experiencia telefónica disponible las 24 horas, diseñada para resolver necesidades sin depender de menús rígidos de marcación.
              </p>
            </RevealOnScroll>

            <RevealOnScroll variant="fade-right" duration="medium" delay={300}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={WHATSAPP_DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 px-8 py-4 text-[17px] font-bold text-white shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.03] hover:shadow-cyan-500/30"
                >
                  <span>Agendar una demo</span>
                  <ArrowRight className="h-5 w-5" />
                </a>

                <a
                  href="#capacidades-voice"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-[16px] font-semibold text-white backdrop-blur-sm transition-all hover:border-cyan-400/40 hover:bg-white/10"
                >
                  Descubrir capacidades
                </a>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Phone Call Interface & Audio Waveform Mockup */}
          <div className="lg:col-span-6">
            <RevealOnScroll variant="fade-left" duration="medium" delay={150}>
              <div className="rounded-3xl border border-white/15 bg-slate-900/90 p-5 sm:p-7 shadow-2xl backdrop-blur-xl">
                {/* Active Call Bar */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-300">
                      <Mic className="h-5 w-5 animate-pulse" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-white text-base">
                        Llamada Telefónica Activa
                      </h4>
                      <p className="text-xs text-slate-400">Atención telefónica con IA · 01:24</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-semibold text-cyan-300 flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
                    Llamada activa
                  </span>
                </div>

                {/* Animated Audio Waveform & Speech-to-Text Container */}
                <div className="relative mt-5 rounded-2xl bg-slate-950 p-5 border border-white/5 overflow-hidden">
                  {/* Waveform Visualization Bars */}
                  <div className="flex items-center justify-center gap-1.5 py-4">
                    {[35, 60, 25, 80, 45, 90, 65, 30, 85, 50, 75, 40, 95, 55, 30, 70, 45, 85, 25].map(
                      (h, i) => (
                        <div
                          key={i}
                          className="w-1.5 rounded-full bg-gradient-to-t from-cyan-500 to-violet-500 transition-all duration-300"
                          style={{
                            height: `${h * 0.45}px`,
                            opacity: 0.6 + (i % 3) * 0.15,
                          }}
                        />
                      )
                    )}
                  </div>

                  {/* Real-time Dialog Transcription Snippet */}
                  <div className="mt-4 space-y-3 text-xs">
                    {/* Caller Line */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                      <div className="flex items-center gap-2 text-slate-400 font-medium mb-1 text-[11px]">
                        <User className="h-3.5 w-3.5 text-cyan-400" />
                        <span>Cliente (Voz entrante)</span>
                      </div>
                      <p className="text-slate-200 leading-relaxed">
                        "Hola, necesito consultar el estado de mi solicitud de servicio y confirmar la fecha prevista."
                      </p>
                    </div>

                    {/* Voice Assistant Line */}
                    <div className="rounded-xl border border-cyan-500/30 bg-cyan-950/40 p-3">
                      <div className="flex items-center justify-between text-cyan-300 font-medium mb-1 text-[11px]">
                        <span className="flex items-center gap-1.5 font-bold">
                          <Sparkles className="h-3.5 w-3.5" /> Asistente de Voz Doobot
                        </span>
                        <span className="text-[10px] bg-cyan-500/20 px-2 py-0.5 rounded text-cyan-200">
                          Respuesta generada en voz natural
                        </span>
                      </div>
                      <p className="text-slate-100 leading-relaxed">
                        "Perfecto. He localizado tu expediente #EXP-804. Tu solicitud está aprobada y la fecha prevista de atención es el próximo martes por la mañana."
                      </p>
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
