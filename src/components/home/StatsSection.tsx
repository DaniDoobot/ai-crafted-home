import { useEffect, useRef, useState } from "react";
import { WHATSAPP_DEMO_URL } from "@/config/contact";

const STATS = [
  { prefix: "+", target: 15, suffix: " años", label: "Años de experiencia" },
  { prefix: "", target: 600, suffix: "K+", label: "Interacciones IA anuales" },
  { prefix: "", target: 100, suffix: "+", label: "Clientes satisfechos" },
  { prefix: "", target: 500, suffix: "+", label: "Procesos automatizados" },
];

const DURATION = 2000;

function useCounters(active: boolean) {
  const [values, setValues] = useState<number[]>(() => STATS.map(() => 0));

  useEffect(() => {
    if (!active) return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setValues(STATS.map((s) => s.target));
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / DURATION);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3);
      setValues(STATS.map((s) => Math.round(s.target * eased)));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active]);

  return values;
}

export function StatsSection() {
  const statsGridRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent));
    }
  }, []);

  // ── Counter activation via IntersectionObserver ──
  useEffect(() => {
    if (active) return;
    const el = statsGridRef.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setActive(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setActive(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [active]);

  const values = useCounters(active);

  return (
    <section
      className="relative flex items-center py-24 sm:py-28"
      style={{
        minHeight: "clamp(480px, 60vh, 560px)",
        backgroundColor: "#0d111d",
        backgroundImage: `linear-gradient(rgba(13, 17, 29, 0.65), rgba(13, 17, 29, 0.65)), url('/doobot/AI-fondo_-scaled.png')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundAttachment: isMobile ? "scroll" : "fixed",
      }}
    >
      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full" style={{ zIndex: 2 }}>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
          <div className="text-white">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium tracking-wider text-white/80">
              Key outputs
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Optimiza con IA: cifras doobot.ai
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/75">
              La implementación de soluciones doobot.ai basadas en IA Generativa te
              permitirá optimizar tiempos de respuesta, resolución y costes
            </p>
            <a
              href={WHATSAPP_DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-foreground shadow-elevated transition-transform hover:scale-[1.02]"
            >
              Agendar una demo
            </a>
          </div>

          <div ref={statsGridRef} className="grid grid-cols-2 gap-4 sm:gap-6">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm"
              >
                <div
                  className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl"
                  aria-label={`${s.prefix}${s.target}${s.suffix}`}
                >
                  <span>{s.prefix}</span>
                  <span aria-hidden="true">{values[i]}</span>
                  <span className="text-brand-pink">{s.suffix}</span>
                </div>
                <div className="mt-2 text-[11px] font-medium uppercase tracking-wider text-white/70 sm:text-xs">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
