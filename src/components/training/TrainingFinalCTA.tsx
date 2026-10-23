import { ArrowRight, Sparkles } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function TrainingFinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#030A1D] py-14 sm:py-16 lg:py-18 text-white">
      {/* Background ambient glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full opacity-25 blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(99, 102, 241, 0.45) 0%, rgba(6, 182, 212, 0.3) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full opacity-20 blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(139, 92, 246, 0.45) 0%, rgba(37, 99, 235, 0.25) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-center">
        <RevealOnScroll variant="fade-right" duration="fast" delay={0}>
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1 backdrop-blur-md mb-4">
            <Sparkles className="h-4 w-4 text-indigo-300" />
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-300">
              Formación Práctica
            </span>
          </div>
        </RevealOnScroll>

        <RevealOnScroll variant="fade-right" duration="fast" delay={60}>
          <h2 className="font-display font-bold text-white text-[clamp(30px,3.8vw,52px)] leading-[1.15] tracking-tight max-w-3xl mx-auto">
            Del primer uso de la IA a los agentes de tu equipo
          </h2>
        </RevealOnScroll>

        <RevealOnScroll variant="fade-right" duration="medium" delay={120}>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Cuéntanos qué áreas quieres formar, qué herramientas utilizáis y qué tareas os gustaría mejorar. Prepararemos una propuesta para que vuestro equipo aprenda a aplicar la IA y a crear agentes útiles en su trabajo diario.
          </p>
        </RevealOnScroll>

        <RevealOnScroll variant="fade-right" duration="medium" delay={180}>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contacto/"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-brand px-8 py-3.5 text-base font-bold text-white shadow-soft transition-all hover:scale-[1.02] hover:shadow-indigo-500/25 w-full sm:w-auto"
            >
              <span>Solicitar una propuesta de formación</span>
              <ArrowRight className="h-4.5 w-4.5" />
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
