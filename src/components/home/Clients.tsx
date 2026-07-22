export function Clients() {
  return (
    <section className="bg-white py-11 sm:py-14 lg:pt-[58px] lg:pb-[52px] text-foreground">
      <div className="mx-auto max-w-[1250px] px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold text-[#050547] sm:text-3xl lg:text-4xl leading-tight">
            Grupo eCustomer con más de 15 años de experiencia en el mercado
          </h2>
        </div>

        {/* Client Logos Image */}
        <div className="mx-auto mt-8 sm:mt-10 max-w-[1024px] overflow-hidden">
          <img
            src="/doobot/Logos-clientes-1024x289.webp"
            alt="Clientes de Grupo eCustomer"
            loading="lazy"
            className="h-auto w-full object-contain mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
