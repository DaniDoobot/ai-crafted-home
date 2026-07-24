import { Shield } from "lucide-react";
import { LegalNavigation } from "@/components/legal/LegalNavigation";

export function SecurityContent() {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-[#F8FAFC] via-[#F3F0FF]/30 to-white">
      <div className="mx-auto max-w-[920px] px-4 sm:px-6 lg:px-8">
        <LegalNavigation currentPath="/politica-de-seguridad-de-la-informacion/" />

        <div className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-10 shadow-sm space-y-10 text-slate-700">
          {/* Introductory Paragraph */}
          <div className="border-b border-slate-100 pb-8 space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3.5 py-1 text-xs font-bold text-indigo-900">
              <Shield className="h-3.5 w-3.5 text-indigo-600" />
              <span>Estándar Internacional ISO/IEC 27001:2022</span>
            </div>
            <p className="text-[16.5px] sm:text-[17px] leading-[1.7] text-slate-800 font-normal">
              El presente documento describe la estructura, funcionamiento y compromisos del Sistema de Gestión de Seguridad de la Información (SGSI) de <strong className="font-semibold text-slate-900">Customernet Soluciones de Negocio S.L.</strong>, desarrollado conforme a los requisitos del estándar internacional <strong className="font-semibold text-indigo-900">ISO/IEC 27001:2022</strong>.
            </p>
          </div>

          {/* 1. OBJETIVO */}
          <div className="space-y-3">
            <h2 className="font-display font-bold text-[#050547] text-lg sm:text-xl tracking-tight flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700 text-sm font-bold">1</span>
              OBJETIVO
            </h2>
            <p className="text-[16.5px] sm:text-[17px] leading-[1.7] text-slate-600">
              El propósito de esta política es establecer las directrices y compromisos de la organización para proteger la información crítica, garantizar el cumplimiento legal y contractual, gestionar los riesgos de seguridad asociados a nuestros activos de información y asegurar la continuidad operativa de los sistemas que dan soporte al desarrollo y explotación de software para soluciones de <strong>Voice Bots y Chatbots automatizados</strong>.
            </p>
          </div>

          {/* 2. ALCANCE */}
          <div className="space-y-3 border-t border-slate-100 pt-8">
            <h2 className="font-display font-bold text-[#050547] text-lg sm:text-xl tracking-tight flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700 text-sm font-bold">2</span>
              ALCANCE
            </h2>
            <p className="text-[16.5px] sm:text-[17px] leading-[1.7] text-slate-600">
              Esta política se aplica a todo el personal de Customernet Soluciones de Negocio S.L., así como a colaboradores, herramientas cloud, repositorios, sistemas de autenticación, infraestructuras y proveedores que intervienen directa o indirectamente en la operación y mantenimiento de nuestras plataformas conversacionales de Inteligencia Artificial.
            </p>
          </div>

          {/* 3. PRINCIPIOS FUNDAMENTALES DE SEGURIDAD */}
          <div className="space-y-4 border-t border-slate-100 pt-8">
            <h2 className="font-display font-bold text-[#050547] text-lg sm:text-xl tracking-tight flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700 text-sm font-bold">3</span>
              PRINCIPIOS FUNDAMENTALES
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="p-3.5 rounded-2xl border border-slate-200 bg-slate-50/60">
                <strong className="text-slate-900 block font-semibold mb-1">Confidencialidad:</strong>
                Acceso restringido exclusivamente al personal debidamente autorizado.
              </div>

              <div className="p-3.5 rounded-2xl border border-slate-200 bg-slate-50/60">
                <strong className="text-slate-900 block font-semibold mb-1">Integridad y Calidad:</strong>
                Garantía de exactitud de los datos y respuestas automatizadas sin alterations no autorizadas.
              </div>

              <div className="p-3.5 rounded-2xl border border-slate-200 bg-slate-50/60">
                <strong className="text-slate-900 block font-semibold mb-1">Disponibilidad y Continuidad:</strong>
                Infraestructura resiliente orientada a mantener los servicios activos las 24 horas.
              </div>

              <div className="p-3.5 rounded-2xl border border-slate-200 bg-slate-50/60">
                <strong className="text-slate-900 block font-semibold mb-1">Trazabilidad:</strong>
                Registro y auditoría de eventos de acceso y modificaciones sobre la información.
              </div>

              <div className="p-3.5 rounded-2xl border border-slate-200 bg-slate-50/60">
                <strong className="text-slate-900 block font-semibold mb-1">Mínimo Privilegio:</strong>
                Cada usuario y proceso dispone únicamente de los permisos indispensables para su función.
              </div>

              <div className="p-3.5 rounded-2xl border border-slate-200 bg-slate-50/60">
                <strong className="text-slate-900 block font-semibold mb-1">Zero Trust (Confianza Cero):</strong>
                Verificación y autenticación continua de conexiones, usuarios y dispositivos.
              </div>
            </div>
          </div>

          {/* 4. APLICABILIDAD Y OBLIGACIONES */}
          <div className="space-y-3 border-t border-slate-100 pt-8">
            <h2 className="font-display font-bold text-[#050547] text-lg sm:text-xl tracking-tight flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700 text-sm font-bold">4</span>
              APLICABILIDAD Y CUMPLIMIENTO
            </h2>
            <p className="text-[16.5px] sm:text-[17px] leading-[1.7] text-slate-600">
              Las directrices contenidas en esta política son de obligado cumplimiento para todo el personal y terceros que accedan a los recursos del SGSI. La organización mantiene controles técnicos y organizativos respaldados por la correspondiente Declaración de Aplicabilidad (SoA) del sistema de gestión.
            </p>
          </div>

          {/* 5. DIRECTRICES GENERALES DE ACTUACIÓN */}
          <div className="space-y-3 border-t border-slate-100 pt-8">
            <h2 className="font-display font-bold text-[#050547] text-lg sm:text-xl tracking-tight flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700 text-sm font-bold">5</span>
              DIRECTRICES GENERALES DE SEGURIDAD
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-[15px] text-slate-700">
              <li><strong>Control de Accesos:</strong> Todo acceso a sistemas y entornos de datos personales está sujeto a identificación individual previa y autenticación robusta de doble factor.</li>
              <li><strong>Gestión de Credenciales:</strong> Se prohíbe el uso compartido de cuentas. Las contraseñas se gestionan mediante repositorios seguros con políticas de complejidad.</li>
              <li><strong>Notificación de Incidentes:</strong> Comunicación inmediata de cualquier anomalía o riesgo potencial a través de los canales del responsable de seguridad.</li>
              <li><strong>Protección de Datos en Tránsito y Reposo:</strong> Cifrado de comunicaciones mediante protocolos seguros (TLS/HTTPS) y protección de copias de seguridad.</li>
              <li><strong>Herramientas Autorizadas:</strong> Prohibición estricta de alojar o procesar información corporativa o de clientes en servicios de terceros no homologados.</li>
            </ul>
          </div>

          {/* 6. ENTORNOS CLOUD Y GESTIÓN DE INCIDENTES */}
          <div className="space-y-3 border-t border-slate-100 pt-8">
            <h2 className="font-display font-bold text-[#050547] text-lg sm:text-xl tracking-tight flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700 text-sm font-bold">6</span>
              SEGURIDAD EN INFRAESTRUCTURAS CLOUD Y INCIDENTES
            </h2>
            <p className="text-[16.5px] sm:text-[17px] leading-[1.7] text-slate-600">
              Nuestras soluciones operan en infraestructuras de proveedores Cloud líderes de primer nivel (ej. Google Cloud, Microsoft Azure) que cumplen con certificaciones internacionales de seguridad. Se mantienen procedimientos formales para la detección, contención, análisis y registro de incidentes de seguridad de la información.
            </p>
          </div>

          {/* 7. REVISIÓN Y MEJORA CONTINUA */}
          <div className="space-y-3 border-t border-slate-100 pt-8">
            <h2 className="font-display font-bold text-[#050547] text-lg sm:text-xl tracking-tight flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700 text-sm font-bold">7</span>
              REVISIÓN Y MEJORA CONTINUA
            </h2>
            <p className="text-[16.5px] sm:text-[17px] leading-[1.7] text-slate-600">
              La Política de Seguridad de la Información se revisa formalmente de forma periódica al menos <strong>una vez al año</strong> o ante cualquier modificación sustancial de la tecnología o el marco normativo, garantizando la eficacia y actualización constante de los controles conforme al principio de mejora continua de la norma ISO/IEC 27001.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
