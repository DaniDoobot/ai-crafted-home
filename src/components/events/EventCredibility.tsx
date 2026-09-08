import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Award, ShieldCheck } from "lucide-react";

export function EventCredibility() {
  return (
    <section className="py-14 sm:py-16 bg-slate-900/90 border-y border-white/10 text-white">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <RevealOnScroll variant="fade-up" duration="medium" delay={0}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Award Recognition Item */}
            <div className="flex items-start sm:items-center gap-4 rounded-2xl bg-white/5 border border-white/10 p-5 sm:p-6 backdrop-blur-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300">
                  Reconocimiento del sector
                </span>
                <p className="mt-1 text-sm sm:text-base font-semibold text-slate-100 leading-snug">
                  doobot.ai fue ganador del Premio Mejor Tecnología Engagement junto a Boston Medical en los Premios Relación Cliente 2025.
                </p>
              </div>
            </div>

            {/* ISO 27001 Security Item */}
            <div className="flex items-start sm:items-center gap-4 rounded-2xl bg-white/5 border border-white/10 p-5 sm:p-6 backdrop-blur-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-300">
                  Garantía y solvencia
                </span>
                <p className="mt-1 text-sm sm:text-base font-semibold text-slate-100 leading-snug">
                  ISO 27001 · Seguridad de la Información
                </p>
                <p className="text-xs text-slate-400 mt-0.5">
                  Estricto cumplimiento normativo, confidencialidad y protección de datos corporativos.
                </p>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
