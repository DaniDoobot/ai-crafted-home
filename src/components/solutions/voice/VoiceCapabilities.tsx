import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { CheckCircle2, Mic, Sliders, FileText } from "lucide-react";

export function VoiceCapabilities() {
  return (
    <section id="capacidades-voice" className="scroll-mt-24 lg:scroll-mt-28 py-[75px] lg:py-[90px] bg-white">
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-[860px] text-center">
          <RevealOnScroll variant="fade-right" duration="fast" delay={0}>
            <span className="inline-block rounded-full bg-cyan-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cyan-900">
              Casos de uso y capacidades
            </span>
            <h2 className="mt-4 font-display font-bold text-[#060B28] text-[clamp(34px,3.6vw,52px)] leading-[1.12] tracking-tight">
              Voice Bots conectados con la operativa real de atención
            </h2>
            <p className="mt-4 font-normal text-[#4A5568] text-[18px] sm:text-[20px] leading-[1.6]">
              Descubre cómo la tecnología de voz conversacional automatiza llamadas, comprende intenciones y puede registrar la información relevante de la gestión.
            </p>
            <p className="mt-3 text-xs sm:text-sm text-slate-500 font-normal italic">
              Las interfaces mostradas son representaciones conceptuales de las funcionalidades descritas.
            </p>
          </RevealOnScroll>
        </div>

        {/* 3 Capabilities Rows */}
        <div className="mt-12 flex flex-col gap-10 lg:gap-14">
          {/* ── Capability A: Conversaciones sin IVR rígido ── */}
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-6">
              <RevealOnScroll variant="fade-right" duration="medium" delay={0}>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
                  <Mic className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display font-bold text-[#060B28] text-[28px] sm:text-[34px] leading-[1.2]">
                  Conversaciones sin IVR rígido
                </h3>
                <p className="mt-4 font-normal text-[#4A5568] text-[18px] leading-[1.6]">
                  El cliente puede explicar su necesidad de forma natural, sin depender de opciones como ‘marque 1’ o ‘marque 2’.
                </p>

                <ul className="mt-6 flex flex-col gap-3">
                  {[
                    "Comprensión del lenguaje hablado y formulación flexible de consultas.",
                    "Atención fluida sin menús telefónicos complejos ni esperas innecesarias.",
                    "Identificación automática de la intención principal desde el inicio de la llamada.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[16px] text-slate-700 font-medium">
                      <CheckCircle2 className="h-5 w-5 text-cyan-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </RevealOnScroll>
            </div>

            <div className="lg:col-span-6">
              <RevealOnScroll variant="fade-left" duration="medium" delay={150}>
                <div className="overflow-hidden rounded-3xl border border-cyan-100 bg-slate-50 p-4 sm:p-5 shadow-lg">
                  <img
                    src="/doobot/solutions/voice/voice-cap-conversation.png"
                    alt="Conversación por voz natural sin menús rígidos"
                    className="h-auto w-full rounded-2xl object-cover shadow-sm"
                  />
                </div>
              </RevealOnScroll>
            </div>
          </div>

          {/* ── Capability B: Configuración en lenguaje natural (Reversed Layout) ── */}
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:order-2 lg:col-span-6">
              <RevealOnScroll variant="fade-left" duration="medium" delay={0}>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                  <Sliders className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display font-bold text-[#060B28] text-[28px] sm:text-[34px] leading-[1.2]">
                  Configuración del comportamiento en lenguaje natural
                </h3>
                <p className="mt-4 font-normal text-[#4A5568] text-[18px] leading-[1.6]">
                  Se define qué información debe facilitar, qué datos debe recoger y cómo debe actuar en las distintas situaciones.
                </p>

                <ul className="mt-6 flex flex-col gap-3">
                  {[
                    "Definición clara de reglas, límites de actuación y tono de respuesta.",
                    "Especificación de los datos que deben recopilarse durante la llamada.",
                    "Adaptación continua de contenidos sin reprogramaciones complejas.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[16px] text-slate-700 font-medium">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </RevealOnScroll>
            </div>

            <div className="lg:order-1 lg:col-span-6">
              <RevealOnScroll variant="fade-right" duration="medium" delay={150}>
                <div className="overflow-hidden rounded-3xl border border-cyan-100 bg-slate-50 p-4 sm:p-5 shadow-lg">
                  <img
                    src="/doobot/solutions/voice/voice-cap-configuration.png"
                    alt="Configuración del comportamiento del Voice Bot"
                    className="h-auto w-full rounded-2xl object-cover shadow-sm"
                  />
                </div>
              </RevealOnScroll>
            </div>
          </div>

          {/* ── Capability C: Grabación, transcripción y consulta ── */}
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-6">
              <RevealOnScroll variant="fade-right" duration="medium" delay={0}>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-violet-700">
                  <FileText className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display font-bold text-[#060B28] text-[28px] sm:text-[34px] leading-[1.2]">
                  Grabación, transcripción y consulta
                </h3>
                <p className="mt-4 font-normal text-[#4A5568] text-[18px] leading-[1.6]">
                  Las llamadas pueden quedar registradas y transcritas para facilitar su consulta, seguimiento y análisis.
                </p>

                <ul className="mt-6 flex flex-col gap-3">
                  {[
                    "Transcripción de la llamada e historial registrado.",
                    "Registro de datos clave para la auditoría de calidad y seguimiento.",
                    "Acceso a la información según la finalidad y requisitos legales del proyecto.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[16px] text-slate-700 font-medium">
                      <CheckCircle2 className="h-5 w-5 text-violet-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-4 text-xs italic text-slate-500">
                  * Según la configuración, finalidad y requisitos legales del proyecto.
                </p>
              </RevealOnScroll>
            </div>

            <div className="lg:col-span-6">
              <RevealOnScroll variant="fade-left" duration="medium" delay={150}>
                <div className="overflow-hidden rounded-3xl border border-cyan-100 bg-slate-50 p-4 sm:p-5 shadow-lg">
                  <img
                    src="/doobot/solutions/voice/voice-cap-transcription.png"
                    alt="Transcripción y registro de llamadas telefónicas"
                    className="h-auto w-full rounded-2xl object-cover shadow-sm"
                  />
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
