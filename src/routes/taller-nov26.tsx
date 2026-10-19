import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { WhatsAppFab } from "@/components/home/WhatsAppFab";
import { WorkshopNov26Hero } from "@/components/events/WorkshopNov26Hero";
import { WorkshopNov26Intro } from "@/components/events/WorkshopNov26Intro";
import { WorkshopNov26Cycle } from "@/components/events/WorkshopNov26Cycle";
import { WorkshopNov26Audience } from "@/components/events/WorkshopNov26Audience";
import { WorkshopNov26WhatsAppCard } from "@/components/events/WorkshopNov26WhatsAppCard";
import { EventCredibility } from "@/components/events/EventCredibility";

export const Route = createFileRoute("/taller-nov26")({
  head: () => ({
    meta: [
      { title: "¿Agentes IA entrenando a mi equipo? | Taller doobot.ai_" },
      {
        name: "description",
        content:
          "Taller presencial de doobot.ai_ sobre evaluación, coaching y training con inteligencia artificial y bots de voz en ciclos de mejora continua.",
      },
      {
        property: "og:title",
        content: "¿Agentes IA entrenando a mi equipo? | Taller doobot.ai_",
      },
      {
        property: "og:description",
        content:
          "Taller presencial de doobot.ai_ sobre evaluación, coaching y training con inteligencia artificial y bots de voz en ciclos de mejora continua.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://doobot.ai/taller-nov26/" },
      { name: "robots", content: "index, follow" },
    ],
    links: [
      { rel: "canonical", href: "https://doobot.ai/taller-nov26/" },
    ],
  }),
  component: WorkshopNov26Page,
});

function WorkshopNov26Page() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-cyan-500 selection:text-slate-950 overflow-x-clip">
      <Header />
      <main id="main-content">
        <WorkshopNov26Hero />
        <WorkshopNov26Intro />

        {/* Zona 1: Inscripción por WhatsApp */}
        <WorkshopNov26WhatsAppCard
          id="inscripcion"
          badgeText="Inscripción al taller"
          title="Reserva tu plaza"
          subtitle="Las plazas son limitadas. Puedes tramitar tu inscripción directamente a través de nuestro Bot WhatsApp."
        />

        {/* Ciclo continuo de mejora (4 bloques) */}
        <WorkshopNov26Cycle />

        {/* ¿A quién va dirigido? */}
        <WorkshopNov26Audience />

        {/* Zona 2: Inscripción por WhatsApp */}
        <WorkshopNov26WhatsAppCard
          id="inscripcion-final"
          badgeText="Últimas plazas"
          title="Asegura tu plaza en el taller"
          subtitle="Plazas limitadas en Torre BBVA. Puedes tramitar tu inscripción directamente a través de nuestro Bot WhatsApp."
        />

        {/* Bloque de credibilidad / reconocimientos */}
        <EventCredibility />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
