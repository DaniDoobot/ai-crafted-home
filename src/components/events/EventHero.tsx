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
    <section className="relative overflow-hidden bg-[#050B24] pt-20 pb-12 sm:pt-24 sm:pb-14 lg:pt-28 lg:pb-16 text-white min-h-[640px] flex items-center">
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
              <div className="inline-flex flex-wrap sm:flex-nowrap max-w-full items-center gap-2 sm:gap-2.5 rounded-2xl sm:rounded-full border border-cyan-400/40 bg-gradient-to-r from-cyan-500/15 via-blue-500/15 to-indigo-500/20 px-3.5 py-1.5 sm:px-5 sm:py-2.5 backdrop-blur-md shadow-[0_0_25px_rgba(6,182,212,0.2)] transition-all hover:border-cyan-400/60">
                <span className="shrink-0 inline-flex items-center gap-1.5 rounded-full bg-cyan-400/20 px-2.5 py-0.5 text-xs font-black uppercase tracking-wider text-cyan-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  Presencial
                </span>
                <span className="text-xs sm:text-sm font-semibold tracking-wide text-slate-200">
                  Taller práctico · Semana Contact Center 2026
                </span>
              </div>
            </RevealOnScroll>

            <RevealOnScroll variant="fade-right" duration="fast" delay={100}>
              <h1 className="mt-5 font-display font-bold text-[clamp(38px,5.2vw,70px)] leading-[1.08] tracking-tight">
                <span className="block text-white">
                  Bot de voz:
                </span>
                <span className="block mt-1 bg-gradient-to-r from-cyan-300 via-cyan-200 to-blue-300 bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(6,182,212,0.25)]">
                  calienta que sales...!!
                </span>
              </h1>
            </RevealOnScroll>

            <RevealOnScroll variant="fade-right" duration="medium" delay={200}>
              <p className="mt-4 font-normal text-slate-200 text-[17px] sm:text-[19px] leading-[1.55] max-w-2xl">
                Descubre las posibilidades y cómo entrenar Bots de Voz basados en IA para selección, entrenamiento y evaluación de agentes, venta y servicio 24x7 o uso de aplicativos por voz, con ejemplos reales y demostraciones prácticas.
              </p>
            </RevealOnScroll>

            {/* Event Key Highlights Grid */}
            <RevealOnScroll variant="fade-right" duration="medium" delay={250}>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] gap-3.5 max-w-2xl w-full">
                {/* 1. Fecha */}
                <div className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 px-4 py-3 backdrop-blur-sm min-w-0 w-full h-full">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-300">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs text-slate-400">Fecha del taller</div>
                    <div className="text-sm font-bold text-white break-words">24 de septiembre de 2026</div>
                  </div>
                </div>

                {/* 2. Horario */}
                <div className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 px-4 py-3 backdrop-blur-sm min-w-0 w-full h-full">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-500/20 text-purple-300">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs text-slate-400">Horario</div>
                    <div className="text-sm font-bold text-white break-words">16:00 – 17:30</div>
                  </div>
                </div>

                {/* 3. Ubicación (Presencial) */}
                <div className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 px-4 py-3 backdrop-blur-sm min-w-0 w-full h-full">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/20 text-blue-300">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs text-slate-400">Ubicación (Presencial)</div>
                    <div className="text-sm font-bold text-white break-words leading-snug">
                      Paseo de la Castellana, 81 · Torre BBVA · Planta 15
                    </div>
                  </div>
                </div>

                {/* 4. Aforo */}
                <div className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 px-4 py-3 backdrop-blur-sm min-w-0 w-full h-full">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300">
                    <Users className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs text-slate-400">Aforo</div>
                    <div className="text-sm font-bold text-emerald-300 break-words">Plazas limitadas</div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* CTA Button & Institutional Activity Badge */}
            <RevealOnScroll variant="fade-right" duration="medium" delay={300}>
              <div className="mt-7 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5.5">
                <a
                  href="#inscripcion"
                  onClick={scrollToForm}
                  className="inline-flex items-center justify-center gap-3 sm:gap-3.5 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 px-9 sm:px-10 py-4 sm:py-4.5 text-[18px] sm:text-[19px] font-bold text-white shadow-xl shadow-cyan-500/25 transition-all hover:scale-[1.03] hover:shadow-cyan-500/35 shrink-0 min-h-[62px] sm:min-h-[66px]"
                >
                  <span>Reservar mi plaza</span>
                  <ArrowDown className="h-6 w-6" />
                </a>

                {/* Institutional Badge: AEERC / Semana Contact Center 2026 */}
                <div className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-white/95 via-white/90 to-slate-100/90 border border-white/40 px-6 sm:px-8 py-2.5 shadow-md shadow-cyan-950/20 backdrop-blur-md transition-all hover:scale-[1.01] hover:border-white/60 hover:shadow-lg hover:shadow-cyan-500/10 shrink-0 min-h-[62px] sm:min-h-[66px]">
                  <img
                    src="/doobot/events/aeerc-semana-contact-center-2026.webp"
                    alt="Actividad dentro de: AEERC · Semana Contact Center 2026"
                    className="h-9 sm:h-10 w-auto object-contain"
                    width={835}
                    height={140}
                  />
                </div>
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
