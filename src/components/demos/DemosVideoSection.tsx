/**
 * DemosVideoSection
 * Bloque destacado con el reproductor local del vídeo demostrativo de Voice Bot.
 * Usa public/media/doobot-v2.mp4 — el mismo archivo integrado en la Home.
 */
export function DemosVideoSection() {
  return (
    <section
      id="demo-video-voicebot"
      className="scroll-mt-20 lg:scroll-mt-24 relative"
      style={{
        background:
          "linear-gradient(180deg, #080C24 0%, #0a0f2a 50%, #080C24 100%)",
        padding: "clamp(64px, 8vw, 96px) 0",
      }}
      aria-labelledby="demos-video-heading"
    >
      {/* Orbe decorativo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(99,102,241,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Cabecera */}
        <div className="text-center mb-10">
          <span
            className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-widest mb-4"
            style={{
              borderColor: "rgba(34,211,238,0.35)",
              background: "rgba(34,211,238,0.08)",
              color: "#67e8f9",
            }}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            Vídeo demostrativo
          </span>

          <h2
            id="demos-video-heading"
            className="font-bold text-white"
            style={{
              fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)",
              marginBottom: "1rem",
            }}
          >
            Voice Bot con IA Generativa
          </h2>

          <p
            className="text-slate-400 mx-auto leading-relaxed"
            style={{ maxWidth: "580px", fontSize: "1rem" }}
          >
            Conoce cómo funciona un asistente de voz capaz de mantener una
            conversación natural, responder consultas y realizar gestiones según
            la configuración e integraciones del proyecto.
          </p>
        </div>

        {/* Reproductor */}
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{
            background: "#06091a",
            border: "1px solid rgba(99,102,241,0.2)",
            boxShadow:
              "0 8px 48px rgba(0,0,0,0.5), 0 2px 12px rgba(99,102,241,0.15)",
          }}
        >
          <video
            controls
            playsInline
            preload="metadata"
            poster="/doobot/Img-Portada-Video-2.png"
            className="block h-full w-full object-contain"
            aria-label="Vídeo demostrativo de Voice Bots con inteligencia artificial de doobot.ai"
            style={{
              display: "block",
              width: "100%",
              maxHeight: "540px",
              background: "#06091a",
            }}
          >
            <source src="/media/doobot-v2.mp4" type="video/mp4" />
            Tu navegador no puede reproducir este vídeo.
          </video>
        </div>

        {/* Nota editorial */}
        <p
          className="text-center mt-4 text-slate-500 text-sm"
          style={{ fontStyle: "italic" }}
        >
          Demostración grabada de funcionamiento.
        </p>
      </div>
    </section>
  );
}
