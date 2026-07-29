import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { WhatsAppFab } from "@/components/home/WhatsAppFab";
import { SpeechHero } from "@/components/solutions/speech/SpeechHero";
import { SpeechValueSection } from "@/components/solutions/speech/SpeechValueSection";
import { SpeechCapabilities } from "@/components/solutions/speech/SpeechCapabilities";
import { SpeechInsights } from "@/components/solutions/speech/SpeechInsights";
import { SpeechImprovement } from "@/components/solutions/speech/SpeechImprovement";
import { SpeechIntegrations } from "@/components/solutions/speech/SpeechIntegrations";
import { SolutionTrustSection } from "@/components/solutions/SolutionTrustSection";
import { SolutionCTA } from "@/components/solutions/SolutionCTA";

export const Route = createFileRoute("/speech-analytics")({
  head: () => ({
    meta: [
      { title: "Speech Analytics e Inteligencia de Voz | Doobot.ai" },
      {
        name: "description",
        content:
          "Análisis inteligente de interacciones telefónicas para supervisar la calidad de atención, detectar tendencias y optimizar operaciones.",
      },
      {
        property: "og:title",
        content: "Speech Analytics e Inteligencia de Voz | Doobot.ai",
      },
      {
        property: "og:description",
        content:
          "Análisis inteligente de interacciones telefónicas para supervisar la calidad de atención, detectar tendencias y optimizar operaciones.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: SpeechAnalyticsRoute,
});

function SpeechAnalyticsRoute() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-teal-500 selection:text-slate-950">
      <Header />
      <main id="main-content">
        {/* Section 1: Hero */}
        <SpeechHero />

        {/* Section 2: Propuesta de valor */}
        <SpeechValueSection />

        {/* Section 3: Capacidades principales */}
        <SpeechCapabilities />

        {/* Section 4: Insights Operativos */}
        <SpeechInsights />

        {/* Section 5: Mejora Continua & QA */}
        <SpeechImprovement />

        {/* Section 6: Integraciones & Fuentes de datos */}
        <SpeechIntegrations />

        {/* Section 7: Solvencia y Confianza Corporativa */}
        <SolutionTrustSection />

        {/* Section 8: CTA Final */}
        <SolutionCTA
          eyebrow="Speech Analytics"
          title="Transforma las conversaciones telefónicas en valor directo"
          description="Descubre cómo supervisar la calidad, entender los motivos de contacto y mejorar la operativa de atención."
          primaryLabel="Agendar una demo"
        />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
