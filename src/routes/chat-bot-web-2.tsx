import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { WhatsAppFab } from "@/components/home/WhatsAppFab";
import { WebHero } from "@/components/solutions/web/WebHero";
import { WebValueSection } from "@/components/solutions/web/WebValueSection";
import { WebCapabilities } from "@/components/solutions/web/WebCapabilities";
import { WebConversationDesign } from "@/components/solutions/web/WebConversationDesign";
import { WebHumanHandoff } from "@/components/solutions/web/WebHumanHandoff";
import { WebControlAnalytics } from "@/components/solutions/web/WebControlAnalytics";
import { WebIntegrations } from "@/components/solutions/web/WebIntegrations";
import { SolutionTrustSection } from "@/components/solutions/SolutionTrustSection";
import { SolutionCTA } from "@/components/solutions/SolutionCTA";

export const Route = createFileRoute("/chat-bot-web-2")({
  head: () => ({
    meta: [
      { title: "Chat Bot Web con IA | Doobot.ai" },
      {
        name: "description",
        content:
          "Transforma tu sitio web en un canal activo de atención, captación y gestión mediante inteligencia artificial conversacional.",
      },
      {
        property: "og:title",
        content: "Chat Bot Web con IA | Doobot.ai",
      },
      {
        property: "og:description",
        content:
          "Transforma tu sitio web en un canal activo de atención, captación y gestión mediante inteligencia artificial conversacional.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ChatBotWebRoute,
});

function ChatBotWebRoute() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-cyan-500 selection:text-slate-950">
      <Header />
      <main id="main-content">
        {/* Section 1: Hero */}
        <WebHero />

        {/* Section 2: Propuesta de valor */}
        <WebValueSection />

        {/* Section 3: Capacidades (navegación, captación, conocimiento) */}
        <WebCapabilities />

        {/* Section 4: Configuración conversacional sin flujos rígidos */}
        <WebConversationDesign />

        {/* Section 5: Intervención humana selectiva */}
        <WebHumanHandoff />

        {/* Section 6: Control, conversaciones y análisis */}
        <WebControlAnalytics />

        {/* Section 7: Integración API y RPA */}
        <WebIntegrations />

        {/* Section 8: Solvencia y confianza */}
        <SolutionTrustSection />

        {/* Section 9: CTA final */}
        <SolutionCTA
          eyebrow="Chat Bot Web"
          title="Haz que cada visita pueda convertirse en una conversación útil"
          description="Descubre cómo incorporar atención, captación y automatización directamente en tu sitio web."
          primaryLabel="Agendar una demo"
        />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
