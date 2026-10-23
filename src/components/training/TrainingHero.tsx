import { ArrowRight, Sparkles } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function TrainingHero() {
  return (
    <section className="relative overflow-hidden bg-[#030A1D] pt-32 pb-20 lg:pt-36 lg:pb-28 text-white">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute -left-24 top-1/4 h-[520px] w-[520px] rounded-full opacity-25 blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(99, 102, 241, 0.45) 0%, rgba(6, 182, 212, 0.3) 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full opacity-20 blur-[150px]"
        style={{
          background:
            "radial-gradient(circle, rgba(139, 92, 246, 0.45) 0%, rgba(37, 99, 235, 0.25) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Copy Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <RevealOnScroll variant="fade-right" duration="fast" delay={0}>
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 backdrop-blur-md">
                <Sparkles className="h-4 w-4 text-indigo-300" />
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-300">
                  Formación IA para empresas
                </span>
              </div>
            </RevealOnScroll>

            <RevealOnScroll variant="fade-right" duration="fast" delay={80}>
              <h1 className="mt-6 font-display font-bold text-white text-[clamp(32px,3.8vw,56px)] leading-[1.12] tracking-tight">
                Formación en IA y creación de agentes para equipos empresariales
              </h1>
            </RevealOnScroll>

            <RevealOnScroll variant="fade-right" duration="medium" delay={160}>
              <p className="mt-6 text-lg sm:text-xl font-medium text-slate-200 leading-relaxed">
                Más capacidad para gestionar, optimizar, analizar, proponer, crear y decidir.
              </p>
            </RevealOnScroll>

            <RevealOnScroll variant="fade-right" duration="medium" delay={240}>
              <p className="mt-4 text-base text-slate-300 leading-relaxed">
                Formamos y entrenamos equipos profesionales para aprovechar todas las posibilidades de la IA, creando sus propios agentes y asistentes adaptados a cada contexto empresarial. Una formación práctica y aplicada con herramientas como Microsoft Copilot, ChatGPT, Claude o Gemini, adaptada a las necesidades de cada equipo y a sus distintos niveles de responsabilidad.
              </p>
            </RevealOnScroll>

            <RevealOnScroll variant="fade-right" duration="medium" delay={320}>
              <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
                <a
                  href="/contacto/"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-brand px-8 py-4 text-base font-bold text-white shadow-soft transition-all hover:scale-[1.02] hover:shadow-indigo-500/25 w-full sm:w-auto"
                >
                  <span>Solicitar una propuesta de formación</span>
                  <ArrowRight className="h-4.5 w-4.5" />
                </a>
              </div>
            </RevealOnScroll>
          </div>

          {/* Hero Visual Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <RevealOnScroll variant="fade-left" duration="medium" delay={200} className="w-full max-w-[560px]">
              <div className="relative group">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-3 rounded-3xl bg-gradient-to-tr from-indigo-500/25 via-cyan-500/20 to-purple-500/25 blur-2xl opacity-70 transition duration-500 group-hover:opacity-100"
                />
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-2 backdrop-blur-sm shadow-2xl">
                  <img
                    src="/doobot/formacion/formacion-ia-agentes.webp"
                    alt="Equipo profesional trabajando con herramientas de inteligencia artificial y agentes de IA"
                    width={1536}
                    height={1024}
                    loading="eager"
                    decoding="async"
                    className="w-full h-auto rounded-xl object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                  />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-lg border border-white/10 bg-[#030A1D]/80 px-3.5 py-2 backdrop-blur-md">
                    <span className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                      <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                      ChatGPT · Claude · Copilot · Gemini
                    </span>
                    <span className="rounded bg-indigo-500/20 px-2 py-0.5 text-[11px] font-semibold text-indigo-300">
                      Agentes IA
                    </span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
