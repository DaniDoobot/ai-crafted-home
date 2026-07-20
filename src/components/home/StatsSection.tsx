const STATS = [
  { value: "+15", suffix: " años", label: "Años de experiencia" },
  { value: "550K", suffix: "+", label: "Interacciones IA anuales" },
  { value: "100", suffix: "+", label: "Clientes satisfechos" },
  { value: "500", suffix: "+", label: "Procesos automatizados" },
];

export function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-dark py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(600px_300px_at_20%_20%,white,transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
          <div className="text-white">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium tracking-wider text-white/80">
              KEY OUTPUTS
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Optimiza con IA: cifras doobot.ai
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/75">
              La implementación de soluciones doobot.ai basadas en IA Generativa te
              permitirá optimizar tiempos de respuesta, resolución y costes.
            </p>
            <a
              href="#demo"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-foreground shadow-elevated transition-transform hover:scale-[1.02]"
            >
              Agendar una demo
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm"
              >
                <div className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                  {s.value}
                  <span className="text-brand-pink">{s.suffix}</span>
                </div>
                <div className="mt-2 text-[11px] font-medium uppercase tracking-wider text-white/70 sm:text-xs">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
