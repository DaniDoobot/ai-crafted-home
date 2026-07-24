import { createFileRoute } from "@tanstack/react-router";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { LegalHero } from "@/components/legal/LegalHero";
import { PrivacyContent } from "@/components/legal/PrivacyContent";

export const Route = createFileRoute("/politica-de-privacidad")({
  head: () => ({
    meta: [
      { title: "Política de Privacidad | Doobot.ai" },
      {
        name: "description",
        content:
          "Política de privacidad y protección de datos personales de Customernet Soluciones de Negocio S.L. en www.doobot.ai (RGPD / LOPDGDD).",
      },
      {
        property: "og:title",
        content: "Política de Privacidad | Doobot.ai",
      },
      {
        property: "og:description",
        content:
          "Política de privacidad y protección de datos personales de Customernet Soluciones de Negocio S.L. en www.doobot.ai (RGPD / LOPDGDD).",
      },
    ],
  }),
  component: PoliticaPrivacidadPage,
});

function PoliticaPrivacidadPage() {
  return (
    <LegalPageLayout>
      <LegalHero
        eyebrow="Protección de Datos Personales"
        title="Política de Privacidad"
        description="Información detallada sobre el tratamiento de datos personales, ejercicio de derechos y garantías de privacidad conforme al RGPD y LOPDGDD."
      />
      <PrivacyContent />
    </LegalPageLayout>
  );
}
