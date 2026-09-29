import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import { WHATSAPP_CHAT_URL } from "@/config/contact";
import { WhatsAppPopupCard } from "./WhatsAppPopupCard";

interface WhatsAppFabProps {
  whatsappUrl?: string;
  title?: string;
  subtitle?: string;
  greeting?: string;
  description?: string;
  ctaText?: string;
}

export function WhatsAppFab({
  whatsappUrl = WHATSAPP_CHAT_URL,
  title,
  subtitle,
  greeting,
  description,
  ctaText,
}: WhatsAppFabProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const fabButtonRef = useRef<HTMLButtonElement>(null);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        fabButtonRef.current?.focus();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Close on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <aside
      ref={containerRef}
      aria-label="Contacto por WhatsApp"
      className="fixed z-50 flex flex-col items-end pointer-events-none"
      style={{
        bottom: "calc(18px + env(safe-area-inset-bottom))",
        right: "18px",
      }}
    >
      <div className="pointer-events-auto flex flex-col items-end">
        {isOpen && (
          <WhatsAppPopupCard
            onClose={() => {
              setIsOpen(false);
              fabButtonRef.current?.focus();
            }}
            whatsappUrl={whatsappUrl}
            title={title}
            subtitle={subtitle}
            greeting={greeting}
            description={description}
            ctaText={ctaText}
          />
        )}

        <button
          ref={fabButtonRef}
          type="button"
          onClick={toggleOpen}
          aria-expanded={isOpen}
          aria-haspopup="dialog"
          aria-label={
            isOpen
              ? "Cerrar ventana de chat de WhatsApp"
              : "Abrir chat de WhatsApp con doobot.ai"
          }
          className={`flex h-[56px] w-[56px] sm:h-[60px] sm:w-[60px] items-center justify-center p-0 m-0 leading-none overflow-hidden rounded-full text-white shadow-[0_6px_20px_rgba(0,0,0,0.25)] transition-all duration-200 hover:scale-[1.08] active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/50 ${
            isOpen ? "border border-white/20 shadow-emerald-950/40" : ""
          }`}
          style={{
            backgroundColor: isOpen ? "#07162C" : "#25D366",
          }}
          onMouseEnter={(e) => {
            if (!isOpen) e.currentTarget.style.backgroundColor = "#1FAF55";
          }}
          onMouseLeave={(e) => {
            if (!isOpen) e.currentTarget.style.backgroundColor = "#25D366";
          }}
        >
          {isOpen ? (
            <X className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.5] text-white transition-transform duration-200" />
          ) : (
            <span className="flex items-center justify-center w-[30px] h-[30px] sm:w-[32px] sm:h-[32px] shrink-0 p-0 m-0 leading-none">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="block shrink-0 w-[28px] h-[28px] sm:w-[30px] sm:h-[30px] m-0 p-0"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.419h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
              </svg>
            </span>
          )}
        </button>
      </div>
    </aside>
  );
}
