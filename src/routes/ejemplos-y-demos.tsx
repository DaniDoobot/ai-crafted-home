import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { WhatsAppFab } from "@/components/home/WhatsAppFab";
import { DemosHero } from "@/components/demos/DemosHero";
import { DemosVideoSection } from "@/components/demos/DemosVideoSection";
import { DemosVoiceBotFeatures } from "@/components/demos/DemosVoiceBotFeatures";
import { DemosExperiencias } from "@/components/demos/DemosExperiencias";
import { DemosCTA } from "@/components/demos/DemosCTA";

export const Route = createFileRoute("/ejemplos-y-demos")({
  head: () => ({
    meta: [
      { title: "Ejemplos y demos de IA | Doobot.ai" },
      {
        name: "description",
        content:
          "Conoce demostraciones y capacidades de los asistentes conversacionales desarrollados por Doobot.ai.",
      },
      {
        property: "og:title",
        content: "Ejemplos y demos de IA | Doobot.ai",
      },
      {
        property: "og:description",
        content:
          "Demostraciones y capacidades de asistentes conversacionales con IA.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: EjemplosYDemosRoute,
});

function EjemplosYDemosRoute() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-cyan-500 selection:text-slate-950">
      <Header />
      <main id="main-content">
        {/* Sección 1: Hero */}
        <DemosHero />

        {/* Sección 2: Vídeo demostrativo local */}
        <DemosVideoSection />

        {/* Sección 3: Funcionalidades clave del Voice Bot */}
        <DemosVoiceBotFeatures />

        {/* Sección 4: Experiencias disponibles (2 elementos reales) */}
        <DemosExperiencias />

        {/* Sección 5: CTA final */}
        <DemosCTA />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
