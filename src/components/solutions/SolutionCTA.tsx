import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ArrowRight, MessageSquare } from "lucide-react";
import { WHATSAPP_DEMO_URL } from "@/config/contact";

interface SolutionCTAProps {
  eyebrow?: string;
  title: string;
  description: string;
  primaryLabel?: string;
}

export function SolutionCTA({
  eyebrow = "Solución doobot.ai",
  title,
  description,
  primaryLabel = "Agendar una demo",
}: SolutionCTAProps) {
  return (
    <section
      className="relative overflow-hidden py-[100px] lg:py-[120px]"
      style={{
        background: "linear-gradient(135deg, #02021A 0%, #050547 55%, #0B0B5C 100%)",
      }}
    >
      {/* Background Radial Glow Accent */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[600px] rounded-full opacity-20 blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, rgba(37, 211, 102, 0.4) 0%, rgba(104, 94, 201, 0.3) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[920px] text-center">
          <RevealOnScroll variant="fade-left" duration="fast" delay={0}>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 backdrop-blur-md">
              <MessageSquare className="h-4 w-4 text-emerald-400" />
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                {eyebrow}
              </span>
            </div>
          </RevealOnScroll>

          <RevealOnScroll variant="fade-left" duration="slow" delay={120}>
            <h2 className="mt-6 font-display font-bold text-white text-[clamp(36px,4.2vw,56px)] leading-[1.1] tracking-tight">
              {title}
            </h2>
          </RevealOnScroll>

          <RevealOnScroll variant="fade-left" duration="slow" delay={220}>
            <p className="mt-5 font-normal text-slate-200 text-[19px] sm:text-[21px] leading-[1.55] max-w-[780px] mx-auto">
              {description}
            </p>
          </RevealOnScroll>

          <RevealOnScroll variant="fade-left" duration="slow" delay={300}>
            <div className="mt-10 flex items-center justify-center">
              <a
                href={WHATSAPP_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-gradient-brand px-9 py-4 text-[17px] font-bold text-white shadow-elevated transition-transform hover:scale-[1.03]"
              >
                <span>{primaryLabel}</span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
