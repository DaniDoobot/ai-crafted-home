import { createFileRoute } from "@tanstack/react-router";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { LegalHero } from "@/components/legal/LegalHero";
import { LegalContent } from "@/components/legal/LegalContent";

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
    <LegalPageLayout>
      <LegalHero
        eyebrow="Información Legal y Regulatoria"
        title="Aviso Legal"
        description="Condiciones generales de acceso, navegación y utilización del sitio web de doobot.ai."
      />
      <LegalContent />
    </LegalPageLayout>
  );
}
