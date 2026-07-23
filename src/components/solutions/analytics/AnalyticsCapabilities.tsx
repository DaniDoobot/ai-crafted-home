import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { CheckCircle2, Layers, Search, PieChart, FileSearch, Circle } from "lucide-react";

/* ── HTML/CSS mock: Natural Language Query panel ────────────────────────── */
function NLQueryPanel() {
  const categories = [
    "Información y consultas",
    "Gestión de solicitudes",
    "Incidencias y seguimiento",
    "Otras temáticas identificadas",
  ];
  const sources = ["Conversaciones", "Registros operativos", "Datos autorizados"];

  return (
    <div className="rounded-3xl border border-indigo-100 bg-slate-50 p-5 sm:p-6 shadow-lg">
      <div className="rounded-2xl border border-indigo-50 bg-white p-5 shadow-sm space-y-4">
        {/* Query Input */}
        <div className="flex items-start gap-3 rounded-xl border border-indigo-200/70 bg-indigo-50/60 p-3.5">
          <Search className="h-4 w-4 text-indigo-500 shrink-0 mt-0.5" />
          <p className="text-xs text-slate-800 leading-relaxed italic">
            "¿Cuáles han sido los principales motivos de contacto durante este periodo?"
          </p>
        </div>

        {/* Status chip */}
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-800">
            <FileSearch className="h-3.5 w-3.5" /> Consulta procesada
          </span>
        </div>

        {/* Structured Response — categories without percentages */}
        <div>
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
            Categorías identificadas
          </p>
          <div className="flex flex-col gap-1.5">
            {categories.map((cat) => (
              <div
                key={cat}
                className="flex items-center gap-2.5 rounded-lg border border-slate-100 bg-slate-50 px-3 py-2"
              >
                <Circle className="h-2 w-2 text-indigo-400 fill-indigo-400 shrink-0" />
                <span className="text-xs font-medium text-slate-700">{cat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sources block */}
        <div className="rounded-xl border border-violet-100 bg-violet-50/60 p-3">
          <p className="text-xs font-bold text-violet-800 mb-2">Fuentes analizadas</p>
          <div className="flex flex-wrap gap-1.5">
            {sources.map((s) => (
              <span key={s} className="rounded-full border border-violet-200 bg-white px-2.5 py-0.5 text-xs text-violet-700 font-medium">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── HTML/CSS mock: Topic Clusters & Pattern Detection ──────────────────── */
function PatternClustersPanel() {
  const clusters = [
    { label: "Consultas frecuentes",      color: "border-indigo-300 bg-indigo-50  text-indigo-800" },
    { label: "Cambios de comportamiento", color: "border-violet-300 bg-violet-50  text-violet-800" },
    { label: "Incidencias recurrentes",   color: "border-blue-300   bg-blue-50    text-blue-800"   },
    { label: "Temas emergentes",          color: "border-cyan-300   bg-cyan-50    text-cyan-800"   },
    { label: "Puntos de revisión",        color: "border-slate-300  bg-slate-50   text-slate-700"  },
  ];

  return (
    <div className="rounded-3xl border border-indigo-100 bg-slate-50 p-5 sm:p-6 shadow-lg">
      <div className="rounded-2xl border border-indigo-50 bg-white p-5 shadow-sm space-y-4">
        {/* Central node */}
        <div className="flex justify-center">
          <div className="rounded-2xl border-2 border-indigo-400 bg-indigo-50 px-5 py-3 text-center shadow-sm">
            <p className="text-[11px] font-bold text-indigo-500 uppercase tracking-wide">Nodo central</p>
            <p className="text-sm font-bold text-indigo-900 mt-0.5">Actividad analizada</p>
          </div>
        </div>

        {/* Connector visual */}
        <div className="flex items-center gap-2">
          <div className="h-px flex-1 bg-indigo-100" />
          <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Clusters identificados</span>
          <div className="h-px flex-1 bg-indigo-100" />
        </div>

        {/* Cluster pills */}
        <div className="flex flex-wrap gap-2 justify-center">
          {clusters.map((c) => (
            <span
              key={c.label}
              className={`rounded-xl border px-3.5 py-1.5 text-xs font-semibold ${c.color}`}
            >
              {c.label}
            </span>
          ))}
        </div>

        {/* Insight sidebar card */}
        <div className="rounded-xl border border-amber-200/60 bg-amber-50/60 p-3.5">
          <p className="text-xs font-bold text-amber-800 mb-1">Hallazgo para revisar</p>
          <p className="text-xs text-slate-700 leading-relaxed">
            Se ha identificado una variación respecto al periodo anterior en una de las temáticas monitorizadas.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── Main Component ─────────────────────────────────────────────────────── */
export function AnalyticsCapabilities() {
  return (
    <section
      id="capacidades-analytics"
      className="scroll-mt-24 lg:scroll-mt-28 py-[60px] lg:py-[75px] bg-white"
    >
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-[860px] text-center">
          <RevealOnScroll variant="fade-right" duration="fast" delay={0}>
            <span className="inline-block rounded-full bg-indigo-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-indigo-900">
              Casos de uso y capacidades
            </span>
            <h2 className="mt-4 font-display font-bold text-[#080C24] text-[clamp(34px,3.6vw,52px)] leading-[1.12] tracking-tight">
              Análisis inteligente aplicado a la actividad real de tu empresa
            </h2>
            <p className="mt-4 font-normal text-[#4A5568] text-[18px] sm:text-[20px] leading-[1.6]">
              Descubre cómo la inteligencia artificial procesa datos de negocio, responde a consultas complejas y revela patrones de actividad.
            </p>
            <p className="mt-3 text-xs sm:text-sm text-slate-500 font-normal italic">
              Las interfaces mostradas son representaciones conceptuales de las funcionalidades descritas.
            </p>
          </RevealOnScroll>
        </div>

        {/* ── Capabilities ── */}
        <div className="mt-10 flex flex-col gap-8 lg:gap-12">

          {/* A. Procesamiento a escala — imagen provisional analytics-cap-volume.webp */}
          <div className="grid grid-cols-1 items-center gap-7 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-6">
              <RevealOnScroll variant="fade-right" duration="medium" delay={0}>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-700">
                  <Layers className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display font-bold text-[#080C24] text-[28px] sm:text-[34px] leading-[1.2]">
                  Procesamiento de información a escala
                </h3>
                <p className="mt-3 font-normal text-[#4A5568] text-[18px] leading-[1.6]">
                  Permite analizar múltiples registros y variables para obtener una visión consolidada de la actividad.
                </p>
                <ul className="mt-5 flex flex-col gap-2.5">
                  {[
                    "Consolidación de datos procedentes de diferentes fuentes operativas.",
                    "Análisis estructural de interacciones y registros sin procesos manuales.",
                    "Visión global sobre tendencias y volúmenes de actividad corporativa.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[16px] text-slate-700 font-medium">
                      <CheckCircle2 className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </RevealOnScroll>
            </div>

            <div className="lg:col-span-6">
              <RevealOnScroll variant="fade-left" duration="medium" delay={150}>
                <div className="overflow-hidden rounded-3xl border border-indigo-100 bg-slate-50 p-4 sm:p-5 shadow-lg">
                  <img
                    src="/doobot/solutions/analytics/analytics-cap-volume.webp"
                    alt="Procesamiento de información a escala — representación conceptual"
                    className="h-auto w-full rounded-2xl object-cover shadow-sm"
                  />
                </div>
              </RevealOnScroll>
            </div>
          </div>

          {/* B. Consultas NL — HTML/CSS composition (reversed layout) */}
          <div className="grid grid-cols-1 items-center gap-7 lg:grid-cols-12 lg:gap-10">
            <div className="lg:order-2 lg:col-span-6">
              <RevealOnScroll variant="fade-left" duration="medium" delay={0}>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-violet-700">
                  <Search className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display font-bold text-[#080C24] text-[28px] sm:text-[34px] leading-[1.2]">
                  Consultas en lenguaje natural
                </h3>
                <p className="mt-3 font-normal text-[#4A5568] text-[18px] leading-[1.6]">
                  Los usuarios pueden plantear preguntas sobre la información utilizando expresiones habituales, sin limitarse a menús o informes cerrados.
                </p>
                <ul className="mt-5 flex flex-col gap-2.5">
                  {[
                    "Búsqueda conversacional directa sobre registros de actividad.",
                    "Formulación libre de preguntas sobre temáticas, periodos o motivos.",
                    "Obtención de respuestas sintetizadas con el contexto relevante.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[16px] text-slate-700 font-medium">
                      <CheckCircle2 className="h-5 w-5 text-violet-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </RevealOnScroll>
            </div>

            <div className="lg:order-1 lg:col-span-6">
              <RevealOnScroll variant="fade-right" duration="medium" delay={150}>
                <NLQueryPanel />
              </RevealOnScroll>
            </div>
          </div>

          {/* C. Patrones y desviaciones — HTML/CSS composition */}
          <div className="grid grid-cols-1 items-center gap-7 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-6">
              <RevealOnScroll variant="fade-right" duration="medium" delay={0}>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                  <PieChart className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display font-bold text-[#080C24] text-[28px] sm:text-[34px] leading-[1.2]">
                  Detección de temas, patrones y desviaciones
                </h3>
                <p className="mt-3 font-normal text-[#4A5568] text-[18px] leading-[1.6]">
                  El análisis ayuda a identificar asuntos recurrentes, cambios relevantes y situaciones que conviene revisar.
                </p>
                <ul className="mt-5 flex flex-col gap-2.5">
                  {[
                    "Agrupación automática de conversaciones por temas y conceptos clave.",
                    "Identificación de variaciones de tendencia respecto a periodos anteriores.",
                    "Detección de puntos de atención para orientar decisiones de supervisión.",
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
                <PatternClustersPanel />
              </RevealOnScroll>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
