import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { CheckCircle2, Calendar, Sliders, Server, ArrowRight } from "lucide-react";
import { WHATSAPP_DEMO_URL } from "@/config/contact";
import { SolutionImageVisual } from "@/components/solutions/SolutionImageVisual";

export function WhatsAppCapabilities() {
  return (
    <section id="capacidades-whatsapp" className="scroll-mt-24 lg:scroll-mt-28 py-[65px] lg:py-[80px] bg-white">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-[850px] text-center">
          <RevealOnScroll variant="fade-right" duration="fast" delay={0}>
            <span className="inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-900">
              Casos de uso y capacidades
            </span>
            <h2 className="mt-4 font-display font-bold text-[#050547] text-[clamp(34px,3.6vw,52px)] leading-[1.12] tracking-tight">
              WhatsApp conectado con la operativa real de tu empresa
            </h2>
            <p className="mt-4 font-normal text-[#555B66] text-[18px] sm:text-[20px] leading-[1.6]">
              Descubre cómo la IA Generativa transforma la mensajería en un canal de gestión autónomo, inteligente e integrado.
            </p>
          </RevealOnScroll>
        </div>

        {/* Capabilities Feature Rows */}
        <div className="mt-12 flex flex-col gap-10 lg:gap-14">
          {/* ── Capability A: Citas, información y gestión inmediata ── */}
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <RevealOnScroll variant="fade-right" duration="medium" delay={0}>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                  <Calendar className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display font-bold text-[#050547] text-[28px] sm:text-[34px] leading-[1.2]">
                  Citas, información y gestión inmediata
                </h3>
                <p className="mt-4 font-normal text-[#555B66] text-[18px] leading-[1.6]">
                  Permite agendar citas, facilitar información, identificar la necesidad del cliente y ofrecer una respuesta inmediata.
                </p>

                <ul className="mt-6 flex flex-col gap-3">
                  {[
                    "Reserva y confirmación automática de citas en tiempo real.",
                    "Atención instantánea a dudas habituales sobre servicios y tarifas.",
                    "Clasificación inteligente del motivo de consulta desde el primer mensaje.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[16px] text-slate-700 font-medium">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </RevealOnScroll>
            </div>

            <div className="lg:col-span-6">
              <RevealOnScroll variant="fade-left" duration="medium" delay={150}>
                <SolutionImageVisual
                  src="/doobot/solutions/whatsapp-cap-1.webp"
                  alt="Gestión de citas e información en WhatsApp con doobot.ai"
                  embeddedFrame={true}
                  variant="capability"
                />
              </RevealOnScroll>
            </div>
          </div>

          {/* ── Capability B: Configuración sin flujos rígidos (Reversed Layout) ── */}
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="lg:order-2 lg:col-span-6">
              <RevealOnScroll variant="fade-left" duration="medium" delay={0}>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-[#050547]">
                  <Sliders className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display font-bold text-[#050547] text-[28px] sm:text-[34px] leading-[1.2]">
                  Configuración sin flujos rígidos
                </h3>
                <p className="mt-4 font-normal text-[#555B66] text-[18px] leading-[1.6]">
                  No es necesario definir interminables árboles de conversación: se configura qué información debe facilitar y cómo debe actuar.
                </p>

                <ul className="mt-6 flex flex-col gap-3">
                  {[
                    "Comprensión del lenguaje natural sin menúes numéricos ni botones cerrados.",
                    "Adaptabilidad a diferentes formas de preguntar de los clientes.",
                    "Mantenimiento sencillo mediante instrucciones claras y base de conocimiento.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[16px] text-slate-700 font-medium">
                      <CheckCircle2 className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </RevealOnScroll>
            </div>

            <div className="lg:order-1 lg:col-span-6">
              <RevealOnScroll variant="fade-right" duration="medium" delay={150}>
                <SolutionImageVisual
                  src="/doobot/solutions/whatsapp-cap-2.webp"
                  alt="Configuración flexible sin flujos rígidos en WhatsApp con doobot.ai"
                  embeddedFrame={true}
                  variant="capability"
                />
              </RevealOnScroll>
            </div>
          </div>

          {/* ── Capability C: Acceso a información del negocio y del cliente ── */}
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <RevealOnScroll variant="fade-right" duration="medium" delay={0}>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                  <Server className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display font-bold text-[#050547] text-[28px] sm:text-[34px] leading-[1.2]">
                  Acceso a información del negocio y del cliente
                </h3>
                <p className="mt-4 font-normal text-[#555B66] text-[18px] leading-[1.6]">
                  Consulta información general, datos específicos del cliente y sistemas corporativos para ofrecer respuestas precisas y contextualizadas.
                </p>

                <ul className="mt-6 flex flex-col gap-3">
                  {[
                    "Conexión con CRM para conocer el historial previo del usuario.",
                    "Consulta en tiempo real de estados de pedidos, citas o solicitudes.",
                    "Seguridad y privacidad de datos alineada con la normativa europea.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[16px] text-slate-700 font-medium">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </RevealOnScroll>
            </div>

            <div className="lg:col-span-6">
              <RevealOnScroll variant="fade-left" duration="medium" delay={150}>
                <SolutionImageVisual
                  src="/doobot/solutions/whatsapp-cap-4.webp"
                  alt="Integración con datos del negocio y del cliente en WhatsApp"
                  embeddedFrame={true}
                  variant="capability"
                />
              </RevealOnScroll>
            </div>
          </div>
        </div>

        {/* ── Transition Card towards Second Half ── */}
        <div className="mt-14 rounded-3xl bg-gradient-to-r from-[#02021A] via-[#050547] to-[#0B0B5C] p-8 sm:p-10 text-white shadow-xl text-center">
          <RevealOnScroll variant="fade-left" duration="fast" delay={0}>
            <h3 className="font-display font-bold text-2xl sm:text-3xl">
              ¿Quieres comprobar cómo funcionaría el Chat Bot en tu empresa?
            </h3>
            <p className="mt-3 text-slate-300 text-base sm:text-lg max-w-[700px] mx-auto">
              Te mostramos un caso real adaptado a tus canales de atención y procesos clave.
            </p>
            <div className="mt-7">
              <a
                href={WHATSAPP_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-gradient-brand px-8 py-3.5 text-base font-bold text-white shadow-lg transition-transform hover:scale-[1.03]"
              >
                <span>Agendar una demo personalizada</span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
