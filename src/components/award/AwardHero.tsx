import { Trophy, ExternalLink } from "lucide-react";
import {
  OFFICIAL_AWARDS_URL,
  OFFICIAL_AWARDS_ARTICLE_URL,
  OFFICIAL_PRESS_ARTICLE_URL,
} from "@/config/awards";

export function AwardHero() {
  return (
    <section
      className="relative flex min-h-[720px] flex-col justify-center overflow-hidden py-16 lg:py-24"
      style={{
        background: "linear-gradient(135deg, #02021A 0%, #050547 55%, #0B0B5C 100%)",
      }}
    >
      {/* Background Subtle Radial Illumination & Gold Glow */}
      <div
        className="pointer-events-none absolute right-[15%] top-1/2 -translate-y-1/2 h-[550px] w-[550px] rounded-full opacity-25 blur-[130px]"
        style={{
          background: "radial-gradient(circle, rgba(245, 158, 11, 0.45) 0%, rgba(104, 94, 201, 0.35) 60%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Text Content & Links (55% width -> Cols 1-7) - Immediate Render */}
          <div className="flex flex-col justify-center lg:col-span-7">
            {/* Glassmorphic Badge */}
            <div>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-amber-400/35 bg-amber-400/10 px-4 py-2 backdrop-blur-md">
                <Trophy className="h-4 w-4 text-amber-400" />
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-200 sm:text-sm">
                  Premios Excelencia Relación con Clientes 2025 · Engagement
                </span>
              </div>
            </div>

            {/* H1 Title */}
            <h1 className="mt-6 font-display font-bold text-white max-w-[720px] text-[clamp(42px,4.5vw,76px)] leading-[1.05] tracking-tight">
              Premio Mejor Tecnología 2025
            </h1>

            {/* Main Paragraph */}
            <p className="mt-6 font-normal text-slate-100 max-w-[720px] text-[clamp(19px,1.4vw,23px)] leading-[1.5]">
              Doobot.ai y Boston Medical Group, reconocidos por aplicar inteligencia artificial a la mejora de la experiencia y la relación con el cliente.
            </p>

            {/* Secondary Paragraph */}
            <p className="mt-4 font-normal text-slate-300 max-w-[720px] text-[17px] sm:text-[18px] leading-[1.6]">
              Un reconocimiento otorgado en la cita de referencia del sector de atención y experiencia de cliente.
            </p>

            {/* External Links Pills */}
            <div className="mt-8 flex flex-wrap gap-3.5">
              <a
                href={OFFICIAL_AWARDS_ARTICLE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-amber-400/40 bg-amber-400/10 px-4 py-3 sm:px-[18px] sm:py-[13px] text-[15px] sm:text-[16px] font-medium text-amber-200 backdrop-blur-md transition-all hover:bg-amber-400/20 hover:text-white"
              >
                <span>Ganadores 2025</span>
                <ExternalLink className="h-4 w-4" />
              </a>

              <a
                href={OFFICIAL_PRESS_ARTICLE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-3 sm:px-[18px] sm:py-[13px] text-[15px] sm:text-[16px] font-medium text-slate-200 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10 hover:text-white"
              >
                <span>Noticia en iSanidad</span>
                <ExternalLink className="h-4 w-4" />
              </a>

              <a
                href={OFFICIAL_AWARDS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-3 sm:px-[18px] sm:py-[13px] text-[15px] sm:text-[16px] font-medium text-slate-200 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10 hover:text-white"
              >
                <span>Web oficial de los premios</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right Visual Column: Trophy Photo + Overlapping Light Support Badge Container (45% width -> Cols 8-12) */}
          <div className="relative flex flex-col items-center justify-center lg:col-span-5 lg:items-end">
            <div className="relative w-full max-w-[540px]">
              {/* Gold Glow Behind Trophy Photo */}
              <div className="absolute -inset-3 rounded-[32px] bg-gradient-to-tr from-amber-400/30 via-indigo-500/20 to-purple-500/20 blur-xl opacity-70" />

              {/* Trophy Photo Main Container */}
              <div className="relative h-[360px] sm:h-[430px] w-full overflow-hidden rounded-[28px] border border-white/15 bg-slate-900/60 shadow-2xl">
                <img
                  src="/doobot/Premio-1024x768.jpeg"
                  alt="Equipo galardonado con el Premio Mejor Tecnología 2025"
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              </div>

              {/* Overlapping Seal Image Container on Light Backdrop (rgba 255,255,255, 0.94) */}
              <div
                className="relative -mt-16 sm:-mt-20 ml-auto w-full max-w-[420px] z-10 p-2.5 sm:p-3 rounded-2xl shadow-2xl border border-amber-400/40 backdrop-blur-md"
                style={{
                  background: "rgba(255, 255, 255, 0.94)",
                }}
              >
                <img
                  src="/doobot/Premio-Exc-Rel.png"
                  alt="Insignia Oficial Premios Excelencia Relación con Clientes 2025"
                  className="h-auto w-full object-contain block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
