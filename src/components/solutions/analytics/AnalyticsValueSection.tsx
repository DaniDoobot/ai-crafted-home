import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Database, MessageSquare, TrendingUp, Compass } from "lucide-react";

export function AnalyticsValueSection() {
  return (
    <section className="py-[90px] lg:py-[110px] bg-[#F5F3FF] border-b border-indigo-100/70">
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-[900px] text-center">
          <RevealOnScroll variant="fade-right" duration="fast" delay={0}>
            <span className="inline-block rounded-full bg-indigo-100 px-5 py-2 text-sm font-bold uppercase tracking-wider text-indigo-900">
              Inteligencia Operativa y de Negocio
            </span>
            <h2 className="mt-5 font-display font-bold text-[#080C24] text-[clamp(34px,3.8vw,54px)] leading-[1.12] tracking-tight">
              Entender lo que ocurre sin revisar dato por dato
            </h2>
            <p className="mt-5 font-normal text-[#4A5568] text-[19px] sm:text-[21px] leading-[1.6]">
              AI Analytics ayuda a transformar información dispersa y no estructurada en una visión más clara de la actividad, los temas recurrentes y las oportunidades de mejora.
            </p>
          </RevealOnScroll>
        </div>

        {/* 4 Value Pillars */}
        <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Database,
              title: "Análisis de grandes volúmenes",
              desc: "Procesa múltiples variables y registros para facilitar una visión conjunta de la información.",
              iconCls: "text-indigo-600 bg-indigo-50 border-indigo-100",
            },
            {
              icon: MessageSquare,
              title: "Consultas en lenguaje natural",
              desc: "Permite formular preguntas sobre los datos sin depender únicamente de informes o filtros predefinidos.",
              iconCls: "text-violet-600 bg-violet-50 border-violet-100",
            },
            {
              icon: TrendingUp,
              title: "Detección de patrones y desviaciones",
              desc: "Ayuda a identificar temas recurrentes, cambios de comportamiento y situaciones que requieren revisión.",
              iconCls: "text-[#2563EB] bg-blue-50 border-blue-100",
            },
            {
              icon: Compass,
              title: "Información orientada a la acción",
              desc: "Facilita conclusiones y siguientes pasos que pueden apoyar la supervisión y la toma de decisiones.",
              iconCls: "text-cyan-700 bg-cyan-50 border-cyan-100",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <RevealOnScroll key={item.title} variant="fade-right" duration="medium" delay={i * 110}>
                <div className="flex h-full flex-col rounded-3xl border border-indigo-200/80 bg-white p-10 shadow-sm hover:shadow-md transition-all">
                  <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl ${item.iconCls} border`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="mt-7 font-display font-bold text-[#080C24] text-[26px] leading-[1.28]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[18px] text-slate-700 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
