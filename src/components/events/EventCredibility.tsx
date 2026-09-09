import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Trophy, Award, Sparkles, ShieldCheck, ExternalLink } from "lucide-react";

interface CredibilityCard {
  id: string;
  badgeText: string;
  badgeIcon: typeof Trophy;
  badgeClasses: string;
  borderClasses: string;
  accentGradient: string;
  logo: string;
  logoAlt: string;
  logoHeightClass: string;
  logoMaxWidthClass: string;
  organization: string;
  title: string;
  description: string;
  footerNote: {
    text: string;
    dotColor: string;
    linkHref?: string;
  };
}

const CREDIBILITY_CARDS: CredibilityCard[] = [
  {
    id: "premio-excelencia",
    badgeText: "Ganador · 2025",
    badgeIcon: Trophy,
    badgeClasses: "border-amber-400/30 bg-amber-400/10 text-amber-300",
    borderClasses: "border-amber-400/20 hover:border-amber-400/40",
    accentGradient: "from-amber-500/10 via-transparent to-transparent",
    logo: "/doobot/events/premio-excelencia-sello-2025.webp",
    logoAlt: "Premios Excelencia Relación con Clientes 2025",
    logoHeightClass: "h-12 sm:h-14",
    logoMaxWidthClass: "max-w-[58px] sm:max-w-[68px]",
    organization: "Premios Excelencia Relación con Clientes 2025",
    title: "Premio Mejor Tecnología 2025",
    description:
      "Reconocimiento otorgado a doobot.ai junto a Boston Medical Group en la categoría Mejor Tecnología · Engagement.",
    footerNote: {
      text: "Conocer el caso galardonado",
      dotColor: "bg-amber-400",
      linkHref: "/premio-mejor-tecnologia",
    },
  },
  {
    id: "premio-dec",
    badgeText: "Finalista · 2026",
    badgeIcon: Award,
    badgeClasses: "border-rose-400/30 bg-rose-400/10 text-rose-300",
    borderClasses: "border-rose-400/20 hover:border-rose-400/40",
    accentGradient: "from-rose-500/10 via-transparent to-transparent",
    logo: "/doobot/events/premio-dec-innovacion.webp",
    logoAlt: "Asociación DEC - Premios al Mejor Proyecto de Innovación en CX",
    logoHeightClass: "h-11 sm:h-13",
    logoMaxWidthClass: "max-w-[155px] sm:max-w-[185px]",
    organization: "Asociación DEC · Asociación Directivos Experiencia de Cliente",
    title: "Finalista · Mejor Proyecto de Innovación en CX 2026",
    description:
      "doobot.ai y Boston Medical fueron finalistas del Premio DEC 2026 al Mejor Proyecto de Innovación en CX.",
    footerNote: {
      text: "Candidatura conjunta con Boston Medical",
      dotColor: "bg-rose-400",
    },
  },
  {
    id: "premio-platinum",
    badgeText: "Finalista · 2026",
    badgeIcon: Sparkles,
    badgeClasses: "border-cyan-400/30 bg-cyan-400/10 text-cyan-300",
    borderClasses: "border-cyan-400/20 hover:border-cyan-400/40",
    accentGradient: "from-cyan-500/10 via-transparent to-transparent",
    logo: "/doobot/events/premio-platinum-innovacion.webp",
    logoAlt: "Platinum Customer Experience Awards · Contact Center Hub",
    logoHeightClass: "h-9 sm:h-11",
    logoMaxWidthClass: "max-w-[170px] sm:max-w-[210px]",
    organization: "Platinum Customer Experience Awards · Contact Center Hub",
    title: "Finalista · Mejor Proyecto Innovación 2026",
    description:
      "doobot.ai fue finalista del Premio Mejor Proyecto Innovación 2026 en los Platinum Customer Experience Awards.",
    footerNote: {
      text: "Platinum Customer Experience Awards",
      dotColor: "bg-cyan-400",
    },
  },
  {
    id: "iso-27001",
    badgeText: "Certificación Oficial",
    badgeIcon: ShieldCheck,
    badgeClasses: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
    borderClasses: "border-emerald-400/20 hover:border-emerald-400/40",
    accentGradient: "from-emerald-500/10 via-transparent to-transparent",
    logo: "/doobot/events/iso-27001-certificacion.webp",
    logoAlt: "OCA Global ISO/IEC 27001 Seguridad de la Información Acreditada por ENAC",
    logoHeightClass: "h-12 sm:h-14",
    logoMaxWidthClass: "max-w-[100px] sm:max-w-[120px]",
    organization: "Garantía y Solvencia Corporativa",
    title: "ISO 27001 · Seguridad de la Información",
    description:
      "Sistema de gestión de seguridad de la información certificado, orientado a la confidencialidad y protección de la información.",
    footerNote: {
      text: "Seguridad de la información y confidencialidad",
      dotColor: "bg-emerald-400",
    },
  },
];

