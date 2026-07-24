import { createFileRoute } from "@tanstack/react-router";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { LegalHero } from "@/components/legal/LegalHero";
import { SecurityContent } from "@/components/legal/SecurityContent";

export const Route = createFileRoute(
  "/politica-de-seguridad-de-la-informacion"
)({
  head: () => ({
    meta: [
      { title: "Política de Seguridad de la Información | Doobot.ai" },
      {
        name: "description",
        content:
          "Política de gestión de seguridad de la información del sistema SGSI conforme a ISO/IEC 27001:2022 de Customernet Soluciones de Negocio S.L. en doobot.ai.",
      },
      {
        property: "og:title",
        content: "Política de Seguridad de la Información | Doobot.ai",
      },
      {
        property: "og:description",
        content:
          "Política de gestión de seguridad de la información del sistema SGSI conforme a ISO/IEC 27001:2022 de Customernet Soluciones de Negocio S.L. en doobot.ai.",
      },
    ],
  }),
  component: PoliticaSeguridadPage,
});

function PoliticaSeguridadPage() {
  return (
    <LegalPageLayout>
      <LegalHero
        eyebrow="Sistema de Gestión SGSI ISO/IEC 27001"
        title="Política de Seguridad de la Información"
        description="Estructura, principios y directrices de protección de la información, seguridad en soluciones cloud y confidencialidad en los servicios de Voice y Chat Bots de doobot.ai."
      />
      <SecurityContent />
    </LegalPageLayout>
  );
}
