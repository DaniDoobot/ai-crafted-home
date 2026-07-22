import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/home/Header";
import { AwardHero } from "@/components/award/AwardHero";
import { AwardShowcase } from "@/components/award/AwardShowcase";
import { AwardContext } from "@/components/award/AwardContext";
import { AwardTechnology } from "@/components/award/AwardTechnology";
import { AwardTrust } from "@/components/award/AwardTrust";
import { AwardPressCTA } from "@/components/award/AwardPressCTA";
import { Footer } from "@/components/home/Footer";
import { WhatsAppFab } from "@/components/home/WhatsAppFab";

export const Route = createFileRoute("/premio-mejor-tecnologia")({
  head: () => ({
    meta: [
      { title: "Premio Mejor Tecnología 2025 | Doobot.ai" },
      {
        name: "description",
        content:
          "Doobot.ai y Boston Medical Group reciben el Premio Mejor Tecnología 2025 en la categoría Engagement de los Premios Excelencia Relación con Clientes.",
      },
      {
        property: "og:title",
        content: "Premio Mejor Tecnología 2025 | Doobot.ai",
      },
      {
        property: "og:description",
        content:
          "Doobot.ai y Boston Medical Group reciben el Premio Mejor Tecnología 2025 en la categoría Engagement de los Premios Excelencia Relación con Clientes.",
      },
    ],
  }),
  component: PremioPage,
});

function PremioPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <AwardHero />
        <AwardShowcase />
        <AwardContext />
        <AwardTechnology />
        <AwardTrust />
        <AwardPressCTA />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
