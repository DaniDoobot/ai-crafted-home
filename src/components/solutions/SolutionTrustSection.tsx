import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ShieldCheck, Lock, Building2 } from "lucide-react";

export function SolutionTrustSection() {
  return (
    <section className="py-[95px] lg:py-[110px] bg-white border-b border-indigo-100/60">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-[850px] text-center">
          <RevealOnScroll variant="fade-left" duration="fast" delay={0}>
            <span className="inline-block rounded-full bg-indigo-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#050547]">
              Seguridad y Solvencia Corporativa
            </span>
            <h2 className="mt-4 font-display font-bold text-[#050547] text-[clamp(32px,3.5vw,50px)] leading-[1.12] tracking-tight">
              Tecnología preparada para operar en entornos empresariales
            </h2>
            <p className="mt-4 font-normal text-[#555B66] text-[18px] sm:text-[20px] leading-[1.6]">
              Soluciones desarrolladas bajo altos estándares de seguridad, cumplimiento normativo y solvencia técnica.
            </p>
          </RevealOnScroll>
        </div>

        {/* 3 Main Trust Blocks */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Block 1: ISO 27001 */}
          <RevealOnScroll variant="fade-left" duration="medium" delay={0}>
            <div className="flex h-full flex-col justify-between rounded-3xl border border-indigo-100 bg-[#F8F7FF] p-8 shadow-sm">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-[#050547]">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <span className="font-display font-bold text-[#050547] text-xl">
                    ISO/IEC 27001
                  </span>
                </div>
                <p className="mt-4 text-sm text-[#555B66] leading-relaxed">
                  Sistema de gestión de seguridad de la información certificado para garantizar la confidencialidad de tus operaciones.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-indigo-100/80 flex items-center justify-center">
                <img
                  src="/doobot/Logo-ISO.webp"
                  alt="Certificación ISO 27001"
                  className="h-20 w-auto object-contain"
                />
              </div>
            </div>
          </RevealOnScroll>

          {/* Block 2: RGPD */}
          <RevealOnScroll variant="fade-left" duration="medium" delay={120}>
            <div className="flex h-full flex-col justify-between rounded-3xl border border-indigo-100 bg-[#F8F7FF] p-8 shadow-sm">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-[#050547]">
                    <Lock className="h-6 w-6" />
                  </div>
                  <span className="font-display font-bold text-[#050547] text-xl">
                    Cumplimiento RGPD
                  </span>
                </div>
                <p className="mt-4 text-sm text-[#555B66] leading-relaxed">
                  Soluciones diseñadas para operar conforme a la normativa europea de protección de datos personales.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-indigo-100/80 flex items-center justify-center">
                <img
                  src="/doobot/Logs-RGPD-1024x364.png"
                  alt="Garantía RGPD Protección de Datos"
                  className="h-14 w-auto object-contain"
                />
              </div>
            </div>
          </RevealOnScroll>

          {/* Block 3: Grupo eCUSTOMER (Balanced card without tiny inner logo strip) */}
          <RevealOnScroll variant="fade-left" duration="medium" delay={240}>
            <div className="flex h-full flex-col justify-between rounded-3xl border border-indigo-100 bg-[#F8F7FF] p-8 shadow-sm">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-[#050547]">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <span className="font-display font-bold text-[#050547] text-xl">
                    Grupo eCUSTOMER
                  </span>
                </div>
                <p className="mt-4 text-sm text-[#555B66] leading-relaxed">
                  Más de 15 años de experiencia en atención, automatización y relación con clientes.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-indigo-100/80 text-center">
                <span className="inline-block rounded-full bg-indigo-100/80 px-3 py-1 text-xs font-semibold text-[#050547]">
                  Solvencia en el mercado
                </span>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Independent Full-Width Client Logos Section */}
        <div className="mt-12 lg:mt-14 pt-8 lg:pt-10 border-t border-indigo-100/70">
          <RevealOnScroll variant="fade-left" duration="medium" delay={300}>
            <div className="text-center">
              <h3 className="font-display font-bold text-[#050547] text-lg sm:text-xl">
                Empresas que han confiado en las soluciones y experiencia del grupo
              </h3>
              <div className="mt-6 mx-auto max-w-[1050px] w-full px-2 overflow-x-auto">
                <img
                  src="/doobot/Logos-clientes-1024x289.webp"
                  alt="Empresas que han confiado en las soluciones del grupo eCustomer"
                  className="w-full max-w-[950px] lg:max-w-[1000px] h-auto object-contain mx-auto min-w-[640px] sm:min-w-0"
                />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
