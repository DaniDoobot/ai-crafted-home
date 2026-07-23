import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Phone, PhoneForwarded, Headset, CheckCircle2, ArrowRight } from "lucide-react";

export function VoiceHumanHandoff() {
  return (
    <section className="py-[85px] lg:py-[100px] bg-white border-t border-cyan-100/70">
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-[860px] text-center">
          <RevealOnScroll variant="fade-right" duration="fast" delay={0}>
            <span className="inline-block rounded-full bg-violet-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-violet-900">
              Derivación Telefónica Inteligente
            </span>
            <h2 className="mt-4 font-display font-bold text-[#060B28] text-[clamp(32px,3.5vw,50px)] leading-[1.12] tracking-tight">
              Cuando la llamada necesita una persona, la conversación continúa
            </h2>
            <p className="mt-4 font-normal text-[#4A5568] text-[18px] sm:text-[20px] leading-[1.6]">
              El Voice Bot puede transferir la llamada a un agente según los criterios definidos, poniendo a su disposición la información recogida durante la interacción.
            </p>
          </RevealOnScroll>
        </div>

        {/* Call Handoff Workflow Diagram */}
        <div className="mt-14 max-w-[1150px] mx-auto">
          <RevealOnScroll variant="fade-right" duration="medium" delay={150}>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 items-center">
              {/* Step 1: Cliente por teléfono */}
              <div className="rounded-3xl border border-cyan-100 bg-slate-50 p-7 text-center hover:shadow-md transition-all">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-800">
                  <Phone className="h-8 w-8" />
                </div>
                <span className="mt-4 inline-block rounded-full bg-slate-200 px-3 py-1 text-xs font-bold text-slate-800">
                  Paso 1 · Llamada entrante
                </span>
                <h3 className="mt-3 font-display font-bold text-[#060B28] text-xl">
                  Cliente por teléfono
                </h3>
                <p className="mt-2 text-sm text-[#4A5568] leading-relaxed">
                  Plantea su necesidad mediante voz natural en la línea telefónica de la empresa.
                </p>
              </div>

              {/* Step 2: Voice Bot Doobot */}
              <div className="rounded-3xl border border-violet-200 bg-violet-50/70 p-7 text-center hover:shadow-lg transition-all relative">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-600 text-white shadow-md">
                  <PhoneForwarded className="h-8 w-8" />
                </div>
                <span className="mt-4 inline-block rounded-full bg-violet-200 px-3 py-1 text-xs font-bold text-violet-900">
                  Paso 2 · Asistente de Voz
                </span>
                <h3 className="mt-3 font-display font-bold text-[#060B28] text-xl">
                  Voice Bot Doobot
                </h3>
                <p className="mt-2 text-sm text-[#4A5568] leading-relaxed">
                  Atiende la consulta inicial, clasifica el motivo y recopila los datos previos.
                </p>
              </div>

              {/* Step 3: Agente Humano */}
              <div className="rounded-3xl border border-cyan-100 bg-slate-50 p-7 text-center hover:shadow-md transition-all">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-800">
                  <Headset className="h-8 w-8" />
                </div>
                <span className="mt-4 inline-block rounded-full bg-cyan-100 px-3 py-1 text-xs font-bold text-cyan-900">
                  Paso 3 · Transferencia
                </span>
                <h3 className="mt-3 font-display font-bold text-[#060B28] text-xl">
                  Agente especializado
                </h3>
                <p className="mt-2 text-sm text-[#4A5568] leading-relaxed">
                  Recibe la llamada transferida con la información relevante ya disponible en pantalla.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Feature Highlights Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 max-w-[1150px] mx-auto">
          {[
            {
              title: "Criterios de derivación",
              desc: "Transferencia según motivo de consulta, franja horaria o complejidad de la gestión.",
            },
            {
              title: "Contexto previo traspasado",
              desc: "El agente dispone del resumen de lo hablado sin obligar al cliente a repetirlo.",
            },
            {
              title: "Continuidad del servicio",
              desc: "Permite combinar la atención automática con la intervención de un agente cuando la gestión lo requiere.",
            },
          ].map((item, idx) => (
            <RevealOnScroll
              key={item.title}
              variant="fade-right"
              duration="medium"
              delay={idx * 100}
            >
              <div className="rounded-2xl border border-cyan-100 bg-slate-50 p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-violet-600 shrink-0" />
                  <h4 className="font-display font-bold text-[#060B28] text-lg">
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

        {/* Prudent Disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-xs italic text-slate-500">
            * La transferencia y el contexto disponible se configuran según la infraestructura telefónica y las herramientas de atención utilizadas.
          </p>
        </div>
      </div>
    </section>
  );
}
