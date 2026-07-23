import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Lightbulb, ClipboardList, Users, Send, Cog } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    label: "Dato",
    title: "Información disponible",
    desc: "Los registros y conversaciones disponibles se procesan para extraer contenido relevante.",
    color: "border-indigo-200 bg-indigo-50 text-indigo-700",
  },
  {
    icon: ClipboardList,
    label: "Hallazgo",
    title: "Análisis y síntesis",
    desc: "El sistema identifica patrones, variaciones o situaciones relevantes en la actividad.",
    color: "border-violet-200 bg-violet-50 text-violet-700",
  },
  {
    icon: Lightbulb,
    label: "Recomendación",
    title: "Orientación para el equipo",
    desc: "Se sugiere una revisión, clasificación o priorización para que el equipo tome la decisión.",
    color: "border-blue-200 bg-blue-50 text-blue-700",
  },
  {
    icon: Cog,
    label: "Acción",
    title: "Ejecución cuando está configurada",
    desc: "Con integración y autorización, ciertas acciones pueden ejecutarse de forma automatizada.",
    color: "border-cyan-200 bg-cyan-50 text-cyan-700",
  },
];

export function AnalyticsActions() {
  return (
    <section className="py-[80px] lg:py-[95px] bg-[#F8F7FF] border-t border-indigo-100/60">
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-[840px] text-center">
          <RevealOnScroll variant="fade-right" duration="fast" delay={0}>
            <span className="inline-block rounded-full bg-indigo-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-indigo-900">
              Recomendaciones y acciones
            </span>
            <h2 className="mt-4 font-display font-bold text-[#080C24] text-[clamp(32px,3.5vw,50px)] leading-[1.12] tracking-tight">
              De la información al siguiente paso
            </h2>
            <p className="mt-4 font-normal text-[#4A5568] text-[18px] sm:text-[20px] leading-[1.6]">
              Los hallazgos pueden convertirse en recomendaciones o acciones para apoyar la supervisión y la gestión operativa.
            </p>
          </RevealOnScroll>
        </div>

        {/* Flow: 4 editorial step cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <RevealOnScroll key={step.label} variant="fade-right" duration="medium" delay={i * 100}>
                <div className="relative flex flex-col rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm hover:shadow-md transition-all h-full">
                  {/* Step number */}
                  <span className="absolute top-5 right-5 text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl border ${step.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>

                  <div className="mt-4 inline-block rounded-full bg-slate-100 px-3 py-0.5 text-xs font-bold text-slate-600 uppercase tracking-wider w-fit">
                    {step.label}
                  </div>

                  <h3 className="mt-3 font-display font-bold text-[#080C24] text-[20px] leading-[1.3]">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-[16px] text-slate-600 leading-relaxed font-normal flex-1">
                    {step.desc}
                  </p>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

        {/* Action types list */}
        <div className="mt-10">
          <RevealOnScroll variant="fade-right" duration="medium" delay={0}>
            <div className="rounded-3xl border border-indigo-100 bg-white p-8 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
                {[
                  { icon: ClipboardList, label: "Recomendación de revisión" },
                  { icon: ClipboardList, label: "Creación de tareas" },
                  { icon: ClipboardList, label: "Clasificación o priorización" },
                  { icon: Send,          label: "Envío de información al equipo" },
                  { icon: Cog,           label: "Ejecución automatizada (si existe integración y autorización)" },
                  { icon: Users,         label: "Escalado a supervisión humana" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-3 text-[15px] text-slate-700">
                      <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 shrink-0">
                        <Icon className="h-3.5 w-3.5" />
                      </div>
                      <span className="font-medium">{item.label}</span>
                    </div>
                  );
                })}
              </div>
              <p className="mt-6 text-sm text-slate-400 italic border-t border-slate-100 pt-5">
                La ejecución automática depende de los procesos, permisos e integraciones definidos.
              </p>
            </div>
          </RevealOnScroll>
        </div>

      </div>
    </section>
  );
}
