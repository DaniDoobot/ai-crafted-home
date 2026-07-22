import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function AwardSection() {
  return (
    <section
      id="premio"
      className="py-[100px]"
      style={{
        background: "linear-gradient(180deg, #E1F3FF 0%, #FFFFFF 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Title (fade-right 2000ms) ── */}
        <div className="mx-auto max-w-[850px] text-center">
          <RevealOnScroll variant="fade-right" duration="slow" delay={0}>
            <h2
              className="font-display font-medium text-[#050547]"
              style={{
                fontSize: "clamp(1.5rem, 3.2vw, 31px)",
                lineHeight: 1.3,
                letterSpacing: "-1px",
              }}
            >
              Premio “Mejor Tecnología” en los premios Excelencia Relación con Clientes
              2025, en la Categoría Engagement
            </h2>
          </RevealOnScroll>
        </div>

        {/* ── Vertical Stacked Links with Decreasing Widths (fade-right 2000ms with stagger) ── */}
        <div className="mt-8 flex flex-col items-center gap-3">
          {/* Link 1: Width 50%, Font 24px */}
          <RevealOnScroll
            variant="fade-right"
            duration="slow"
            delay={0}
            className="w-full max-w-[50%] sm:max-w-[50%]"
          >
            <a
              href="https://premiosrelacionclientes.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center p-2.5 bg-transparent border border-[#050547] rounded-none text-[#050547] font-display font-medium leading-[1.3] tracking-[-1px] transition-colors hover:bg-[#050547] hover:text-white"
              style={{ fontSize: "clamp(1rem, 2vw, 24px)" }}
            >
              Ver Premios Relación con Clientes
            </a>
          </RevealOnScroll>

          {/* Link 2: Width 30%, Font 23px */}
          <RevealOnScroll
            variant="fade-right"
            duration="slow"
            delay={120}
            className="w-full max-w-[50%] sm:max-w-[30%]"
          >
            <a
              href="https://newsletteraeerc.ecustomer.es/t/r-e-tktdqit-pcilijuly-y/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center p-2.5 bg-transparent border border-[#050547] rounded-none text-[#050547] font-display font-medium leading-[1.3] tracking-[-1px] transition-colors hover:bg-[#050547] hover:text-white"
              style={{ fontSize: "clamp(0.95rem, 1.8vw, 23px)" }}
            >
              Ver Ganadores 2025
            </a>
          </RevealOnScroll>

          {/* Link 3: Width 20%, Font 19px */}
          <RevealOnScroll
            variant="fade-right"
            duration="slow"
            delay={240}
            className="w-full max-w-[50%] sm:max-w-[20%]"
          >
            <a
              href="https://isanidad.com/350623/boston-medical-galardonada-por-su-innovacion-en-la-relacion-con-el-paciente-con-la-ia-de-doobot-ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center p-2.5 bg-transparent border border-[#050547] rounded-none text-[#050547] font-display font-medium leading-[1.3] tracking-[-1px] transition-colors hover:bg-[#050547] hover:text-white"
              style={{ fontSize: "clamp(0.875rem, 1.5vw, 19px)" }}
            >
              Ver eco en prensa
            </a>
          </RevealOnScroll>
        </div>

        {/* ── Main Photo: max-width 1150px, centered, static, no border radius, no shadow ── */}
        <div className="mt-10 mx-auto max-w-[1150px]">
          <img
            src="/doobot/Premio-Excelencia-doobot.ai_.jpg"
            alt="Entrega del Premio Mejor Tecnología a doobot.ai"
            loading="lazy"
            className="h-auto w-full object-contain rounded-none shadow-none"
          />
        </div>
      </div>
    </section>
  );
}
