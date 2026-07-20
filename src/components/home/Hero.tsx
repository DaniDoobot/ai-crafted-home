import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const ROTATING = [
  "ventas_",
  "servicio al cliente_",
  "citas_",
  "training y dudas_",
  "análisis información_",
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % ROTATING.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  const word = ROTATING[index];
  const base = word.slice(0, -1);

  return (
    <section id="top" className="relative overflow-hidden bg-gradient-hero">
      <div className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(600px_300px_at_50%_120%,var(--brand-violet)/20,transparent)]" />
      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 pt-20 pb-24 text-center sm:px-6 sm:pt-28 sm:pb-32 lg:pt-36 lg:pb-40">

        <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="block">IA aplicada para optimizar</span>
          <span className="mt-3 block min-h-[1.15em]" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -18, filter: "blur(6px)" }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block text-gradient-brand"
              >
                {base}
              </motion.span>
            </AnimatePresence>
            <span className="ml-1 inline-block translate-y-[-0.05em] font-display text-gradient-brand caret-blink">
              _
            </span>
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
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
            className="inline-flex w-full items-center justify-center rounded-full border border-border bg-background/70 px-8 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-muted sm:w-auto"
          >
            Ejemplos y casos de uso
          </a>
        </div>
      </div>
    </section>
  );
}
