export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#A7A3D5] text-[#1c2333] pt-8 pb-12">
      {/* ── Top White Diagonal Mask ──
          Creates the diagonal transition from white to lavender:
          More white space on top-left, lavender background slopes up towards top-right.
      */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-white"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 18%, 0 85%)",
          zIndex: 3,
        }}
      />

      {/* ── Diagonal Stripe 1: Light Blue (#B6C3E3) crossing lower-left to higher-right ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: "#B6C3E3",
          clipPath: "polygon(0 40%, 100% 0%, 100% 12%, 0 59%)",
          zIndex: 1,
        }}
      />

      {/* ── Diagonal Stripe 2: Pinkish Violet (#BE9FD3) crossing lower-left to higher-right ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: "#BE9FD3",
          clipPath: "polygon(0 58%, 100% 11%, 100% 20%, 0 72%)",
          zIndex: 2,
        }}
      />

      {/* Content Container */}
      <div className="relative mx-auto max-w-[1250px] px-4 sm:px-6 lg:px-8" style={{ zIndex: 10 }}>
        {/* ── 3 Column Asymmetric Composition for Seals & Certifications ── */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-3 lg:gap-8">
          {/* Column 1 (Left): RGPD Seal (~130px down) + Doobot White Logo below (left-aligned) */}
          <div className="flex flex-col items-center gap-6 lg:items-start pt-12 lg:pt-[130px]">
            <img
              src="/doobot/Logs-RGPD-1024x364.png"
              alt="Cumplimiento RGPD y AI Act"
              loading="lazy"
              className="h-auto w-[290px] sm:w-[320px] object-contain"
            />
            <img
              src="/doobot/logo-blanco-300x40-2.png"
              alt="doobot.ai"
              loading="lazy"
              className="h-auto w-[290px] sm:w-[310px] object-contain"
            />
          </div>

          {/* Column 2 (Center): Premio Seal & Typography */}
          <div className="flex items-center justify-center pt-8 lg:pt-[130px]">
            <a
              href="/premio-mejor-tecnologia/"
              className="group inline-flex items-center gap-3.5 sm:gap-4.5 transition-transform hover:scale-[1.02]"
              title="Premio Mejor Producto Tecnológico 2025 - Premios Relación Cliente"
            >
              <img
                src="/doobot/premio-excelencia-sello-footer.webp"
                alt="Premios Excelencia Relación con Clientes 2025 - Mejor Producto Tecnológico"
                loading="lazy"
                className="h-[110px] w-[110px] sm:h-[130px] sm:w-[130px] object-contain shrink-0 drop-shadow-md transition-transform group-hover:scale-105"
              />
              <div className="flex flex-col justify-center text-[#1c2333] text-left">
                <span className="font-display font-bold text-[17px] sm:text-[19px] text-[#050547] leading-[1.25] tracking-tight group-hover:text-indigo-950 transition-colors">
                  Mejor Producto Tecnológico
                </span>
                <span className="mt-1 text-[13px] sm:text-[15px] font-medium text-[#1c2333]/90 leading-tight">
                  Premios Relación Cliente
                </span>
                <span className="mt-0.5 text-[14px] sm:text-[16px] font-bold text-[#050547] leading-tight">
                  2025
                </span>
              </div>
            </a>
          </div>

          {/* Column 3 (Right): ISO Certification Seal - Positioned CLEARLY HIGHER UP (~30px from top) */}
          <div className="flex justify-center lg:justify-end pt-4 lg:pt-[30px]">
            <img
              src="/doobot/Logo-ISO.webp"
              alt="Certificación ISO 27001"
              loading="lazy"
              className="h-auto w-[250px] sm:w-[280px] object-contain"
            />
          </div>
        </div>

        {/* ── Copyright & Legal Links (Dark text, no top border line, pipe separators) ── */}
        <div className="mt-12 text-center text-[#1c2333]">
          <p className="text-xs sm:text-sm font-medium">
            Copyright ©2026 doobot.ai – Todos los derechos reservados – doobot.ai es una empresa del grupo eCUSTOMER.
          </p>

          <div className="mt-3 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs sm:text-sm font-medium">
            <a
              href="/politica-de-privacidad/"
              className="transition-colors hover:text-[#000000]"
            >
              Política de privacidad
            </a>
            <span aria-hidden="true" className="opacity-60">|</span>
            <a
              href="/aviso-legal/"
              className="transition-colors hover:text-[#000000]"
            >
              Aviso legal
            </a>
            <span aria-hidden="true" className="opacity-60">|</span>
            <a
              href="/politica-de-seguridad-de-la-informacion/"
              className="transition-colors hover:text-[#000000]"
            >
              Política de seguridad de la información
            </a>
            <span aria-hidden="true" className="opacity-60">|</span>
            <a
              href="/politica-de-cookies/"
              className="transition-colors hover:text-[#000000]"
            >
              Política de cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
