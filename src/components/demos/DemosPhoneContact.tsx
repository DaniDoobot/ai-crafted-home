import { useState } from "react";

export function DemosPhoneContact() {
  const [copied, setCopied] = useState(false);

  const handleCopyNumber = () => {
    navigator.clipboard.writeText("+34911674317").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <section
      id="contacto-telefono-voicebot"
      className="scroll-mt-24 lg:scroll-mt-28 relative"
      style={{
        background:
          "linear-gradient(180deg, #080C24 0%, #0c1236 50%, #080C24 100%)",
        padding: "clamp(64px, 8vw, 96px) 0",
      }}
      aria-labelledby="phone-contact-heading"
    >
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(99,102,241,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div
          className="rounded-3xl p-8 sm:p-12 text-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
            border: "1px solid rgba(99,102,241,0.25)",
            boxShadow: "0 12px 48px rgba(0,0,0,0.4)",
          }}
        >
          {/* Eyebrow */}
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#818cf8" }}
          >
            Voice Bot telefónico
          </p>

          {/* Title */}
          <h2
            id="phone-contact-heading"
            className="font-bold text-white mb-4"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)" }}
          >
            Déjanos tu mensaje o solicita contacto comercial
          </h2>

          {/* Text */}
          <p
            className="text-slate-300 mx-auto leading-relaxed mb-8"
            style={{ maxWidth: "640px", fontSize: "1.05rem" }}
          >
            Llama a nuestro Voice Bot, explica brevemente el motivo de tu contacto y deja la información necesaria para que el equipo de Doobot pueda gestionar tu solicitud.
          </p>

          {/* Phone Display & Copy */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
            <a
              href="tel:+34911674317"
              className="font-bold text-white tracking-tight hover:text-indigo-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-lg px-2 py-1"
              style={{ fontSize: "clamp(2rem, 5.5vw, 3rem)" }}
              title="Llamar al +34 911 67 43 17"
            >
              +34 911 67 43 17
            </a>

            <button
              onClick={handleCopyNumber}
              type="button"
              id="copy-phone-demos-btn"
              className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              style={{
                background: copied
                  ? "rgba(34,197,94,0.15)"
                  : "rgba(255,255,255,0.08)",
                border: copied
                  ? "1px solid rgba(34,197,94,0.4)"
                  : "1px solid rgba(255,255,255,0.15)",
                color: copied ? "#4ade80" : "#cbd5e1",
              }}
            >
              {copied ? (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  ¡Copiado!
                </>
              ) : (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                  Copiar
                </>
              )}
            </button>
          </div>

          {/* Primary Call Button */}
          <div className="flex justify-center mb-6">
            <a
              href="tel:+34911674317"
              id="demos-phone-call-btn"
              className="inline-flex items-center justify-center gap-3 rounded-full font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              style={{
                padding: "0.85rem 2.25rem",
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
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z" />
              </svg>
              <span>Llamar al Voice Bot</span>
            </a>
          </div>

          {/* Secondary Text */}
          <p className="text-slate-300 text-sm mb-3">
            También puedes utilizar esta línea para solicitar que un comercial se ponga en contacto contigo.
          </p>

          {/* Note */}
          <p className="text-slate-400 text-xs">
            Llamada a número fijo nacional. El coste dependerá de la tarifa contratada con tu operador.
          </p>
        </div>
      </div>
    </section>
  );
}
