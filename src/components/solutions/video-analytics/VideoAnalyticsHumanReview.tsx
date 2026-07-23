import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { UserCheck, Shield, Sliders, CheckCircle2, ArrowRight, Eye } from "lucide-react";

const reviewSteps = [
  {
    step: "01",
    icon: Eye,
    title: "Entrada visual",
    desc: "Se captura la imagen o secuencia de vídeo para su evaluación inicial.",
    color: "border-fuchsia-200 bg-fuchsia-50 text-fuchsia-700",
  },
  {
    step: "02",
    icon: Sliders,
    title: "Criterios de evaluación",
    desc: "El modelo analiza la escena según las reglas y parámetros del caso de uso.",
    color: "border-purple-200 bg-purple-50 text-purple-700",
  },
  {
    step: "03",
    icon: Shield,
    title: "Revisión solicitada",
    desc: "Si el nivel de certeza o el impacto lo requiere, la situación se deriva a supervisión.",
    color: "border-blue-200 bg-blue-50 text-blue-700",
  },
  {
    step: "04",
    icon: UserCheck,
    title: "Decisión humana",
    desc: "El equipo valida el resultado y confirma la continuidad del proceso.",
    color: "border-indigo-200 bg-indigo-50 text-indigo-700",
  },
];

export function VideoAnalyticsHumanReview() {
  return (
    <section className="py-[80px] lg:py-[95px] bg-[#F8F7FF] border-t border-fuchsia-100/60">
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto max-w-[860px] text-center">
          <RevealOnScroll variant="fade-right" duration="fast" delay={0}>
            <span className="inline-block rounded-full bg-purple-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-purple-900">
              Supervisión y Control Humano
            </span>
            <h2 className="mt-4 font-display font-bold text-[#080C24] text-[clamp(32px,3.5vw,50px)] leading-[1.12] tracking-tight">
              Automatización con supervisión cuando la situación lo requiere
            </h2>
            <p className="mt-4 font-normal text-[#4A5568] text-[18px] sm:text-[20px] leading-[1.6]">
              Los resultados del análisis pueden enviarse a revisión humana según los criterios definidos para cada caso de uso.
            </p>
          </RevealOnScroll>
        </div>

        {/* 4-Step Editorial Flow */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reviewSteps.map((s, i) => {
            const Icon = s.icon;
            return (
              <RevealOnScroll key={s.step} variant="fade-right" duration="medium" delay={i * 100}>
                <div className="relative flex flex-col rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm hover:shadow-md transition-all h-full">
                  <span className="absolute top-5 right-5 text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                    {s.step}
                  </span>
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl border ${s.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display font-bold text-[#080C24] text-[20px] leading-[1.3]">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-[16px] text-slate-600 leading-relaxed font-normal flex-1">
                    {s.desc}
                  </p>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

        {/* Features & Prudent Disclaimer Panel */}
        <div className="mt-9">
          <RevealOnScroll variant="fade-right" duration="medium" delay={0}>
            <div className="rounded-3xl border border-purple-100 bg-white p-8 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
                {[
                  "Situaciones que requieren validación experta.",
                  "Criterios de escalado completamente configurables.",
                  "Grado de certeza como parámetro de derivación.",
                  "Asignación a personas o equipos según rol.",
                  "Revisión y confirmación de hallazgos.",
                  "Continuidad del proceso tras la intervención.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-[15px] text-slate-700">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-slate-400 italic border-t border-slate-100 pt-4">
                Los criterios y el flujo de supervisión se configuran según el proceso y las necesidades del proyecto.
              </p>
            </div>
          </RevealOnScroll>
        </div>

      </div>
    </section>
  );
}
