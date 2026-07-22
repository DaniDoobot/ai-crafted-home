import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ShieldCheck, Lock, Building2 } from "lucide-react";

export function AwardTrust() {
  return (
    <section className="py-[110px] lg:py-[125px] bg-white">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center">
          <RevealOnScroll variant="fade-left" duration="fast" delay={0}>
            <h2 className="font-display font-bold text-[#050547] text-[clamp(36px,3.6vw,52px)] leading-[1.15] tracking-tight">
              Tecnología reconocida, desarrollada sobre una base sólida
            </h2>
          </RevealOnScroll>
          <RevealOnScroll variant="fade-left" duration="fast" delay={150}>
            <p className="mt-4 font-normal text-[#555B66] text-[19px] sm:text-[20px] leading-[1.6] max-w-[800px] mx-auto">
              Doobot.ai forma parte del grupo eCUSTOMER, con más de 15 años de experiencia en soluciones para la relación con clientes.
            </p>
          </RevealOnScroll>
        </div>

        {/* 3 Trust Blocks Grid (Enlarged Cards ~300px min-height) */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* ISO Block */}
          <RevealOnScroll variant="fade-left" duration="slow" delay={100} className="h-full">
            <div className="flex h-full min-h-[300px] flex-col justify-between rounded-3xl border border-indigo-100/80 bg-[#F8F7FF] p-8 sm:p-[32px] shadow-sm">
              <div>
                <div className="flex items-center justify-between border-b border-indigo-100 pb-4">
                  <span className="font-display text-sm font-bold uppercase tracking-wider text-[#685EC9]">
                    Seguridad Certificada
                  </span>
                  <ShieldCheck className="h-6 w-6 text-[#685EC9]" />
                </div>
                <div className="mt-6 flex justify-center py-3">
                  <img
                    src="/doobot/Logo-ISO.webp"
                    alt="Certificado ISO/IEC 27001 Seguridad de la Información"
                    loading="lazy"
                    className="h-32 w-auto object-contain"
                  />
                </div>
                <h3 className="mt-4 font-display font-bold text-[#050547] text-[22px] text-center">
                  ISO/IEC 27001
                </h3>
                <p className="mt-2 font-normal text-[#555B66] text-[16px] text-center leading-relaxed">
                  Sistema de gestión de seguridad de la información certificado.
                </p>
              </div>
            </div>
          </RevealOnScroll>

          {/* RGPD Block */}
          <RevealOnScroll variant="fade-left" duration="slow" delay={200} className="h-full">
            <div className="flex h-full min-h-[300px] flex-col justify-between rounded-3xl border border-indigo-100/80 bg-[#F8F7FF] p-8 sm:p-[32px] shadow-sm">
              <div>
                <div className="flex items-center justify-between border-b border-indigo-100 pb-4">
                  <span className="font-display text-sm font-bold uppercase tracking-wider text-[#685EC9]">
                    Privacidad Garantizada
                  </span>
                  <Lock className="h-6 w-6 text-[#685EC9]" />
                </div>
                <div className="mt-6 flex justify-center py-3">
                  <img
                    src="/doobot/Logs-RGPD-1024x364.png"
                    alt="Garantía de cumplimiento RGPD Privacidad"
                    loading="lazy"
                    className="h-24 w-auto object-contain"
                  />
                </div>
                <h3 className="mt-4 font-display font-bold text-[#050547] text-[22px] text-center">
                  RGPD
                </h3>
                <p className="mt-2 font-normal text-[#555B66] text-[16px] text-center leading-relaxed">
                  Soluciones diseñadas para operar conforme a la normativa europea de protección de datos.
                </p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Grupo eCUSTOMER Block */}
          <RevealOnScroll variant="fade-left" duration="slow" delay={300} className="h-full">
            <div className="flex h-full min-h-[300px] flex-col justify-between rounded-3xl border border-indigo-100/80 bg-[#F8F7FF] p-8 sm:p-[32px] shadow-sm">
              <div>
                <div className="flex items-center justify-between border-b border-indigo-100 pb-4">
                  <span className="font-display text-sm font-bold uppercase tracking-wider text-[#685EC9]">
                    Trayectoria y Respaldo
                  </span>
                  <Building2 className="h-6 w-6 text-[#685EC9]" />
                </div>
                <div className="mt-6 flex flex-col items-center justify-center py-3 text-center">
                  <span className="font-display font-bold text-[#050547] text-[46px] leading-none">
                    +15 años
                  </span>
                  <span className="mt-1.5 text-xs font-bold uppercase tracking-wider text-[#685EC9]">
                    de experiencia
                  </span>
                </div>
                <h3 className="mt-4 font-display font-bold text-[#050547] text-[22px] text-center">
                  Grupo eCUSTOMER
                </h3>
                <p className="mt-2 font-normal text-[#555B66] text-[16px] text-center leading-relaxed">
                  Más de 15 años de experiencia en atención, automatización y experiencia de cliente.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Client Logos Band Section (Enlarged to 1000px) */}
        <div className="mt-16 border-t border-indigo-100 pt-12 text-center">
          <RevealOnScroll variant="fade-left" duration="slow" delay={150}>
            <div className="mx-auto max-w-5xl overflow-hidden py-4">
              <img
                src="/doobot/Logos-clientes-1024x289.webp"
                alt="Clientes de confianza de doobot.ai y grupo eCUSTOMER"
                loading="lazy"
                className="h-auto w-full object-contain mx-auto max-w-[1000px]"
              />
            </div>
            <p className="mt-4 font-normal text-[#555B66] text-[16px]">
              Empresas que han confiado en las soluciones y experiencia del grupo.
            </p>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
