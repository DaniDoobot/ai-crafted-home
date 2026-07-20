import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/home/Header";
import { Hero } from "@/components/home/Hero";
import { IntelligenceSection } from "@/components/home/IntelligenceSection";
import { Integrations } from "@/components/home/Integrations";
import { TeamSection } from "@/components/home/TeamSection";
import { WhatsAppSection, VoiceBotsSection } from "@/components/home/ChannelSections";
import { KitDigital } from "@/components/home/KitDigital";
import { Testimonial } from "@/components/home/Testimonial";
import { AwardSection } from "@/components/home/AwardSection";
import { StatsSection } from "@/components/home/StatsSection";
import { Clients } from "@/components/home/Clients";
import { Footer } from "@/components/home/Footer";
import { WhatsAppFab } from "@/components/home/WhatsAppFab";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <IntelligenceSection />
        <Integrations />
        <TeamSection />
        <WhatsAppSection />
        <VoiceBotsSection />
        <KitDigital />
        <Testimonial />
        <AwardSection />
        <StatsSection />
        <Clients />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
