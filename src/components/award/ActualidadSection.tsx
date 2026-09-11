import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ExternalLink, Eye, Newspaper, FileText } from "lucide-react";
import { ModalContent } from "./ArticleModal";

export interface EditorialArticle {
  id: string;
  source: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  actionType: "link" | "modal";
  externalUrl?: string;
  modalContent?: ModalContent;
  ctaText: string;
  tag?: string;
}

const EDITORIAL_ARTICLES: EditorialArticle[] = [
  {
    id: "noticia-1-aeerc-partnership",
    source: "AEERC · Asociación Española de Expertos en la Relación con Clientes",
    title: "doobot.ai y Boston Medical: Premio Tecnológico en reconocimiento a un partnership exitoso",
    description:
      "Artículo en web AEERC entrevista a Ángel Vázquez CEO de doobot.ai_ y Ramón Almendro CEO Boston Medical España, Portugal y Alemania.",
    image: "/doobot/articles/noticia-aeerc-boston.webp",
    imageAlt: "Ángel Vázquez y Ramón Almendro con el galardón en la web de AEERC",
    actionType: "link",
    externalUrl:
      "https://aeerc.com/doobot-ai-y-boston-medical-premio-tecnologico-en-reconocimiento-a-un-partnership-exitoso/",
    ctaText: "Leer artículo",
    tag: "Entrevista y Caso de Éxito",
  },
  {
    id: "noticia-2-cuidacasa-whatsapp",
    source: "Cuidacasa",
    title: "Cuidacasa: Automatización por IA para evaluar reparaciones con tecnología doobot.ai_",
    description:
      "doobot.ai_ desarrolla para Cuidacasa una solución basada en IA para a partir de vídeos enviados por WhatsApp automatizar el proceso de valoración de daños, costes de reparación y aprobación de presupuestos en base a baremos.",
    image: "/doobot/articles/noticia-cuidacasa-whatsapp.png",
    imageAlt: "Chatbot de WhatsApp con IA para la validación de reparaciones en Cuidacasa",
    actionType: "modal",
    modalContent: {
      type: "pdf",
      title: "Cuidacasa: Automatización por IA. Evaluar reparaciones con tecnología doobot.ai",
      sourceLabel: "Cuidacasa · Automatización por IA",
      url: "/doobot/articles/cuidacasa-noticia.pdf",
    },
    ctaText: "Ver noticia",
    tag: "IA Visión y WhatsApp",
  },
  {
    id: "noticia-3-aeerc-fortius",
    source: "AEERC · Premios Fortius 2026",
    title: "La Inteligencia Artificial en los Premios Fortius",
    description:
      "La Inteligencia Artificial ha entrado en la evaluación de candidaturas en los Premios Fortius de la mano de doobot.ai_. En este artículo se detalla cómo se ha aplicado y los resultados.",
    image: "/doobot/articles/noticia-fortius-aeerc.webp",
    imageAlt: "Artículo de la AEERC sobre la IA en los Premios Fortius",
    actionType: "link",
    externalUrl:
      "https://aeerc.com/ia-en-los-premios-fortius/?utm_campaign=newsletter-aeerc-marzo-2026&utm_medium=email&utm_source=acumbamail",
    ctaText: "Leer artículo",
    tag: "Premios Fortius",
  },
  {
    id: "noticia-4-observatorio-contact-center",
    source: "Observatorio de Contact Center · 8ª Edición",
    title: "Reportaje Especial en el Observatorio de Contact Center",
    description:
      "Nueva participación de doobot.ai_ en el Observatorio Contact Center, en esta ocasión centrada en cómo la arquitectura de agentes es una clave para la eficacia en el empleo de la IA.",
    image: "/doobot/articles/noticia-observatorio-web.webp",
    imageAlt: "Cabecera del reportaje en el Observatorio de Contact Center",
    actionType: "modal",
    modalContent: {
      type: "image",
      title: "Observatorio de Contact Center - 8ª Edición: Reportaje Completo",
      sourceLabel: "Observatorio de Contact Center · 8ª Edición",
      url: "/doobot/articles/noticia-observatorio-articulo-completo.webp",
    },
    ctaText: "Ver noticia",
    tag: "Observatorio Contact Center",
  },
  {
    id: "noticia-5-boston-medical-revista",
    source: "Revista Especializada · Reportaje a Doble Página",
    title: "Caso de Éxito Boston Medical Group: Innovación y Relación con el Paciente",
    description:
      "Entrevista a Ramón Almendro CEO de Boston Medical España, Portugal y Alemania donde relata cuál está siendo la experiencia con doobot.ai_ en la implementación de soluciones basadas en Inteligencia Artificial.",
    image: "/doobot/articles/noticia-boston-medical-revista.webp",
    imageAlt: "Reportaje a doble página sobre Boston Medical Group y doobot.ai",
    actionType: "modal",
    modalContent: {
      type: "image",
      title: "Boston Medical Group: Reportaje Especial a Doble Página",
      sourceLabel: "Revista Especializada · Caso de Éxito",
      url: "/doobot/articles/noticia-boston-medical-revista.webp",
    },
    ctaText: "Ver noticia",
    tag: "Entrevista Exclusiva",
  },
];

