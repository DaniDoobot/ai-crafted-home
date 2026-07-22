import React, { useEffect, useRef, useState } from "react";

interface RevealOnScrollProps {
  children: React.ReactNode;
  variant?: "fade-left" | "fade-right";
  duration?: "fast" | "slow"; // fast=750ms, slow=2000ms
  delay?: number; // in ms
  className?: string;
  style?: React.CSSProperties;
}

export function RevealOnScroll({
  children,
  variant = "fade-right",
  duration = "fast",
  delay = 0,
  className = "",
  style = {},
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setIsVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [reducedMotion]);

  if (reducedMotion) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  const durationMs = duration === "slow" ? 2000 : 750;
  const initialTranslateX = variant === "fade-left" ? "-80px" : "80px";

  const transitionStyle: React.CSSProperties = {
    ...style,
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "none" : `translateX(${initialTranslateX})`,
    transitionProperty: "opacity, transform",
    transitionDuration: `${durationMs}ms`,
    transitionDelay: `${delay}ms`,
    transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
    willChange: "opacity, transform",
  };

  return (
    <div ref={ref} className={className} style={transitionStyle}>
      {children}
    </div>
  );
}
