import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { User, Globe, Headset, CheckCircle2, ArrowRight } from "lucide-react";

export function WebHumanHandoff() {
  return (
    <section className="py-[95px] lg:py-[110px] bg-[#F4F8FF] border-y border-blue-100/70">
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-[860px] text-center">
          <RevealOnScroll variant="fade-left" duration="fast" delay={0}>
            <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-900">
              Colaboración Híbrida Web
            </span>
            <h2 className="mt-4 font-display font-bold text-[#030A1D] text-[clamp(32px,3.5vw,50px)] leading-[1.12] tracking-tight">
              El asistente resuelve y el equipo interviene cuando es necesario
            </h2>
            <p className="mt-4 font-normal text-[#4A5568] text-[18px] sm:text-[20px] leading-[1.6]">
              La conversación puede derivarse a una persona según los criterios definidos, manteniendo la información recogida y el contexto disponible.
            </p>
          </RevealOnScroll>
        </div>

        {/* Workflow Diagram: Visitante Web -> Asistente IA -> Consola de Agente */}
        <div className="mt-14 max-w-[1150px] mx-auto">
          <RevealOnScroll variant="fade-left" duration="medium" delay={150}>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 items-center">
              {/* Step 1: Visitante en el sitio web */}
              <div className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm text-center hover:shadow-md transition-all">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
                  <User className="h-8 w-8" />
                </div>
                <span className="mt-4 inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
                  Paso 1 · Navegación Web
                </span>
                <h3 className="mt-3 font-display font-bold text-[#030A1D] text-xl">
                  Visitante en el portal
                </h3>
                <p className="mt-2 text-sm text-[#4A5568] leading-relaxed">
                  El usuario plantea una consulta específica desde el widget conversacional del sitio web.
                </p>
              </div>

              {/* Step 2: Asistente IA Web */}
              <div className="rounded-3xl border border-cyan-300 bg-cyan-50/60 p-7 shadow-md text-center hover:shadow-lg transition-all relative">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-600 text-white shadow-md">
                  <Globe className="h-8 w-8" />
                </div>
                <span className="mt-4 inline-block rounded-full bg-cyan-100 px-3 py-1 text-xs font-bold text-cyan-900">
                  Paso 2 · IA Autónoma
                </span>
                <h3 className="mt-3 font-display font-bold text-[#030A1D] text-xl">
                  Asistente IA Doobot
                </h3>
                <p className="mt-2 text-sm text-[#4A5568] leading-relaxed">
                  Ofrece respuestas instantáneas, consulta contenidos y recopila la información previa.
                </p>
              </div>

              {/* Step 3: Derivación a Agente */}
              <div className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm text-center hover:shadow-md transition-all">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-900">
                  <Headset className="h-8 w-8" />
                </div>
                <span className="mt-4 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-900">
                  Paso 3 · Intervención Humana
                </span>
                <h3 className="mt-3 font-display font-bold text-[#030A1D] text-xl">
                  Derivación a agente
                </h3>
                <p className="mt-2 text-sm text-[#4A5568] leading-relaxed">
                  Transfiere el diálogo con todo el historial para dar continuidad al caso sin solicitar datos repetidos.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Highlight Feature Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 max-w-[1150px] mx-auto">
          {[
            {
              title: "Derivación por criterios",
              desc: "Se establecen condiciones claras en función del motivo, tipo de cliente o complejidad de la consulta.",
            },
            {
              title: "Continuidad del contexto",
              desc: "El agente dispone de toda la conversación mantenida para continuar la atención de forma directa.",
            },
            {
              title: "Atención sin interrupciones",
              desc: "Permite combinar la inmediatez de la IA con la resolución personalizada de un profesional.",
            },
          ].map((item, idx) => (
            <RevealOnScroll
              key={item.title}
              variant="fade-left"
              duration="medium"
              delay={idx * 100}
            >
              <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0" />
                  <h4 className="font-display font-bold text-[#030A1D] text-lg">
                    {item.title}
                  </h4>
                </div>
                <p className="mt-2.5 text-sm text-[#4A5568] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
