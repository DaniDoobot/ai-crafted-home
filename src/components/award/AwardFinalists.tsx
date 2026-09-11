import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Award, Sparkles } from "lucide-react";

export function AwardFinalists() {
  return (
    <section className="py-14 lg:py-18 bg-[#F5F3FF]/70 border-t border-indigo-100/80">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        {/* Section Mini-Header */}
        <div className="mx-auto max-w-3xl text-center">
          <RevealOnScroll variant="fade-left" duration="fast" delay={0}>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-800 shadow-sm backdrop-blur-sm">
              <span>Distinciones 2026</span>
            </div>
            <h3 className="mt-3.5 font-display font-bold text-[#050547] text-[clamp(26px,2.6vw,38px)] leading-tight tracking-tight">
              Reconocidos como finalistas en certámenes de innovación
            </h3>
            <p className="mt-3 text-base sm:text-lg text-[#555B66] max-w-2xl mx-auto leading-relaxed">
              La trayectoria y proyectos de doobot.ai_ continúan siendo reconocidos por los principales comités evaluadores del sector.
            </p>
          </RevealOnScroll>
        </div>

        {/* 2 Finalists Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Card 1: Asociación DEC 2026 */}
          <RevealOnScroll variant="fade-left" duration="slow" delay={100} className="h-full">
            <div className="h-full flex flex-col justify-between rounded-3xl border border-rose-200/80 bg-white p-7 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300">
              <div>
                {/* Header: Logo + Badge */}
                <div className="flex items-center justify-between gap-4 pb-5 border-b border-rose-100">
                  <div className="inline-flex items-center justify-center min-h-[64px] px-5 py-2.5 rounded-2xl bg-rose-50/50 border border-rose-100">
                    <img
                      src="/doobot/events/premio-dec-innovacion.webp"
                      alt="Asociación DEC - Premios al Mejor Proyecto de Innovación en CX"
                      className="h-11 sm:h-12 w-auto max-w-[170px] object-contain"
                      loading="lazy"
                    />
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-200 bg-rose-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-rose-700 shrink-0">
                    <Award className="h-3.5 w-3.5" />
                    Finalista · 2026
                  </span>
                </div>

                {/* Content */}
                <div className="mt-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#685EC9]">
                    Asociación DEC · Directivos Experiencia de Cliente
                  </span>
                  <h4 className="mt-1.5 font-display font-bold text-[#050547] text-xl sm:text-[22px] leading-snug">
                    Finalista · Mejor Proyecto de Innovación en CX 2026
                  </h4>
                  <p className="mt-3 text-[15px] sm:text-[16px] text-[#555B66] leading-relaxed">
                    doobot.ai fue finalista del Premio DEC 2026 al Mejor Proyecto de Innovación en CX, un certamen que reconoce la excelencia estratégica y la transformación metodológica en la experiencia de cliente.
                  </p>
                </div>
              </div>

              {/* Footer Note */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-medium text-slate-500">
                <span className="h-2 w-2 rounded-full bg-rose-500 mr-2" />
                Certamen de referencia en Experiencia de Cliente
              </div>
            </div>
          </RevealOnScroll>

          {/* Card 2: Platinum Customer Experience Awards 2026 */}
          <RevealOnScroll variant="fade-right" duration="slow" delay={200} className="h-full">
            <div className="h-full flex flex-col justify-between rounded-3xl border border-cyan-200/80 bg-white p-7 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300">
              <div>
                {/* Header: Logo + Badge */}
                <div className="flex items-center justify-between gap-4 pb-5 border-b border-cyan-100">
                  <div className="inline-flex items-center justify-center min-h-[64px] px-5 py-2.5 rounded-2xl bg-cyan-50/50 border border-cyan-100">
                    <img
                      src="/doobot/events/premio-platinum-innovacion.webp"
                      alt="Platinum Customer Experience Awards · Contact Center Hub"
                      className="h-9 sm:h-11 w-auto max-w-[190px] object-contain"
                      loading="lazy"
                    />
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-200 bg-cyan-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-cyan-800 shrink-0">
                    <Sparkles className="h-3.5 w-3.5" />
                    Finalista · 2026
                  </span>
                </div>

                {/* Content */}
                <div className="mt-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#685EC9]">
                    Platinum Contact Center Awards · Contact Center Hub
                  </span>
                  <h4 className="mt-1.5 font-display font-bold text-[#050547] text-xl sm:text-[22px] leading-snug">
                    Finalista · Mejor Proyecto Innovación 2026
                  </h4>
                  <p className="mt-3 text-[15px] sm:text-[16px] text-[#555B66] leading-relaxed">
                    doobot.ai fue finalista del Premio Mejor Proyecto Innovación 2026 en los Platinum Customer Experience Awards, galardones clave que impulsan el avance tecnológico en la industria del contact center.
                  </p>
                </div>
              </div>

              {/* Footer Note */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-medium text-slate-500">
                <span className="h-2 w-2 rounded-full bg-cyan-600 mr-2" />
                Platinum Customer Experience Awards
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
