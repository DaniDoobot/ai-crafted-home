import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Bell, ClipboardList, Send, FileEdit, Zap, CheckCircle2 } from "lucide-react";

const flowSteps = [
  {
    step: "01",
    label: "Evento visual",
    desc: "Identificación de la escena o secuencia analizada.",
  },
  {
    step: "02",
    label: "Dato estructurado",
    desc: "Conversión en etiqueta o parámetro de registro.",
  },
  {
    step: "03",
    label: "Evaluación de regla",
    desc: "Comprobación de condiciones y umbrales definidos.",
  },
  {
    step: "04",
    label: "Acción de negocio",
    desc: "Ejecución del aviso, tarea o actualización.",
  },
];

const actionList = [
  { icon: ClipboardList, label: "Creación automática de tareas" },
  { icon: Send,          label: "Envío a revisión del equipo" },
  { icon: Bell,          label: "Notificación a responsables" },
  { icon: FileEdit,      label: "Actualización de expediente o registro" },
  { icon: Zap,           label: "Respuesta al usuario o cliente" },
  { icon: CheckCircle2,  label: "Activación de proceso conectado" },
];

export function VideoAnalyticsActions() {
  return (
    <section className="py-[80px] lg:py-[95px] bg-white border-t border-slate-100">
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-[840px] text-center">
          <RevealOnScroll variant="fade-right" duration="fast" delay={0}>
            <span className="inline-block rounded-full bg-fuchsia-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-fuchsia-900">
              Avisos y Acciones
            </span>
            <h2 className="mt-4 font-display font-bold text-[#080C24] text-[clamp(32px,3.5vw,50px)] leading-[1.12] tracking-tight">
              Convierte el resultado visual en una acción de negocio
            </h2>
            <p className="mt-4 font-normal text-[#4A5568] text-[18px] sm:text-[20px] leading-[1.6]">
              La información obtenida puede utilizarse para generar avisos, crear tareas, responder a usuarios o iniciar procesos cuando existe la integración correspondiente.
            </p>
          </RevealOnScroll>
        </div>

        {/* Horizontal Desktop Flow */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {flowSteps.map((step, i) => (
            <RevealOnScroll key={step.step} variant="fade-right" duration="medium" delay={i * 100}>
              <div className="rounded-2xl border border-slate-200 bg-[#F8F7FF] p-6 h-full flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-fuchsia-600 uppercase tracking-widest">
                    Paso {step.step}
                  </span>
                  <h3 className="mt-2 font-display font-bold text-[#080C24] text-[19px]">
                    {step.label}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Action Types Grid */}
        <div className="mt-10">
          <RevealOnScroll variant="fade-right" duration="medium" delay={0}>
            <div className="rounded-3xl border border-fuchsia-100 bg-[#F8F7FF] p-8 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
                {actionList.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-3 text-[15px] text-slate-700">
                      <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-lg bg-fuchsia-100 text-fuchsia-700 shrink-0">
                        <Icon className="h-3.5 w-3.5" />
                      </div>
                      <span className="font-medium">{item.label}</span>
                    </div>
                  );
                })}
              </div>
              <p className="mt-6 text-sm text-slate-400 italic border-t border-slate-200/60 pt-4">
                La acción disponible depende de las reglas, permisos e integraciones definidos para cada proyecto.
              </p>
            </div>
          </RevealOnScroll>
        </div>

      </div>
    </section>
  );
}
