export function AwardSection() {
  return (
    <section id="premio" className="bg-gradient-soft py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center">
            <img
              src="/doobot/Premio-Exc-Rel.png"
              alt="Sello Premio Excelencia Relación con Clientes 2025"
              loading="lazy"
              className="h-28 w-auto sm:h-32"
            />
          </div>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            Premio{" "}
            <span className="text-gradient-brand">"Mejor Tecnología"</span> en los
            premios Excelencia Relación con Clientes 2025, en la Categoría Engagement
          </h2>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="https://premiosrelacionclientes.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-border bg-background px-6 py-2.5 text-sm font-semibold text-foreground shadow-soft transition-colors hover:bg-muted"
            >
              Ver Premios Relación con Clientes
            </a>
            <a
              href="https://newsletteraeerc.ecustomer.es/t/r-e-tktdqit-pcilijuly-y/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-border bg-background px-6 py-2.5 text-sm font-semibold text-foreground shadow-soft transition-colors hover:bg-muted"
            >
              Ver Ganadores 2025
            </a>
            <a
              href="https://isanidad.com/350623/boston-medical-galardonada-por-su-innovacion-en-la-relacion-con-el-paciente-con-la-ia-de-doobot-ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-border bg-background px-6 py-2.5 text-sm font-semibold text-foreground shadow-soft transition-colors hover:bg-muted"
            >
              Ver eco en prensa
            </a>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl shadow-elevated">
          <img
            src="https://doobot.ai/wp-content/uploads/2025/11/Premio-Excelencia-doobot.ai_.jpg"
            alt="Entrega del Premio Mejor Tecnología a doobot.ai"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
