import { demos } from "@/config/demos";

/**
 * DemosExperiencias
 * Bloque pequeño y honesto con únicamente los dos elementos verificados.
 */
export function DemosExperiencias() {
  const handleScrollToVideo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const el = document.getElementById("demo-video-voicebot");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const badgeStyle = (status: "available" | "coming-soon") => ({
    available: {
      bg: "rgba(34,211,238,0.10)",
      text: "#67e8f9",
      border: "rgba(34,211,238,0.28)",
      dot: "#22d3ee",
    },
    "coming-soon": {
      bg: "rgba(100,116,139,0.12)",
      text: "#94a3b8",
      border: "rgba(100,116,139,0.25)",
      dot: "#475569",
    },
  }[status]);

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
            const bs = badgeStyle(demo.status);
            const isAvailable = demo.status === "available";

            return (
              <div
                key={demo.id}
                className="rounded-2xl p-6 flex flex-col gap-4"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  opacity: isAvailable ? 1 : 0.8,
                }}
              >
                {/* Badge de tipo */}
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span
                    className="inline-flex items-center gap-1.5 rounded-full text-xs font-semibold"
                    style={{
                      padding: "0.3rem 0.75rem",
                      background: bs.bg,
                      color: bs.text,
                      border: `1px solid ${bs.border}`,
                    }}
                  >
                    <span
                      aria-hidden="true"
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: bs.dot }}
                    />
                    {demo.badge}
                  </span>

                  {/* Estado */}
                  <span
                    className="text-xs font-medium"
                    style={{
                      color: isAvailable ? "#4ade80" : "#94a3b8",
                    }}
                  >
                    {isAvailable ? "Disponible" : "Próximamente"}
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

                {/* CTA */}
                {isAvailable ? (
                  <button
                    onClick={handleScrollToVideo}
                    id={`demos-experiencias-cta-${demo.id}`}
                    className="inline-flex items-center gap-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 text-left"
                    style={{
                      padding: "0.65rem 1.25rem",
                      fontSize: "0.875rem",
                      background: "rgba(99,102,241,0.12)",
                      border: "1px solid rgba(99,102,241,0.25)",
                      color: "#a5b4fc",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background =
                        "rgba(99,102,241,0.22)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background =
                        "rgba(99,102,241,0.12)";
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
                ) : (
                  <div
                    className="inline-flex items-center gap-2 rounded-lg font-medium"
                    role="status"
                    aria-label="Próximamente disponible"
                    style={{
                      padding: "0.65rem 1.25rem",
                      fontSize: "0.875rem",
                      background: "rgba(100,116,139,0.08)",
                      border: "1px solid rgba(100,116,139,0.18)",
                      color: "#64748b",
                    }}
                  >
                    <span
                      aria-hidden="true"
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: "#475569", flexShrink: 0 }}
                    />
                    {demo.ctaLabel}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
