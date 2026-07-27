import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { CheckCircle2, Mic, Sliders, FileText } from "lucide-react";
import { SolutionImageVisual } from "@/components/solutions/SolutionImageVisual";

export function VoiceCapabilities() {
  return (
    <section id="capacidades-voice" className="scroll-mt-24 lg:scroll-mt-28 py-[40px] sm:py-[48px] lg:py-[56px] bg-white">
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-[860px] text-center">
          <RevealOnScroll variant="fade-right" duration="fast" delay={0}>
            <span className="inline-block rounded-full bg-cyan-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cyan-900">
              Casos de uso y capacidades
            </span>
            <h2 className="mt-3 font-display font-bold text-[#060B28] text-[clamp(30px,3.2vw,46px)] leading-[1.12] tracking-tight">
              Voice Bots conectados con la operativa real de atención
            </h2>
            <p className="mt-3 font-normal text-[#4A5568] text-[17px] sm:text-[19px] leading-[1.55]">
              Descubre cómo la tecnología de voz conversacional automatiza llamadas, comprende intenciones y puede registrar la información relevante de la gestión.
            </p>
            <p className="mt-2 text-xs sm:text-sm text-slate-500 font-normal italic">
              Las interfaces mostradas son representaciones conceptuales de las funcionalidades descritas.
            </p>
          </RevealOnScroll>
        </div>

        {/* 3 Capabilities Rows */}
        <div className="mt-8 flex flex-col gap-7 lg:gap-9">
          {/* ── Capability A: Conversaciones sin IVR rígido ── */}
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7">
              <RevealOnScroll variant="fade-right" duration="medium" delay={0}>
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
                  <Mic className="h-5 w-5" />
                </div>
                <h3 className="mt-3.5 font-display font-bold text-[#060B28] text-[24px] sm:text-[30px] leading-[1.2]">
                  Conversaciones sin IVR rígido
                </h3>
                <p className="mt-3 font-normal text-[#4A5568] text-[17px] leading-[1.55]">
                  El cliente puede explicar su necesidad de forma natural, sin depender de opciones como ‘marque 1’ o ‘marque 2’.
                </p>

                <ul className="mt-4 flex flex-col gap-2.5">
                  {[
                    "Comprensión del lenguaje hablado y formulación flexible de consultas.",
                    "Atención fluida sin menús telefónicos complejos ni esperas innecesarias.",
                    "Identificación automática de la intención principal desde el inicio de la llamada.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[15px] text-slate-700 font-medium">
                      <CheckCircle2 className="h-4.5 w-4.5 text-cyan-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </RevealOnScroll>
            </div>

            <div className="lg:col-span-5">
              <RevealOnScroll variant="fade-left" duration="medium" delay={150}>
                <SolutionImageVisual
                  src="/doobot/solutions/voice/voice-cap-conversation.png"
                  alt="Conversación por voz natural sin menús rígidos"
                  embeddedFrame={true}
                  variant="capability"
                />
              </RevealOnScroll>
            </div>
          </div>

          {/* ── Capability B: Configuración en lenguaje natural (Reversed Layout) ── */}
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-8">
            <div className="lg:order-2 lg:col-span-7">
              <RevealOnScroll variant="fade-left" duration="medium" delay={0}>
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <Sliders className="h-5 w-5" />
                </div>
                <h3 className="mt-3.5 font-display font-bold text-[#060B28] text-[24px] sm:text-[30px] leading-[1.2]">
                  Configuración del comportamiento en lenguaje natural
                </h3>
                <p className="mt-3 font-normal text-[#4A5568] text-[17px] leading-[1.55]">
                  Se define qué información debe facilitar, qué datos debe recoger y cómo debe actuar en las distintas situaciones.
                </p>

                <ul className="mt-4 flex flex-col gap-2.5">
                  {[
                    "Definición clara de reglas, límites de actuación y tono de respuesta.",
                    "Especificación de los datos que deben recopilarse durante la llamada.",
                    "Adaptación continua de contenidos sin reprogramaciones complejas.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[15px] text-slate-700 font-medium">
                      <CheckCircle2 className="h-4.5 w-4.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </RevealOnScroll>
            </div>

            <div className="lg:order-1 lg:col-span-5">
              <RevealOnScroll variant="fade-right" duration="medium" delay={150}>
                <SolutionImageVisual
                  src="/doobot/solutions/voice/voice-cap-configuration.png"
                  alt="Configuración del comportamiento del Voice Bot"
                  embeddedFrame={true}
                  variant="capability"
                />
              </RevealOnScroll>
            </div>
          </div>

          {/* ── Capability C: Grabación, transcripción y consulta ── */}
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7">
              <RevealOnScroll variant="fade-right" duration="medium" delay={0}>
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-700">
                  <FileText className="h-5 w-5" />
                </div>
                <h3 className="mt-3.5 font-display font-bold text-[#060B28] text-[24px] sm:text-[30px] leading-[1.2]">
                  Grabación, transcripción y consulta
                </h3>
                <p className="mt-3 font-normal text-[#4A5568] text-[17px] leading-[1.55]">
                  Las llamadas pueden quedar registradas y transcritas para facilitar su consulta, seguimiento y análisis.
                </p>

                <ul className="mt-4 flex flex-col gap-2.5">
                  {[
                    "Transcripción de la llamada e historial registrado.",
                    "Registro de datos clave para la auditoría de calidad y seguimiento.",
                    "Acceso a la información según la finalidad y requisitos legales del proyecto.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[15px] text-slate-700 font-medium">
                      <CheckCircle2 className="h-4.5 w-4.5 text-violet-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-3 text-xs italic text-slate-500">
                  * Según la configuración, finalidad y requisitos legales del proyecto.
                </p>
              </RevealOnScroll>
            </div>

            <div className="lg:col-span-5">
              <RevealOnScroll variant="fade-left" duration="medium" delay={150}>
                <SolutionImageVisual
                  src="/doobot/solutions/voice/voice-cap-transcription.png"
                  alt="Transcripción y registro de llamadas telefónicas"
                  embeddedFrame={true}
                  variant="capability"
                />
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
