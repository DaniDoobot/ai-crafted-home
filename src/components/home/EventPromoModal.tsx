import { useEffect, useState } from "react";
import { ArrowRight, Calendar, MapPin, Sparkles, X } from "lucide-react";

const STORAGE_KEY = "doobot_event_modal_dismissed";

export function EventPromoModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      const dismissed = sessionStorage.getItem(STORAGE_KEY);
      if (!dismissed) {
        const timer = setTimeout(() => {
          setIsOpen(true);
        }, 800);
        return () => clearTimeout(timer);
      }
    } catch {
      // Ignore if sessionStorage is not accessible
    }
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // Ignore storage write errors
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="event-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-cyan-500/30 bg-slate-900/95 p-6 sm:p-8 text-white shadow-2xl shadow-cyan-500/20 backdrop-blur-xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow effect behind modal */}
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full opacity-30 blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(6, 182, 212, 0.8) 0%, rgba(99, 102, 241, 0.4) 100%)",
          }}
        />

        {/* Close button */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Cerrar ventana emergente"
          className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700/80 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Header Badge */}
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Taller presencial · 24 septiembre
          </span>
          <span className="text-xs text-slate-400 font-medium">Aforo limitado</span>
        </div>

        {/* Title */}
        <h3
          id="event-modal-title"
          className="mt-4 font-display text-2xl sm:text-3xl font-bold tracking-tight text-white leading-snug"
        >
          <span className="block text-white">Bot de voz:</span>
          <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            calienta que sales...!!
          </span>
        </h3>

        {/* Description & bullets */}
        <p className="mt-2.5 text-sm text-slate-300 leading-relaxed">
          Taller práctico presencial de doobot.ai dentro de la Semana Contact Center 2026.
        </p>

        <div className="mt-4 space-y-2.5 rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-xs sm:text-sm text-slate-200">
          <div className="flex items-center gap-2.5">
            <Calendar className="h-4 w-4 text-cyan-400 shrink-0" />
            <span className="font-semibold text-white">24 de septiembre · 16:00 a 17:30</span>
          </div>
          <div className="flex items-center gap-2.5">
            <MapPin className="h-4 w-4 text-cyan-400 shrink-0" />
            <span>Paseo de la Castellana, 81 · Torre BBVA · Planta 15</span>
          </div>
          <div className="flex items-start gap-2.5 pt-1 border-t border-white/5">
            <Sparkles className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
            <span className="text-slate-300">
              Descubre cómo aplicar bots de voz basados en IA para selección, formación y evaluación de agentes y servicios.
            </span>
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
          <a
            href="/evento-bot-de-voz-contact-center-2026/#inscripcion"
            onClick={handleClose}
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02] hover:shadow-cyan-500/35 text-center"
          >
            <span>Reservar mi plaza</span>
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="/evento-bot-de-voz-contact-center-2026/"
            onClick={handleClose}
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-colors text-center"
          >
            Ver programa
          </a>
        </div>
      </div>
    </div>
  );
}
