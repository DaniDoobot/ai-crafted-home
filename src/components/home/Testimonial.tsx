import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function Testimonial() {
  return (
    <section
      className="py-[30px]"
      style={{
        background: "linear-gradient(180deg, #E1F3FF 0%, #FFFFFF 100%)",
      }}
    >
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 lg:gap-8">
          {/* ── Left Column: Ramón Almendro Image (fade-left 2000ms) ── */}
          <div className="flex justify-center">
            <RevealOnScroll variant="fade-left" duration="slow" delay={0}>
              <img
                src="/doobot/Foto-Ramon-Almendro.webp"
                alt="Ramón Almendro, CEO Boston Medical Group"
                loading="lazy"
                className="h-auto w-[320px] sm:w-[380px] object-contain"
              />
            </RevealOnScroll>
          </div>

          {/* ── Right Column: Quote & Author (fade-right 2000ms) ── */}
          <div className="flex flex-col justify-center">
            <RevealOnScroll variant="fade-right" duration="slow" delay={0}>
              <blockquote
                className="font-display font-medium text-[#050547] max-w-[620px]"
                style={{
                  fontSize: "clamp(21px, 1.6vw, 26px)",
                  lineHeight: 1.45,
                  letterSpacing: "-1px",
                }}
              >
                «El trabajo de doobot.ai ha sido vital, nos han aportado tanto el
                conocimiento operativo como la tecnología y las integraciones para hacer
                posible lo que parecía una idea futurista».
              </blockquote>
            </RevealOnScroll>

            <RevealOnScroll variant="fade-right" duration="slow" delay={0}>
              <div
                className="mt-6 font-display font-medium text-[#050547]"
                style={{
                  fontSize: "clamp(17px, 1.25vw, 20px)",
                  lineHeight: 1.35,
                  letterSpacing: "-1px",
                }}
              >
                <span className="block font-bold">Ramón Almendro</span>
                <span className="block text-[#050547]/80">CEO Boston Medical Group</span>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
