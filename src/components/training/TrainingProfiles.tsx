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
    accent: "border-indigo-200 bg-indigo-50/50 text-indigo-700",
  },
  {
    role: "Mandos intermedios y responsables de equipo",
    description:
      "Planificación, seguimiento de actividad y asistentes para consultar procedimientos o preparar informes.",
    icon: Users2,
    accent: "border-cyan-200 bg-cyan-50/50 text-cyan-700",
  },
  {
    role: "Marketing y ventas",
    description:
      "Investigación, propuestas comerciales y agentes para desarrollar contenidos o preparar reuniones con clientes.",
    icon: TrendingUp,
    accent: "border-amber-200 bg-amber-50/50 text-amber-700",
  },
  {
    role: "Operaciones y atención al cliente",
    description:
      "Análisis de incidencias, revisión de conversaciones y asistentes de consulta de documentación operativa.",
    icon: Headphones,
    accent: "border-blue-200 bg-blue-50/50 text-blue-700",
  },
  {
    role: "Recursos humanos y formación",
    description:
      "Materiales de aprendizaje, diseño de entrevistas y agentes para practicar situaciones profesionales o apoyar planes de desarrollo.",
    icon: GraduationCap,
    accent: "border-emerald-200 bg-emerald-50/50 text-emerald-700",
  },
  {
    role: "Administración y finanzas",
    description:
      "Organización de información, análisis de datos y asistentes para elaborar y revisar informes.",
    icon: Calculator,
    accent: "border-purple-200 bg-purple-50/50 text-purple-700",
  },
];

export function TrainingProfiles() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-white">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <RevealOnScroll variant="fade-right" duration="fast" delay={0}>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-800 mb-4">
              Por Departamento
            </div>
          </RevealOnScroll>
          <RevealOnScroll variant="fade-right" duration="fast" delay={60}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight">
              Una formación para cada perfil
            </h2>
          </RevealOnScroll>
          <RevealOnScroll variant="fade-right" duration="medium" delay={120}>
            <p className="mt-4 text-lg sm:text-xl text-slate-600 leading-relaxed">
              Adaptamos los contenidos y la creación de agentes a las tareas, objetivos y responsabilidades de cada equipo.
            </p>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {profiles.map((profile, index) => {
            const Icon = profile.icon;
            return (
              <RevealOnScroll
                key={profile.role}
                variant="fade-right"
                duration="fast"
                delay={index * 60}
              >
                <div className="h-full rounded-2xl border border-slate-200 bg-slate-50/40 p-7 sm:p-8 transition-all duration-300 hover:bg-white hover:shadow-md hover:border-slate-300 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <div
                        className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border ${profile.accent}`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Área de trabajo
                      </span>
                    </div>

                    <h3 className="text-xl font-display font-bold text-slate-900 leading-snug">
                      {profile.role}
                    </h3>
                    <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
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
