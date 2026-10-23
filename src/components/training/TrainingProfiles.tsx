import {
  Compass,
  Users2,
  TrendingUp,
  Headphones,
  GraduationCap,
  Calculator,
} from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const profiles = [
  {
    role: "Dirección y responsables de área",
    description:
      "Análisis de escenarios, síntesis ejecutivas y agentes de apoyo a la preparación de decisiones.",
    icon: Compass,
    accentBar: "from-indigo-500 to-blue-600",
    badgeBg: "bg-indigo-50 text-indigo-700 border-indigo-200/80",
    iconColor: "text-indigo-600",
  },
  {
    role: "Mandos intermedios y responsables de equipo",
    description:
      "Planificación, seguimiento de actividad y asistentes para consultar procedimientos o preparar informes.",
    icon: Users2,
    accentBar: "from-cyan-500 to-teal-500",
    badgeBg: "bg-cyan-50 text-cyan-800 border-cyan-200/80",
    iconColor: "text-cyan-700",
  },
  {
    role: "Marketing y ventas",
    description:
      "Investigación, propuestas comerciales y agentes para desarrollar contenidos o preparar reuniones con clientes.",
    icon: TrendingUp,
    accentBar: "from-amber-500 to-orange-500",
    badgeBg: "bg-amber-50 text-amber-800 border-amber-200/80",
    iconColor: "text-amber-700",
  },
  {
    role: "Operaciones y atención al cliente",
    description:
      "Análisis de incidencias, revisión de conversaciones y asistentes de consulta de documentación operativa.",
    icon: Headphones,
    accentBar: "from-blue-500 to-indigo-500",
    badgeBg: "bg-blue-50 text-blue-700 border-blue-200/80",
    iconColor: "text-blue-600",
  },
  {
    role: "Recursos humanos y formación",
    description:
      "Materiales de aprendizaje, diseño de entrevistas y agentes para practicar situaciones profesionales o apoyar planes de desarrollo.",
    icon: GraduationCap,
    accentBar: "from-emerald-500 to-green-600",
    badgeBg: "bg-emerald-50 text-emerald-800 border-emerald-200/80",
    iconColor: "text-emerald-700",
  },
  {
    role: "Administración y finanzas",
    description:
      "Organización de información, análisis de datos y asistentes para elaborar y revisar informes.",
    icon: Calculator,
    accentBar: "from-purple-500 to-fuchsia-600",
    badgeBg: "bg-purple-50 text-purple-800 border-purple-200/80",
    iconColor: "text-purple-700",
  },
];

export function TrainingProfiles() {
  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-white">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <RevealOnScroll variant="fade-right" duration="fast" delay={0}>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-800 mb-3">
              Por Departamento
            </div>
          </RevealOnScroll>
          <RevealOnScroll variant="fade-right" duration="fast" delay={60}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight">
              Una formación para cada perfil
            </h2>
          </RevealOnScroll>
          <RevealOnScroll variant="fade-right" duration="medium" delay={120}>
            <p className="mt-3.5 text-base sm:text-lg text-slate-600 leading-relaxed">
              Adaptamos los contenidos y la creación de agentes a las tareas, objetivos y responsabilidades de cada equipo.
            </p>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {profiles.map((profile, index) => {
            const Icon = profile.icon;
            return (
              <RevealOnScroll
                key={profile.role}
                variant="fade-right"
                duration="fast"
                delay={index * 50}
              >
                <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/40 p-6 sm:p-7 transition-all duration-300 hover:bg-white hover:shadow-md hover:border-slate-300 flex flex-col justify-between">
                  {/* Top colored accent strip */}
                  <div
                    aria-hidden="true"
                    className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${profile.accentBar} opacity-80 group-hover:h-1.5 transition-all`}
                  />

                  <div>
                    <div className="flex items-center justify-between mb-4 mt-1">
                      <div
                        className={`inline-flex h-12 w-12 items-center justify-center rounded-xl border ${profile.badgeBg} shadow-xs transition-transform duration-300 group-hover:scale-105`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-600">
                        Área de trabajo
                      </span>
                    </div>

                    <h3 className="text-lg font-display font-bold text-slate-900 leading-snug">
                      {profile.role}
                    </h3>
                    <p className="mt-2.5 text-slate-600 text-sm leading-relaxed">
                      {profile.description}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