export function EventCredibility() {
  return (
    <section className="relative py-14 sm:py-18 lg:py-22 bg-[#03071C] border-t border-white/10 text-white overflow-hidden">
      <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <RevealOnScroll variant="fade-up" duration="fast" delay={0}>
            <span className="inline-block rounded-full bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cyan-300">
              Aval Institucional y Garantía
            </span>
            <h2 className="mt-3.5 font-display font-bold text-white text-[clamp(28px,3.5vw,44px)] leading-[1.14] tracking-tight">
              Reconocimiento sectorial, solvencia y seguridad
            </h2>
            <p className="mt-3.5 font-normal text-slate-300 text-[16px] sm:text-[18px] leading-[1.55]">
              Reconocimientos del sector y una base sólida de seguridad para el desarrollo de nuestras soluciones de IA.
            </p>
          </RevealOnScroll>
        </div>

        {/* 4 Credibility Cards Grid */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {CREDIBILITY_CARDS.map((card, idx) => {
            const BadgeIcon = card.badgeIcon;
            return (
              <RevealOnScroll key={card.id} variant="fade-up" duration="medium" delay={idx * 90}>
                <div
                  className={`h-full rounded-2xl sm:rounded-3xl border ${card.borderClasses} bg-gradient-to-br ${card.accentGradient} bg-slate-900/60 p-6 sm:p-7 backdrop-blur-xl shadow-xl flex flex-col justify-between transition-all hover:scale-[1.01]`}
                >
                  {/* Top Bar: Logo Container + Status Badge */}
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      {/* Logo Container in White Clean Glass Pill */}
                      <div className="inline-flex items-center justify-center min-h-[66px] sm:min-h-[74px] px-5 sm:px-6 py-2.5 rounded-2xl bg-gradient-to-r from-white/95 via-white/90 to-slate-100/90 border border-white/40 shadow-md shadow-black/10 backdrop-blur-md shrink-0 transition-transform hover:scale-[1.02]">
                        <img
                          src={card.logo}
                          alt={card.logoAlt}
                          className={`${card.logoHeightClass} w-auto ${card.logoMaxWidthClass} object-contain`}
                          loading="lazy"
                        />
                      </div>

                      {/* Status Badge */}
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider ${card.badgeClasses} shrink-0`}
                      >
                        <BadgeIcon className="h-3.5 w-3.5" />
                        {card.badgeText}
                      </span>
                    </div>

                    {/* Organization & Title */}
                    <div className="mt-5">
                      <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400">
                        {card.organization}
                      </div>
                      <h3 className="mt-1.5 font-display font-bold text-white text-lg sm:text-xl lg:text-[22px] leading-snug">
                        {card.title}
                      </h3>
                      <p className="mt-2.5 text-sm sm:text-[15px] text-slate-300 leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Meta Bar */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                    {card.footerNote.linkHref ? (
                      <a
                        href={card.footerNote.linkHref}
                        className="inline-flex items-center gap-1.5 font-medium text-amber-300 hover:text-amber-200 transition-colors"
                      >
                        <span className={`h-1.5 w-1.5 rounded-full ${card.footerNote.dotColor}`} />
                        <span>{card.footerNote.text}</span>
                        <ExternalLink className="h-3.5 w-3.5 ml-0.5" />
                      </a>
                    ) : (
                      <div className="inline-flex items-center gap-1.5 font-normal text-slate-400">
                        <span className={`h-1.5 w-1.5 rounded-full ${card.footerNote.dotColor}`} />
                        <span>{card.footerNote.text}</span>
                      </div>
                    )}
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
