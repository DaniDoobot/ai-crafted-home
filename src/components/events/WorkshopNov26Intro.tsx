import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Sparkles } from "lucide-react";

export function WorkshopNov26Intro() {
  return (
    <section className="relative py-14 sm:py-18 lg:py-20 bg-[#04081E] text-white border-t border-white/5">
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <RevealOnScroll variant="fade-up" duration="fast" delay={0}>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cyan-300">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Contenido práctico</span>
          </div>

          <h2 className="mt-4 font-display font-bold text-white text-[clamp(26px,3.5vw,44px)] leading-[1.15] tracking-tight">
            ¿En qué consiste el taller?
          </h2>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/60 p-6 sm:p-8 md:p-10 backdrop-blur-md shadow-xl text-left sm:text-center">
            <p className="font-normal text-slate-200 text-[17px] sm:text-[19px] leading-[1.7] max-w-3xl mx-auto">
              Recorreremos con ejemplos prácticos y reales cómo transformar con IA conversaciones reales en planes personalizados y entrenamientos prácticos empleando bots de voz. Veremos cómo la IA identifica fortalezas y aspectos de mejora, propone acciones y evalúa los avances para orientar el siguiente ciclo.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
