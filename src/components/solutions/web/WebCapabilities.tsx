import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { CheckCircle2, Compass, FileCheck, Layers } from "lucide-react";

export function WebCapabilities() {
  return (
    <section id="capacidades-web" className="scroll-mt-24 lg:scroll-mt-28 py-[85px] lg:py-[100px] bg-white">
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-[860px] text-center">
          <RevealOnScroll variant="fade-right" duration="fast" delay={0}>
            <span className="inline-block rounded-full bg-cyan-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cyan-900">
              Casos de uso y capacidades
            </span>
            <h2 className="mt-4 font-display font-bold text-[#030A1D] text-[clamp(34px,3.6vw,52px)] leading-[1.12] tracking-tight">
              Un asistente integrado en la experiencia de tu sitio web
            </h2>
            <p className="mt-4 font-normal text-[#4A5568] text-[18px] sm:text-[20px] leading-[1.6]">
              Descubre cómo la inteligencia artificial conversacional ofrece respuestas contextuales, capta oportunidades y conecta con tus contenidos.
            </p>
            <p className="mt-3 text-xs sm:text-sm text-slate-500 font-normal italic">
              Las interfaces mostradas son representaciones conceptuales de las funcionalidades descritas.
            </p>
          </RevealOnScroll>
        </div>

        {/* 3 Capabilities Rows */}
        <div className="mt-14 flex flex-col gap-12 lg:gap-16">
          {/* ── Capability A: Orientación durante la navegación ── */}
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-6">
              <RevealOnScroll variant="fade-right" duration="medium" delay={0}>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
                  <Compass className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display font-bold text-[#030A1D] text-[28px] sm:text-[34px] leading-[1.2]">
                  Orientación durante la navegación
                </h3>
                <p className="mt-4 font-normal text-[#4A5568] text-[18px] leading-[1.6]">
                  El asistente ayuda a localizar información, resolver dudas y orientar al visitante hacia el contenido o la acción adecuada.
                </p>

                <ul className="mt-6 flex flex-col gap-3">
                  {[
                    "Asistencia interactiva mientras el usuario navega por las páginas del sitio.",
                    "Sugerencias de contenido y accesos directos a secciones clave.",
                    "Reducción de abandonos al resolver dudas antes de salir de la web.",
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
                <div className="overflow-hidden rounded-3xl border border-blue-100 bg-slate-50 p-4 sm:p-6 shadow-lg">
                  <img
                    src="/doobot/solutions/web/web-cap-navigation.webp"
                    alt="Orientación y conexión con contenidos de la web"
                    className="h-auto w-full rounded-2xl object-cover shadow-sm"
                  />
                </div>
              </RevealOnScroll>
            </div>
          </div>

          {/* ── Capability B: Captación y cualificación de leads (Reversed Layout) ── */}
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:order-2 lg:col-span-6">
              <RevealOnScroll variant="fade-left" duration="medium" delay={0}>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                  <FileCheck className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display font-bold text-[#030A1D] text-[28px] sm:text-[34px] leading-[1.2]">
                  Captación y cualificación de leads
                </h3>
                <p className="mt-4 font-normal text-[#4A5568] text-[18px] leading-[1.6]">
                  Recoge la información necesaria, identifica el interés del visitante y facilita la continuidad comercial.
                </p>

                <ul className="mt-6 flex flex-col gap-3">
                  {[
                    "Formularios conversacionales integrados de forma fluida en el diálogo.",
                    "Recogida ordenada de datos de contacto y necesidades del usuario.",
                    "Preparación del expediente para su gestión por el equipo comercial.",
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
                <div className="overflow-hidden rounded-3xl border border-blue-100 bg-slate-50 p-4 sm:p-6 shadow-lg">
                  <img
                    src="/doobot/solutions/web/web-cap-leads.png"
                    alt="Captación y cualificación de oportunidades en la web"
                    className="h-auto w-full rounded-2xl object-cover shadow-sm"
                  />
                </div>
              </RevealOnScroll>
            </div>
          </div>

          {/* ── Capability C: Respuestas conectadas con el conocimiento de la empresa ── */}
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-6">
              <RevealOnScroll variant="fade-right" duration="medium" delay={0}>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-700">
                  <Layers className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display font-bold text-[#030A1D] text-[28px] sm:text-[34px] leading-[1.2]">
                  Respuestas conectadas con el conocimiento de la empresa
                </h3>
                <p className="mt-4 font-normal text-[#4A5568] text-[18px] leading-[1.6]">
                  Utiliza documentación y fuentes corporativas autorizadas para responder de forma precisa y coherente.
                </p>

                <ul className="mt-6 flex flex-col gap-3">
                  {[
                    "Acceso directo a catálogos, fichas técnicas y preguntas frecuentes.",
                    "Respuestas fundadas estrictamente en la base de datos corporativa.",
                    "Actualización continua del conocimiento sin reprogramar el asistente.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[16px] text-slate-700 font-medium">
                      <CheckCircle2 className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </RevealOnScroll>
            </div>

            <div className="lg:col-span-6">
              <RevealOnScroll variant="fade-left" duration="medium" delay={150}>
                <div className="overflow-hidden rounded-3xl border border-blue-100 bg-slate-50 p-4 sm:p-6 shadow-lg">
                  <img
                    src="/doobot/solutions/web/web-cap-knowledge.webp"
                    alt="Conexión con fuentes de conocimiento corporativo"
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
