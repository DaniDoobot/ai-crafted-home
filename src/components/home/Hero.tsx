import { useEffect, useRef, useState } from "react";

const ROTATING = [
  "ventas_",
  "servicio al cliente_",
  "citas_",
  "training y dudas_",
  "análisis información_",
];

// Longest item sets the reserved width so the layout never jumps
const LONGEST = "análisis información_";

function useTypewriter(words: string[], reducedMotion: boolean) {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (reducedMotion) {
      const fullWord = words[wordIndex].slice(0, -1);
      setCharIndex(fullWord.length);
      setIsDeleting(false);
      const timer = setTimeout(() => {
        setWordIndex((i) => (i + 1) % words.length);
      }, 2600);
      return () => clearTimeout(timer);
    }

    const currentWord = words[wordIndex].slice(0, -1);

    let speed = 55; // Typing speed 45-65ms

    if (isDeleting) {
      speed = 30; // Deleting speed 25-35ms
    }

    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex === currentWord.length) {
      // Pause at end of word for 1000ms
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 1000);
    } else if (isDeleting && charIndex === 0) {
      // Finished deleting, move to next word
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      // Step character
      timer = setTimeout(() => {
        setCharIndex((prev) => (isDeleting ? prev - 1 : prev + 1));
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [wordIndex, charIndex, isDeleting, reducedMotion, words]);

  const currentWord = words[wordIndex].slice(0, -1);
  return currentWord.slice(0, charIndex);
}

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Detect prefers-reduced-motion at component level so it's reactive
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Control video playback based on reduced-motion preference
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (reducedMotion) {
      video.pause();
    } else {
      video.play().catch(() => {
        // Autoplay blocked by browser policy — poster stays visible
      });
    }
  }, [reducedMotion]);

  const displayedText = useTypewriter(ROTATING, reducedMotion);

  return (
    <section
      id="top"
      className="relative overflow-hidden"
      style={{ minHeight: "clamp(600px, 90vh, 860px)" }}
    >
      {/* ── Background video (decorative, behind all content) ── */}
      <video
        ref={videoRef}
        autoPlay={!reducedMotion}
        muted
        loop
        playsInline
        preload="metadata"
        poster="/media/data-hero-poster.webp"
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <source src="/media/data-hero-720p.mp4" type="video/mp4" />
      </video>

      {/* ── Layer 1: deep navy semi-transparent base for readability ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "oklch(0.16 0.06 265 / 0.72)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* ── Layer 2: subtle brand gradient (blue → violet → pink) ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(900px 500px at 15% 0%, oklch(0.65 0.18 235 / 0.22) 0%, transparent 65%)," +
            "radial-gradient(800px 500px at 90% 30%, oklch(0.62 0.22 310 / 0.18) 0%, transparent 60%)," +
            "radial-gradient(600px 300px at 50% 110%, oklch(0.72 0.18 350 / 0.14) 0%, transparent 55%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* ── Content ── */}
      <div
        className="relative mx-auto flex max-w-5xl flex-col items-center px-4 text-center sm:px-6"
        style={{
          paddingTop: "clamp(5rem, 12vw, 9rem)",
          paddingBottom: "clamp(4rem, 10vw, 8rem)",
          zIndex: 10,
        }}
      >
        <h1
          className="font-display font-bold leading-[1.05] tracking-tight"
          style={{ fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)" }}
        >
          <span className="block text-white">IA aplicada para optimizar</span>

          {/* Rotating typewriter word row — height reserved for longest item */}
          <span
            className="relative mt-3 block"
            aria-live="polite"
            style={{ minHeight: "1.15em" }}
          >
            {/* Invisible ghost keeps the row width stable */}
            <span
              aria-hidden="true"
              className="invisible inline-block text-gradient-brand"
              style={{ fontSize: "inherit" }}
            >
              {LONGEST.slice(0, -1)}
            </span>

            {/* Typewriter word — absolutely centred over the ghost */}
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="inline-block text-gradient-brand">
                {displayedText}
              </span>
              <span
                className="ml-1 inline-block translate-y-[-0.05em] font-display text-gradient-brand caret-blink"
              >
                _
              </span>
            </span>
          </span>
        </h1>

        <p
          className="mx-auto mt-8 max-w-2xl leading-relaxed"
          style={{
            fontSize: "clamp(1rem, 1.8vw, 1.25rem)",
            color: "oklch(0.88 0.02 260)",
          }}
        >
          Los más avanzados Modelos y Agentes IA aplicados en bots y procesos, por un
          equipo experto en la optimización de procesos de empresa, venta y servicio al
          cliente.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
          <a
            href="#demo"
            className="inline-flex w-full items-center justify-center rounded-full bg-gradient-brand px-8 py-3.5 text-sm font-semibold text-white shadow-elevated transition-transform hover:scale-[1.02] sm:w-auto"
          >
            Agendar una demo
          </a>
          <a
            href="/ejemplos-y-demos/"
            className="inline-flex w-full items-center justify-center rounded-full border px-8 py-3.5 text-sm font-semibold backdrop-blur transition-colors hover:bg-white/10 sm:w-auto"
            style={{
              borderColor: "oklch(1 0 0 / 0.25)",
              color: "oklch(0.95 0.01 260)",
              background: "oklch(1 0 0 / 0.08)",
            }}
          >
            Ejemplos y casos de uso
          </a>
        </div>
      </div>
    </section>
  );
}
