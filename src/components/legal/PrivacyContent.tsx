import { Building2, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { LegalNavigation } from "@/components/legal/LegalNavigation";

export function PrivacyContent() {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-[#F8FAFC] via-[#F3F0FF]/30 to-white">
      <div className="mx-auto max-w-[920px] px-4 sm:px-6 lg:px-8">
        <LegalNavigation currentPath="/politica-de-privacidad/" />

        <div className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-10 shadow-sm space-y-10 text-slate-700">
          {/* Introductory Paragraph */}
          <div className="border-b border-slate-100 pb-8">
            <p className="text-[16.5px] sm:text-[17px] leading-[1.7] text-slate-800 font-normal">
              En <strong className="font-semibold text-slate-900">Customernet Soluciones de Negocio S.L.</strong> nos comprometemos a garantizar la protección y privacidad de los datos personales de nuestros usuarios y clientes, en pleno cumplimiento del Reglamento General de Protección de Datos (RGPD UE 2016/679) y la Ley Orgánica 3/2018 (LOPDGDD).
            </p>
          </div>

          {/* 1. RESPONSABLE DEL TRATAMIENTO */}
          <div className="space-y-4">
            <h2 className="font-display font-bold text-[#050547] text-lg sm:text-xl tracking-tight flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700 text-sm font-bold">1</span>
              RESPONSABLE DEL TRATAMIENTO
            </h2>

            <div className="rounded-2xl border border-indigo-100 bg-indigo-50/40 p-5 sm:p-6 space-y-3.5 text-[15px] sm:text-[16px]">
              <div className="flex items-start gap-3">
                <Building2 className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-900">Identidad del responsable:</span>{" "}
                  <span className="text-slate-800">Customernet Soluciones de Negocio S.L.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-900">C.I.F.:</span>{" "}
                  <span className="text-slate-800">B86071131</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-900">Dirección postal:</span>{" "}
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
                  <span className="font-semibold text-slate-900">Correo electrónico de privacidad:</span>{" "}
                  <a href="mailto:patricia@doobot.ai" className="text-indigo-700 font-medium hover:underline">
                    patricia@doobot.ai
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 2. DATOS OBJETO DE TRATAMIENTO */}
          <div className="space-y-3 border-t border-slate-100 pt-8">
            <h2 className="font-display font-bold text-[#050547] text-lg sm:text-xl tracking-tight flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700 text-sm font-bold">2</span>
              DATOS OBJETO DE TRATAMIENTO
            </h2>
            <p className="text-[16.5px] sm:text-[17px] leading-[1.7] text-slate-600">
              Tratamos los datos estrictamente necesarios que el usuario nos facilita de forma voluntaria al contactar o solicitar demostraciones de nuestros servicios, incluyendo:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-[15px] text-slate-700">
              <li>Datos de identificación y contacto profesional (nombre, dirección de correo electrónico, teléfono, empresa u organización).</li>
              <li>Consultas, comentarios o datos incluidos voluntariamente en mensajes o formularios de contacto.</li>
              <li>Datos técnicos de navegación y preferencias de consentimiento almacenados localmente en el dispositivo.</li>
            </ul>
          </div>

          {/* 3. FINALIDADES DEL TRATAMIENTO */}
          <div className="space-y-3 border-t border-slate-100 pt-8">
            <h2 className="font-display font-bold text-[#050547] text-lg sm:text-xl tracking-tight flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700 text-sm font-bold">3</span>
              FINALIDADES DEL TRATAMIENTO
            </h2>
            <p className="text-[16.5px] sm:text-[17px] leading-[1.7] text-slate-600">
              Los datos personales recabados serán utilizados exclusivamente para las siguientes finalidades:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-[15px] text-slate-700">
              <li>Atender, gestionar y responder las solicitudes de información o demostraciones de nuestras soluciones de IA (Voice Bots, Chatbots, Analytics).</li>
              <li>Mantenimiento y desarrollo de la relación comercial o contractual establecida con clientes y colaboradores.</li>
              <li>Garantizar la seguridad técnica de la plataforma y dar cumplimiento a obligaciones legales aplicables.</li>
            </ul>
          </div>

          {/* 4. BASE JURÍDICA DEL TRATAMIENTO */}
          <div className="space-y-3 border-t border-slate-100 pt-8">
            <h2 className="font-display font-bold text-[#050547] text-lg sm:text-xl tracking-tight flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700 text-sm font-bold">4</span>
              BASE JURÍDICA DE LEGITIMACIÓN
            </h2>
            <p className="text-[16.5px] sm:text-[17px] leading-[1.7] text-slate-600">
              La base legal para el tratamiento de sus datos es:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-[15px] text-slate-700">
              <li><strong>Medidas precontractuales y contractuales:</strong> Para dar respuesta a sus solicitudes de información, demos o contratación de servicios.</li>
              <li><strong>Consentimiento del interesado:</strong> Al remitir formularios de contacto o comunicarse de forma voluntaria.</li>
              <li><strong>Interés legítimo:</strong> Para la gestión de consultas de contacto profesional B2B e información corporativa.</li>
            </ul>
          </div>

          {/* 5. CONSERVACIÓN DE LOS DATOS */}
          <div className="space-y-3 border-t border-slate-100 pt-8">
            <h2 className="font-display font-bold text-[#050547] text-lg sm:text-xl tracking-tight flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700 text-sm font-bold">5</span>
              CONSERVACIÓN DE LOS DATOS
            </h2>
            <p className="text-[16.5px] sm:text-[17px] leading-[1.7] text-slate-600">
              Los datos personales se conservarán durante el tiempo imprescindible para atender su consulta o mientras se mantenga la relación comercial. Una vez finalizada dicha finalidad, los datos se mantendrán debidamente bloqueados durante los plazos legales de prescripción de responsabilidades aplicables.
            </p>
          </div>

          {/* 6. DESTINATARIOS Y ENCARGADOS */}
          <div className="space-y-3 border-t border-slate-100 pt-8">
            <h2 className="font-display font-bold text-[#050547] text-lg sm:text-xl tracking-tight flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700 text-sm font-bold">6</span>
              DESTINATARIOS Y ENCARGADOS DEL TRATAMIENTO
            </h2>
            <p className="text-[16.5px] sm:text-[17px] leading-[1.7] text-slate-600">
              No se cederán datos personales a terceros, salvo obligación legal expresa. Para la prestación técnica del servicio, podemos recurrir a proveedores de infraestructura cloud que actúan como encargados del tratamiento bajo contratos vinculantes que garantizan el cumplimiento de las medidas de seguridad exigidas por el RGPD.
            </p>
          </div>

          {/* 7. DERECHOS DEL USUARIO */}
          <div className="space-y-3 border-t border-slate-100 pt-8">
            <h2 className="font-display font-bold text-[#050547] text-lg sm:text-xl tracking-tight flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700 text-sm font-bold">7</span>
              DERECHOS DE LOS INTERESADOS
            </h2>
            <p className="text-[16.5px] sm:text-[17px] leading-[1.7] text-slate-600">
              Como titular de los datos, puede ejercer en todo momento los siguientes derechos reconocidos por el RGPD:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm pt-2">
              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70">
                <strong className="text-slate-900 block font-semibold mb-0.5">Acceso:</strong> Consultar qué datos personales suyos estamos tratando.
              </div>
              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70">
                <strong className="text-slate-900 block font-semibold mb-0.5">Rectificación:</strong> Solicitar la modificación de datos inexactos o incompletos.
              </div>
              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70">
                <strong className="text-slate-900 block font-semibold mb-0.5">Supresión:</strong> Solicitar la eliminación de sus datos cuando ya no sean necesarios.
              </div>
              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70">
                <strong className="text-slate-900 block font-semibold mb-0.5">Oposición:</strong> Oponerse a que tratemos sus datos para fines determinados.
              </div>
              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70">
                <strong className="text-slate-900 block font-semibold mb-0.5">Limitación:</strong> Solicitar la suspensión temporal del tratamiento de sus datos.
              </div>
              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70">
                <strong className="text-slate-900 block font-semibold mb-0.5">Portabilidad:</strong> Recibir sus datos personales en un formato estructurado y de uso común.
              </div>
            </div>
          </div>

          {/* 8. CÓMO EJERCER SUS DERECHOS Y RECLAMACIÓN */}
          <div className="space-y-3 border-t border-slate-100 pt-8">
            <h2 className="font-display font-bold text-[#050547] text-lg sm:text-xl tracking-tight flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700 text-sm font-bold">8</span>
              CÓMO EJERCER SUS DERECHOS Y RECLAMACIONES
            </h2>
            <p className="text-[16.5px] sm:text-[17px] leading-[1.7] text-slate-600">
              Para ejercer cualquiera de sus derechos, puede enviar una solicitud por escrito acreditando su identidad a la dirección de correo electrónico{" "}
              <a href="mailto:patricia@doobot.ai" className="font-semibold text-indigo-700 hover:underline">
                patricia@doobot.ai
              </a>{" "}
              o por correo postal a Customernet Soluciones de Negocio S.L., Calle Rodríguez Ayuso 4C, 28022 Madrid.
            </p>
            <p className="text-[15px] leading-[1.7] text-slate-600 pt-2">
              Asimismo, si considera que sus derechos no han sido adecuadamente atendidos, tiene derecho a presentar una reclamación ante la autoridad de control competente: la <strong>Agencia Española de Protección de Datos (AEPD)</strong> a través de su sede electrónica en{" "}
              <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-indigo-700 font-medium hover:underline">
                www.aepd.es
              </a>.
            </p>
          </div>

          {/* 9. MEDIDAS DE SEGURIDAD */}
          <div className="space-y-3 border-t border-slate-100 pt-8">
            <h2 className="font-display font-bold text-[#050547] text-lg sm:text-xl tracking-tight flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700 text-sm font-bold">9</span>
              MEDIDAS DE SEGURIDAD
            </h2>
            <p className="text-[16.5px] sm:text-[17px] leading-[1.7] text-slate-600">
              De acuerdo con nuestra Política de Seguridad de la Información inspirada en la norma ISO/IEC 27001, aplicamos medidas técnicas y organizativas rigurosas para proteger la confidencialidad, integridad y disponibilidad de la información frente a accesos no autorizados, pérdida o alteración.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
