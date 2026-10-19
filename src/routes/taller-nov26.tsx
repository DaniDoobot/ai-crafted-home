import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { WhatsAppFab } from "@/components/home/WhatsAppFab";
import { WorkshopNov26Hero } from "@/components/events/WorkshopNov26Hero";
import { WorkshopNov26Intro } from "@/components/events/WorkshopNov26Intro";
import { WorkshopNov26Cycle } from "@/components/events/WorkshopNov26Cycle";
import { WorkshopNov26Audience } from "@/components/events/WorkshopNov26Audience";
import { EventRegistrationForm } from "@/components/events/EventRegistrationForm";
import { EventCredibility } from "@/components/events/EventCredibility";
import { WHATSAPP_WORKSHOP_NOV26_URL } from "@/config/contact";

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
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-cyan-500 selection:text-slate-950 overflow-x-clip">
      <Header />
      <main id="main-content">
        <WorkshopNov26Hero />
        <WorkshopNov26Intro />

        {/* Zona 1: Formulario de inscripción */}
        <EventRegistrationForm
          id="inscripcion"
          campaign="taller-nov26"
          badgeText="Taller presencial · 12 noviembre"
          title="Inscribirme en el taller"
          subtitle="Plazas limitadas por aforo en sala. Completa tus datos para tramitar tu solicitud de asistencia para el 12 de noviembre en Madrid."
          submitButtonText="Inscribirme en el taller"
          disclaimerText="Plazas limitadas por aforo en sala previa confirmación por el equipo organizador."
          whatsAppUrl={WHATSAPP_WORKSHOP_NOV26_URL}
          isRegistered={isRegistered}
          onRegistrationSuccess={() => setIsRegistered(true)}
        />

        {/* Ciclo continuo de mejora (4 bloques) */}
        <WorkshopNov26Cycle />

        {/* ¿A quién va dirigido? */}
        <WorkshopNov26Audience />

        {/* Zona 2: Formulario de inscripción final */}
        <EventRegistrationForm
          id="inscripcion-final"
          campaign="taller-nov26"
          badgeText="Últimas plazas"
          title="Asegura tu plaza en el taller"
          subtitle="Plazas limitadas en Torre BBVA. Tramita tu solicitud antes de completar la capacidad de la sala."
          submitButtonText="Inscribirme en el taller"
          disclaimerText="Plazas limitadas por aforo en sala previa confirmación por el equipo organizador."
          whatsAppUrl={WHATSAPP_WORKSHOP_NOV26_URL}
          isRegistered={isRegistered}
          onRegistrationSuccess={() => setIsRegistered(true)}
        />

        {/* Bloque de credibilidad / reconocimientos */}
        <EventCredibility />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
