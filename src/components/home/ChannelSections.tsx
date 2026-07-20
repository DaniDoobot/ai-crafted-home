export function WhatsAppSection() {
  return (
    <section className="bg-gradient-soft py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
        <div className="order-2 md:order-1">
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-elevated">
            <img
              src="https://doobot.ai/wp-content/uploads/2025/08/smart-1-540x1024.webp"
              alt="WhatsApp automatizado con IA doobot.ai"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="order-1 md:order-2">
          <span className="inline-flex rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-foreground/70 shadow-soft">
            Canal
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            WhatsApp como medio de interacción automatizado en{" "}
            <span className="text-gradient-brand">venta y servicio al cliente</span>.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Convierte WhatsApp en herramienta clave en la relación con tus clientes,
            máxima cercanía, agilidad y comodidad empleando Inteligencia Artificial.
          </p>
        </div>
      </div>
    </section>
  );
}

export function VoiceBotsSection() {
  return (
    <section id="voice-demo" className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
        <div>
          <span className="inline-flex rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground/70">
            Voice Bots
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            Voice Bots con el realismo y empatía de las{" "}
            <span className="text-gradient-brand">conversaciones entre personas</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Para agendar citas, facilitar información, discriminar la necesidad del
            cliente, dar respuesta inmediata, todo lo que el cliente puede necesitar,
            de forma inmediata.
          </p>
        </div>
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-elevated">
          <img
            src="https://doobot.ai/wp-content/uploads/2025/08/Reports-1024x563.webp"
            alt="Analítica de Voice Bots doobot.ai"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
