import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Eye, FileCheck, Layers, Cpu } from "lucide-react";

export function VideoAnalyticsValueSection() {
  return (
    <section className="py-[90px] lg:py-[110px] bg-[#F8F7FF] border-b border-fuchsia-100/60">
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-[900px] text-center">
          <RevealOnScroll variant="fade-right" duration="fast" delay={0}>
            <span className="inline-block rounded-full bg-fuchsia-100 px-5 py-2 text-sm font-bold uppercase tracking-wider text-fuchsia-900">
              Análisis Visual e Inteligencia Operativa
            </span>
            <h2 className="mt-5 font-display font-bold text-[#080C24] text-[clamp(34px,3.8vw,54px)] leading-[1.12] tracking-tight">
              Información visual que puede convertirse en una decisión
            </h2>
            <p className="mt-5 font-normal text-[#4A5568] text-[19px] sm:text-[21px] leading-[1.6]">
              El análisis de imágenes y vídeo permite revisar grandes cantidades de contenido y estructurar los eventos relevantes para facilitar su consulta y seguimiento.
            </p>
          </RevealOnScroll>
        </div>

        {/* 4 Value Pillars Grid */}
        <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Eye,
              title: "Análisis de contenido visual",
              desc: "Procesa imágenes o secuencias de vídeo para extraer información relacionada con el caso de uso definido.",
              iconCls: "text-fuchsia-600 bg-fuchsia-50 border-fuchsia-100",
            },
            {
              icon: FileCheck,
              title: "Identificación de situaciones",
              desc: "Ayuda a localizar eventos, cambios o condiciones que conviene revisar por parte del equipo.",
              iconCls: "text-purple-600 bg-purple-50 border-purple-100",
            },
            {
              icon: Layers,
              title: "Información estructurada",
              desc: "Convierte los resultados del análisis en registros que pueden consultarse y relacionarse con otros datos.",
              iconCls: "text-blue-600 bg-blue-50 border-blue-100",
            },
            {
              icon: Cpu,
              title: "Conexión con procesos",
              desc: "Los resultados pueden alimentar tareas, informes o sistemas corporativos cuando existe integración.",
              iconCls: "text-indigo-600 bg-indigo-50 border-indigo-100",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <RevealOnScroll key={item.title} variant="fade-right" duration="medium" delay={i * 110}>
                <div className="flex h-full flex-col rounded-3xl border border-fuchsia-200/60 bg-white p-10 shadow-sm hover:shadow-md transition-all">
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
