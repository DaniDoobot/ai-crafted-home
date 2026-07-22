import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Award } from "lucide-react";

const RECOGNIZED_COMPANIES = [
  { id: "01", name: "Santander", category: "Mejor Empresa del Año" },
  { id: "02", name: "Repsol", category: "Relación Telefónica B2C" },
  { id: "03", name: "Endesa", category: "Relación Presencial y Mejor Tecnología en Gestión de Datos" },
  { id: "04", name: "Movistar Prosegur", category: "Mejor Experiencia de Cliente" },
  { id: "05", name: "Alsa", category: "Innovación Social" },
];

export function AwardContext() {
  return (
    <section
      className="py-[110px] lg:py-[130px]"
      style={{
        background: "linear-gradient(180deg, #F5F3FF 0%, #FFFFFF 100%)",
      }}
    >
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Context Text & Highlighted Block (Cols 1-7) */}
          <div className="lg:col-span-7">
            <RevealOnScroll variant="fade-right" duration="slow" delay={0}>
              <h2 className="font-display font-bold text-[#050547] text-[clamp(32px,3.2vw,48px)] leading-[1.15] max-w-[620px] tracking-tight">
                Un reconocimiento en la edición de referencia del sector
              </h2>
            </RevealOnScroll>

            <RevealOnScroll variant="fade-right" duration="slow" delay={150}>
              <p className="mt-6 font-normal text-[#555B66] max-w-[660px] text-[18px] leading-[1.7]">
                La edición 2025 de los Premios Excelencia Relación con Clientes volvió a reunir a cerca de 600 profesionales en la cita anual de referencia para compañías y proveedores que apuestan por la máxima calidad en sus servicios de atención y experiencia de cliente.
              </p>
            </RevealOnScroll>

            <RevealOnScroll variant="fade-right" duration="slow" delay={250}>
              <p className="mt-4 font-normal text-[#555B66] max-w-[660px] text-[18px] leading-[1.7]">
                En esta misma edición fueron reconocidas compañías líderes de la industria como <strong className="font-semibold text-[#050547]">Santander</strong>, <strong className="font-semibold text-[#050547]">Repsol</strong>, <strong className="font-semibold text-[#050547]">Endesa</strong>, <strong className="font-semibold text-[#050547]">Movistar Prosegur</strong> y <strong className="font-semibold text-[#050547]">Alsa</strong> en sus correspondientes categorías de gestión y servicio.
              </p>
            </RevealOnScroll>

            {/* Highlighted Block: Soft Lavender with Violet Accent Border */}
            <RevealOnScroll variant="fade-right" duration="slow" delay={350}>
              <div className="mt-8 rounded-r-2xl border-l-4 border-[#685EC9] bg-[#F5F3FF] p-6 sm:p-7 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#685EC9] text-white shadow-md">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#685EC9]">
                      Categoría Engagement
                    </span>
                    <p className="mt-1 font-display font-medium text-[#050547] text-[18px] sm:text-[20px] leading-[1.4]">
                      Doobot.ai fue reconocida junto a Boston Medical Group en la categoría <span className="font-bold text-[#685EC9]">Mejor Tecnología — Engagement</span>.
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Editorial Showcase of Recognized Companies & Categories (Cols 8-12) */}
          <div className="lg:col-span-5">
            <RevealOnScroll variant="fade-left" duration="slow" delay={200}>
              <div className="rounded-3xl border border-indigo-100/80 bg-white p-8 sm:p-10 shadow-xl">
                <div className="border-b border-indigo-100 pb-5">
                  <h3 className="font-display font-bold uppercase tracking-wider text-[#050547] text-[15px]">
                    Compañías reconocidas en la misma edición
                  </h3>
                  <p className="mt-1 text-xs text-[#555B66]">
                    Edición 2025 · Premios Excelencia Relación con Clientes
                  </p>
                </div>

                <div className="mt-6 flex flex-col gap-5">
                  {RECOGNIZED_COMPANIES.map((item) => (
                    <div key={item.name} className="flex items-start gap-4 group">
                      <span className="font-mono text-sm font-semibold text-amber-500/80 pt-0.5">
                        {item.id}
                      </span>
                      <div className="flex flex-col">
                        <span className="font-display font-bold text-[#050547] text-[20px] sm:text-[22px] leading-tight">
                          {item.name}
                        </span>
                        <span className="mt-0.5 font-medium text-[#685EC9] text-[14px] sm:text-[15px]">
                          {item.category}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
