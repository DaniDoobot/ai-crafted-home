import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { WhatsAppFab } from "@/components/home/WhatsAppFab";
import { TalentHero } from "@/components/solutions/talent/TalentHero";
import { TalentFunnelSection } from "@/components/solutions/talent/TalentFunnelSection";
import { TalentCapabilities } from "@/components/solutions/talent/TalentCapabilities";
import { TalentRolePlays } from "@/components/solutions/talent/TalentRolePlays";
import { SolutionTrustSection } from "@/components/solutions/SolutionTrustSection";
import { SolutionCTA } from "@/components/solutions/SolutionCTA";

export const Route = createFileRoute("/ai-talent")({
  head: () => ({
    meta: [
      { title: "AI Talent | Selección Asistida por IA y Voz | Doobot.ai" },
      {
        name: "description",
        content:
          "Automatiza tus procesos de selección de personal. Matching de CVs, entrevistas por bots de voz, role plays y análisis IA multimodal para llegar a la terna finalista.",
      },
      {
        property: "og:title",
        content: "AI Talent | Selección Asistida por IA y Voz | Doobot.ai",
      },
      {
        property: "og:description",
        content:
          "Automatiza tus procesos de selección de personal. Matching de CVs, entrevistas por bots de voz, role plays y análisis IA multimodal para llegar a la terna finalista.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: AiTalentRoute,
});

function AiTalentRoute() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-emerald-500 selection:text-slate-950">
      <Header />
      <main id="main-content">
        {/* Section 1: Hero */}
        <TalentHero />

        {/* Section 2: Embudo de Selección */}
        <TalentFunnelSection />

        {/* Section 3: Módulos y Capacidades */}
        <TalentCapabilities />

        {/* Section 4: Role Plays y Análisis Multimodal */}
        <TalentRolePlays />

        {/* Section 5: Solvencia y Confianza Corporativa */}
        <SolutionTrustSection />

        {/* Section 6: CTA Final */}
        <SolutionCTA
          eyebrow="AI Talent"
          title="Encuentra a los mejores candidatos con la máxima eficiencia"
          description="Descubre cómo automatizar el cribado, evaluar competencias por voz y acelerar tu selección con IA."
          primaryLabel="Agendar una demo"
        />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
