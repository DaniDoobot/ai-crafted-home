import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { WhatsAppFab } from "@/components/home/WhatsAppFab";
import { DemosHero } from "@/components/demos/DemosHero";
import { DemosVideoSection } from "@/components/demos/DemosVideoSection";
import { DemosVoiceBotFeatures } from "@/components/demos/DemosVoiceBotFeatures";
import { DemosPhoneContact } from "@/components/demos/DemosPhoneContact";
import { DemosExperiencias } from "@/components/demos/DemosExperiencias";
import { DemosCTA } from "@/components/demos/DemosCTA";

export const Route = createFileRoute("/ejemplos-y-demos")({
  head: () => ({
    meta: [
      { title: "Ejemplos y demos de IA | Doobot.ai" },
      {
        name: "description",
        content:
          "Conoce demostraciones de Voice Bots y contacta con el asistente telefónico de Doobot.ai para dejar un mensaje o solicitar información comercial.",
      },
      {
        property: "og:title",
        content: "Ejemplos y demos de IA | Doobot.ai",
      },
      {
        property: "og:description",
        content:
          "Conoce demostraciones de Voice Bots y contacta con el asistente telefónico de Doobot.ai para dejar un mensaje o solicitar información comercial.",
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
        {/* 1. Hero */}
        <DemosHero />

        {/* 2. Vídeo demostrativo local */}
        <DemosVideoSection />

        {/* 3. Funcionalidades clave del Voice Bot */}
        <DemosVoiceBotFeatures />

        {/* 4. Contacto telefónico Voice Bot */}
        <DemosPhoneContact />

        {/* 5. Experiencias disponibles */}
        <DemosExperiencias />

        {/* 6. CTA final */}
        <DemosCTA />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
