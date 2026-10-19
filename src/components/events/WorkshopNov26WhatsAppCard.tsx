import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { WHATSAPP_WORKSHOP_NOV26_URL } from "@/config/contact";
import { Bot } from "lucide-react";

export interface WorkshopNov26WhatsAppCardProps {
  id?: string;
  badgeText?: string;
  title?: string;
  subtitle?: string;
}

export function WorkshopNov26WhatsAppCard({
  id = "inscripcion",
  badgeText = "Inscripción al taller",
  title = "Reserva tu plaza",
  subtitle = "Las plazas son limitadas. Puedes tramitar tu inscripción directamente a través de nuestro Bot WhatsApp.",
}: WorkshopNov26WhatsAppCardProps) {
  return (
    <section id={id} className="relative py-12 sm:py-16 lg:py-20 bg-[#030A1D] text-white scroll-mt-24">
      {/* Background Radial Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full opacity-20 blur-[140px]"
        style={{
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, rgba(6, 182, 212, 0.3) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll variant="fade-up" duration="medium" delay={0}>
          <div className="rounded-3xl border border-emerald-500/30 bg-gradient-to-b from-slate-900/95 via-[#061427]/90 to-slate-900/95 p-8 sm:p-12 text-center shadow-2xl shadow-emerald-950/30 backdrop-blur-xl">
            {/* Badge */}
            <span className="inline-block rounded-full bg-emerald-500/15 border border-emerald-500/30 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-300">
              {badgeText}
            </span>

            {/* Title */}
            <h2 className="mt-4 font-display font-bold text-white text-[clamp(28px,3.8vw,44px)] leading-[1.15] tracking-tight">
              {title}
            </h2>

            {/* Subtitle */}
            <p className="mt-3 font-normal text-slate-300 text-[17px] sm:text-[19px] leading-[1.55] max-w-xl mx-auto">
              {subtitle}
            </p>

            {/* Event pill recap */}
            <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 rounded-2xl bg-white/5 border border-white/10 px-4 py-2.5 text-xs sm:text-sm text-slate-300">
              <span className="text-white font-semibold">12 noviembre · 16:00</span>
              <span className="text-slate-500">·</span>
              <span>Torre BBVA · Paseo de la Castellana, 81 · Planta 15</span>
              <span className="text-slate-500">·</span>
              <span className="text-emerald-300 font-semibold">Plazas limitadas</span>
            </div>

            {/* Main WhatsApp CTA */}
            <div className="mt-8">
              <a
                href={WHATSAPP_WORKSHOP_NOV26_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Inscribirme al taller por WhatsApp"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600 px-8 sm:px-10 py-4.5 text-base sm:text-lg font-bold text-white shadow-xl shadow-emerald-500/25 transition-all hover:scale-[1.03] hover:shadow-emerald-500/35 active:scale-98"
              >
                {/* Official WhatsApp Logo SVG */}
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-6 w-6 fill-current shrink-0"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.419h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
                </svg>
                <span>Inscribirme por WhatsApp</span>
                <Bot className="h-5 w-5 text-emerald-200 shrink-0" />
              </a>

              <p className="mt-3 text-xs text-slate-400">
                Atención directa con nuestro equipo a través del Bot WhatsApp oficial de doobot.ai_.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
