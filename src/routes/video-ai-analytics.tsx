import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { WhatsAppFab } from "@/components/home/WhatsAppFab";
import { SolutionTrustSection } from "@/components/solutions/SolutionTrustSection";
import { SolutionCTA } from "@/components/solutions/SolutionCTA";
import { VideoAnalyticsHero } from "@/components/solutions/video-analytics/VideoAnalyticsHero";
import { VideoAnalyticsValueSection } from "@/components/solutions/video-analytics/VideoAnalyticsValueSection";
import { VideoAnalyticsCapabilities } from "@/components/solutions/video-analytics/VideoAnalyticsCapabilities";
import { VideoAnalyticsHumanReview } from "@/components/solutions/video-analytics/VideoAnalyticsHumanReview";
import { VideoAnalyticsControl } from "@/components/solutions/video-analytics/VideoAnalyticsControl";
import { VideoAnalyticsActions } from "@/components/solutions/video-analytics/VideoAnalyticsActions";
import { VideoAnalyticsIntegrations } from "@/components/solutions/video-analytics/VideoAnalyticsIntegrations";

export const Route = createFileRoute("/video-ai-analytics")({
  head: () => ({
    meta: [
      { title: "Vídeo AI Analytics con IA | Doobot.ai" },
      {
        name: "description",
        content:
          "Analiza imágenes y vídeo mediante inteligencia artificial para identificar situaciones relevantes, estructurar información y apoyar la toma de decisiones.",
      },
      { property: "og:title", content: "Vídeo AI Analytics con IA | Doobot.ai" },
      {
        property: "og:description",
        content:
          "Analiza imágenes y vídeo mediante inteligencia artificial para identificar situaciones relevantes, estructurar información y apoyar la toma de decisiones.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: VideoAiAnalyticsRoute,
});

function VideoAiAnalyticsRoute() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-fuchsia-500 selection:text-white">
      <Header />
      <main id="main-content">
        {/* 1. Hero */}
        <VideoAnalyticsHero />

        {/* 2. Propuesta de Valor */}
        <VideoAnalyticsValueSection />

        {/* 3. Capacidades Showcase */}
        <VideoAnalyticsCapabilities />

        {/* 4. Supervisión humana selectiva */}
        <VideoAnalyticsHumanReview />

        {/* 5. Cuadros de mando e histórico */}
        <VideoAnalyticsControl />

        {/* 6. Avisos, tareas y acciones */}
        <VideoAnalyticsActions />

        {/* 7. Integración por API y RPA */}
        <VideoAnalyticsIntegrations />

        {/* 8. Solvencia y confianza */}
        <SolutionTrustSection />

        {/* 9. CTA final */}
        <SolutionCTA
          eyebrow="Vídeo AI Analytics"
          title="Transforma el contenido visual en información que puedas utilizar"
          description="Descubre cómo aplicar inteligencia artificial al análisis de imágenes y vídeo para revisar situaciones, estructurar resultados y conectarlos con tus procesos."
          primaryLabel="Agendar una demo"
        />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
