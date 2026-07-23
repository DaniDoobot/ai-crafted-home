import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Bell, ChevronRight, AlertTriangle, RotateCcw, ArrowUpRight } from "lucide-react";

const alerts = [
  {
    badge: "Para revisar",
    badgeCls: "bg-indigo-500/20 text-indigo-200",
    dot: "bg-indigo-400",
    title: "Incremento en un motivo de contacto",
    desc: "Se ha identificado un aumento de consultas relacionadas con una temática concreta respecto al periodo de referencia.",
    icon: ArrowUpRight,
  },
  {
    badge: "Cambio identificado",
    badgeCls: "bg-violet-500/20 text-violet-200",
    dot: "bg-violet-400",
    title: "Aparición de nueva temática",
    desc: "Conversaciones recientes incluyen referencias a un asunto que no estaba presente en periodos anteriores.",
    icon: Bell,
  },
  {
    badge: "Seguimiento recomendado",
    badgeCls: "bg-blue-500/20 text-blue-200",
    dot: "bg-blue-400",
    title: "Incidencia recurrente detectada",
    desc: "El mismo tipo de incidencia aparece registrado en varias interacciones del mismo intervalo temporal.",
    icon: RotateCcw,
  },
  {
    badge: "Para revisar",
    badgeCls: "bg-cyan-500/20 text-cyan-200",
    dot: "bg-cyan-400",
    title: "Condición configurada activada",
    desc: "Una regla definida por el equipo ha identificado una situación que supera el umbral establecido.",
    icon: AlertTriangle,
  },
];

export function AnalyticsAlerts() {
  return (
    <section className="relative overflow-hidden py-[80px] lg:py-[95px] bg-[#080C24] text-white">
      {/* Glow */}
      <div
        className="pointer-events-none absolute left-1/3 top-0 h-[500px] w-[600px] rounded-full opacity-15 blur-[140px]"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.5) 0%, rgba(139,92,246,0.3) 100%)" }}
      />

      <div className="relative mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">

          {/* ── Copy ── */}
          <div className="lg:col-span-5">
            <RevealOnScroll variant="fade-right" duration="fast" delay={0}>
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-1.5 backdrop-blur-md mb-5">
                <Bell className="h-4 w-4 text-indigo-300" />
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-300">
                  Alertas y seguimiento
                </span>
              </div>
              <h2 className="font-display font-bold text-white text-[clamp(30px,3.2vw,46px)] leading-[1.15] tracking-tight">
                Detecta situaciones que requieren atención
              </h2>
              <p className="mt-4 text-slate-300 text-[18px] leading-[1.6] font-normal">
                AI Analytics puede ayudar a identificar cambios, desviaciones o temas relevantes y facilitar su revisión por parte del equipo.
              </p>

              <ul className="mt-7 flex flex-col gap-3">
                {[
                  "Variaciones respecto a periodos anteriores.",
                  "Incremento de un motivo de contacto.",
                  "Aparición de nuevas temáticas.",
                  "Incidencias recurrentes.",
                  "Condiciones configuradas por la empresa.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] text-slate-300">
                    <ChevronRight className="h-5 w-5 text-indigo-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-sm text-slate-400 italic">
                Las reglas, umbrales y destinatarios se definen según las necesidades del proyecto.
              </p>
            </RevealOnScroll>
          </div>

          {/* ── Alert Cards Panel ── */}
          <div className="lg:col-span-7">
            <RevealOnScroll variant="fade-left" duration="medium" delay={150}>
              <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 backdrop-blur-xl space-y-3">
                {/* Panel header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-sm font-bold text-white">Centro de alertas</span>
                  <span className="text-xs text-slate-400">Conceptual · Configurable</span>
                </div>

                {alerts.map((alert, i) => {
                  const Icon = alert.icon;
                  return (
                    <div
                      key={i}
                      className="flex items-start gap-4 rounded-2xl border border-white/8 bg-white/5 p-4 hover:bg-white/8 transition-colors"
                    >
                      <div className={`mt-1 h-2 w-2 rounded-full shrink-0 ${alert.dot}`} />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${alert.badgeCls}`}>
                            {alert.badge}
                          </span>
                          <span className="font-bold text-white text-sm">{alert.title}</span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed">{alert.desc}</p>
                      </div>
                      <Icon className="h-4 w-4 text-slate-500 shrink-0 mt-0.5" />
                    </div>
                  );
                })}
              </div>
            </RevealOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
}
