import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Compass, Target, Database, Network } from "lucide-react";

export function WebValueSection() {
  return (
    <section className="py-[95px] lg:py-[115px] bg-[#F4F8FF] border-b border-blue-100/70">
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-[860px] text-center">
          <RevealOnScroll variant="fade-right" duration="fast" delay={0}>
            <span className="inline-block rounded-full bg-cyan-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cyan-900">
              Valor Añadido para tu Sitio Web
            </span>
            <h2 className="mt-4 font-display font-bold text-[#030A1D] text-[clamp(32px,3.5vw,50px)] leading-[1.12] tracking-tight">
              Una web que no se limita a mostrar información
            </h2>
            <p className="mt-4 font-normal text-[#4A5568] text-[18px] sm:text-[20px] leading-[1.6]">
              El asistente conversa con cada visitante, entiende qué necesita y puede acompañarlo hasta la respuesta, el contacto o la gestión adecuada.
            </p>
          </RevealOnScroll>
        </div>

        {/* Value Pillars Grid (Editorial layout with distinctive card design) */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Compass,
              title: "Atención contextual durante la navegación",
              desc: "Responde teniendo en cuenta la página, producto o servicio que está consultando el visitante.",
              color: "text-cyan-600 bg-cyan-50 border-cyan-100",
            },
            {
              icon: Target,
              title: "Captación y cualificación de oportunidades",
              desc: "Recoge datos y ayuda a identificar el interés y las necesidades de cada contacto.",
              color: "text-blue-600 bg-blue-50 border-blue-100",
            },
            {
              icon: Database,
              title: "Respuestas basadas en información corporativa",
              desc: "Consulta documentación, contenidos y fuentes autorizadas para ofrecer respuestas consistentes.",
              color: "text-indigo-600 bg-indigo-50 border-indigo-100",
            },
            {
              icon: Network,
              title: "Continuidad con agentes y sistemas",
              desc: "Puede derivar la conversación y registrar la información en los aplicativos de la empresa.",
              color: "text-sky-600 bg-sky-50 border-sky-100",
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <RevealOnScroll
                key={item.title}
                variant="fade-right"
                duration="medium"
                delay={index * 100}
              >
                <div className="flex h-full flex-col justify-between rounded-3xl border border-blue-200/80 bg-white p-8 shadow-sm hover:shadow-md transition-all">
                  <div>
                    <div
                      className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${item.color} border`}
                    >
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="mt-6 font-display font-bold text-[#030A1D] text-[22px] leading-[1.3]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[16px] text-slate-700 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
