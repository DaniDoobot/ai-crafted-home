export function Clients() {
  return (
    <section className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
            Grupo eCustomer con más de 15 años de experiencia en el mercado
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-5xl">
          <img
            src="/doobot/Logos-clientes-1024x289.webp"
            alt="Clientes de Grupo eCustomer"
            loading="lazy"
            className="h-auto w-full"
          />
        </div>

        <div className="mx-auto mt-16 flex max-w-4xl flex-col items-center justify-center gap-8 sm:flex-row sm:gap-12">
          <img
            src="/doobot/Logs-RGPD-1024x364.png"
            alt="Cumplimiento RGPD"
            loading="lazy"
            className="h-16 w-auto sm:h-20"
          />
          <img
            src="/doobot/Logo-ISO.webp"
            alt="Certificación ISO"
            loading="lazy"
            className="h-16 w-auto sm:h-20"
          />
        </div>
      </div>
    </section>
  );
}
