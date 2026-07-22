export function Clients() {
  return (
    <section className="bg-white pt-20 pb-24 sm:pt-24 sm:pb-28 text-foreground">
      <div className="mx-auto max-w-[1250px] px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
            Grupo eCustomer con más de 15 años de experiencia en el mercado
          </h2>
        </div>

        {/* Client Logos Image */}
        <div className="mx-auto mt-10 max-w-[1024px]">
          <img
            src="/doobot/Logos-clientes-1024x289.webp"
            alt="Clientes de Grupo eCustomer"
            loading="lazy"
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
