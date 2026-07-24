import { ShieldCheck } from "lucide-react";

interface LegalHeroProps {
  eyebrow?: string;
  title: string;
  description: string;
}

export function LegalHero({
  eyebrow = "Información Legal y Regulatoria",
  title,
  description,
}: LegalHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#02021A] via-[#050547] to-[#0B0B5C] py-[55px] sm:py-[65px] lg:py-[72px] text-white">
      {/* Background Subtle Glow Accent */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full opacity-20 blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, rgba(104, 94, 201, 0.5) 0%, rgba(6, 182, 212, 0.3) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-1.5 backdrop-blur-md">
          <ShieldCheck className="h-4 w-4 text-indigo-300" />
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-indigo-200">
            {eyebrow}
          </span>
        </div>

        <h1 className="mt-5 font-display font-bold text-white text-[clamp(32px,3.8vw,54px)] leading-[1.15] tracking-tight">
          {title}
        </h1>

        <p className="mt-4 max-w-[760px] mx-auto text-slate-300 text-[17px] sm:text-[19px] leading-[1.6]">
          {description}
        </p>
      </div>
    </section>
  );
}
