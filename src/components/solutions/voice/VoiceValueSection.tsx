import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Clock, Mic, Layers, Headset } from "lucide-react";

export function VoiceValueSection() {
  return (
    <section className="py-[85px] lg:py-[100px] bg-[#F4F8FF] border-b border-cyan-100/70">
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-[860px] text-center">
          <RevealOnScroll variant="fade-right" duration="fast" delay={0}>
            <span className="inline-block rounded-full bg-cyan-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cyan-900">
              Experiencia Telefónica Inteligente
            </span>
            <h2 className="mt-4 font-display font-bold text-[#060B28] text-[clamp(32px,3.5vw,50px)] leading-[1.12] tracking-tight">
              Una llamada que se entiende como una conversación
            </h2>
            <p className="mt-4 font-normal text-[#4A5568] text-[18px] sm:text-[20px] leading-[1.6]">
              El asistente escucha, interpreta la necesidad del cliente y responde utilizando la información y los procesos definidos por la empresa.
            </p>
          </RevealOnScroll>
        </div>

        {/* 4 Value Pillars Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Clock,
              title: "Atención telefónica 24×7",
              desc: "Gestiona llamadas y consultas fuera del horario habitual o durante picos de demanda.",
              color: "text-cyan-600 bg-cyan-50 border-cyan-100",
            },
            {
              icon: Mic,
              title: "Conversaciones sin menús rígidos",
              desc: "El cliente explica qué necesita con sus propias palabras, sin recorrer interminables opciones de marcación.",
              color: "text-blue-600 bg-blue-50 border-blue-100",
            },
            {
              icon: Layers,
              title: "Respuestas contextualizadas",
              desc: "Puede consultar información autorizada para ofrecer una atención adaptada a cada situación.",
              color: "text-indigo-600 bg-indigo-50 border-indigo-100",
            },
            {
              icon: Headset,
              title: "Continuidad con el equipo humano",
              desc: "La llamada puede transferirse a una persona cuando la situación lo requiere.",
              color: "text-violet-600 bg-violet-50 border-violet-100",
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
                <div className="flex h-full flex-col justify-between rounded-3xl border border-cyan-200/80 bg-white p-9 shadow-sm hover:shadow-md transition-all">
                  <div>
                    <div
                      className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${item.color} border`}
                    >
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="mt-6 font-display font-bold text-[#060B28] text-[24px] leading-[1.28]">
                      {item.title}
                    </h3>
                    <p className="mt-3.5 text-[17px] text-slate-700 leading-relaxed font-normal">
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
