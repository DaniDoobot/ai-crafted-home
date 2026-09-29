import { useState, useEffect } from "react";
import { Bot, X } from "lucide-react";

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
  const [isTyping, setIsTyping] = useState(true);
  const [messageTime, setMessageTime] = useState("");

  // Calculate local time on client
  useEffect(() => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    setMessageTime(`${hours}:${minutes}`);
  }, []);

  // Manage typing indicator sequence (approx 900ms) with reduced motion support
  useEffect(() => {
    // Check if user prefers reduced motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setIsTyping(false);
      return;
    }

    setIsTyping(true);
    const timer = setTimeout(() => {
      setIsTyping(false);
    }, 900);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Ventana de chat de WhatsApp con doobot.ai"
      className="mb-3 w-[330px] sm:w-[360px] max-w-[calc(100vw-32px)] overflow-hidden rounded-2xl sm:rounded-3xl border border-black/10 dark:border-white/10 bg-[#EFEAE2] dark:bg-[#0B141A] shadow-2xl shadow-slate-950/25 transition-all duration-200 origin-bottom-right animate-in fade-in zoom-in-95 slide-in-from-bottom-2 select-none"
    >
      <style>{`
        @keyframes waTypingDot {
          0%, 60%, 100% {
            transform: translateY(0);
            opacity: 0.35;
          }
          30% {
            transform: translateY(-3.5px);
            opacity: 1;
          }
        }
        @keyframes waMessageFadeIn {
          from {
            opacity: 0;
            transform: translateY(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .wa-typing-dot {
            animation: none !important;
            opacity: 0.7 !important;
            transform: none !important;
          }
          .wa-message-entrance {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>

      {/* Header inspired by WhatsApp conversation top bar */}
      <div className="flex items-center justify-between gap-3 bg-[#075E54] dark:bg-[#1F2C34] px-4 py-3 sm:px-4.5 sm:py-3.5 text-white shadow-sm">
        <div className="flex items-center gap-3 min-w-0">
          {/* Circular avatar with Robot Icon + Indicator */}
          <div className="relative flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full bg-white/15 border border-white/20 text-white shadow-inner">
            <Bot className="h-5 w-5 sm:h-6 sm:w-6 shrink-0" aria-hidden="true" />
            <span
              className="absolute bottom-0 right-0 h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#25D366] ring-2 ring-[#075E54] dark:ring-[#1F2C34]"
              aria-hidden="true"
            />
          </div>

          {/* Identity & Descriptor */}
          <div className="min-w-0 flex-1">
            <p className="truncate text-[15px] sm:text-[16px] font-bold text-white tracking-tight leading-tight">
              {title}
            </p>
            <p className="text-[12px] sm:text-[12.5px] text-emerald-200/90 dark:text-slate-300 font-normal leading-tight mt-0.5">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Close Button with generous click target */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar ventana de WhatsApp"
          className="rounded-full p-1.5 sm:p-2 text-white/80 hover:text-white hover:bg-white/15 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 shrink-0"
        >
          <X className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
        </button>
      </div>

      {/* Chat Area / Conversation View */}
      <div className="p-3.5 sm:p-4 min-h-[140px] flex flex-col justify-start">
        {isTyping ? (
          /* Typing indicator state (State 1) */
          <div
            role="status"
            aria-label="doobot.ai está escribiendo"
            className="relative self-start inline-flex items-center gap-1.5 px-4 py-3 rounded-2xl rounded-tl-xs bg-white dark:bg-[#202C33] shadow-[0_1px_1px_rgba(0,0,0,0.08)] border border-black/[0.04] dark:border-white/[0.05]"
          >
            {/* Small speech tail / notch */}
            <svg
              className="absolute -left-2 top-0 w-2.5 h-3 text-white dark:text-[#202C33] fill-current"
              viewBox="0 0 8 13"
              aria-hidden="true"
            >
              <path d="M1.533 3.568L8 12.136V0H2.812C1.042 0 .149 2.128 1.533 3.568z" />
            </svg>
            <span className="sr-only">Escribiendo...</span>
            <span
              className="wa-typing-dot h-2 w-2 rounded-full bg-slate-500 dark:bg-slate-400 inline-block"
              style={{
                animation: "waTypingDot 1.2s infinite ease-in-out",
                animationDelay: "0ms",
              }}
              aria-hidden="true"
            />
            <span
              className="wa-typing-dot h-2 w-2 rounded-full bg-slate-500 dark:bg-slate-400 inline-block"
              style={{
                animation: "waTypingDot 1.2s infinite ease-in-out",
                animationDelay: "180ms",
              }}
              aria-hidden="true"
            />
            <span
              className="wa-typing-dot h-2 w-2 rounded-full bg-slate-500 dark:bg-slate-400 inline-block"
              style={{
                animation: "waTypingDot 1.2s infinite ease-in-out",
                animationDelay: "360ms",
              }}
              aria-hidden="true"
            />
          </div>
        ) : (
          /* Message bubble state (State 2) */
          <div
            className="wa-message-entrance relative self-start max-w-[94%] rounded-2xl rounded-tl-xs bg-white dark:bg-[#202C33] p-3 sm:p-3.5 shadow-[0_1px_2px_rgba(0,0,0,0.1)] border border-black/[0.04] dark:border-white/[0.05]"
            style={{
              animation: "waMessageFadeIn 220ms cubic-bezier(0.16, 1, 0.3, 1) forwards",
            }}
          >
            {/* Small speech tail / notch */}
            <svg
              className="absolute -left-2 top-0 w-2.5 h-3 text-white dark:text-[#202C33] fill-current"
              viewBox="0 0 8 13"
              aria-hidden="true"
            >
              <path d="M1.533 3.568L8 12.136V0H2.812C1.042 0 .149 2.128 1.533 3.568z" />
            </svg>

            <p className="text-[13.5px] sm:text-[14px] text-slate-800 dark:text-slate-100 font-medium leading-snug">
              {greeting}
            </p>
            <p className="text-[12.5px] sm:text-[13px] text-slate-600 dark:text-slate-300 mt-1.5 leading-normal">
              {description}
            </p>
            <div className="flex items-center justify-end mt-1.5 text-[10.5px] sm:text-[11px] text-slate-400 dark:text-slate-400 font-normal">
              <span>{messageTime || "10:00"}</span>
            </div>
          </div>
        )}
      </div>

      {/* Footer / Full-width WhatsApp CTA Button */}
      <div className="px-3.5 pb-3.5 sm:px-4 sm:pb-4 pt-1">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Hablar por WhatsApp con doobot.ai"
          className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#1FAF55] px-4 py-3 sm:py-3.5 text-sm sm:text-[15px] font-bold text-white shadow-md shadow-emerald-700/20 hover:shadow-lg hover:shadow-emerald-700/30 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/50"
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
