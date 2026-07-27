import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { CheckCircle2, Compass, FileCheck, Layers } from "lucide-react";
import { SolutionImageVisual } from "@/components/solutions/SolutionImageVisual";

export function WebCapabilities() {
  return (
    <section id="capacidades-web" className="scroll-mt-24 lg:scroll-mt-28 py-[40px] sm:py-[48px] lg:py-[56px] bg-white">
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-[860px] text-center">
          <RevealOnScroll variant="fade-right" duration="fast" delay={0}>
            <span className="inline-block rounded-full bg-cyan-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cyan-900">
              Casos de uso y capacidades
            </span>
            <h2 className="mt-3 font-display font-bold text-[#030A1D] text-[clamp(30px,3.2vw,46px)] leading-[1.12] tracking-tight">
              Un asistente integrado en la experiencia de tu sitio web
            </h2>
            <p className="mt-3 font-normal text-[#4A5568] text-[17px] sm:text-[19px] leading-[1.55]">
              Descubre cómo la inteligencia artificial conversacional ofrece respuestas contextuales, capta oportunidades y conecta con tus contenidos.
            </p>
            <p className="mt-2 text-xs sm:text-sm text-slate-500 font-normal italic">
              Las interfaces mostradas son representaciones conceptuales de las funcionalidades descritas.
            </p>
          </RevealOnScroll>
        </div>

        {/* 3 Capabilities Rows */}
        <div className="mt-8 flex flex-col gap-7 lg:gap-9">
          {/* ── Capability A: Orientación durante la navegación ── */}
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7">
              <RevealOnScroll variant="fade-right" duration="medium" delay={0}>
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
                  <Compass className="h-5 w-5" />
                </div>
                <h3 className="mt-3.5 font-display font-bold text-[#030A1D] text-[24px] sm:text-[30px] leading-[1.2]">
                  Orientación durante la navegación
                </h3>
                <p className="mt-3 font-normal text-[#4A5568] text-[17px] leading-[1.55]">
                  El asistente ayuda a localizar información, resolver dudas y orientar al visitante hacia el contenido o la acción adecuada.
                </p>

                <ul className="mt-4 flex flex-col gap-2.5">
                  {[
                    "Asistencia interactiva mientras el usuario navega por las páginas del sitio.",
                    "Sugerencias de contenido y accesos directos a secciones clave.",
                    "Reducción de abandonos al resolver dudas antes de salir de la web.",
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
                  src="/doobot/solutions/web/web-cap-navigation.webp"
                  alt="Orientación y conexión con contenidos de la web"
                  embeddedFrame={true}
                  variant="capability"
                />
              </RevealOnScroll>
            </div>
          </div>

          {/* ── Capability B: Captación y cualificación de leads (Reversed Layout) ── */}
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-8">
            <div className="lg:order-2 lg:col-span-7">
              <RevealOnScroll variant="fade-left" duration="medium" delay={0}>
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <FileCheck className="h-5 w-5" />
                </div>
                <h3 className="mt-3.5 font-display font-bold text-[#030A1D] text-[24px] sm:text-[30px] leading-[1.2]">
                  Captación y cualificación de leads
                </h3>
                <p className="mt-3 font-normal text-[#4A5568] text-[17px] leading-[1.55]">
                  Recoge la información necesaria, identifica el interés del visitante y facilita la continuidad comercial.
                </p>

                <ul className="mt-4 flex flex-col gap-2.5">
                  {[
                    "Formularios conversacionales integrados de forma fluida en el diálogo.",
                    "Recogida ordenada de datos de contacto y necesidades del usuario.",
                    "Preparación del expediente para su gestión por el equipo comercial.",
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
                  src="/doobot/solutions/web/web-cap-leads.png"
                  alt="Captación y cualificación de oportunidades en la web"
                  embeddedFrame={true}
                  variant="capability"
                />
              </RevealOnScroll>
            </div>
          </div>

          {/* ── Capability C: Respuestas conectadas con el conocimiento de la empresa ── */}
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7">
              <RevealOnScroll variant="fade-right" duration="medium" delay={0}>
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700">
                  <Layers className="h-5 w-5" />
                </div>
                <h3 className="mt-3.5 font-display font-bold text-[#030A1D] text-[24px] sm:text-[30px] leading-[1.2]">
                  Respuestas conectadas con el conocimiento de la empresa
                </h3>
                <p className="mt-3 font-normal text-[#4A5568] text-[17px] leading-[1.55]">
                  Utiliza documentación y fuentes corporativas autorizadas para responder de forma precisa y coherente.
                </p>

                <ul className="mt-4 flex flex-col gap-2.5">
                  {[
                    "Acceso directo a catálogos, fichas técnicas y preguntas frecuentes.",
                    "Respuestas fundadas strictly en la base de datos corporativa.",
                    "Actualización continua del conocimiento sin reprogramar el asistente.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[15px] text-slate-700 font-medium">
                      <CheckCircle2 className="h-4.5 w-4.5 text-indigo-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </RevealOnScroll>
            </div>

            <div className="lg:col-span-5">
              <RevealOnScroll variant="fade-left" duration="medium" delay={150}>
                <SolutionImageVisual
                  src="/doobot/solutions/web/web-cap-knowledge.webp"
                  alt="Conexión con fuentes de conocimiento corporativo"
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
