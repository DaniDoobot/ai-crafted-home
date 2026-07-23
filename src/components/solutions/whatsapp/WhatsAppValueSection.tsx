import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Clock, CalendarCheck, Database, Cpu } from "lucide-react";

const VALUE_POINTS = [
  {
    icon: Clock,
    title: "Atención inmediata 24×7",
    description:
      "Respuestas instantáneas en cualquier horario sin tiempos de espera para el usuario, manteniendo la cercanía del canal WhatsApp.",
    tag: "Disponibilidad total",
  },
  {
    icon: CalendarCheck,
    title: "Gestión de citas y solicitudes",
    description:
      "Recoge datos clave, verifica la disponibilidad de tu agenda y confirma citas o solicitudes de forma totalmente autónoma.",
    tag: "Agilidad operativa",
  },
  {
    icon: Database,
    title: "Acceso a información personalizada",
    description:
      "Consulta bases de datos, catálogos e información del cliente para ofrecer respuestas precisas, contextualizadas y útiles.",
    tag: "Contexto inteligente",
  },
  {
    icon: Cpu,
    title: "Automatización conectada con tus sistemas",
    description:
      "Registra la actividad, actualiza estados y sincroniza cada gestión directamente en tu CRM, ERP o aplicativo corporativo.",
    tag: "Integración nativa",
  },
];

export function WhatsAppValueSection() {
  return (
    <section className="py-[105px] lg:py-[120px] bg-[#F9F9FF] border-b border-indigo-100/60">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-[820px] text-center">
          <RevealOnScroll variant="fade-left" duration="fast" delay={0}>
            <span className="inline-block rounded-full bg-indigo-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#050547]">
              Propuesta de Valor
            </span>
            <h2 className="mt-4 font-display font-bold text-[#050547] text-[clamp(32px,3.4vw,50px)] leading-[1.15] tracking-tight">
              Mucho más que responder mensajes
            </h2>
            <p className="mt-4 font-normal text-[#555B66] text-[18px] sm:text-[20px] leading-[1.6]">
              Un asistente conectado con los procesos de tu empresa para informar, recoger datos, ejecutar gestiones y derivar a una persona cuando sea necesario.
            </p>
          </RevealOnScroll>
        </div>

        {/* Editorial 2x2 Grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {VALUE_POINTS.map((point, index) => {
            const Icon = point.icon;
            return (
              <RevealOnScroll
                key={point.title}
                variant="fade-left"
                duration="medium"
                delay={index * 120}
              >
                <div className="group relative h-full rounded-3xl border border-indigo-100 bg-white p-8 sm:p-10 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-indigo-200 hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-[#050547] group-hover:bg-[#050547] group-hover:text-white transition-colors duration-300">
                      <Icon className="h-7 w-7" />
                    </div>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                      {point.tag}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display font-bold text-[#050547] text-[22px] sm:text-[24px] leading-[1.3]">
                    {point.title}
                  </h3>

                  <p className="mt-3 font-normal text-[#555B66] text-[16px] sm:text-[17px] leading-[1.6]">
                    {point.description}
                  </p>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
