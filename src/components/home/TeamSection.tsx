import { Check } from "lucide-react";

const BULLETS = [
  "15 años optimizando operaciones en venta y servicio al cliente.",
  "Acompañamos la implementación para garantizar resultados.",
  "Tecnología propia para adaptarnos a la necesidad de tu negocio.",
];

export function TeamSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-gradient-dark shadow-elevated">
          <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
            <div className="relative min-h-[280px]">
              <img
                src="https://doobot.ai/wp-content/uploads/2025/08/equipo-1024x678.webp"
                alt="Equipo doobot.ai"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center gap-6 p-8 text-white sm:p-12">
              <h2 className="font-display text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
                Un equipo experto implicado en el éxito de cada proyecto
              </h2>
              <ul className="flex flex-col gap-4">
                {BULLETS.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm sm:text-base">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/15">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-white/90">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
