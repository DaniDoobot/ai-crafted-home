import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const SOLUCIONES = [
  { label: "Chat Bot WhatsApp", href: "/chat-bot-whatsapp-2/" },
  { label: "Chat Bot Web", href: "/chat-bot-web-2/" },
  { label: "AI Analytics", href: "/ia-analytics/" },
  { label: "Voice Bots Teléfono", href: "/voice-bot-telefono/" },
  { label: "AI ecommerce", href: "https://nwee.ai/" },
  { label: "Vídeo AI Analytics", href: "/video-ai-analytics/" },
];

const NAV = [
  { label: "Ejemplos y demos", href: "/ejemplos-y-demos/" },
  { label: "Demo Voice Bot Asistencia", href: "/demo-voice-bot-asistencia/" },
  { label: "Premio Mejor Tecnología", href: "/premio-mejor-tecnologia/" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [solOpen, setSolOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <a href="/" className="flex shrink-0 items-center" aria-label="doobot.ai">
          <img
            src="/doobot/logo-negro-300x40-1.png"
            alt="doobot.ai"
            className="h-8 w-auto"
          />
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegación principal">
          <div
            className="relative"
            onMouseEnter={() => setSolOpen(true)}
            onMouseLeave={() => setSolOpen(false)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              onClick={() => setSolOpen((v) => !v)}
              aria-expanded={solOpen}
            >
              Soluciones
              <ChevronDown className="h-3.5 w-3.5 opacity-60" />
            </button>
            {solOpen && (
              <div className="absolute left-0 top-full min-w-[240px] rounded-xl border border-border bg-background p-2 shadow-elevated">
                {SOLUCIONES.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="block rounded-md px-3 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-foreground"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            )}
          </div>
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#demo"
            className="hidden rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-transform hover:scale-[1.02] sm:inline-flex"
          >
            Agendar una demo
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border lg:hidden"
            aria-label="Abrir menú"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-foreground/50">
              Soluciones
            </div>
            {SOLUCIONES.map((s) => (
              <a
                key={s.label}
                href={s.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-muted"
              >
                {s.label}
              </a>
            ))}
            <div className="my-2 border-t border-border" />
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-muted"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#demo"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gradient-brand px-5 py-3 text-center text-sm font-semibold text-white sm:hidden"
            >
              Agendar una demo
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
