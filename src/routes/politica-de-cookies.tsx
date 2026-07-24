import { createFileRoute } from "@tanstack/react-router";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { LegalHero } from "@/components/legal/LegalHero";
import { CookiesContent } from "@/components/legal/CookiesContent";

export const Route = createFileRoute("/politica-de-cookies")({
  head: () => ({
    meta: [
      { title: "Política de Cookies | Doobot.ai" },
      {
        name: "description",
        content:
          "Información sobre el uso de cookies y tecnologías de almacenamiento local en el sitio web de Customernet Soluciones de Negocio S.L. (www.doobot.ai).",
      },
      {
        property: "og:title",
        content: "Política de Cookies | Doobot.ai",
      },
      {
        property: "og:description",
        content:
          "Información sobre el uso de cookies y tecnologías de almacenamiento local en el sitio web de Customernet Soluciones de Negocio S.L. (www.doobot.ai).",
      },
    ],
  }),
  component: PoliticaCookiesPage,
});

function PoliticaCookiesPage() {
  return (
    <LegalPageLayout>
      <LegalHero
        eyebrow="Garantías de Transparencia Tecnológica"
        title="Política de Cookies"
        description="Información detallada sobre el uso de tecnologías de almacenamiento local, cookies técnicas necesarias y gestión de sus preferencias de privacidad."
      />
      <CookiesContent />
    </LegalPageLayout>
  );
}
