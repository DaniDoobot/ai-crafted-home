import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import {
  MessageCircle, Database, BarChart3, ClipboardList,
  Star, Layers, Code2, Cog, ArrowRight,
} from "lucide-react";

const sources = [
  { icon: MessageCircle, label: "Conversaciones" },
  { icon: Database,      label: "CRM" },
  { icon: ClipboardList, label: "Plataformas de atención" },
  { icon: Database,      label: "Bases de datos" },
  { icon: Star,          label: "Encuestas" },
  { icon: Layers,        label: "Registros operativos" },
  { icon: Cog,           label: "Herramientas internas" },
  { icon: Code2,         label: "API / RPA" },
];

const outputs = [
  { label: "Hallazgos y patrones", color: "bg-indigo-500/20 text-indigo-200 border-indigo-400/30" },
  { label: "Alertas configuradas",  color: "bg-violet-500/20 text-violet-200 border-violet-400/30" },
  { label: "Recomendaciones",       color: "bg-blue-500/20   text-blue-200   border-blue-400/30"  },
  { label: "Acciones (si aplica)",  color: "bg-cyan-500/20   text-cyan-200   border-cyan-400/30"  },
];

export function AnalyticsIntegrations() {
  return (
    <section className="relative overflow-hidden py-[80px] lg:py-[95px] bg-[#080C24] text-white">
      {/* Glow */}
      <div
        className="pointer-events-none absolute right-1/4 bottom-0 h-[450px] w-[550px] rounded-full opacity-15 blur-[130px]"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.5) 0%, rgba(37,99,235,0.3) 100%)" }}
      />

      <div className="relative mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-[820px] text-center">
          <RevealOnScroll variant="fade-right" duration="fast" delay={0}>
            <span className="inline-block rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-indigo-300 mb-4">
              Integración con fuentes y sistemas
            </span>
            <h2 className="font-display font-bold text-white text-[clamp(30px,3.2vw,46px)] leading-[1.15] tracking-tight">
              Analiza información procedente de distintas fuentes
            </h2>
            <p className="mt-4 text-slate-300 text-[18px] leading-[1.6] font-normal">
              La solución puede conectarse con fuentes autorizadas para consolidar y analizar la información relevante para cada caso de uso.
            </p>
          </RevealOnScroll>
        </div>

        {/* Integration diagram */}
        <div className="mt-12 grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-6">

          {/* Left: Sources */}
          <div className="lg:col-span-4">
            <RevealOnScroll variant="fade-right" duration="medium" delay={0}>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                Fuentes de información
              </p>
              <div className="grid grid-cols-2 gap-2.5">
                {sources.map((s) => {
                  const Icon = s.icon;
                  return (
                    <div
                      key={s.label}
                      className="flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/5 px-3 py-2.5 hover:bg-white/8 transition-colors"
                    >
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-300 shrink-0">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="text-xs font-medium text-slate-200">{s.label}</span>
                    </div>
                  );
                })}
              </div>
            </RevealOnScroll>
          </div>

          {/* Center: Core node */}
          <div className="lg:col-span-4">
            <RevealOnScroll variant="fade-right" duration="medium" delay={150}>
              <div className="flex flex-col items-center gap-5">
                {/* Arrows in */}
                <div className="hidden lg:flex items-center gap-1 text-indigo-400/60">
                  <div className="w-24 h-px bg-indigo-400/30" />
                  <ArrowRight className="h-4 w-4" />
                </div>

                {/* Analytics Core */}
                <div className="rounded-3xl border-2 border-indigo-500/50 bg-gradient-to-b from-indigo-600/20 to-violet-600/20 p-7 text-center shadow-xl backdrop-blur-md w-full">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500/25 text-indigo-300 mx-auto mb-3">
                    <BarChart3 className="h-9 w-9" />
                  </div>
                  <p className="text-[11px] font-bold text-indigo-300 uppercase tracking-widest">Núcleo</p>
                  <p className="text-lg font-bold text-white mt-1">AI Analytics</p>
                  <p className="text-xs text-slate-400 mt-1.5">Consolidación y análisis inteligente</p>
                </div>

                {/* Arrow out */}
                <div className="hidden lg:flex items-center gap-1 text-indigo-400/60">
                  <ArrowRight className="h-4 w-4" />
                  <div className="w-24 h-px bg-indigo-400/30" />
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right: Outputs */}
          <div className="lg:col-span-4">
            <RevealOnScroll variant="fade-left" duration="medium" delay={300}>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                Hallazgos y acciones
              </p>
              <div className="flex flex-col gap-2.5">
                {outputs.map((o) => (
                  <div
                    key={o.label}
                    className={`flex items-center gap-3 rounded-2xl border px-4 py-3 ${o.color}`}
                  >
                    <div className="h-2 w-2 rounded-full bg-current shrink-0 opacity-70" />
                    <span className="text-sm font-semibold">{o.label}</span>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>

        </div>

        {/* Footer note */}
        <RevealOnScroll variant="fade-right" duration="medium" delay={0}>
          <p className="mt-10 text-center text-sm text-slate-400 italic max-w-[700px] mx-auto">
            Cada conexión se diseña de acuerdo con las fuentes, permisos, calidad del dato y requisitos del proyecto.
          </p>
        </RevealOnScroll>

      </div>
    </section>
  );
}
