import { Building2, Mail, MapPin, Phone, Shield } from "lucide-react";

export function LegalContent() {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-[#F8FAFC] via-[#F3F0FF]/30 to-white">
      <div className="mx-auto max-w-[860px] px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-10 shadow-sm space-y-10 text-slate-700">
          {/* Introductory Paragraph */}
          <div className="border-b border-slate-100 pb-8">
            <p className="text-[17px] sm:text-[18px] leading-[1.8] text-slate-800 font-normal">
              El presente Aviso Legal regula las condiciones generales de acceso y utilización del sitio web accesible en la dirección{" "}
              <a href="https://www.doobot.ai" className="font-semibold text-indigo-700 hover:underline">
                www.doobot.ai
              </a>
              , que <strong className="font-semibold text-slate-900">Customernet Soluciones de Negocio S.L.</strong> (en adelante La Empresa) pone a disposición de los usuarios de Internet.
            </p>
          </div>

          {/* 1.- TITULARIDAD DEL SITIO WEB */}
          <div className="space-y-4">
            <h2 className="font-display font-bold text-[#050547] text-xl sm:text-2xl tracking-tight flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700 text-sm font-bold">1</span>
              TITULARIDAD DEL SITIO WEB
            </h2>

            <div className="rounded-2xl border border-indigo-100 bg-indigo-50/40 p-5 sm:p-6 space-y-3.5 text-[15px] sm:text-[16px]">
              <div className="flex items-start gap-3">
                <Building2 className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-900">Nombre del titular:</span>{" "}
                  <span className="text-slate-800">Customernet Soluciones de Negocio S.L.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-900">Domicilio social:</span>{" "}
                  <span className="text-slate-800">Calle Rodríguez Ayuso 4C, 28022 Madrid</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-900">Teléfono de contacto:</span>{" "}
                  <a href="tel:661588446" className="text-indigo-700 font-medium hover:underline">
                    661 588 446
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-900">Correo electrónico:</span>{" "}
                  <a href="mailto:patricia@doobot.ai" className="text-indigo-700 font-medium hover:underline">
                    patricia@doobot.ai
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 2.- OBJETO Y ÁMBITO DE APLICACIÓN */}
          <div className="space-y-3 border-t border-slate-100 pt-8">
            <h2 className="font-display font-bold text-[#050547] text-xl sm:text-2xl tracking-tight flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700 text-sm font-bold">2</span>
              OBJETO Y ÁMBITO DE APLICACIÓN
            </h2>
            <p className="text-[16px] leading-[1.75] text-slate-600">
              El presente sitio web facilita a los usuarios el acceso a información sobre los servicios, proyectos y soluciones de Inteligencia Artificial Generativa, Voice Bots, Chatbots y Analytics desarrollados por Customernet Soluciones de Negocio S.L. El acceso a la web implica la aceptación sin reservas de todas las disposiciones incluidas en este Aviso Legal.
            </p>
          </div>

          {/* 3.- ACCESO Y USO DEL SITIO WEB */}
          <div className="space-y-3 border-t border-slate-100 pt-8">
            <h2 className="font-display font-bold text-[#050547] text-xl sm:text-2xl tracking-tight flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700 text-sm font-bold">3</span>
              ACCESO Y USO DEL SITIO WEB
            </h2>
            <p className="text-[16px] leading-[1.75] text-slate-600">
              El acceso a la página web por parte de los usuarios tiene carácter libre y gratuito. El usuario se compromete a hacer un uso adecuado, responsable y lícito de los contenidos y servicios facilitados en www.doobot.ai de conformidad con la legislación aplicable, las buenas costumbres y el orden público.
            </p>
          </div>

          {/* 4.- CONTENIDOS Y PROPIEDAD INTELECTUAL E INDUSTRIAL */}
          <div className="space-y-3 border-t border-slate-100 pt-8">
            <h2 className="font-display font-bold text-[#050547] text-xl sm:text-2xl tracking-tight flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700 text-sm font-bold">4</span>
              CONTENIDOS Y PROPIEDAD INTELECTUAL E INDUSTRIAL
            </h2>
            <p className="text-[16px] leading-[1.75] text-slate-600">
              Todos los contenidos del sitio web, incluyendo a título enunciativo textos, marcas, logotipos, imágenes, elementos gráficos, tecnología, software, códigos fuente y diseños audiovisuales, son propiedad exclusiva de Customernet Soluciones de Negocio S.L. o de terceros que han autorizado expresamente su inclusión. Queda prohibida su reproducción, distribución o transformación sin la previa autorización por escrito del titular.
            </p>
          </div>

          {/* 5.- EXCLUSIÓN DE GARANTÍAS Y RESPONSABILIDAD */}
          <div className="space-y-3 border-t border-slate-100 pt-8">
            <h2 className="font-display font-bold text-[#050547] text-xl sm:text-2xl tracking-tight flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700 text-sm font-bold">5</span>
              EXCLUSIÓN DE GARANTÍAS Y RESPONSABILIDAD
            </h2>
            <p className="text-[16px] leading-[1.75] text-slate-600">
              La Empresa no se hace responsable, en ningún caso, de los daños o perjuicios de cualquier naturaleza que pudieran ocasionarse por el uso inadecuado de la web, indisponibilidad temporal del sitio o transmisión de virus u otros elementos lesivos, a pesar de haber adoptado todas las medidas tecnológicas preventivas y de seguridad necesarias.
            </p>
          </div>

          {/* 6.- ENLACES A TERCEROS */}
          <div className="space-y-3 border-t border-slate-100 pt-8">
            <h2 className="font-display font-bold text-[#050547] text-xl sm:text-2xl tracking-tight flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700 text-sm font-bold">6</span>
              ENLACES A TERCEROS (LINKS)
            </h2>
            <p className="text-[16px] leading-[1.75] text-slate-600">
              En caso de que en el sitio web se incluyan enlaces a portales de terceros, La Empresa no ejercerá ningún tipo de control ni asumirá responsabilidad alguna sobre la información, calidad o accesibilidad de dichos sitios web ajenos.
            </p>
          </div>

          {/* 7.- PROTECCIÓN DE DATOS PERSONALES */}
          <div className="space-y-3 border-t border-slate-100 pt-8">
            <h2 className="font-display font-bold text-[#050547] text-xl sm:text-2xl tracking-tight flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700 text-sm font-bold">7</span>
              PROTECCIÓN DE DATOS Y COOKIES
            </h2>
            <p className="text-[16px] leading-[1.75] text-slate-600">
              Customernet Soluciones de Negocio S.L. garantiza el pleno cumplimiento de la normativa europea de protección de datos (RGPD UE 2016/679) y la Ley Orgánica 3/2018 (LOPDGDD). Para conocer los detalles sobre el tratamiento de sus datos de carácter personal y la política de cookies utilizada en este portal, puede consultar nuestros apartados correspondientes en el pie de página.
            </p>
          </div>

          {/* 8.- LEGISLACIÓN APLICABLE Y JURISDICCIÓN */}
          <div className="space-y-3 border-t border-slate-100 pt-8">
            <h2 className="font-display font-bold text-[#050547] text-xl sm:text-2xl tracking-tight flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700 text-sm font-bold">8</span>
              LEGISLACIÓN APLICABLE Y JURISDICCIÓN
            </h2>
            <p className="text-[16px] leading-[1.75] text-slate-600">
              El presente Aviso Legal se rige en todos sus extremos por la legislación española vigente. Para cualquier discrepancia o litigio que pudiera derivarse del uso de www.doobot.ai, las partes se someten a la jurisdicción de los Juzgados y Tribunales de Madrid capital, con renuncia expresa a cualquier otro fuero que pudiera corresponderles.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
