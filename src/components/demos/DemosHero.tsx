import { useEffect } from "react";
import { WHATSAPP_DEMO_URL } from "@/config/contact";

export function DemosHero() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const handleScrollToVideo = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("demo-video-voicebot");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #080C24 0%, #0C1340 40%, #111850 70%, #080C24 100%)",
        paddingTop: "clamp(100px, 12vw, 140px)",
        paddingBottom: "clamp(64px, 8vw, 96px)",
      }}
      aria-labelledby="demos-hero-heading"
    >
      {/* ── Malla de fondo ──────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "52px 52px",
        }}
      />

      {/* ── Orbes decorativos ───────────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute"
        style={{
          top: "10%",
          left: "5%",
          width: "480px",
          height: "480px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute"
        style={{
          bottom: "5%",
          right: "8%",
          width: "360px",
          height: "360px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(168,85,247,0.14) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute"
        style={{
          top: "30%",
          right: "15%",
          width: "240px",
          height: "240px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(34,211,238,0.10) 0%, transparent 70%)",
          filter: "blur(32px)",
        }}
      />

      {/* ── Contenido ───────────────────────────────────────── */}
      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-6">
          <span
            className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium"
            style={{
              borderColor: "rgba(99,102,241,0.4)",
              background: "rgba(99,102,241,0.12)",
              color: "#a5b4fc",
              letterSpacing: "0.04em",
            }}
          >
            <span
              aria-hidden="true"
              className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"
            />
            Ejemplos y demostraciones
          </span>
        </div>

        {/* H1 */}
        <h1
          id="demos-hero-heading"
          className="font-bold leading-tight tracking-tight text-white"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.25rem)",
            marginBottom: "1.25rem",
          }}
        >
          Descubre cómo aplicamos{" "}
          <span
            style={{
              background:
                "linear-gradient(90deg, #818cf8 0%, #c084fc 50%, #22d3ee 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            la IA a situaciones reales
          </span>
        </h1>

        {/* Subtítulo */}
        <p
          className="mx-auto text-slate-300 leading-relaxed"
          style={{
            fontSize: "clamp(1rem, 2.2vw, 1.2rem)",
            maxWidth: "640px",
            marginBottom: "2.5rem",
          }}
        >
          Explora demostraciones de asistentes conversacionales y conoce algunas
          de las capacidades que pueden aplicarse a los procesos de tu empresa.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#demo-video-voicebot"
            onClick={handleScrollToVideo}
            id="demos-hero-cta-video"
            className="inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            style={{
              padding: "0.85rem 2rem",
              fontSize: "1rem",
              background:
                "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%)",
              color: "#fff",
              boxShadow:
                "0 4px 24px rgba(99,102,241,0.45), 0 1px 4px rgba(0,0,0,0.3)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "translateY(-2px)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 8px 32px rgba(99,102,241,0.6), 0 2px 8px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 4px 24px rgba(99,102,241,0.45), 0 1px 4px rgba(0,0,0,0.3)";
            }}
          >
            Explorar demostración
            <svg
              aria-hidden="true"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>

          <a
            href={WHATSAPP_DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="demos-hero-cta-whatsapp"
            className="inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            style={{
              padding: "0.85rem 2rem",
              fontSize: "1rem",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.18)",
              color: "#e2e8f0",
              backdropFilter: "blur(8px)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "rgba(255,255,255,0.12)";
              (e.currentTarget as HTMLAnchorElement).style.borderColor =
                "rgba(255,255,255,0.3)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "rgba(255,255,255,0.06)";
              (e.currentTarget as HTMLAnchorElement).style.borderColor =
                "rgba(255,255,255,0.18)";
            }}
          >
            Agendar una demo
          </a>
        </div>
      </div>
    </section>
  );
}
