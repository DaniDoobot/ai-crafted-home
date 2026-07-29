import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { WhatsAppFab } from "@/components/home/WhatsAppFab";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Phone, MapPin, Building2, Cpu, ArrowRight, MessageSquare, Bot, Sparkles } from "lucide-react";
import { WHATSAPP_DEMO_URL } from "@/config/contact";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto y Ubicaciones | Doobot.ai" },
      {
        name: "description",
        content:
          "Ponte en contacto con doobot.ai. Teléfono de contacto +34 911 67 43 17 con asistente de voz para mensajes y derivación comercial, y sedes en Madrid.",
      },
      {
        property: "og:title",
        content: "Contacto y Ubicaciones | Doobot.ai",
      },
      {
        property: "og:description",
        content:
          "Ponte en contacto con doobot.ai. Teléfono de contacto +34 911 67 43 17, Oficina Comercial y Software Factory en Madrid.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ContactoRoute,
});

function ContactoRoute() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-indigo-500 selection:text-white">
      <Header />
      <main id="main-content">
        {/* ── Section 1: Hero Header ── */}
        <section className="relative overflow-hidden bg-[#030A1D] pt-32 pb-20 lg:pt-36 lg:pb-24 text-white">
          {/* Background Radial Glows */}
          <div
            className="pointer-events-none absolute -left-20 top-1/4 h-[500px] w-[500px] rounded-full opacity-25 blur-[140px]"
            style={{
              background:
                "radial-gradient(circle, rgba(99, 102, 241, 0.45) 0%, rgba(6, 182, 212, 0.3) 100%)",
            }}
          />
          <div
            className="pointer-events-none absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full opacity-20 blur-[140px]"
            style={{
              background:
                "radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(37, 99, 235, 0.25) 100%)",
            }}
          />

          <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-center">
            <RevealOnScroll variant="fade-right" duration="fast" delay={0}>
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 backdrop-blur-md">
                <Building2 className="h-4 w-4 text-indigo-300" />
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-300">
                  Contacto y Ubicaciones
                </span>
              </div>
            </RevealOnScroll>

            <RevealOnScroll variant="fade-right" duration="fast" delay={100}>
              <h1 className="mt-6 font-display font-bold text-white text-[clamp(40px,4.5vw,68px)] leading-[1.08] tracking-tight max-w-[840px] mx-auto">
                Estamos a tu disposición
              </h1>
            </RevealOnScroll>

            <RevealOnScroll variant="fade-right" duration="medium" delay={200}>
              <p className="mt-6 font-normal text-slate-200 text-[19px] sm:text-[21px] leading-[1.55] max-w-[760px] mx-auto">
                Ponte en contacto con nuestro equipo comercial y técnico para resolver tus dudas, consultar sobre nuestras soluciones o solicitar una demostración personalizada.
              </p>
            </RevealOnScroll>
          </div>
        </section>

        {/* ── Section 2: Destacado Teléfono con Voice Bot & Ubicaciones ── */}
        <section className="py-16 sm:py-20 lg:py-24 bg-slate-50/50">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
            {/* ── Phone Call Highlight Card (Voice Bot Explanation) ── */}
            <RevealOnScroll variant="fade-up" duration="medium" delay={0}>
              <div className="relative overflow-hidden rounded-3xl border border-indigo-500/20 bg-gradient-to-r from-[#030A1D] via-[#0B1536] to-[#050B24] p-8 sm:p-10 lg:p-12 text-white shadow-elevated">
                {/* Background Glow */}
                <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-indigo-500/10 to-transparent" />

                <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
                  <div className="lg:col-span-8">
                    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold text-cyan-300 backdrop-blur-md mb-4">
                      <Bot className="h-3.5 w-3.5 text-cyan-400" />
                      <span>Asistente de Voz Telefónico doobot.ai</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                      Teléfono de contacto
                    </h2>

                    <p className="mt-3 text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                      Este número conecta directamente con nuestro asistente telefónico de voz, que puede recoger tu consulta y, si lo necesitas, ponerte en contacto con un comercial del equipo.
                    </p>

                    <div className="mt-6 flex flex-wrap items-center gap-4">
                      <a
                        href="tel:+34911674317"
                        className="inline-flex items-center gap-3 rounded-2xl bg-white px-7 py-3.5 text-xl sm:text-2xl font-bold text-slate-950 shadow-lg transition-transform hover:scale-[1.02]"
                      >
                        <Phone className="h-6 w-6 text-indigo-600 shrink-0" />
                        <span>+34 911 67 43 17</span>
                      </a>
                    </div>
                  </div>

                  <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end gap-3">
                    <a
                      href="tel:+34911674317"
                      className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 px-8 py-4 text-base font-bold text-white shadow-md transition-all hover:scale-[1.03] hover:shadow-indigo-500/25"
                    >
                      <span>Llamar al Voice Bot</span>
                      <ArrowRight className="h-5 w-5" />
                    </a>
                    <span className="text-xs text-slate-400 font-medium flex items-center gap-1.5">
                      <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                      Gestión de mensajes y derivación comercial
                    </span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* ── Locations Section ── */}
            <div className="mt-16 sm:mt-20">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
                  Dónde estamos
                </h2>
                <p className="mt-3 text-slate-600 text-lg">
                  Visítanos en nuestras instalaciones principales en Madrid.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {/* Location 1: Oficina Comercial */}
                <RevealOnScroll variant="fade-right" duration="medium" delay={100}>
                  <div className="h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-md hover:border-indigo-200 flex flex-col justify-between">
                    <div>
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 mb-6">
                        <Building2 className="h-6 w-6" />
                      </div>

                      <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 uppercase tracking-wider mb-3">
                        Sede Central
                      </span>

                      <h3 className="text-2xl font-display font-bold text-slate-900">
                        Oficina Comercial
                      </h3>

                      <p className="mt-4 font-semibold text-indigo-900 text-lg leading-relaxed">
                        Paseo de la Castellana, 81 – Torre BBVA, planta 15
                      </p>
                      <p className="text-slate-600 text-base font-medium">
                        28046 Madrid
                      </p>

                      <p className="mt-4 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                        Espacio destinado a reuniones corporativas, presentaciones institucionales y asesoramiento comercial personalizado.
                      </p>
                    </div>

                    <div className="mt-8 flex items-center gap-2 text-xs font-semibold text-slate-500">
                      <MapPin className="h-4 w-4 text-indigo-500 shrink-0" />
                      <span>Paseo de la Castellana, 81 – Torre BBVA, planta 15, Madrid</span>
                    </div>
                  </div>
                </RevealOnScroll>

                {/* Location 2: Software Factory */}
                <RevealOnScroll variant="fade-left" duration="medium" delay={200}>
                  <div className="h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-md hover:border-cyan-200 flex flex-col justify-between">
                    <div>
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600 mb-6">
                        <Cpu className="h-6 w-6" />
                      </div>

                      <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 uppercase tracking-wider mb-3">
                        Desarrollo e I+D
                      </span>

                      <h3 className="text-2xl font-display font-bold text-slate-900">
                        Software Factory
                      </h3>

                      <p className="mt-4 font-semibold text-cyan-900 text-lg leading-relaxed">
                        Calle Rodríguez Ayuso, 4C
                      </p>
                      <p className="text-slate-600 text-base font-medium">
                        28022 Madrid
                      </p>

                      <p className="mt-4 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                        Centro técnico especializado en ingeniería de inteligencia artificial, integración de sistemas y desarrollo continuo de la plataforma.
                      </p>
                    </div>

                    <div className="mt-8 flex items-center gap-2 text-xs font-semibold text-slate-500">
                      <MapPin className="h-4 w-4 text-cyan-500 shrink-0" />
                      <span>Calle Rodríguez Ayuso, 4C, Madrid</span>
                    </div>
                  </div>
                </RevealOnScroll>
              </div>
            </div>

            {/* ── Additional Contact Action Card ── */}
            <div className="mt-16">
              <RevealOnScroll variant="fade-up" duration="medium" delay={150}>
                <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-5">
                    <div className="hidden sm:flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 shrink-0">
                      <MessageSquare className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-slate-900">
                        ¿Prefieres agendar una demostración interactiva?
                      </h3>
                      <p className="text-slate-600 text-sm mt-1">
                        Conecta directamente por WhatsApp para coordinar una sesión en directo con un especialista.
                      </p>
                    </div>
                  </div>

                  <a
                    href={WHATSAPP_DEMO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-full bg-gradient-brand px-7 py-3.5 text-base font-bold text-white shadow-soft transition-transform hover:scale-[1.02] shrink-0"
                  >
                    <span>Solicitar demo por WhatsApp</span>
                    <ArrowRight className="h-4.5 w-4.5" />
                  </a>
                </div>
              </RevealOnScroll>
            </div>

          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
