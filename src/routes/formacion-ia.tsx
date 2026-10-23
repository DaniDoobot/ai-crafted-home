import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { WhatsAppFab } from "@/components/home/WhatsAppFab";
import { TrainingHero } from "@/components/training/TrainingHero";
import { TrainingBenefits } from "@/components/training/TrainingBenefits";
import { TrainingProfiles } from "@/components/training/TrainingProfiles";
import { TrainingServices } from "@/components/training/TrainingServices";
import { TrainingMidCTA } from "@/components/training/TrainingMidCTA";
import { TrainingMethodology } from "@/components/training/TrainingMethodology";
import { TrainingFinalCTA } from "@/components/training/TrainingFinalCTA";

export const Route = createFileRoute("/formacion-ia")({
  head: () => ({
    meta: [
      { title: "Formación en IA y creación de agentes | doobot.ai_" },
      {
        name: "description",
        content:
          "Formación práctica en inteligencia artificial y creación de agentes para equipos empresariales con herramientas como Microsoft Copilot, ChatGPT, Claude y Gemini.",
      },
      {
        property: "og:title",
        content: "Formación en IA y creación de agentes | doobot.ai_",
      },
      {
        property: "og:description",
        content:
          "Formación práctica en inteligencia artificial y creación de agentes para equipos empresariales con herramientas como Microsoft Copilot, ChatGPT, Claude y Gemini.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://doobot.ai/formacion-ia/" },
      {
        property: "og:image",
        content: "https://doobot.ai/doobot/formacion/formacion-ia-agentes.webp",
      },
      { name: "robots", content: "index, follow" },
    ],
    links: [
      { rel: "canonical", href: "https://doobot.ai/formacion-ia/" },
    ],
  }),
  component: FormacionIaPage,
});

function FormacionIaPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-indigo-500 selection:text-white overflow-x-clip">
      <Header />
      <main id="main-content">
        <TrainingHero />
        <TrainingBenefits />
        <TrainingProfiles />
        <TrainingServices />
        <TrainingMidCTA />
        <TrainingMethodology />
        <TrainingFinalCTA />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
