import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Film, ArrowRight, Layers, Database, Code2, CheckCircle2, Ticket, FileCheck, DollarSign } from "lucide-react";

const systems = [
  "ERP",
  "CRM",
  "Sistemas de ticketing",
  "Plataformas de mantenimiento",
  "Herramientas de formación",
  "Gestión de expedientes",
  "Bases de datos",
  "Aplicativos internos",
];

const integrationActions = [
  { icon: Ticket,     label: "Crear un ticket" },
  { icon: FileCheck,  label: "Asociar una evidencia visual" },
  { icon: Layers,     label: "Actualizar un expediente" },
  { icon: DollarSign, label: "Aplicar un criterio de coste" },
  { icon: CheckCircle2, label: "Iniciar una revisión" },
];

export function VideoAnalyticsIntegrations() {
  return (
    <section className="relative overflow-hidden py-[80px] lg:py-[95px] bg-[#080C24] text-white">
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute right-1/4 bottom-0 h-[450px] w-[550px] rounded-full opacity-15 blur-[130px]"
        style={{ background: "radial-gradient(circle, rgba(217,70,239,0.4) 0%, rgba(37,99,235,0.3) 100%)" }}
      />

      <div className="relative mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-[840px] text-center">
          <RevealOnScroll variant="fade-right" duration="fast" delay={0}>
            <span className="inline-block rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-fuchsia-300 mb-4">
              Integración por API y RPA
            </span>
            <h2 className="font-display font-bold text-white text-[clamp(30px,3.2vw,46px)] leading-[1.15] tracking-tight">
              Conectado con los procesos y aplicativos de tu empresa
            </h2>
            <p className="mt-4 text-slate-300 text-[18px] leading-[1.6] font-normal">
              La integración mediante API o RPA permite utilizar la información obtenida del análisis visual dentro de los sistemas corporativos.
            </p>
          </RevealOnScroll>
        </div>

        {/* Integration Architecture Diagram */}
        <div className="mt-12 grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-6">

          {/* Inputs */}
          <div className="lg:col-span-4">
            <RevealOnScroll variant="fade-right" duration="medium" delay={0}>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                Entradas de contenido
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Film className="h-5 w-5 text-fuchsia-400 shrink-0" />
                  <div>
                    <div className="text-sm font-semibold text-white">Secuencias de vídeo</div>
                    <div className="text-xs text-slate-400">Archivos o fuentes de vídeo</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Film className="h-5 w-5 text-purple-400 shrink-0" />
                  <div>
                    <div className="text-sm font-semibold text-white">Imágenes e inspecciones</div>
                    <div className="text-xs text-slate-400">Fotogramas o capturas de estado</div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Core Node */}
          <div className="lg:col-span-4">
            <RevealOnScroll variant="fade-right" duration="medium" delay={150}>
              <div className="flex flex-col items-center gap-4">
                <div className="hidden lg:flex items-center gap-1 text-fuchsia-400/60">
                  <div className="w-20 h-px bg-fuchsia-400/30" />
                  <ArrowRight className="h-4 w-4" />
                </div>

                <div className="rounded-3xl border-2 border-fuchsia-500/50 bg-gradient-to-b from-fuchsia-600/20 to-blue-600/20 p-7 text-center shadow-xl backdrop-blur-md w-full">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-fuchsia-500/25 text-fuchsia-300 mx-auto mb-3">
                    <Code2 className="h-8 w-8" />
                  </div>
                  <p className="text-[11px] font-bold text-fuchsia-300 uppercase tracking-widest">Conector API / RPA</p>
                  <p className="text-lg font-bold text-white mt-1">Vídeo AI Analytics</p>
                  <p className="text-xs text-slate-400 mt-1.5">Conexión con los aplicativos definidos</p>
                </div>

                <div className="hidden lg:flex items-center gap-1 text-fuchsia-400/60">
                  <ArrowRight className="h-4 w-4" />
                  <div className="w-20 h-px bg-fuchsia-400/30" />
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Systems Output */}
          <div className="lg:col-span-4">
            <RevealOnScroll variant="fade-left" duration="medium" delay={300}>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                Sistemas conectados
              </p>
              <div className="flex flex-wrap gap-2">
                {systems.map((s) => (
                  <span
                    key={s}
                    className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-200"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </RevealOnScroll>
          </div>

        </div>

        {/* Action Examples Strip */}
        <RevealOnScroll variant="fade-right" duration="medium" delay={0}>
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs font-bold text-fuchsia-300 uppercase tracking-wider mb-3">
              Ejemplos de interacción con sistemas
            </p>
            <div className="flex flex-wrap gap-4">
              {integrationActions.map((act) => {
                const Icon = act.icon;
                return (
                  <div key={act.label} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                    <Icon className="h-3.5 w-3.5 text-fuchsia-400" />
                    <span>{act.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-slate-400 italic max-w-[700px] mx-auto">
            Cada integración se diseña de acuerdo con los sistemas, permisos y requisitos del proyecto.
          </p>
        </RevealOnScroll>

      </div>
    </section>
  );
}
