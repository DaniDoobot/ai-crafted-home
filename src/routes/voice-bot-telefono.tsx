import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { WhatsAppFab } from "@/components/home/WhatsAppFab";
import { VoiceHero } from "@/components/solutions/voice/VoiceHero";
import { VoiceValueSection } from "@/components/solutions/voice/VoiceValueSection";
import { VoiceCapabilities } from "@/components/solutions/voice/VoiceCapabilities";
import { VoiceDataContext } from "@/components/solutions/voice/VoiceDataContext";
import { VoiceHumanHandoff } from "@/components/solutions/voice/VoiceHumanHandoff";
import { VoiceControlAnalytics } from "@/components/solutions/voice/VoiceControlAnalytics";
import { VoiceIntegrations } from "@/components/solutions/voice/VoiceIntegrations";
import { SolutionTrustSection } from "@/components/solutions/SolutionTrustSection";
import { SolutionCTA } from "@/components/solutions/SolutionCTA";

export const Route = createFileRoute("/voice-bot-telefono")({
  head: () => ({
    meta: [
      { title: "Voice Bots con IA | Doobot.ai" },
      {
        name: "description",
        content:
          "Automatiza la atención telefónica mediante asistentes de voz capaces de mantener conversaciones, consultar información y ejecutar gestiones.",
      },
      {
        property: "og:title",
        content: "Voice Bots con IA | Doobot.ai",
      },
      {
        property: "og:description",
        content:
          "Automatiza la atención telefónica mediante asistentes de voz capaces de mantener conversaciones, consultar información y ejecutar gestiones.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: VoiceBotTelefonoRoute,
});

function VoiceBotTelefonoRoute() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-cyan-500 selection:text-slate-950">
      <Header />
      <main id="main-content">
        {/* Section 1: Hero */}
        <VoiceHero />

        {/* Section 2: Propuesta de valor */}
        <VoiceValueSection />

        {/* Section 3: Capacidades (Sin IVR, Configuración, Transcripción) */}
        <VoiceCapabilities />

        {/* Section 4: Información y Personalización */}
        <VoiceDataContext />

        {/* Section 5: Transferencia a Agentes */}
        <VoiceHumanHandoff />

        {/* Section 6: Control, Registro y Análisis */}
        <VoiceControlAnalytics />

        {/* Section 7: Integraciones Telefónicas y Sistemas */}
        <VoiceIntegrations />

        {/* Section 8: Solvencia y Confianza Corporativa */}
        <SolutionTrustSection />

        {/* Section 9: CTA Final */}
        <SolutionCTA
          eyebrow="Voice Bots"
          title="Convierte cada llamada en una conversación útil"
          description="Descubre cómo automatizar la atención telefónica y ejecutar gestiones sin perder la posibilidad de intervención humana."
          primaryLabel="Agendar una demo"
        />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
