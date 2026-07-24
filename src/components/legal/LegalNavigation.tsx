import { Shield, Lock, FileText, Cookie } from "lucide-react";

interface LegalNavigationProps {
  currentPath: string;
}

export function LegalNavigation({ currentPath }: LegalNavigationProps) {
  const links = [
    {
      label: "Aviso Legal",
      href: "/aviso-legal/",
      icon: FileText,
    },
    {
      label: "Política de privacidad",
      href: "/politica-de-privacidad/",
      icon: Lock,
    },
    {
      label: "Seguridad de la información",
      href: "/politica-de-seguridad-de-la-informacion/",
      icon: Shield,
    },
    {
      label: "Política de cookies",
      href: "/politica-de-cookies/",
      icon: Cookie,
    },
  ];

  const handleLinkClick = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  };

  return (
    <nav
      aria-label="Navegación legal"
      className="flex flex-wrap items-center justify-center gap-2 border-b border-slate-200/80 pb-6 mb-8"
    >
      {links.map((link) => {
        const Icon = link.icon;
        const isActive =
          currentPath === link.href ||
          currentPath === link.href.replace(/\/$/, "");

        return (
          <a
            key={link.href}
            href={link.href}
            onClick={handleLinkClick}
            className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all ${
              isActive
                ? "bg-[#050547] text-white shadow-sm"
                : "bg-slate-100/80 text-slate-700 hover:bg-indigo-50 hover:text-indigo-900"
            }`}
          >
            <Icon className={`h-4 w-4 ${isActive ? "text-cyan-300" : "text-slate-500"}`} />
            <span>{link.label}</span>
          </a>
        );
      })}
    </nav>
  );
}
