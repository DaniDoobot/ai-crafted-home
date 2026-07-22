import { useEffect, useRef, useState } from "react";

function clamp(val: number, min: number, max: number) {
  return Math.min(max, Math.max(min, val));
}

// Measured pixel bounds in Reports-1024x563.webp:
// Canvas width: 1024px
// Screen left bezel: 90px (screenLeftRatio = 90 / 1024 = 0.087890625)
// Screen right bezel: 930px (screenRightRatio = 930 / 1024 = 0.908203125)
// Screen width ratio: 840 / 1024 = 0.8203125 (82.03%)
const SCREEN_LEFT_RATIO = 90 / 1024;
const SCREEN_RIGHT_RATIO = 930 / 1024;
const INITIAL_OVERLAP = 4; // 4px overlap with screen bezel

export function IntelligenceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const compositionRef = useRef<HTMLDivElement>(null);
  const reportRef = useRef<HTMLDivElement>(null);
  const leftWrapperRef = useRef<HTMLDivElement>(null);
  const rightWrapperRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLImageElement>(null);
  const rightRef = useRef<HTMLImageElement>(null);

  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // ── Dynamically compute and position wrappers relative to the inner SCREEN edges ──
  const updateWrapperPositions = () => {
    const report = reportRef.current;
    const composition = compositionRef.current;
    const leftWrapper = leftWrapperRef.current;
    const rightWrapper = rightWrapperRef.current;
    if (!report || !composition || !leftWrapper || !rightWrapper) return;

    const reportRect = report.getBoundingClientRect();
    const compositionRect = composition.getBoundingClientRect();
    if (reportRect.width === 0) return;

    const screenLeft = reportRect.left + reportRect.width * SCREEN_LEFT_RATIO;
    const screenRight = reportRect.left + reportRect.width * SCREEN_RIGHT_RATIO;

    const leftPhoneWidth = leftWrapper.getBoundingClientRect().width || 250;

    const leftWrapperX =
      screenLeft - compositionRect.left - leftPhoneWidth + INITIAL_OVERLAP;
    const rightWrapperX = screenRight - compositionRect.left - INITIAL_OVERLAP;

    leftWrapper.style.left = `${leftWrapperX}px`;
    rightWrapper.style.left = `${rightWrapperX}px`;
  };

  useEffect(() => {
    updateWrapperPositions();

    if (typeof ResizeObserver === "undefined") return;

    const ro = new ResizeObserver(() => {
      requestAnimationFrame(updateWrapperPositions);
    });

    if (compositionRef.current) ro.observe(compositionRef.current);
    if (reportRef.current) ro.observe(reportRef.current);

    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      if (leftRef.current) leftRef.current.style.transform = "translateX(0px)";
      if (rightRef.current) rightRef.current.style.transform = "translateX(0px)";
      return;
    }

    const section = sectionRef.current;
    const left = leftRef.current;
    const right = rightRef.current;
    if (!section || !left || !right) return;

    let rafId: number;
    let visible = false;

    const tick = () => {
      if (!visible) return;
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;

      // Progress of section passing through viewport (0 to 100%)
      const rawProgress = ((vh - rect.top) / (vh + rect.height)) * 100;
      const viewportProgress = clamp(rawProgress, 0, 100);

      const w = window.innerWidth;
      // Travel: 42px desktop, 28px tablet, 14px mobile
      const travel = w >= 1024 ? 42 : w >= 640 ? 28 : 14;

      // Shared normalized progress so both phones start and end at the exact same scroll timing
      const sharedProgress = clamp(
        (viewportProgress - 45) / (85 - 45),
        0,
        1
      );

      // Left phone moves outward left (-travel) from attached state
      const leftX = -sharedProgress * travel;
      left.style.transform = `translate3d(${leftX}px, 0, 0)`;

      // Right phone moves outward right (+travel) from attached state
      const rightX = sharedProgress * travel;
      right.style.transform = `translate3d(${rightX}px, 0, 0)`;

      rafId = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        visible = entries[0].isIntersecting;
        if (visible) {
          rafId = requestAnimationFrame(tick);
        } else {
          cancelAnimationFrame(rafId);
        }
      },
      { rootMargin: "200px 0px 200px 0px" }
    );

    io.observe(section);
    tick();

    return () => {
      io.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, [reducedMotion]);

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading & Paragraph Block (z-20 and relative to stay 100% visible) */}
        <div className="relative z-20 mx-auto max-w-3xl text-center">
          <h2
            className="font-display font-bold text-foreground"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)", lineHeight: 1.1 }}
          >
            Inteligencia
            <br />
            <span className="text-gradient-brand">sobre cada interacción</span>
          </h2>
          <p
            className="mt-6 text-muted-foreground"
            style={{ fontSize: "clamp(1rem, 1.6vw, 1.25rem)", lineHeight: 1.7 }}
          >
            Comprende y controla todo lo que ocurre en tus interacciones por IA
            Generativa.
          </p>
        </div>

        {/* ── Composition Container ── */}
        <div
          ref={compositionRef}
          className="relative mx-auto flex items-end justify-center overflow-visible"
          style={{
            marginTop: "clamp(60px, 7vw, 100px)",
            maxWidth: "1280px",
            width: "100%",
          }}
        >
          {/* Central report image (in normal flow, relative, z-index 10, static) */}
          <div
            ref={reportRef}
            className="relative mx-auto"
            style={{
              width: "clamp(200px, 60vw, 750px)",
              zIndex: 10,
            }}
          >
            <img
              src="/doobot/Reports-1024x563.webp"
              alt="Panel de reportes de conversaciones doobot.ai"
              loading="lazy"
              onLoad={updateWrapperPositions}
              className="h-auto w-full block"
            />
          </div>

          {/*
            Left phone wrapper (smart-1):
            Dynamically positioned relative to inner SCREEN left edge (screenLeft)
            Vertical offset (-45px desktop / -28px tablet / -14px mobile) preserved intact.
          */}
          <div
            ref={leftWrapperRef}
            className="absolute z-1 -translate-y-[14px] md:-translate-y-[28px] xl:-translate-y-[45px]"
            style={{
              top: "clamp(-30px, -10vw, -100px)",
              width: "clamp(70px, 20vw, 250px)",
              height: "auto",
            }}
          >
            <img
              ref={leftRef}
              src="/doobot/smart-1-540x1024.webp"
              alt="Conversación WhatsApp automatizada por doobot.ai"
              loading="lazy"
              className="h-auto w-full block"
              style={{
                willChange: "transform",
                transform: "translate3d(0, 0, 0)",
              }}
            />
          </div>

          {/*
            Right phone wrapper (smart-2):
            Dynamically positioned relative to inner SCREEN right edge (screenRight)
            Vertical offset (-45px desktop / -28px tablet / -14px mobile) preserved intact.
          */}
          <div
            ref={rightWrapperRef}
            className="absolute z-1 -translate-y-[14px] md:-translate-y-[28px] xl:-translate-y-[45px]"
            style={{
              top: "clamp(-30px, -10vw, -100px)",
              width: "clamp(70px, 20vw, 250px)",
              height: "auto",
            }}
          >
            <img
              ref={rightRef}
              src="/doobot/smart-2-541x1024.webp"
              alt="Valoración de conversaciones por IA"
              loading="lazy"
              className="h-auto w-full block"
              style={{
                willChange: "transform",
                transform: "translate3d(0, 0, 0)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
