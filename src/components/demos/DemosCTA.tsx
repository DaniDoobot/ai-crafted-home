import { WHATSAPP_DEMO_URL } from "@/config/contact";

export function DemosCTA() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #0a0f2a 0%, #0d1235 50%, #080C24 100%)",
        padding: "clamp(72px, 9vw, 108px) 0",
      }}
      aria-labelledby="demos-cta-heading"
    >
      {/* Fondo degradado central */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(99,102,241,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Orbes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute"
        style={{
          top: "20%",
          left: "10%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)",
          filter: "blur(32px)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute"
        style={{
          bottom: "20%",
          right: "10%",
          width: "280px",
          height: "280px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 70%)",
          filter: "blur(28px)",
        }}
      />

      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
        {/* Eyebrow */}
        <p
          className="text-sm font-semibold uppercase tracking-widest mb-4"
          style={{ color: "#818cf8" }}
        >
          ¿Tienes otro caso de uso?
        </p>

        {/* Título */}
        <h2
          id="demos-cta-heading"
          className="font-bold text-white mb-5"
          style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", lineHeight: 1.2 }}
        >
          Te mostramos cómo aplicarlo{" "}
          <span
            style={{
              background:
                "linear-gradient(90deg, #818cf8 0%, #c084fc 50%, #22d3ee 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            a tu empresa
          </span>
        </h2>

        {/* Subtítulo */}
        <p
          className="text-slate-400 mx-auto mb-10 leading-relaxed"
          style={{ fontSize: "1.05rem", maxWidth: "520px" }}
        >
          Cuéntanos tu caso de uso específico y diseñamos juntos una
          demostración personalizada. Sin compromisos.
        </p>

        {/* CTA */}
        <a
          href={WHATSAPP_DEMO_URL}
          target="_blank"
          rel="noopener noreferrer"
          id="demos-cta-final-whatsapp"
          className="inline-flex items-center justify-center gap-3 rounded-full font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          style={{
            padding: "1rem 2.5rem",
            fontSize: "1.05rem",
            background:
              "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%)",
            color: "#fff",
            boxShadow:
              "0 4px 32px rgba(99,102,241,0.5), 0 2px 8px rgba(0,0,0,0.3)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.transform =
              "translateY(-3px)";
            (e.currentTarget as HTMLAnchorElement).style.boxShadow =
              "0 10px 40px rgba(99,102,241,0.65), 0 4px 12px rgba(0,0,0,0.3)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.transform = "";
            (e.currentTarget as HTMLAnchorElement).style.boxShadow =
              "0 4px 32px rgba(99,102,241,0.5), 0 2px 8px rgba(0,0,0,0.3)";
          }}
        >
          {/* Icono WhatsApp */}
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
          </svg>
          Agendar una demo
        </a>

        {/* Nota de confianza */}
        <p
          className="mt-6 text-slate-500 text-sm"
        >
          Grupo eCustomer · Más de 15 años de experiencia en IA conversacional
        </p>
      </div>
    </section>
  );
}
