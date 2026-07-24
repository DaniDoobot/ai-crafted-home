/**
 * DemosVoiceBotFeatures
 * Las seis funcionalidades clave extraídas literalmente del sitio de referencia.
 * Copy revisado para evitar afirmaciones absolutas no contrastadas.
 */

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
      </svg>
    ),
    title: "Configuración conversacional flexible",
    description:
      "El comportamiento del asistente puede definirse describiendo cómo debe actuar: temáticas, condiciones y tipos de consultas o gestiones que debe manejar, según los requisitos del proyecto.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Consola de control multiusuario",
    description:
      "Panel de control accesible desde web, tablet y smartphone que permite gestionar interacciones, asignar tareas entre personas, realizar seguimientos y coordinar comunicaciones.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="23" />
        <line x1="8" y1="23" x2="16" y2="23" />
      </svg>
    ),
    title: "Comprensión de mensajes de audio",
    description:
      "El asistente puede procesar los mensajes de voz de los clientes y responder a sus necesidades empleando IA generativa, según la configuración de integración del proyecto.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Combinación de automatización e intervención humana",
    description:
      "Es posible establecer temáticas, intents o sentimientos en los que el sistema derive la interacción al agente humano para supervisar y aprobar la respuesta antes de enviarla.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: "Visibilidad y control de la actividad",
    description:
      "Acceso a cuadros de mando con métricas por volúmenes, tipologías y estados, y posibilidad de realizar consultas en lenguaje natural para obtener una visión de conjunto de la actividad.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
      </svg>
    ),
    title: "Integración con aplicativos externos",
    description:
      "El asistente puede consultar información y realizar gestiones con los aplicativos de la organización cuando existe integración disponible, mediante API o RPA según el caso.",
  },
];

export function DemosVoiceBotFeatures() {
  return (
    <section
      className="relative"
      style={{
        background:
          "linear-gradient(180deg, #080C24 0%, #0d1235 50%, #080C24 100%)",
        padding: "clamp(64px, 8vw, 96px) 0",
      }}
      aria-labelledby="voicebot-features-heading"
    >
      {/* Orbe decorativo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Cabecera */}
        <div className="text-center mb-12">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#818cf8" }}
          >
            Voice Bot
          </p>
          <h2
            id="voicebot-features-heading"
            className="font-bold text-white"
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              marginBottom: "1rem",
            }}
          >
            Funcionalidades clave
          </h2>
          <p
            className="text-slate-400 mx-auto"
            style={{ maxWidth: "520px", fontSize: "1rem" }}
          >
            Principales capacidades que pueden incluirse en un proyecto de Voice
            Bot con IA generativa, según el alcance y las integraciones definidas.
          </p>
        </div>

        {/* Grid de funcionalidades */}
        <div
          className="grid gap-5"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))",
          }}
        >
          {features.map((feat, i) => (
            <div
              key={i}
              className="group rounded-xl p-5 transition-all duration-300"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.border =
                  "1px solid rgba(99,102,241,0.22)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 4px 20px rgba(99,102,241,0.10)";
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.border =
                  "1px solid rgba(255,255,255,0.07)";
                (e.currentTarget as HTMLElement).style.boxShadow = "";
                (e.currentTarget as HTMLElement).style.transform = "";
              }}
            >
              {/* Icono */}
              <div
                className="flex items-center justify-center rounded-lg mb-4"
                style={{
                  width: "42px",
                  height: "42px",
                  background: "rgba(99,102,241,0.12)",
                  border: "1px solid rgba(99,102,241,0.22)",
                  color: "#818cf8",
                }}
              >
                <div style={{ width: "20px", height: "20px" }}>
                  {feat.icon}
                </div>
              </div>

              <h3
                className="font-semibold text-white mb-2 leading-snug"
                style={{ fontSize: "0.95rem" }}
              >
                {feat.title}
              </h3>
              <p
                className="text-slate-400 leading-relaxed"
                style={{ fontSize: "0.85rem" }}
              >
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
