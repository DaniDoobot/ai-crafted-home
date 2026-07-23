import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { WhatsAppFab } from "@/components/home/WhatsAppFab";
import { SolutionTrustSection } from "@/components/solutions/SolutionTrustSection";
import { SolutionCTA } from "@/components/solutions/SolutionCTA";
import { AnalyticsHero } from "@/components/solutions/analytics/AnalyticsHero";
import { AnalyticsValueSection } from "@/components/solutions/analytics/AnalyticsValueSection";
import { AnalyticsCapabilities } from "@/components/solutions/analytics/AnalyticsCapabilities";
import { AnalyticsAlerts } from "@/components/solutions/analytics/AnalyticsAlerts";
import { AnalyticsActions } from "@/components/solutions/analytics/AnalyticsActions";
import { AnalyticsQualitative } from "@/components/solutions/analytics/AnalyticsQualitative";
import { AnalyticsIntegrations } from "@/components/solutions/analytics/AnalyticsIntegrations";

export const Route = createFileRoute("/ia-analytics")({
  head: () => ({
    meta: [
      { title: "AI Analytics con IA | Doobot.ai" },
      {
        name: "description",
        content:
          "Analiza conversaciones y datos mediante inteligencia artificial para identificar patrones, realizar consultas y mejorar la toma de decisiones.",
      },
      { property: "og:title",       content: "AI Analytics con IA | Doobot.ai" },
      {
        property: "og:description",
        content:
          "Analiza conversaciones y datos mediante inteligencia artificial para identificar patrones, realizar consultas y mejorar la toma de decisiones.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: IaAnalyticsRoute,
});

function IaAnalyticsRoute() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-indigo-500 selection:text-white">
      <Header />
      <main id="main-content">
        {/* 1. Hero */}
        <AnalyticsHero />

        {/* 2. Propuesta de valor */}
        <AnalyticsValueSection />

        {/* 3. Capacidades: escala, consultas NL, patrones */}
        <AnalyticsCapabilities />

        {/* 4. Alertas y seguimiento */}
        <AnalyticsAlerts />

        {/* 5. Recomendaciones y siguientes acciones */}
        <AnalyticsActions />

        {/* 6. Clasificación y análisis cualitativo */}
        <AnalyticsQualitative />

        {/* 7. Integración con fuentes y sistemas */}
        <AnalyticsIntegrations />

        {/* 8. Solvencia y confianza */}
        <SolutionTrustSection />

        {/* 9. CTA final */}
        <SolutionCTA
          eyebrow="AI Analytics"
          title="Convierte tus datos en una herramienta para decidir mejor"
          description="Descubre cómo analizar conversaciones e información operativa para identificar patrones, consultar la actividad y orientar las siguientes acciones."
          primaryLabel="Agendar una demo"
        />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
