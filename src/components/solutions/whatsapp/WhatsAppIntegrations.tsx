import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Network, Database, Calendar, Lock, Cpu, Server } from "lucide-react";

export function WhatsAppIntegrations() {
  return (
    <section className="py-[100px] lg:py-[120px] bg-[#02021A] text-white relative overflow-hidden">
      {/* Background Radial Glow */}
      <div
        className="pointer-events-none absolute right-1/4 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full opacity-20 blur-[140px]"
        style={{
          background: "radial-gradient(circle, rgba(37, 211, 102, 0.4) 0%, rgba(104, 94, 201, 0.3) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-[850px] text-center">
          <RevealOnScroll variant="fade-left" duration="fast" delay={0}>
            <span className="inline-block rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-300">
              Integración Técnica Flexible
            </span>
            <h2 className="mt-4 font-display font-bold text-white text-[clamp(34px,3.6vw,52px)] leading-[1.12] tracking-tight">
              Conectado con los sistemas que ya utiliza tu empresa
            </h2>
            <p className="mt-4 font-normal text-slate-200 text-[18px] sm:text-[20px] leading-[1.6]">
              La integración mediante API o RPA permite consultar información y registrar gestiones en los aplicativos corporativos.
            </p>
          </RevealOnScroll>
        </div>

        {/* Central Connected Systems Diagram (HTML/CSS Architecture Node Graphic) */}
        <div className="mt-14 max-w-[1100px] mx-auto">
          <RevealOnScroll variant="fade-left" duration="medium" delay={150}>
            <div className="rounded-3xl border border-white/15 bg-slate-900/80 p-8 sm:p-12 shadow-2xl backdrop-blur-xl">
              {/* Central Node */}
              <div className="flex flex-col items-center justify-center">
                <div className="inline-flex items-center gap-3 rounded-2xl bg-[#25D366] px-6 py-3.5 text-white font-display font-bold text-lg shadow-lg">
                  <Network className="h-6 w-6" />
                  <span>Chat Bot WhatsApp Doobot</span>
                </div>
                <div className="mt-2 text-xs text-emerald-400 font-semibold uppercase tracking-wider">
                  Motor de integración autónomo
                </div>
              </div>

              {/* Connecting Lines */}
              <div className="my-8 flex justify-center">
                <div className="h-8 w-0.5 bg-gradient-to-b from-[#25D366] to-indigo-500" />
              </div>

              {/* Connected Systems Grid */}
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                {[
                  { icon: Server, label: "CRM" },
                  { icon: Database, label: "ERP" },
                  { icon: Calendar, label: "Agendas" },
                  { icon: Cpu, label: "APIs REST" },
                  { icon: Lock, label: "Bases de Datos" },
                  { icon: Network, label: "RPA & Bots" },
                ].map((sys) => {
                  const Icon = sys.icon;
                  return (
                    <div
                      key={sys.label}
                      className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-4 text-center hover:border-emerald-400/40 hover:bg-white/10 transition-colors"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-300 mb-2">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-display font-semibold text-sm text-white">
                        {sys.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-300 italic">
            Diseñamos la integración según los sistemas, procesos y requisitos de cada proyecto.
          </p>
        </div>
      </div>
    </section>
  );
}
