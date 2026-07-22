import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ExternalLink, Newspaper, Calendar, ArrowRight } from "lucide-react";
import { WHATSAPP_DEMO_URL } from "@/config/contact";

export function AwardPressCTA() {
  return (
    <div className="bg-background">
      {/* ── A. PRESS COVERAGE SECTION ── */}
      <section className="py-[105px] lg:py-[115px] bg-[#F8F7FF] border-t border-indigo-100">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mx-auto max-w-[800px] text-center">
            <RevealOnScroll variant="fade-left" duration="fast" delay={0}>
              <h2 className="font-display font-bold text-[#050547] text-[clamp(32px,3.2vw,48px)] leading-[1.15] tracking-tight">
                El reconocimiento también tuvo eco en medios especializados
              </h2>
            </RevealOnScroll>
          </div>

          {/* Press Card (Wider 960px max-width) */}
          <div className="mt-12 mx-auto max-w-[960px]">
            <RevealOnScroll variant="fade-left" duration="slow" delay={150}>
              <div className="rounded-3xl border border-indigo-100 bg-white p-8 sm:p-10 shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-indigo-100 pb-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700">
                      <Newspaper className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="font-display font-bold text-[#050547] text-xl">
                        iSanidad
                      </span>
                      <span className="ml-3 inline-block rounded-md bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-800">
                        Cobertura externa
                      </span>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-slate-500 flex items-center gap-1.5">
                    <Calendar className="h-4 w-4 text-indigo-600" />
                    Medio especializado en salud e innovación
                  </span>
                </div>

                <h3 className="mt-6 font-display font-bold text-[#050547] text-[25px] sm:text-[28px] leading-[1.3]">
                  "Boston Medical, galardonada por su innovación en la relación con el paciente con la IA de Doobot.ai"
                </h3>

                <p className="mt-4 font-normal text-[#555B66] text-[18px] leading-[1.6] max-w-[800px]">
                  El medio especializado recoge el reconocimiento a Boston Medical y Doobot.ai por su aplicación de inteligencia artificial en la relación con el paciente.
                </p>

                <div className="mt-8 pt-2">
                  <a
                    href="https://isanidad.com/350623/boston-medical-galardonada-por-su-innovacion-en-la-relacion-con-el-paciente-con-la-ia-de-doobot-ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-xl bg-[#050547] px-6 py-3.5 text-[16px] font-semibold text-white transition-colors hover:bg-indigo-900"
                  >
                    <span>Leer artículo completo en iSanidad</span>
                    <ExternalLink className="h-4.5 w-4.5" />
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── B. FINAL CTA BANNER ── */}
      <section
        className="relative overflow-hidden py-[110px] lg:py-[130px]"
        style={{
          background: "linear-gradient(135deg, #02021A 0%, #050547 55%, #0B0B5C 100%)",
        }}
      >
        {/* Background Radial Glow */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[600px] rounded-full opacity-20 blur-[130px]"
          style={{
            background: "radial-gradient(circle, rgba(245, 158, 11, 0.4) 0%, rgba(104, 94, 201, 0.3) 100%)",
          }}
        />

        <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Left Column: Text & Action Buttons (Cols 1-7) */}
            <div className="lg:col-span-7">
              <RevealOnScroll variant="fade-right" duration="slow" delay={0}>
                <h2 className="font-display font-bold text-white text-[clamp(36px,4vw,56px)] leading-[1.1] tracking-tight max-w-[760px]">
                  Lleva a tu empresa la tecnología reconocida por la industria
                </h2>
              </RevealOnScroll>

              <RevealOnScroll variant="fade-right" duration="slow" delay={150}>
                <p className="mt-5 font-normal text-slate-200 text-[19px] sm:text-[21px] leading-[1.55] max-w-[760px]">
                  Descubre cómo aplicar inteligencia artificial y automatización a procesos reales de atención, gestión y relación con tus clientes.
                </p>
              </RevealOnScroll>

              <RevealOnScroll variant="fade-right" duration="slow" delay={250}>
                <div className="mt-9 flex flex-wrap items-center gap-4">
                  {/* Primary Button: WhatsApp Demo Booking */}
                  <a
                    href={WHATSAPP_DEMO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-full bg-gradient-brand px-[20px] py-[14px] text-[16px] sm:text-[17px] font-bold text-white shadow-lg transition-transform hover:scale-[1.03]"
                  >
                    <span>Agendar una demo</span>
                    <ArrowRight className="h-5 w-5" />
                  </a>

                  {/* Secondary Button: Solution Page Navigation */}
                  <a
                    href="/chat-bot-whatsapp-2/"
                    className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-[20px] py-[14px] text-[16px] sm:text-[17px] font-semibold text-slate-200 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10 hover:text-white"
                  >
                    <span>Conocer nuestras soluciones</span>
                  </a>
                </div>
              </RevealOnScroll>
            </div>

            {/* Right Column: Integrated Supporting Award Seal Badge on Light Backdrop (Cols 8-12) */}
            <div className="flex justify-center lg:col-span-5 lg:justify-end">
              <RevealOnScroll variant="fade-left" duration="slow" delay={200}>
                <div
                  className="w-full max-w-[380px] sm:max-w-[420px] p-3 sm:p-4 rounded-2xl border border-amber-400/40 shadow-2xl backdrop-blur-md"
                  style={{
                    background: "rgba(255, 255, 255, 0.94)",
                  }}
                >
                  <img
                    src="/doobot/Premio-Exc-Rel.png"
                    alt="Insignia Oficial Premios Excelencia Relación con Clientes 2025"
                    className="h-auto w-full object-contain block"
                  />
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
