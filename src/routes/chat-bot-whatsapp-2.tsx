import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { WhatsAppFab } from "@/components/home/WhatsAppFab";
import { WhatsAppHero } from "@/components/solutions/whatsapp/WhatsAppHero";
import { WhatsAppValueSection } from "@/components/solutions/whatsapp/WhatsAppValueSection";
import { WhatsAppCapabilities } from "@/components/solutions/whatsapp/WhatsAppCapabilities";
import { WhatsAppAnalytics } from "@/components/solutions/whatsapp/WhatsAppAnalytics";
import { WhatsAppHumanHandoff } from "@/components/solutions/whatsapp/WhatsAppHumanHandoff";
import { WhatsAppControl } from "@/components/solutions/whatsapp/WhatsAppControl";
import { WhatsAppIntegrations } from "@/components/solutions/whatsapp/WhatsAppIntegrations";
import { SolutionTrustSection } from "@/components/solutions/SolutionTrustSection";
import { SolutionCTA } from "@/components/solutions/SolutionCTA";

export const Route = createFileRoute("/chat-bot-whatsapp-2")({
  head: () => ({
    meta: [
      { title: "Chat Bot WhatsApp con IA | Doobot.ai" },
      {
        name: "description",
        content:
          "Automatiza la atención, gestión de citas y procesos de cliente en WhatsApp mediante inteligencia artificial conectada con tus sistemas.",
      },
      {
        property: "og:title",
        content: "Chat Bot WhatsApp con IA | Doobot.ai",
      },
      {
        property: "og:description",
        content:
          "Automatiza la atención, gestión de citas y procesos de cliente en WhatsApp mediante inteligencia artificial conectada con tus sistemas.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ChatBotWhatsAppRoute,
});

function ChatBotWhatsAppRoute() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-[#25D366] selection:text-white">
      <Header />
      <main id="main-content">
        {/* Section 1: Hero */}
        <WhatsAppHero />

        {/* Section 2: Value Proposition */}
        <WhatsAppValueSection />

        {/* Section 3: Capacidades clave (citas, configuración, acceso a información) */}
        <WhatsAppCapabilities />

        {/* Section 4: Analytics — Cada conversación se convierte en información útil */}
        <WhatsAppAnalytics />

        {/* Section 5: Transferencia Humana — Automatización cuando aporta valor, personas cuando son necesarias */}
        <WhatsAppHumanHandoff />

        {/* Section 6: Control — Control sobre cada conversación y cada gestión */}
        <WhatsAppControl />

        {/* Section 7: Integrations — Conectado con los sistemas que ya utiliza tu empresa */}
        <WhatsAppIntegrations />

        {/* Section 8: Trust — Tecnología preparada para operar en entornos empresariales */}
        <SolutionTrustSection />

        {/* Section 9: CTA Final */}
        <SolutionCTA
          eyebrow="Chat Bot WhatsApp"
          title="Convierte WhatsApp en un canal real de atención y gestión"
          description="Descubre cómo automatizar conversaciones y procesos sin perder el control ni la posibilidad de intervención humana."
          primaryLabel="Agendar una demo"
        />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
