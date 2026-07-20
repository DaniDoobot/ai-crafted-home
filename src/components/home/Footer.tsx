export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <span className="font-display text-2xl font-bold tracking-tight">
            doobot<span className="text-gradient-brand">.ai_</span>
          </span>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/70">
            IA Generativa aplicada a bots y procesos empresariales. Parte de Grupo
            eCUSTOMER, agente digitalizador del Kit Digital y Kit Consulting.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-primary-foreground">Soluciones</h3>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-primary-foreground/70">
            <li><a href="#soluciones" className="hover:text-primary-foreground">Chat & Voice Bots</a></li>
            <li><a href="#soluciones" className="hover:text-primary-foreground">AI Agents</a></li>
            <li><a href="#soluciones" className="hover:text-primary-foreground">Analytics Bots</a></li>
            <li><a href="#soluciones" className="hover:text-primary-foreground">RAG · Embedded</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-primary-foreground">Empresa</h3>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-primary-foreground/70">
            <li><a href="#ejemplos" className="hover:text-primary-foreground">Ejemplos y demos</a></li>
            <li><a href="#voice-demo" className="hover:text-primary-foreground">Demo Voice Bot</a></li>
            <li><a href="#premio" className="hover:text-primary-foreground">Premio Mejor Tecnología</a></li>
            <li><a href="#demo" className="hover:text-primary-foreground">Agendar una demo</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-primary-foreground/60 sm:flex-row sm:px-6 lg:px-8">
          <span>© {new Date().getFullYear()} doobot.ai — Grupo eCUSTOMER</span>
          <span>Todos los derechos reservados.</span>
        </div>
      </div>
    </footer>
  );
}
