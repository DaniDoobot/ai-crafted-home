import { demos } from "@/config/demos";

/**
 * DemosExperiencias
 * Muestra las dos experiencias demostrativas disponibles de doobot.ai.
 */
export function DemosExperiencias() {
  const handleScrollToVideo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const el = document.getElementById("demo-video-voicebot");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const badgeStyle = {
    bg: "rgba(34,211,238,0.10)",
    text: "#67e8f9",
    border: "rgba(34,211,238,0.28)",
    dot: "#22d3ee",
  };

  return (
    <section
      className="relative"
      style={{
        background:
          "linear-gradient(180deg, #0d1235 0%, #080C24 100%)",
        padding: "clamp(56px, 7vw, 80px) 0",
      }}
      aria-labelledby="demos-experiencias-heading"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Cabecera */}
        <div className="text-center mb-10">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#818cf8" }}
          >
            Experiencias disponibles
          </p>
          <h2
            id="demos-experiencias-heading"
            className="font-bold text-white"
            style={{ fontSize: "clamp(1.4rem, 2.8vw, 2rem)" }}
          >
            Qué puedes explorar ahora
          </h2>
        </div>

        {/* Tarjetas */}
        <div
          className="grid gap-5"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          }}
        >
          {demos.map((demo) => {
            const isPhone = demo.type === "phone";

            return (
              <div
                key={demo.id}
                className="rounded-2xl p-6 flex flex-col gap-4"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {/* Badge de tipo */}
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span
                    className="inline-flex items-center gap-1.5 rounded-full text-xs font-semibold"
                    style={{
                      padding: "0.3rem 0.75rem",
                      background: badgeStyle.bg,
                      color: badgeStyle.text,
                      border: `1px solid ${badgeStyle.border}`,
                    }}
                  >
                    <span
                      aria-hidden="true"
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: badgeStyle.dot }}
                    />
                    {demo.badge}
                  </span>

                  {/* Estado */}
                  <span className="text-xs font-medium text-emerald-400">
                    Disponible
                  </span>
                </div>

                {/* Título */}
                <h3
                  className="font-semibold text-white leading-snug"
                  style={{ fontSize: "1rem" }}
                >
                  {demo.title}
                </h3>

                {/* Descripción */}
                <p
                  className="text-slate-400 leading-relaxed flex-1"
                  style={{ fontSize: "0.875rem" }}
                >
                  {demo.description}
                </p>

                {/* Número visible si es telefónico */}
                {isPhone && (
                  <div className="rounded-lg p-3 bg-white/5 border border-white/10 text-center">
                    <p className="text-xs text-slate-400 mb-1">Número de contacto:</p>
                    <a
                      href="tel:+34911674317"
                      className="font-bold text-white text-lg hover:text-indigo-300 transition-colors"
                    >
                      +34 911 67 43 17
                    </a>
                    <p className="text-xs text-slate-400 mt-1">
                      Puedes utilizarlo para dejar un mensaje o solicitar contacto con nuestro equipo comercial.
                    </p>
                  </div>
                )}

                {/* CTA */}
                {isPhone && demo.href ? (
                  <a
                    href={demo.href}
                    id={`demos-experiencias-cta-${demo.id}`}
                    className="inline-flex items-center gap-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 text-left w-fit"
                    style={{
                      padding: "0.65rem 1.25rem",
                      fontSize: "0.875rem",
                      background: "rgba(99,102,241,0.12)",
                      border: "1px solid rgba(99,102,241,0.25)",
                      color: "#a5b4fc",
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z" />
                    </svg>
                    {demo.ctaLabel}
                  </a>
                ) : (
                  <button
                    onClick={handleScrollToVideo}
                    id={`demos-experiencias-cta-${demo.id}`}
                    className="inline-flex items-center gap-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 text-left w-fit"
                    style={{
                      padding: "0.65rem 1.25rem",
                      fontSize: "0.875rem",
                      background: "rgba(99,102,241,0.12)",
                      border: "1px solid rgba(99,102,241,0.25)",
                      color: "#a5b4fc",
                      cursor: "pointer",
                    }}
                  >
                    {demo.ctaLabel}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </button>
                )}

                {/* Nota de coste */}
                {isPhone && (
                  <p className="text-xs text-slate-400">
                    Llamada a número fijo nacional. El coste dependerá de la tarifa contratada con tu operador.
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
