import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Database, UserCheck, CalendarCheck, ShieldCheck, CheckCircle2 } from "lucide-react";

export function VoiceDataContext() {
  return (
    <section className="py-[85px] lg:py-[100px] bg-[#F4F8FF] border-t border-cyan-100/70">
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Copy & Advantages */}
          <div className="lg:col-span-6">
            <RevealOnScroll variant="fade-right" duration="medium" delay={0}>
              <span className="inline-block rounded-full bg-cyan-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cyan-900">
                Información Contextual Telefónica
              </span>

              <h2 className="mt-5 font-display font-bold text-[#060B28] text-[clamp(34px,3.5vw,52px)] leading-[1.12] tracking-tight">
                Respuestas apoyadas en la información disponible
              </h2>

              <p className="mt-5 font-normal text-[#4A5568] text-[18px] sm:text-[20px] leading-[1.6]">
                El asistente puede consultar información autorizada del negocio y del cliente para adaptar la conversación y ejecutar la gestión correspondiente.
              </p>

              <div className="mt-8 flex flex-col gap-4">
                {[
                  {
                    title: "Información general del servicio",
                    desc: "Consulta de catálogo, precios, condiciones y respuestas frecuentes autorizadas.",
                  },
                  {
                    title: "Datos autorizados del cliente",
                    desc: "Identificación de expedientes, contratos o historial de atención previo.",
                  },
                  {
                    title: "Estado de citas y solicitudes",
                    desc: "Consulta del estado disponible de una gestión o reserva programada.",
                  },
                  {
                    title: "Personalización de la respuesta",
                    desc: "Adaptación del tono y contenido según el perfil y contexto de la llamada.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-cyan-100 bg-white p-4 sm:p-5 shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-cyan-600 shrink-0" />
                      <h3 className="font-display font-bold text-[#060B28] text-base sm:text-lg">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-1.5 pl-8 text-sm text-[#4A5568] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Prudent Disclaimer */}
              <div className="mt-6">
                <p className="text-xs italic text-slate-500">
                  * El acceso y las acciones disponibles dependen de las integraciones y permisos definidos para cada proyecto.
                </p>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Caller Context Card Mockup */}
          <div className="lg:col-span-6">
            <RevealOnScroll variant="fade-left" duration="medium" delay={150}>
              <div className="rounded-3xl border border-cyan-200/80 bg-white p-6 sm:p-8 shadow-xl">
                {/* Caller Context Card Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-800 font-bold">
                      <UserCheck className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-[#060B28] text-base">
                        Ficha Contextual de la Llamada
                      </h4>
                      <p className="text-xs text-slate-500">Identificación por número entrante autorizado</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-bold text-cyan-800 border border-cyan-200">
                    Identificación disponible
                  </span>
                </div>

                {/* Fictional Contextual Details */}
                <div className="mt-6 flex flex-col gap-4">
                  {/* Expediente Block */}
                  <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                      <span>Expediente Activo</span>
                      <span className="font-mono text-slate-700 font-bold">#EXP-80492</span>
                    </div>
                    <div className="font-display font-bold text-[#060B28] text-base">
                      Solicitud de Asistencia Técnica Telefónica
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-xs text-cyan-700 font-semibold">
                      <CalendarCheck className="h-4 w-4" />
                      <span>Cita sugerida: Martes 10:30 h</span>
                    </div>
                  </div>

                  {/* Authorized Knowledge Block */}
                  <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
                    <div className="flex items-center gap-2 text-xs font-bold text-indigo-900 mb-1.5">
                      <Database className="h-4 w-4 text-indigo-600" />
                      <span>Consulta a Base de Datos de Servicio</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      "Acceso verificado a condiciones de cobertura, historial de incidencias y franjas horarias disponibles para atención."
                    </p>
                  </div>

                  {/* Security Note */}
                  <div className="flex items-center gap-2 rounded-xl bg-emerald-50 border border-emerald-200/60 p-3 text-xs text-emerald-800 font-medium">
                    <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-600" />
                    <span>Consulta sujeta a los procesos de identificación y permisos definidos para el proyecto.</span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
