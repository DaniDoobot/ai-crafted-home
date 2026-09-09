import { ArrowRight, Calendar, Clock, MapPin, Sparkles } from "lucide-react";

export function EventPromoBanner() {
  return (
    <aside
      aria-label="Promoción del taller presencial"
      className="relative z-20 bg-[#050B24] px-4 sm:px-6 lg:px-8 py-8 sm:py-10 border-b border-white/10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-[#060F2B] via-[#0C1945] to-[#0A1338] p-6 sm:p-8 lg:p-10 shadow-2xl">
          {/* Subtle Ambient Radial Glows */}
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-[360px] w-[360px] rounded-full opacity-35 blur-[100px]"
            style={{
              background: "radial-gradient(circle, rgba(6, 182, 212, 0.45) 0%, transparent 70%)",
            }}
          />
          <div
            className="pointer-events-none absolute left-10 -bottom-20 h-[300px] w-[300px] rounded-full opacity-25 blur-[90px]"
            style={{
              background: "radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)",
            }}
          />

          <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            {/* Left / Center: Content & Actions (Cols 1-8) */}
            <div className="lg:col-span-8 flex flex-col items-start text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/35 bg-cyan-500/15 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-cyan-300 backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                <span>Taller presencial · 24 septiembre</span>
              </div>

              {/* Title */}
              <h2 className="mt-3.5 font-display font-bold text-white text-[clamp(24px,2.8vw,38px)] leading-[1.15] tracking-tight">
                Bot de Voz: calienta que sales…!!
              </h2>

              {/* Short Description */}
              <p className="mt-2 text-sm sm:text-base text-slate-200 max-w-2xl leading-relaxed">
                Taller práctico con Bots de Voz basados en IA para selección, entrenamiento y evaluación de agentes, venta y servicio 24x7 o uso de aplicativos por voz.
              </p>

              {/* Compact Event Data */}
              <div className="mt-4 flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-300 font-medium">
                <span className="flex items-center gap-1.5 rounded-xl bg-white/10 px-3 py-1.5 text-white border border-white/10 backdrop-blur-sm">
                  <Calendar className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                  <span>24 septiembre</span>
                </span>
                <span className="flex items-center gap-1.5 rounded-xl bg-white/10 px-3 py-1.5 text-white border border-white/10 backdrop-blur-sm">
                  <Clock className="h-3.5 w-3.5 text-purple-400 shrink-0" />
                  <span>16:00–17:30</span>
                </span>
                <span className="flex items-center gap-1.5 rounded-xl bg-white/10 px-3 py-1.5 text-white border border-white/10 backdrop-blur-sm">
                  <MapPin className="h-3.5 w-3.5 text-blue-400 shrink-0" />
                  <span>Madrid</span>
                </span>
              </div>

              {/* CTA Buttons */}
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a
                  href="/evento-bot-de-voz-contact-center-2026/#inscripcion"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 px-6 sm:px-7 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.03] hover:shadow-cyan-500/35"
                >
                  <span>Reservar mi plaza</span>
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="/evento-bot-de-voz-contact-center-2026/"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-300 hover:text-white transition-colors group"
                >
                  <span>Conoce el evento</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right: Floating Lego Voice Bot Asset (Cols 9-12) */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <a
                href="/evento-bot-de-voz-contact-center-2026/"
                aria-label="Ver detalles del evento Bot de Voz"
                className="group relative block"
              >
                <div className="pointer-events-none absolute -inset-4 rounded-full bg-cyan-500/20 blur-2xl opacity-75 group-hover:opacity-100 transition-opacity" />
                <img
                  src="/doobot/events/voicebot-lego-evento.webp"
                  alt="Ilustración LEGO Bot de Voz doobot.ai"
                  className="relative h-auto w-full max-w-[280px] sm:max-w-[320px] max-h-[210px] object-contain block drop-shadow-[0_15px_30px_rgba(6,182,212,0.3)] transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
