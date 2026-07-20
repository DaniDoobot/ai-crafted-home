export function IntelligenceSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Inteligencia
            <br />
            <span className="text-gradient-brand">sobre cada interacción</span>
          </h2>
          <p className="mt-6 text-base text-muted-foreground sm:text-lg">
            Comprende y controla todo lo que ocurre en tus interacciones por IA
            Generativa.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 items-end gap-6 md:grid-cols-12">
          <div className="md:col-span-3">
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
              <img
                src="https://doobot.ai/wp-content/uploads/2025/08/smart-1-540x1024.webp"
                alt="Conversación WhatsApp automatizada por doobot.ai"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-6">
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-elevated">
              <img
                src="https://doobot.ai/wp-content/uploads/2025/08/Reports-1024x563.webp"
                alt="Panel de reportes de conversaciones doobot.ai"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
              <img
                src="https://doobot.ai/wp-content/uploads/2025/08/smart-2-541x1024.webp"
                alt="Valoración de conversaciones por IA"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
