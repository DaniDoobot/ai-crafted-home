import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { CheckCircle2, Film, LayoutDashboard, Database } from "lucide-react";
import { SolutionImageVisual } from "@/components/solutions/SolutionImageVisual";

export function VideoAnalyticsCapabilities() {
  return (
    <section
      id="capacidades-video-analytics"
      className="scroll-mt-24 lg:scroll-mt-28 py-[40px] sm:py-[48px] lg:py-[56px] bg-white"
    >
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-[860px] text-center">
          <RevealOnScroll variant="fade-right" duration="fast" delay={0}>
            <span className="inline-block rounded-full bg-fuchsia-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-fuchsia-900">
              Casos de uso y capacidades
            </span>
            <h2 className="mt-3 font-display font-bold text-[#080C24] text-[clamp(30px,3.2vw,46px)] leading-[1.12] tracking-tight">
              Análisis visual aplicado a situaciones reales
            </h2>
            <p className="mt-3 font-normal text-[#4A5568] text-[17px] sm:text-[19px] leading-[1.55]">
              Descubre cómo el análisis por inteligencia artificial procesa secuencias visuales, ayuda a identificar eventos y estructura los datos para tu empresa.
            </p>
            <p className="mt-2 text-xs sm:text-sm text-slate-500 font-normal italic">
              Las interfaces mostradas son representaciones conceptuales de las funcionalidades descritas.
            </p>
          </RevealOnScroll>
        </div>

        {/* ── 3 Capability Rows with Differentiated Visual Flow ── */}
        <div className="mt-8 flex flex-col gap-7 lg:gap-9">

          {/* ── Showcase A: Análisis multimodal mediante Prompts y RAG (Visual Left) ── */}
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-8">
            <div className="lg:order-2 lg:col-span-7">
              <RevealOnScroll variant="fade-left" duration="medium" delay={0}>
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-fuchsia-50 text-fuchsia-700">
                  <Film className="h-5 w-5" />
                </div>
                <h3 className="mt-3.5 font-display font-bold text-[#080C24] text-[24px] sm:text-[30px] leading-[1.2]">
                  Análisis multimodal mediante Prompts y RAG
                </h3>
                <p className="mt-3 font-normal text-[#4A5568] text-[17px] leading-[1.55]">
                  Permite adaptar el comportamiento del análisis identificando con precisión qué se busca en cada contexto operativo.
                </p>

                <ul className="mt-4 flex flex-col gap-2.5">
                  {[
                    "Evaluación de siniestros, daños y estado en reparaciones.",
                    "Formación en vídeo y comprobación de procedimientos.",
                    "Escalable y trasladable a nuevos casos de uso según las necesidades del proyecto.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[15px] text-slate-700 font-medium">
                      <CheckCircle2 className="h-4.5 w-4.5 text-fuchsia-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </RevealOnScroll>
            </div>

            <div className="lg:order-1 lg:col-span-5">
              <RevealOnScroll variant="fade-right" duration="medium" delay={150}>
                <SolutionImageVisual
                  src="/doobot/solutions/video-analytics/video-analytics-cap-processing.webp"
                  alt="Análisis multimodal de vídeo e imágenes"
                  embeddedFrame={true}
                  variant="capability"
                />
              </RevealOnScroll>
            </div>
          </div>

          {/* ── Showcase B: Consola de control e interacción multiusuario (Visual Right) ── */}
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7">
              <RevealOnScroll variant="fade-right" duration="medium" delay={0}>
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-700">
                  <LayoutDashboard className="h-5 w-5" />
                </div>
                <h3 className="mt-3.5 font-display font-bold text-[#080C24] text-[24px] sm:text-[30px] leading-[1.2]">
                  Consola de control e interacción multiusuario
                </h3>
                <p className="mt-3 font-normal text-[#4A5568] text-[17px] leading-[1.55]">
                  Permite gestionar la actividad visual desde distintos dispositivos y asignar tareas según las necesidades de supervisión.
                </p>

                <ul className="mt-4 flex flex-col gap-2.5">
                  {[
                    "Acceso adaptado a entorno web, tablet y teléfono móvil.",
                    "Asignación de tareas entre personas y seguimiento de revisiones.",
                    "Envíos de notificación e integración con flujos de trabajo existentes.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[15px] text-slate-700 font-medium">
                      <CheckCircle2 className="h-4.5 w-4.5 text-purple-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </RevealOnScroll>
            </div>

            <div className="lg:col-span-5">
              <RevealOnScroll variant="fade-left" duration="medium" delay={150}>
                <SolutionImageVisual
                  src="/doobot/solutions/video-analytics/video-analytics-cap-events.webp"
                  alt="Consola de control de análisis visual"
                  embeddedFrame={true}
                  variant="capability"
                />
              </RevealOnScroll>
            </div>
          </div>

          {/* ── Showcase C: Uso de la información en tiempo real (Visual Left) ── */}
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-8">
            <div className="lg:order-2 lg:col-span-7">
              <RevealOnScroll variant="fade-left" duration="medium" delay={0}>
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <Database className="h-5 w-5" />
                </div>
                <h3 className="mt-3.5 font-display font-bold text-[#080C24] text-[24px] sm:text-[30px] leading-[1.2]">
                  Empleo de la información estructurada
                </h3>
                <p className="mt-3 font-normal text-[#4A5568] text-[17px] leading-[1.55]">
                  La información obtenida del análisis visual se convierte en registros para facilitar la acción y el seguimiento operativo.
                </p>

                <ul className="mt-4 flex flex-col gap-2.5">
                  {[
                    "Generación de tareas de revisión o aviso según las condiciones identificadas.",
                    "Facilidad para dar respuesta a usuarios o registrar evidencias visuales.",
                    "Estructuración de datos para su integración posterior con otros sistemas.",
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
                  src="/doobot/solutions/video-analytics/video-analytics-cap-data.webp"
                  alt="Empleo de información estructurada en vídeo analytics"
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
