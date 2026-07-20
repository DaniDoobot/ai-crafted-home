import { Quote } from "lucide-react";

export function Testimonial() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <figure className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 rounded-3xl border border-border bg-card p-8 shadow-soft sm:p-12 md:grid-cols-[220px_1fr]">
          <div className="mx-auto h-40 w-40 shrink-0 overflow-hidden rounded-full ring-4 ring-white/60 shadow-elevated md:h-52 md:w-52">
            <img
              src="https://doobot.ai/wp-content/uploads/2025/08/Foto-Ramon-Almendro.webp"
              alt="Ramón Almendro, CEO Boston Medical Group"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <Quote className="h-8 w-8 text-brand-violet" />
            <blockquote className="mt-4 font-display text-xl leading-snug text-foreground sm:text-2xl">
              «El trabajo de doobot.ai ha sido vital, nos han aportado tanto el
              conocimiento operativo como la tecnología y las integraciones para hacer
              posible lo que parecía una idea futurista».
            </blockquote>
            <figcaption className="mt-6 text-sm text-muted-foreground">
              <strong className="block font-semibold text-foreground">
                Ramón Almendro
              </strong>
              CEO Boston Medical Group
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  );
}
