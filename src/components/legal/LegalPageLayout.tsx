import { useEffect, type ReactNode } from "react";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { WhatsAppFab } from "@/components/home/WhatsAppFab";

interface LegalPageLayoutProps {
  children: ReactNode;
}

export function LegalPageLayout({ children }: LegalPageLayoutProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
