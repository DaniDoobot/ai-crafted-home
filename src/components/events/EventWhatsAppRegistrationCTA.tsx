import { WHATSAPP_EVENT_URL } from "@/config/contact";
import { Bot } from "lucide-react";

export function EventWhatsAppRegistrationCTA() {
  return (
    <div className="mt-5 sm:mt-6 rounded-2xl sm:rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-slate-900/95 via-[#07162C]/90 to-slate-900/95 px-5 py-4 sm:px-8 sm:py-5 shadow-xl shadow-emerald-950/20 backdrop-blur-xl transition-all hover:border-emerald-500/45 hover:shadow-emerald-950/35">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5 text-center sm:text-left">
        {/* Left Side: Icon & Copy */}
        <div className="flex items-center gap-3 sm:gap-4">
          <span
            aria-hidden="true"
            className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 shadow-inner"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-6 w-6 sm:h-6.5 sm:w-6.5 fill-current shrink-0"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.419h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
            </svg>
          </span>
          <p className="text-[15px] sm:text-[17px] text-slate-200 leading-snug">
            O si lo prefieres, puedes inscribirte con nuestro{" "}
            <strong className="font-bold text-white tracking-tight">Bot de WhatsApp</strong>
          </p>
        </div>

        {/* Action: AQUÍ Pill Link with Robot Icon */}
        <a
          href={WHATSAPP_EVENT_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Inscribirse al evento mediante Bot de WhatsApp"
          className="inline-flex items-center gap-2 rounded-full border border-emerald-400/50 bg-emerald-500/20 px-4 py-2 sm:px-4.5 sm:py-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-emerald-200 shadow-md shadow-emerald-950/30 transition-all hover:scale-105 hover:bg-emerald-500/30 hover:border-emerald-300 hover:text-white active:scale-95 shrink-0"
        >
          <span>AQUÍ</span>
          <Bot className="h-4 w-4 text-emerald-300 shrink-0" />
        </a>
      </div>
    </div>
  );
}
