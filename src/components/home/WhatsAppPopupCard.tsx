import { Bot, CheckCheck, X } from "lucide-react";

interface WhatsAppPopupCardProps {
  onClose: () => void;
  whatsappUrl: string;
  title?: string;
  subtitle?: string;
  greeting?: string;
  description?: string;
  ctaText?: string;
}

export function WhatsAppPopupCard({
  onClose,
  whatsappUrl,
  title = "doobot.ai",
  subtitle = "Asistente virtual",
  greeting = "¡Hola! 👋 ¿En qué podemos ayudarte?",
  description = "Escríbenos para resolver cualquier duda, solicitar información o conocer mejor nuestras soluciones.",
  ctaText = "Hablar por WhatsApp",
}: WhatsAppPopupCardProps) {
  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Ventana de chat de WhatsApp con doobot.ai"
      className="mb-3 w-[320px] sm:w-[360px] max-w-[calc(100vw-36px)] overflow-hidden rounded-2xl sm:rounded-3xl border border-border/80 bg-background shadow-2xl shadow-slate-950/25 transition-all duration-200 origin-bottom-right animate-in fade-in zoom-in-95 slide-in-from-bottom-2 select-none"
    >
      {/* Header with doobot branding */}
      <div className="flex items-center justify-between gap-3 bg-gradient-to-r from-[#07162C] via-[#0D2240] to-[#07162C] px-4 py-3.5 sm:px-5 sm:py-4 border-b border-white/10">
        <div className="flex items-center gap-3 min-w-0">
          {/* Avatar with Robot Icon + Indicator */}
          <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/15 border border-emerald-400/30 text-emerald-400 shadow-inner">
            <Bot className="h-6 w-6 shrink-0" aria-hidden="true" />
            <span
              className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-[#07162C]"
              aria-hidden="true"
            />
          </div>

          {/* Identity & Descriptor */}
          <div className="min-w-0 flex-1">
            <p className="truncate text-[15px] font-bold text-white tracking-tight leading-tight">
              {title}
            </p>
            <p className="text-[12px] text-emerald-400 font-medium leading-tight mt-0.5">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Close Button with generous click target */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar ventana de WhatsApp"
          className="rounded-full p-2 text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 shrink-0"
        >
          <X className="h-4.5 w-4.5" />
        </button>
      </div>

      {/* Body with Chat Bubble */}
      <div className="bg-slate-50 dark:bg-slate-900/90 p-4 sm:p-5">
        <div className="rounded-2xl rounded-tl-sm bg-white dark:bg-slate-800 p-3.5 sm:p-4 shadow-sm border border-slate-200/80 dark:border-slate-700/60">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-1.5">
            <Bot className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span>doobot.ai</span>
          </div>
          <p className="text-[14px] text-slate-800 dark:text-slate-100 font-medium leading-relaxed">
            {greeting}
          </p>
          <p className="text-[13px] text-slate-600 dark:text-slate-300 mt-1.5 leading-normal">
            {description}
          </p>
          <div className="flex items-center justify-end gap-1 mt-2 text-[10px] text-slate-400 dark:text-slate-500 font-medium">
            <span>doobot.ai</span>
            <CheckCheck className="h-3.5 w-3.5 text-emerald-500" aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* Footer / CTA Button */}
      <div className="bg-slate-50 dark:bg-slate-900/90 px-4 pb-4 sm:px-5 sm:pb-5">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Hablar por WhatsApp con doobot.ai"
          className="w-full inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#25D366] hover:bg-[#1FAF55] px-4 py-3 sm:py-3.5 text-sm sm:text-[15px] font-bold text-white shadow-md shadow-emerald-600/25 hover:shadow-lg hover:shadow-emerald-600/35 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/50"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-5 w-5 fill-current shrink-0"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.419h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
          </svg>
          <span>{ctaText}</span>
        </a>
      </div>
    </div>
  );
}