interface ActualidadSectionProps {
  onOpenModal: (content: ModalContent) => void;
}

export function ActualidadSection({ onOpenModal }: ActualidadSectionProps) {
  return (
    <section className="py-20 lg:py-28 bg-white border-t border-slate-200/80">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <RevealOnScroll variant="fade-left" duration="fast" delay={0}>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-900">
              <Newspaper className="h-3.5 w-3.5 text-[#685EC9]" />
              <span>Actualidad doobot.ai_</span>
            </div>
            <h2 className="mt-4 font-display font-bold text-[#050547] text-[clamp(32px,3.2vw,48px)] leading-[1.15] tracking-tight">
              Artículos, noticias y casos de aplicación real
            </h2>
            <p className="mt-4 font-normal text-[#555B66] text-[18px] sm:text-[19px] leading-[1.6]">
              Una selección de publicaciones, entrevistas y reportajes en medios del sector que muestran la evolución tecnológica y proyectos con nuestros clientes.
            </p>
          </RevealOnScroll>
        </div>

        {/* Alternating Articles List ('Hélice' / Zigzag) */}
        <div className="mt-16 sm:mt-20 flex flex-col gap-16 sm:gap-20 lg:gap-24">
          {EDITORIAL_ARTICLES.map((article, idx) => {
            const isImageLeft = idx % 2 === 0;

            return (
              <div
                key={article.id}
                className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-14"
              >
                {/* Visual / Image Column */}
                <div
                  className={`lg:col-span-6 ${
                    isImageLeft ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <RevealOnScroll
                    variant={isImageLeft ? "fade-left" : "fade-right"}
                    duration="slow"
                    delay={100}
                  >
                    <div
                      className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-slate-50 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                      onClick={() => {
                        if (article.actionType === "modal" && article.modalContent) {
                          onOpenModal(article.modalContent);
                        } else if (article.actionType === "link" && article.externalUrl) {
                          window.open(article.externalUrl, "_blank", "noopener,noreferrer");
                        }
                      }}
                    >
                      <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-slate-100 flex items-center justify-center p-2 sm:p-4">
                        <img
                          src={article.image}
                          alt={article.imageAlt}
                          className="h-full w-full object-contain rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-[#050547]/0 group-hover:bg-[#050547]/20 transition-colors flex items-center justify-center">
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300 inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs sm:text-sm font-semibold text-[#050547] shadow-lg backdrop-blur-sm">
                            {article.actionType === "modal" ? (
                              <>
                                <Eye className="h-4 w-4 text-[#685EC9]" />
                                <span>Ver documento</span>
                              </>
                            ) : (
                              <>
                                <ExternalLink className="h-4 w-4 text-[#685EC9]" />
                                <span>Abrir enlace</span>
                              </>
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                  </RevealOnScroll>
                </div>

                {/* Text Content Column */}
                <div
                  className={`lg:col-span-6 flex flex-col justify-center ${
                    isImageLeft ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <RevealOnScroll
                    variant={isImageLeft ? "fade-right" : "fade-left"}
                    duration="slow"
                    delay={150}
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        {article.tag && (
                          <span className="inline-block rounded-md bg-indigo-50 border border-indigo-100 px-2.5 py-1 text-xs font-semibold text-[#685EC9]">
                            {article.tag}
                          </span>
                        )}
                        <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-500">
                          {article.source}
                        </span>
                      </div>

                      <h3 className="mt-3.5 font-display font-bold text-[#050547] text-[22px] sm:text-[26px] lg:text-[28px] leading-[1.25] tracking-tight">
                        {article.title}
                      </h3>

                      <p className="mt-4 text-[16px] sm:text-[17px] text-[#555B66] leading-[1.65]">
                        {article.description}
                      </p>

                      <div className="mt-7">
                        {article.actionType === "link" && article.externalUrl ? (
                          <a
                            href={article.externalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl bg-[#050547] px-5 py-3 text-[15px] font-semibold text-white transition-all duration-200 hover:bg-indigo-950 hover:shadow-md active:scale-[0.98]"
                          >
                            <span>{article.ctaText}</span>
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        ) : article.actionType === "modal" && article.modalContent ? (
                          <button
                            type="button"
                            onClick={() => onOpenModal(article.modalContent!)}
                            className="inline-flex items-center gap-2 rounded-xl border-2 border-[#050547] bg-white px-5 py-3 text-[15px] font-semibold text-[#050547] transition-all duration-200 hover:bg-[#050547] hover:text-white hover:shadow-md active:scale-[0.98] cursor-pointer"
                          >
                            {article.modalContent.type === "pdf" ? (
                              <FileText className="h-4 w-4 text-[#685EC9]" />
                            ) : (
                              <Eye className="h-4 w-4 text-[#685EC9]" />
                            )}
                            <span>{article.ctaText}</span>
                          </button>
                        ) : null}
                      </div>
                    </div>
                  </RevealOnScroll>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
