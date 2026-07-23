import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Globe, Database, Server, Calendar, Lock, Cpu, Network } from "lucide-react";

export function WebIntegrations() {
  return (
    <section className="py-[95px] lg:py-[110px] bg-[#F4F8FF] border-t border-blue-100/70">
      <div className="relative mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-[860px] text-center">
          <RevealOnScroll variant="fade-left" duration="fast" delay={0}>
            <span className="inline-block rounded-full bg-cyan-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cyan-900">
              Integración y Conectividad
            </span>
            <h2 className="mt-4 font-display font-bold text-[#030A1D] text-[clamp(34px,3.6vw,52px)] leading-[1.12] tracking-tight">
              Conectado con la información y los sistemas de tu empresa
            </h2>
            <p className="mt-4 font-normal text-[#4A5568] text-[18px] sm:text-[20px] leading-[1.6]">
              La integración mediante API o RPA permite consultar datos, registrar contactos y ejecutar gestiones en los aplicativos corporativos.
            </p>
          </RevealOnScroll>
        </div>

        {/* Central Connected Systems Graphic (Central Web Bot Node + Systems Network) */}
        <div className="mt-14 max-w-[1150px] mx-auto">
          <RevealOnScroll variant="fade-left" duration="medium" delay={150}>
            <div className="rounded-3xl border border-blue-200/80 bg-white p-8 sm:p-11 shadow-lg">
              {/* Central Web Bot Node */}
              <div className="flex flex-col items-center justify-center">
                <div className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 px-7 py-4 text-white font-display font-bold text-lg shadow-md">
                  <Globe className="h-6 w-6" />
                  <span>Chat Bot Web Doobot</span>
                </div>
                <div className="mt-2.5 text-xs text-blue-700 font-semibold uppercase tracking-wider">
                  Nodo central de atención web
                </div>
              </div>

              {/* Connecting Line */}
              <div className="my-8 flex justify-center">
                <div className="h-8 w-0.5 bg-gradient-to-b from-cyan-500 to-indigo-500" />
              </div>

              {/* Connected Systems Grid */}
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                {[
                  { icon: Server, label: "CRM corporativo" },
                  { icon: Database, label: "ERP / Gestión" },
                  { icon: Calendar, label: "Sistema de Citas" },
                  { icon: Cpu, label: "APIs REST" },
                  { icon: Lock, label: "Bases de Datos" },
                  { icon: Network, label: "Automatización RPA" },
                ].map((sys) => {
                  const Icon = sys.icon;
                  return (
                    <div
                      key={sys.label}
                      className="flex flex-col items-center justify-center rounded-2xl border border-blue-100 bg-slate-50 p-4 text-center hover:border-cyan-400 hover:bg-cyan-50/40 transition-colors"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-900 mb-2.5">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-display font-semibold text-xs text-[#030A1D]">
                        {sys.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Prudent Notice */}
        <div className="mt-8 text-center">
          <p className="text-sm text-[#4A5568] italic">
            Cada integración se diseña de acuerdo con los sistemas, procesos y requisitos del proyecto.
          </p>
        </div>
      </div>
    </section>
  );
}
