import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Briefcase, CheckCircle, GraduationCap, Headphones, LineChart, ShieldCheck, TrendingUp, Users } from "lucide-react";

const roles = [
  { label: "Atención al cliente", icon: Headphones },
  { label: "Ventas", icon: TrendingUp },
  { label: "Equipos comerciales", icon: Users },
  { label: "Operaciones", icon: LineChart },
  { label: "Calidad", icon: ShieldCheck },
  { label: "Formación", icon: GraduationCap },
  { label: "Directivos", icon: Briefcase },
];

export function WorkshopNov26Audience() {
  return (
    <section className="relative py-16 sm:py-20 bg-[#040922] text-white border-t border-white/5">
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll variant="fade-up" duration="fast" delay={0}>
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block rounded-full bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cyan-300">
              Perfil de asistentes
            </span>
            <h2 className="mt-4 font-display font-bold text-white text-[clamp(28px,3.8vw,46px)] leading-[1.15] tracking-tight">
              ¿A quién va dirigido este taller?
            </h2>
            <p className="mt-4 font-normal text-slate-200 text-[17px] sm:text-[19px] leading-[1.6]">
              A responsables de atención al cliente, ventas, equipos comerciales, operaciones, calidad y formación, así como directivos que comprenden que la aplicación de la IA se va a convertir en una clave estratégica en sus organizaciones.
            </p>
          </div>
        </RevealOnScroll>

        {/* Roles Badges / Grid */}
        <RevealOnScroll variant="fade-up" duration="medium" delay={150}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
            {roles.map((role) => {
              const Icon = role.icon;
              return (
                <div
                  key={role.label}
                  className="inline-flex items-center gap-2.5 rounded-2xl border border-white/10 bg-slate-900/80 px-4.5 py-3 text-sm sm:text-base font-semibold text-slate-200 shadow-md backdrop-blur-md transition-all hover:border-cyan-400/40 hover:text-cyan-200 hover:scale-[1.02]"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span>{role.label}</span>
                </div>
              );
            })}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
