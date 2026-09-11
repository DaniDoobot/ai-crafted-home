import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/home/Header";
import { AwardHero } from "@/components/award/AwardHero";
import { AwardShowcase } from "@/components/award/AwardShowcase";
import { AwardFinalists } from "@/components/award/AwardFinalists";
import { ActualidadSection } from "@/components/award/ActualidadSection";
import { ArticleModal, ModalContent } from "@/components/award/ArticleModal";
import { Footer } from "@/components/home/Footer";
import { WhatsAppFab } from "@/components/home/WhatsAppFab";

export const Route = createFileRoute("/premio-mejor-tecnologia")({
  head: () => ({
    meta: [
      { title: "Reconocimientos y Artículos | doobot.ai" },
      {
        name: "description",
        content:
          "Reconocimientos, premios, artículos y noticias de doobot.ai sobre inteligencia artificial, automatización, experiencia de cliente y casos reales.",
      },
      {
        property: "og:title",
        content: "Reconocimientos y Artículos | doobot.ai",
      },
      {
        property: "og:description",
        content:
          "Reconocimientos, premios, artículos y noticias de doobot.ai sobre inteligencia artificial, automatización, experiencia de cliente y casos reales.",
      },
    ],
  }),
  component: PremioPage,
});

function PremioPage() {
  const [modalContent, setModalContent] = useState<ModalContent | null>(null);

  const handleOpenModal = (content: ModalContent) => {
    setModalContent(content);
  };

  const handleCloseModal = () => {
    setModalContent(null);
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* 1. Hero con el nuevo título y subtítulo */}
        <AwardHero />

        {/* 2. Bloque Principal de Reconocimientos: Premio a Mejor Tecnología 2025 */}
        <AwardShowcase />

        {/* 2b. Sub-bloque de Finalistas 2026: DEC y Platinum */}
        <AwardFinalists />

        {/* 3. Sección Editorial: Actualidad doobot.ai_ (disposición alterna en hélice) */}
        <ActualidadSection onOpenModal={handleOpenModal} />
      </main>
      <Footer />
      <WhatsAppFab />

      {/* Visor modal para documentos e imágenes de artículos */}
      <ArticleModal
        content={modalContent}
        isOpen={modalContent !== null}
        onClose={handleCloseModal}
      />
    </div>
  );
}
