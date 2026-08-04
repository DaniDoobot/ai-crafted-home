import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { WhatsAppFab } from "@/components/home/WhatsAppFab";
import { CrmHero } from "@/components/solutions/crm/CrmHero";
import { CrmValueSection } from "@/components/solutions/crm/CrmValueSection";
import { CrmCapabilities } from "@/components/solutions/crm/CrmCapabilities";
import { CrmOmnichannel } from "@/components/solutions/crm/CrmOmnichannel";
import { CrmVoiceManagement } from "@/components/solutions/crm/CrmVoiceManagement";
import { SolutionTrustSection } from "@/components/solutions/SolutionTrustSection";
import { SolutionCTA } from "@/components/solutions/SolutionCTA";

export const Route = createFileRoute("/ai-crm-omnicanal")({
  head: () => ({
    meta: [
      { title: "AI CRM Omnicanal con Gestión por Voz | Doobot.ai" },
      {
        name: "description",
        content:
          "Sistema CRM completo basado en IA. Gestiona leads, funnel de ventas, clientes, agendas, reuniones, citas y facturación con control por voz y omnicanalidad unificada.",
      },
      {
        property: "og:title",
        content: "AI CRM Omnicanal con Gestión por Voz | Doobot.ai",
      },
      {
        property: "og:description",
        content:
          "Sistema CRM completo basado en IA. Gestiona leads, funnel de ventas, clientes, agendas, reuniones, citas y facturación con control por voz y omnicanalidad unificada.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: AiCrmOmnicanalRoute,
});

function AiCrmOmnicanalRoute() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-amber-500 selection:text-slate-950">
      <Header />
      <main id="main-content">
        {/* Section 1: Hero */}
        <CrmHero />

        {/* Section 2: Propuesta de valor */}
        <CrmValueSection />

        {/* Section 3: Módulos y Capacidades */}
        <CrmCapabilities />

        {/* Section 4: Omnicanalidad Integrada */}
        <CrmOmnichannel />

        {/* Section 5: Control por Voz */}
        <CrmVoiceManagement />

        {/* Section 6: Solvencia y Confianza Corporativa */}
        <SolutionTrustSection />

        {/* Section 7: CTA Final */}
        <SolutionCTA
          eyebrow="AI CRM Omnicanal"
          title="Centraliza y gestiona todo tu negocio con IA"
          description="Descubre cómo integrar WhatsApp, chat web y voz en una única plataforma inteligente."
          primaryLabel="Agendar una demo"
        />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
