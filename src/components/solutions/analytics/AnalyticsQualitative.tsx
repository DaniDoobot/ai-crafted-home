import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Tag } from "lucide-react";

const topicTags = [
  { label: "Motivos de contacto",        color: "border-indigo-300 bg-indigo-50 text-indigo-800" },
  { label: "Temas recurrentes",           color: "border-violet-300 bg-violet-50 text-violet-800" },
  { label: "Intención del interlocutor",  color: "border-blue-300   bg-blue-50   text-blue-800"  },
  { label: "Resultado de la interacción", color: "border-cyan-300   bg-cyan-50   text-cyan-800"  },
  { label: "Oportunidades de mejora",     color: "border-slate-300  bg-slate-50  text-slate-700" },
  { label: "Valoración contextual",       color: "border-purple-300 bg-purple-50 text-purple-800"},
];

const classRows = [
  {
    category: "Motivo de contacto",
    examples: ["Consulta de información", "Solicitud de gestión", "Incidencia"],
    note: "Cuando esté configurada, la clasificación puede incluir subcategorías adicionales.",
  },
  {
    category: "Resultado",
    examples: ["Resuelto", "Derivado a equipo", "Pendiente de respuesta"],
    note: "El resultado depende de los datos disponibles y el contexto de la interacción.",
  },
  {
    category: "Oportunidad identificada",
    examples: ["Proceso que podría simplificarse", "Consulta frecuente sin respuesta clara"],
    note: "Estas clasificaciones requieren revisión por parte del equipo.",
  },
];

export function AnalyticsQualitative() {
  return (
    <section className="py-[80px] lg:py-[95px] bg-white border-t border-slate-100">
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">

          {/* ── Copy ── */}
          <div className="lg:col-span-5">
            <RevealOnScroll variant="fade-right" duration="fast" delay={0}>
              <span className="inline-block rounded-full bg-indigo-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-indigo-900">
                Análisis cualitativo
              </span>
              <h2 className="mt-4 font-display font-bold text-[#080C24] text-[clamp(28px,3vw,44px)] leading-[1.15] tracking-tight">
                Comprende no solo cuánto ocurre, sino también por qué
              </h2>
              <p className="mt-4 font-normal text-[#4A5568] text-[18px] leading-[1.6]">
                El análisis puede clasificar conversaciones y registros según su contenido para facilitar una lectura cualitativa de la actividad.
              </p>

              <div className="mt-8 flex flex-wrap gap-2.5">
                {topicTags.map((tag) => (
                  <span
                    key={tag.label}
                    className={`inline-flex items-center gap-1.5 rounded-xl border px-3.5 py-1.5 text-sm font-semibold ${tag.color}`}
                  >
                    <Tag className="h-3.5 w-3.5 shrink-0" />
                    {tag.label}
                  </span>
                ))}
              </div>

              <p className="mt-7 text-sm text-slate-400 italic border-t border-slate-100 pt-5">
                El análisis cualitativo está condicionado por la calidad y disponibilidad de los datos y no implica comprensión emocional garantizada ni diagnóstico de personas.
              </p>
            </RevealOnScroll>
          </div>

          {/* ── Classification Panel ── */}
          <div className="lg:col-span-7">
            <RevealOnScroll variant="fade-left" duration="medium" delay={150}>
              <div className="rounded-3xl border border-indigo-100 bg-[#F8F7FF] p-6 shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-indigo-100">
                  <span className="text-sm font-bold text-[#080C24]">Clasificación de actividad</span>
                  <span className="text-xs text-slate-400">Representación conceptual</span>
                </div>

                {classRows.map((row, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-white bg-white p-5 shadow-sm"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div className="h-2.5 w-2.5 rounded-full bg-indigo-400 shrink-0" />
                      <span className="text-sm font-bold text-[#080C24]">{row.category}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {row.examples.map((ex) => (
                        <span
                          key={ex}
                          className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                        >
                          {ex}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-slate-500 italic">{row.note}</p>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
}
