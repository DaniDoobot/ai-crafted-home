import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Calendar, MapPin, Building2, Users, ShieldCheck } from "lucide-react";

export function AwardShowcase() {
  return (
    <section
      className="py-[110px] lg:py-[130px]"
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #F5F3FF 100%)",
      }}
    >
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <RevealOnScroll variant="fade-left" duration="fast" delay={0}>
            <h2 className="font-display font-semibold text-[#050547] text-[clamp(32px,3.2vw,48px)] leading-[1.15] tracking-tight">
              El Momento del Reconocimiento
            </h2>
          </RevealOnScroll>
          <RevealOnScroll variant="fade-left" duration="fast" delay={150}>
            <p className="mt-4 font-normal text-[#555B66] max-w-[760px] mx-auto text-[18px] sm:text-[19px] leading-[1.6]">
              La Gala de Entrega de los Premios Excelencia Relación con Clientes 2025 celebró las mejores prácticas del sector.
            </p>
          </RevealOnScroll>
        </div>

        {/* Composition Grid (Main Photo 780px + Right Column 440px) */}
        <div className="mt-14 flex flex-col lg:flex-row items-stretch justify-between gap-8 lg:gap-10">
          {/* Main Photo: Gala Delivery in Kinépolis (Width ~780px) */}
          <div className="w-full lg:w-[60%] xl:w-[780px]">
            <RevealOnScroll variant="fade-left" duration="slow" delay={100} className="h-full">
              <div className="relative h-full min-h-[420px] sm:min-h-[480px] overflow-hidden rounded-3xl border border-border/60 bg-slate-900 shadow-xl">
                <img
                  src="/doobot/Premio-Excelencia-doobot.ai_.jpg"
                  alt="Entrega del Premio Mejor Tecnología a doobot.ai y Boston Medical Group"
                  loading="lazy"
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent p-6 sm:p-8 text-white">
                  <span className="inline-block rounded-md bg-amber-400 px-3 py-1 text-xs font-bold text-slate-950 uppercase tracking-wider">
                    Gala de Entrega 2025
                  </span>
                  <p className="mt-3 text-base sm:text-lg font-medium text-slate-100 leading-snug">
                    Entrega del galardón a los equipos de Doobot.ai y Boston Medical Group en el escenario principal.
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Team Award Photo + Facts Box (Width ~440px) */}
          <div className="flex w-full flex-col justify-between gap-6 lg:w-[40%] xl:w-[440px]">
            {/* Secondary Photo: Awarded Team */}
            <RevealOnScroll variant="fade-right" duration="slow" delay={200}>
              <div className="relative h-[270px] w-full overflow-hidden rounded-3xl border border-border/60 bg-slate-900 shadow-md">
                <img
                  src="/doobot/Premio-1024x768.jpeg"
                  alt="Equipo galardonado recibiendo el Premio Mejor Tecnología 2025"
                  loading="lazy"
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent p-5 flex items-end">
                  <p className="text-sm font-semibold text-white">
                    Equipo galardonado · Categoría Engagement
                  </p>
                </div>
              </div>
            </RevealOnScroll>

            {/* Gala Data Card Box */}
            <RevealOnScroll variant="fade-right" duration="slow" delay={300} className="flex-1">
              <div className="h-full rounded-3xl border border-indigo-100 bg-white p-7 shadow-md flex flex-col justify-center">
                <h3 className="font-display font-bold text-[#050547] text-[22px] leading-tight">
                  Datos Oficiales de la Gala
                </h3>
                <dl className="mt-5 flex flex-col gap-4">
                  <div className="flex items-center gap-3.5">
                    <Calendar className="h-5 w-5 text-amber-500 shrink-0" />
                    <div>
                      <dt className="sr-only">Fecha</dt>
                      <dd className="font-semibold text-[#050547] text-[16px] sm:text-[17px]">
                        6 de noviembre de 2025
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <MapPin className="h-5 w-5 text-amber-500 shrink-0" />
                    <div>
                      <dt className="sr-only">Lugar</dt>
                      <dd className="text-[#555B66] text-[16px] sm:text-[17px]">
                        Kinépolis Madrid
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <Building2 className="h-5 w-5 text-amber-500 shrink-0" />
                    <div>
                      <dt className="sr-only">Organización</dt>
                      <dd className="text-[#555B66] text-[16px] sm:text-[17px]">
                        Organizada por AEERC, iFAES e Izo
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <Users className="h-5 w-5 text-amber-500 shrink-0" />
                    <div>
                      <dt className="sr-only">Asistencia</dt>
                      <dd className="text-[#555B66] text-[16px] sm:text-[17px]">
                        Cerca de 600 profesionales del sector
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 pt-3 border-t border-indigo-100">
                    <ShieldCheck className="h-5 w-5 text-amber-500 shrink-0" />
                    <div>
                      <dt className="sr-only">Reconocimiento</dt>
                      <dd className="font-bold text-[#050547] text-[16px] sm:text-[17px]">
                        Reconocimiento conjunto a Doobot.ai y Boston Medical Group
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
