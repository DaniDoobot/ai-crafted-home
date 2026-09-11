import React, { useEffect } from "react";
import { X, Download, ExternalLink } from "lucide-react";

export interface ModalContent {
  type: "image" | "pdf";
  title: string;
  sourceLabel: string;
  url: string;
}

interface ArticleModalProps {
  content: ModalContent | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ArticleModal({ content, isOpen, onClose }: ArticleModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalStyle;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !content) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-slate-950/80 backdrop-blur-md transition-opacity animate-in fade-in-0 duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={content.title}
    >
      <div
        className="relative flex flex-col w-full max-w-5xl max-h-[92vh] rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50/90 px-4 sm:px-6 py-3.5 sm:py-4 backdrop-blur-sm shrink-0">
          <div className="pr-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#685EC9]">
              {content.sourceLabel}
            </span>
            <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#050547] truncate max-w-[280px] sm:max-w-xl md:max-w-2xl">
              {content.title}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            {content.type === "pdf" && (
              <a
                href={content.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-[#050547] hover:bg-slate-50 transition-colors shadow-sm"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                <span>Abrir en pestaña</span>
              </a>
            )}
            <a
              href={content.url}
              download
              className="inline-flex items-center justify-center h-8 w-8 rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"
              title="Descargar documento"
            >
              <Download className="h-4 w-4" />
            </a>
            <button
              onClick={onClose}
              type="button"
              className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-slate-200/80 text-slate-700 hover:bg-slate-300 transition-colors cursor-pointer"
              aria-label="Cerrar ventana modal"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-auto bg-slate-100/70 p-2 sm:p-4 flex items-center justify-center min-h-[400px]">
          {content.type === "image" ? (
            <div className="max-w-full max-h-full flex items-center justify-center overflow-auto p-2">
              <img
                src={content.url}
                alt={content.title}
                className="max-h-[78vh] w-auto object-contain rounded-lg shadow-lg border border-slate-200"
              />
            </div>
          ) : (
            <div className="w-full h-[78vh] rounded-lg overflow-hidden border border-slate-200 bg-white shadow-sm flex flex-col">
              <iframe
                src={`${content.url}#toolbar=1&navpanes=0&view=FitH`}
                title={content.title}
                className="w-full h-full border-0"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
