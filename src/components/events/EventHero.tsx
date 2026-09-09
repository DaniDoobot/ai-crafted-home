import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ArrowDown, Calendar, Clock, MapPin, Sparkles, Users } from "lucide-react";

export function EventHero() {
  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("inscripcion");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#050B24] pt-32 pb-20 lg:pt-36 lg:pb-28 text-white min-h-[720px] flex items-center">
      {/* Background Subtle Radial Glows */}
      <div
        className="pointer-events-none absolute -left-20 top-1/4 h-[550px] w-[550px] rounded-full opacity-25 blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(6, 182, 212, 0.45) 0%, rgba(99, 102, 241, 0.35) 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute right-0 bottom-10 h-[500px] w-[500px] rounded-full opacity-20 blur-[150px]"
        style={{
          background:
            "radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(6, 182, 212, 0.25) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Copy, Metadata & Action */}
          <div className="lg:col-span-7">
            <RevealOnScroll variant="fade-right" duration="fast" delay={0}>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 backdrop-blur-md">
                <Sparkles className="h-4 w-4 text-cyan-300" />
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                  Taller presencial · Semana Contact Center 2026
                </span>
              </div>
            </RevealOnScroll>

            <RevealOnScroll variant="fade-right" duration="fast" delay={100}>
              <h1 className="mt-6 font-display font-bold text-white text-[clamp(36px,4.5vw,66px)] leading-[1.08] tracking-tight">
                Bot de Voz: calienta que sales…!!
              </h1>
            </RevealOnScroll>

            <RevealOnScroll variant="fade-right" duration="medium" delay={200}>
              <p className="mt-6 font-normal text-slate-200 text-[18px] sm:text-[21px] leading-[1.55] max-w-2xl">
                Descubre cómo entrenar bots de voz basados en IA para selección, formación y evaluación de agentes y servicios, con ejemplos reales y demostraciones prácticas.
              </p>
            </RevealOnScroll>

            {/* Event Key Highlights Grid */}
            <RevealOnScroll variant="fade-right" duration="medium" delay={250}>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-2xl">
                <div className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 px-4 py-3 backdrop-blur-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-300">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Fecha del taller</div>
                    <div className="text-sm font-bold text-white">24 de septiembre de 2026</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 px-4 py-3 backdrop-blur-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-500/20 text-purple-300">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Horario</div>
                    <div className="text-sm font-bold text-white">16:00 – 17:30</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 px-4 py-3 backdrop-blur-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/20 text-blue-300">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Ubicación (Presencial)</div>
                    <div className="text-sm font-bold text-white truncate">Paseo de la Castellana, 81 · Madrid 28046</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 px-4 py-3 backdrop-blur-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Aforo</div>
                    <div className="text-sm font-bold text-emerald-300">Plazas limitadas</div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* CTA Button */}
            <RevealOnScroll variant="fade-right" duration="medium" delay={300}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#inscripcion"
                  onClick={scrollToForm}
                  className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 px-8 py-4 text-[17px] font-bold text-white shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.03] hover:shadow-cyan-500/30"
                >
                  <span>Reservar mi plaza</span>
                  <ArrowDown className="h-5 w-5" />
                </a>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Floating Lego Voice Bot Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <RevealOnScroll variant="fade-left" duration="medium" delay={150}>
              <div className="relative mx-auto max-w-[540px] flex flex-col items-center">
                {/* Ambient glow behind floating Lego image */}
                <div className="pointer-events-none absolute -inset-6 rounded-full bg-gradient-to-tr from-cyan-500/30 via-purple-500/25 to-blue-500/20 blur-3xl opacity-80" />

                <div className="relative w-full">
                  <img
                    src="/doobot/events/voicebot-lego-evento.webp"
                    alt="Bot de Voz con Inteligencia Artificial - doobot.ai"
                    className="h-auto w-full max-h-[460px] object-contain block mx-auto drop-shadow-[0_20px_40px_rgba(6,182,212,0.25)] transition-transform duration-500 hover:scale-[1.02]"
                  />

                  {/* Clean Floating Status Pill */}
                  <div className="mt-3 mx-auto max-w-sm flex items-center justify-between rounded-full bg-white/10 px-5 py-2.5 border border-white/15 backdrop-blur-md text-xs text-slate-200 shadow-lg">
                    <span className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                      Demostraciones Prácticas en Directo
                    </span>
                    <span className="text-cyan-300 font-semibold">Voz + IA</span>
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
