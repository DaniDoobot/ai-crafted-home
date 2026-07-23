import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function WhatsAppSection() {
  return (
    <section
      className="pt-[90px] pb-[50px]"
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #FEDCFE 100%)",
      }}
    >
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* ── Video column – left on desktop, top on mobile (Conventional & Accessible Video Player) ── */}
          <div className="relative overflow-hidden rounded-[30px] shadow-xl aspect-[16/10] sm:aspect-[4/3] w-full bg-slate-950 min-h-[280px] sm:min-h-[360px] lg:min-h-[420px] flex items-center justify-center">
            <video
              controls
              playsInline
              preload="metadata"
              poster="/doobot/Img-Portada-Video-1.png"
              aria-label="Vídeo demostrativo de automatización de conversaciones por WhatsApp con doobot.ai"
              className="block h-full w-full object-contain"
            >
              <source src="/media/doobot-v1.mp4" type="video/mp4" />
              Tu navegador no puede reproducir este vídeo demostrativo.
            </video>
          </div>

          {/* ── Text column – right on desktop, bottom on mobile (Animated) ── */}
          <div className="max-w-[620px]">
            <RevealOnScroll variant="fade-right" duration="fast" delay={0}>
              <h2
                className="font-display font-medium text-[#050547]"
                style={{
                  fontSize: "clamp(30px, 2.5vw, 44px)",
                  lineHeight: 1.22,
                  letterSpacing: "-1px",
                }}
              >
                WhatsApp como medio de interacción automatizado en{" "}
                <span className="text-gradient-brand">
                  venta y servicio al cliente
                </span>
                .
              </h2>
            </RevealOnScroll>

            <RevealOnScroll variant="fade-right" duration="fast" delay={500}>
              <p
                className="mt-6 text-[#555B66] font-normal"
                style={{
                  fontSize: "clamp(17px, 1.1vw, 20px)",
                  lineHeight: "clamp(27px, 1.7vw, 32px)",
                }}
              >
                Convierte WhatsApp en herramienta clave en la relación con tus
                clientes, máxima cercanía, agilidad y comodidad empleando
                Inteligencia Artificial.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}

export function VoiceBotsSection() {
  return (
    <section
      id="voice-demo"
      className="pt-[50px] pb-[90px]"
      style={{
        background: "linear-gradient(180deg, #FEDCFE 0%, #E1F3FF 100%)",
      }}
    >
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* ── Text column – left on desktop, top on mobile (Animated) ── */}
          <div className="max-w-[620px]">
            <RevealOnScroll variant="fade-left" duration="fast" delay={0}>
              <h2
                className="font-display font-medium text-[#050547]"
                style={{
                  fontSize: "clamp(30px, 2.5vw, 44px)",
                  lineHeight: 1.22,
                  letterSpacing: "-1px",
                }}
              >
                Voice Bots con el realismo y empatía de las{" "}
                <span className="text-gradient-brand">
                  conversaciones entre personas
                </span>
              </h2>
            </RevealOnScroll>

            <RevealOnScroll variant="fade-left" duration="fast" delay={500}>
              <p
                className="mt-6 text-[#555B66] font-normal"
                style={{
                  fontSize: "clamp(17px, 1.1vw, 20px)",
                  lineHeight: "clamp(27px, 1.7vw, 32px)",
                }}
              >
                Para agendar citas, facilitar información, discriminar la
                necesidad del cliente, dar respuesta inmediata, todo lo que el
                cliente puede necesitar, de forma inmediata.
              </p>
            </RevealOnScroll>
          </div>

          {/* ── Video column – right on desktop, bottom on mobile (Voice Bots Video Player) ── */}
          <div className="relative overflow-hidden rounded-[30px] shadow-xl aspect-[16/10] sm:aspect-[4/3] w-full bg-slate-950 min-h-[280px] sm:min-h-[360px] lg:min-h-[420px] flex items-center justify-center">
            <video
              controls
              playsInline
              preload="metadata"
              poster="/doobot/Img-Portada-Video-2.png"
              aria-label="Vídeo demostrativo de Voice Bots e interacción telefónica conversacional con doobot.ai"
              className="block h-full w-full object-contain"
            >
              <source src="/media/doobot-v2.mp4" type="video/mp4" />
              Tu navegador no puede reproducir este vídeo demostrativo.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
