import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/home/Header";
import { LegalHero } from "@/components/legal/LegalHero";
import { LegalContent } from "@/components/legal/LegalContent";
import { Footer } from "@/components/home/Footer";
import { WhatsAppFab } from "@/components/home/WhatsAppFab";

export const Route = createFileRoute("/aviso-legal")({
  head: () => ({
    meta: [
      { title: "Aviso Legal | doobot.ai" },
      {
        name: "description",
        content:
          "Aviso legal y condiciones generales de uso del sitio web www.doobot.ai (Customernet Soluciones de Negocio S.L.).",
      },
      {
        property: "og:title",
        content: "Aviso Legal | doobot.ai",
      },
      {
        property: "og:description",
        content:
          "Aviso legal y condiciones generales de uso del sitio web www.doobot.ai (Customernet Soluciones de Negocio S.L.).",
      },
    ],
  }),
  component: AvisoLegalPage,
});

function AvisoLegalPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <LegalHero />
        <LegalContent />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
