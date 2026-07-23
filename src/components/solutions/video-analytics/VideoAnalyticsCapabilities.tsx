import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { CheckCircle2, Film, LayoutDashboard, Database } from "lucide-react";
import { SolutionImageVisual } from "@/components/solutions/SolutionImageVisual";

export function VideoAnalyticsCapabilities() {
  return (
    <section
      id="capacidades-video-analytics"
      className="scroll-mt-24 lg:scroll-mt-28 py-[55px] lg:py-[70px] bg-white"
    >
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-[860px] text-center">
          <RevealOnScroll variant="fade-right" duration="fast" delay={0}>
            <span className="inline-block rounded-full bg-fuchsia-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-fuchsia-900">
              Casos de uso y capacidades
            </span>
            <h2 className="mt-4 font-display font-bold text-[#080C24] text-[clamp(34px,3.6vw,52px)] leading-[1.12] tracking-tight">
              Análisis visual aplicado a situaciones reales
            </h2>
            <p className="mt-4 font-normal text-[#4A5568] text-[18px] sm:text-[20px] leading-[1.6]">
              Descubre cómo el análisis por inteligencia artificial procesa secuencias visuales, ayuda a identificar eventos y estructura los datos para tu empresa.
            </p>
            <p className="mt-3 text-xs sm:text-sm text-slate-500 font-normal italic">
              Las interfaces mostradas son representaciones conceptuales de las funcionalidades descritas.
            </p>
          </RevealOnScroll>
        </div>

        {/* ── 3 Capability Rows ── */}
        <div className="mt-9 flex flex-col gap-7 lg:gap-10">

          {/* ── Showcase A: Análisis multimodal mediante Prompts y RAG ── */}
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-9">
            <div className="lg:col-span-6">
              <RevealOnScroll variant="fade-right" duration="medium" delay={0}>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-fuchsia-50 text-fuchsia-700">
                  <Film className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display font-bold text-[#080C24] text-[28px] sm:text-[34px] leading-[1.2]">
                  Análisis multimodal mediante Prompts y RAG
                </h3>
                <p className="mt-3 font-normal text-[#4A5568] text-[18px] leading-[1.6]">
                  Permite adaptar el comportamiento del análisis identificando con precisión qué se busca en cada contexto operativo.
                </p>

                <ul className="mt-5 flex flex-col gap-2.5">
                  {[
                    "Evaluación de siniestros, daños y estado en reparaciones.",
                    "Formación en vídeo y comprobación de procedimientos.",
                    "Escalable y trasladable a nuevos casos de uso según las necesidades del proyecto.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[16px] text-slate-700 font-medium">
                      <CheckCircle2 className="h-5 w-5 text-fuchsia-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </RevealOnScroll>
            </div>

            <div className="lg:col-span-6">
              <RevealOnScroll variant="fade-left" duration="medium" delay={150}>
                <SolutionImageVisual
                  src="/doobot/solutions/video-analytics/video-analytics-cap-processing.webp"
                  alt="Análisis multimodal de vídeo e imágenes"
                  embeddedFrame={true}
                  variant="capability"
                />
              </RevealOnScroll>
            </div>
          </div>

          {/* ── Showcase B: Consola de control e interacción multiusuario (Reversed) ── */}
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-9">
            <div className="lg:order-2 lg:col-span-6">
              <RevealOnScroll variant="fade-left" duration="medium" delay={0}>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-50 text-purple-700">
                  <LayoutDashboard className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display font-bold text-[#080C24] text-[28px] sm:text-[34px] leading-[1.2]">
                  Consola de control e interacción multiusuario
                </h3>
                <p className="mt-3 font-normal text-[#4A5568] text-[18px] leading-[1.6]">
                  Permite gestionar la actividad visual desde distintos dispositivos y asignar tareas según las necesidades de supervisión.
                </p>

                <ul className="mt-5 flex flex-col gap-2.5">
                  {[
                    "Acceso adaptado a entorno web, tablet y teléfono móvil.",
                    "Asignación de tareas entre personas y seguimiento de revisiones.",
                    "Envíos de notificación e integración con flujos de trabajo existentes.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[16px] text-slate-700 font-medium">
                      <CheckCircle2 className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </RevealOnScroll>
            </div>

            <div className="lg:order-1 lg:col-span-6">
              <RevealOnScroll variant="fade-right" duration="medium" delay={150}>
                <SolutionImageVisual
                  src="/doobot/solutions/video-analytics/video-analytics-cap-events.webp"
                  alt="Consola de control de análisis visual"
                  embeddedFrame={true}
                  variant="capability"
                />
              </RevealOnScroll>
            </div>
          </div>

          {/* ── Showcase C: Uso de la información en tiempo real ── */}
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-9">
            <div className="lg:col-span-6">
              <RevealOnScroll variant="fade-right" duration="medium" delay={0}>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                  <Database className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display font-bold text-[#080C24] text-[28px] sm:text-[34px] leading-[1.2]">
                  Empleo de la información estructurada
                </h3>
                <p className="mt-3 font-normal text-[#4A5568] text-[18px] leading-[1.6]">
                  La información obtenida del análisis visual se convierte en registros para facilitar la acción y el seguimiento operativo.
                </p>

                <ul className="mt-5 flex flex-col gap-2.5">
                  {[
                    "Generación de tareas de revisión o aviso según las condiciones identificadas.",
                    "Facilidad para dar respuesta a usuarios o registrar evidencias visuales.",
                    "Estructuración de datos para su integración posterior con otros sistemas.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[16px] text-slate-700 font-medium">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </RevealOnScroll>
            </div>

            <div className="lg:col-span-6">
              <RevealOnScroll variant="fade-left" duration="medium" delay={150}>
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
