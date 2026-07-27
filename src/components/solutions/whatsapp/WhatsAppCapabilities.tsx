import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { CheckCircle2, Calendar, Sliders, Server, ArrowRight } from "lucide-react";
import { WHATSAPP_DEMO_URL } from "@/config/contact";
import { SolutionImageVisual } from "@/components/solutions/SolutionImageVisual";

export function WhatsAppCapabilities() {
  return (
    <section id="capacidades-whatsapp" className="scroll-mt-24 lg:scroll-mt-28 py-[40px] sm:py-[48px] lg:py-[56px] bg-white">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-[850px] text-center">
          <RevealOnScroll variant="fade-right" duration="fast" delay={0}>
            <span className="inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-900">
              Casos de uso y capacidades
            </span>
            <h2 className="mt-3 font-display font-bold text-[#050547] text-[clamp(30px,3.2vw,46px)] leading-[1.12] tracking-tight">
              WhatsApp conectado con la operativa real de tu empresa
            </h2>
            <p className="mt-3 font-normal text-[#555B66] text-[17px] sm:text-[19px] leading-[1.55]">
              Descubre cómo la IA Generativa transforma la mensajería en un canal de gestión autónomo, inteligente e integrado.
            </p>
          </RevealOnScroll>
        </div>

        {/* Capabilities Feature Rows */}
        <div className="mt-8 flex flex-col gap-7 lg:gap-9">
          {/* ── Capability A: Citas, información y gestión inmediata ── */}
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7">
              <RevealOnScroll variant="fade-right" duration="medium" delay={0}>
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                  <Calendar className="h-5 w-5" />
                </div>
                <h3 className="mt-3.5 font-display font-bold text-[#050547] text-[24px] sm:text-[30px] leading-[1.2]">
                  Citas, información y gestión inmediata
                </h3>
                <p className="mt-3 font-normal text-[#555B66] text-[17px] leading-[1.55]">
                  Permite agendar citas, facilitar información, identificar la necesidad del cliente y ofrecer una respuesta inmediata.
                </p>

                <ul className="mt-4 flex flex-col gap-2.5">
                  {[
                    "Reserva y confirmación automática de citas en tiempo real.",
                    "Atención instantánea a dudas habituales sobre servicios y tarifas.",
                    "Clasificación inteligente del motivo de consulta desde el primer mensaje.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[15px] text-slate-700 font-medium">
                      <CheckCircle2 className="h-4.5 w-4.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </RevealOnScroll>
            </div>

            <div className="lg:col-span-5">
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
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-8">
            <div className="lg:order-2 lg:col-span-7">
              <RevealOnScroll variant="fade-left" duration="medium" delay={0}>
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-[#050547]">
                  <Sliders className="h-5 w-5" />
                </div>
                <h3 className="mt-3.5 font-display font-bold text-[#050547] text-[24px] sm:text-[30px] leading-[1.2]">
                  Configuración sin flujos rígidos
                </h3>
                <p className="mt-3 font-normal text-[#555B66] text-[17px] leading-[1.55]">
                  No es necesario definir interminables árboles de conversación: se configura qué información debe facilitar y cómo debe actuar.
                </p>

                <ul className="mt-4 flex flex-col gap-2.5">
                  {[
                    "Comprensión del lenguaje natural sin menúes numéricos ni botones cerrados.",
                    "Adaptabilidad a diferentes formas de preguntar de los clientes.",
                    "Mantenimiento sencillo mediante instrucciones claras y base de conocimiento.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[15px] text-slate-700 font-medium">
                      <CheckCircle2 className="h-4.5 w-4.5 text-indigo-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </RevealOnScroll>
            </div>

            <div className="lg:order-1 lg:col-span-5">
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
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7">
              <RevealOnScroll variant="fade-right" duration="medium" delay={0}>
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                  <Server className="h-5 w-5" />
                </div>
                <h3 className="mt-3.5 font-display font-bold text-[#050547] text-[24px] sm:text-[30px] leading-[1.2]">
                  Acceso a información del negocio y del cliente
                </h3>
                <p className="mt-3 font-normal text-[#555B66] text-[17px] leading-[1.55]">
                  Consulta información general, datos específicos del cliente y sistemas corporativos para ofrecer respuestas precisas y contextualizadas.
                </p>

                <ul className="mt-4 flex flex-col gap-2.5">
                  {[
                    "Conexión con CRM para conocer el historial previo del usuario.",
                    "Consulta en tiempo real de estados de pedidos, citas o solicitudes.",
                    "Seguridad y privacidad de datos alineada con la normativa europea.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[15px] text-slate-700 font-medium">
                      <CheckCircle2 className="h-4.5 w-4.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </RevealOnScroll>
            </div>

            <div className="lg:col-span-5">
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
        <div className="mt-10 rounded-3xl bg-gradient-to-r from-[#02021A] via-[#050547] to-[#0B0B5C] p-6 sm:p-8 text-white shadow-xl text-center">
          <RevealOnScroll variant="fade-left" duration="fast" delay={0}>
            <h3 className="font-display font-bold text-xl sm:text-2xl">
              ¿Quieres comprobar cómo funcionaría el Chat Bot en tu empresa?
            </h3>
            <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-[700px] mx-auto">
              Te mostramos un caso real adaptado a tus canales de atención y procesos clave.
            </p>
            <div className="mt-5">
              <a
                href={WHATSAPP_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3 text-sm font-bold text-white shadow-lg transition-transform hover:scale-[1.03]"
              >
                <span>Agendar una demo personalizada</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
