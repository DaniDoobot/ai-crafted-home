import { ArrowRight, Sparkles } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function TrainingMidCTA() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <RevealOnScroll variant="fade-right" duration="medium" delay={0}>
          <div className="relative overflow-hidden rounded-3xl border border-indigo-500/20 bg-gradient-to-r from-[#030A1D] via-[#0B1536] to-[#050B24] p-8 sm:p-12 lg:p-16 text-white shadow-elevated">
            {/* Ambient glows */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 blur-3xl"
            />

            <div className="relative mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 backdrop-blur-md mb-6">
                <Sparkles className="h-4 w-4 text-cyan-300" />
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                  Propuesta a medida
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white tracking-tight leading-tight">
                ¿Quieres preparar una formación adaptada a tu equipo?
              </h2>

              <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
                Cuéntanos qué áreas quieres formar, qué herramientas utilizáis y qué tareas os gustaría mejorar.
              </p>

              <div className="mt-8 flex justify-center">
                <a
                  href="/contacto/"
                  className="inline-flex items-center gap-2.5 rounded-full bg-gradient-brand px-8 py-4 text-base font-bold text-white shadow-soft transition-all hover:scale-[1.02] hover:shadow-indigo-500/25"
                >
                  <span>Solicitar una propuesta de formación</span>
                  <ArrowRight className="h-4.5 w-4.5" />
                </a>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
