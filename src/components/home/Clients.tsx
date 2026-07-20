const CLIENTS = [
  "Vodafone",
  "AXA",
  "Iberdrola",
  "SEUR",
  "LagunAro",
  "Boston Medical",
  "Redsys",
  "Comunidad de Madrid",
  "Correos",
  "Airbus",
  "Vaughan",
  "Atento",
];

export function Clients() {
  return (
    <section className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
            Grupo eCustomer
          </h2>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            con más de 15 años de experiencia en el mercado
          </p>
        </div>

        <ul className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-6">
          {CLIENTS.map((name) => (
            <li
              key={name}
              className="flex h-20 items-center justify-center rounded-2xl border border-border bg-card px-4 text-sm font-semibold text-foreground/70 shadow-soft transition-colors hover:text-foreground"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
