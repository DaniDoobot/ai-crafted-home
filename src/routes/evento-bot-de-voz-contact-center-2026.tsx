import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { WhatsAppFab } from "@/components/home/WhatsAppFab";
import { EventHero } from "@/components/events/EventHero";
import { EventAgenda } from "@/components/events/EventAgenda";
import { EventVoiceEcosystem } from "@/components/events/EventVoiceEcosystem";
import { EventCredibility } from "@/components/events/EventCredibility";
import { EventRegistrationForm } from "@/components/events/EventRegistrationForm";

export const Route = createFileRoute("/evento-bot-de-voz-contact-center-2026")({
  head: () => ({
    meta: [
      { title: "Bot de Voz: calienta que sales…!! | Taller doobot.ai" },
      {
        name: "description",
        content:
          "Taller presencial de doobot.ai sobre bots de voz basados en IA para selección, formación y evaluación. 24 de septiembre de 2026 en Madrid.",
      },
      {
        property: "og:title",
        content: "Bot de Voz: calienta que sales…!! | Taller doobot.ai",
      },
      {
        property: "og:description",
        content:
          "Taller presencial de doobot.ai sobre bots de voz basados en IA para selección, formación y evaluación. 24 de septiembre de 2026 en Madrid.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: EventPage,
});

function EventPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-cyan-500 selection:text-slate-950">
      <Header />
      <main id="main-content">
        <EventHero />
        <EventAgenda />
        <EventVoiceEcosystem />
        <EventCredibility />
        <EventRegistrationForm />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
