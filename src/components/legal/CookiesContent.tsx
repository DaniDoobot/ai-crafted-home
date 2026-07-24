import { CheckCircle2, Settings } from "lucide-react";
import { LegalNavigation } from "@/components/legal/LegalNavigation";

export function CookiesContent() {
  const handleOpenCookiePreferences = () => {
    // Dispatch custom event to reopen CookieConsent banner if available
    if (typeof window !== "undefined") {
      localStorage.removeItem("doobot_cookie_consent");
      window.dispatchEvent(new Event("storage"));
      window.location.reload();
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-[#F8FAFC] via-[#F3F0FF]/30 to-white">
      <div className="mx-auto max-w-[920px] px-4 sm:px-6 lg:px-8">
        <LegalNavigation currentPath="/politica-de-cookies/" />

        <div className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-10 shadow-sm space-y-10 text-slate-700">
          {/* Introductory Paragraph */}
          <div className="border-b border-slate-100 pb-8">
            <p className="text-[16.5px] sm:text-[17px] leading-[1.7] text-slate-800 font-normal">
              En el sitio web de <strong className="font-semibold text-slate-900">Customernet Soluciones de Negocio S.L.</strong> (www.doobot.ai) utilizamos únicamente tecnologías de almacenamiento local y cookies técnicas necesarias para garantizar el correcto funcionamiento de la página web, el guardado de sus preferencias de privacidad y una navegación segura y fluida.
            </p>
          </div>

          {/* 1. ¿QUÉ ES UNA COOKIE Y PARA QUÉ SIRVE? */}
          <div className="space-y-3">
            <h2 className="font-display font-bold text-[#050547] text-lg sm:text-xl tracking-tight flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700 text-sm font-bold">1</span>
              ¿QUÉ ES UNA COOKIE?
            </h2>
            <p className="text-[16.5px] sm:text-[17px] leading-[1.7] text-slate-600">
              Una cookie es un pequeño archivo de texto que se almacena en su navegador cuando visita determinados sitios web. Su función principal es recordar información técnica o preferencias de navegación para facilitar el uso posterior de la web y mejorar la seguridad.
            </p>
          </div>

          {/* 2. TECNOLOGÍAS UTILIZADAS EN ESTE SITIO WEB */}
          <div className="space-y-3 border-t border-slate-100 pt-8">
            <h2 className="font-display font-bold text-[#050547] text-lg sm:text-xl tracking-tight flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700 text-sm font-bold">2</span>
              TECNOLOGÍAS REALES UTILIZADAS EN WWW.DOOBOT.AI
            </h2>
            <p className="text-[16.5px] sm:text-[17px] leading-[1.7] text-slate-600">
              Actualmente, www.doobot.ai utiliza almacenamiento técnico imprescindible en el navegador (<strong>localStorage</strong>) con el identificador <code className="bg-slate-100 px-2 py-0.5 rounded text-indigo-700 font-mono text-xs">doobot_cookie_consent</code> para registrar si ha aceptado o configurado su preferencia de privacidad.
            </p>
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-5 space-y-2 text-sm text-emerald-900">
              <div className="flex items-center gap-2 font-bold text-emerald-950">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                <span>Sin cookies publicitarias ni perfilado</span>
              </div>
              <p className="text-emerald-800 leading-relaxed">
                Este sitio web <strong>no utiliza cookies de publicidad comportamental, ni redes de anuncios de terceros, ni perfiles publicitarios</strong>.
              </p>
            </div>
          </div>

          {/* 3. CLASIFICACIÓN Y CATEGORÍAS DE COOKIES */}
          <div className="space-y-4 border-t border-slate-100 pt-8">
            <h2 className="font-display font-bold text-[#050547] text-lg sm:text-xl tracking-tight flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700 text-sm font-bold">3</span>
              CATEGORÍAS DE COOKIES
            </h2>

            <div className="grid grid-cols-1 gap-4 text-sm">
              <div className="p-4 rounded-2xl border border-indigo-100 bg-indigo-50/30">
                <h3 className="font-bold text-indigo-950 text-base mb-1">1. Cookies Estrictamente Necesarias (Propias)</h3>
                <p className="text-slate-700 leading-relaxed">
                  Son esenciales para permitir la navegación por la web y recordar sus elecciones de privacidad. No pueden desactivarse ya que la web no funcionaría adecuadamente sin ellas.
                </p>
              </div>

              <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50">
                <h3 className="font-bold text-slate-800 text-base mb-1">2. Cookies Opcionales / Análisis (Si aplica)</h3>
                <p className="text-slate-600 leading-relaxed">
                  Solo se activan en caso de requerir mediciones técnicas de rendimiento de la página y siempre sujetas al consentimiento expreso previo del usuario.
                </p>
              </div>
            </div>
          </div>

          {/* 4. GESTIÓN Y CONFIGURACIÓN DEL CONSENTIMIENTO */}
          <div className="space-y-4 border-t border-slate-100 pt-8">
            <h2 className="font-display font-bold text-[#050547] text-lg sm:text-xl tracking-tight flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700 text-sm font-bold">4</span>
              CONFIGURAR O REVISAR SUS PREFERENCIAS
            </h2>
            <p className="text-[16.5px] sm:text-[17px] leading-[1.7] text-slate-600">
              Puede reabrir en cualquier momento el panel de configuración de privacidad o restablecer sus preferencias registradas utilizando el siguiente botón:
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={handleOpenCookiePreferences}
                className="inline-flex items-center gap-2.5 rounded-full bg-[#050547] px-6 py-3 text-sm font-bold text-white shadow-sm transition-transform hover:scale-[1.02] hover:bg-indigo-900"
              >
                <Settings className="h-4 w-4 text-cyan-300" />
                <span>Restablecer preferencias de privacidad y cookies</span>
              </button>
            </div>
          </div>

          {/* 5. GESTIÓN DESDE LOS NAVEGADORES WEB */}
          <div className="space-y-3 border-t border-slate-100 pt-8">
            <h2 className="font-display font-bold text-[#050547] text-lg sm:text-xl tracking-tight flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700 text-sm font-bold">5</span>
              GESTIÓN DESDE EL NAVEGADOR
            </h2>
            <p className="text-[16.5px] sm:text-[17px] leading-[1.7] text-slate-600">
              Además de las opciones proporcionadas en nuestra web, puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración del navegador que esté utilizando:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm text-indigo-700 font-medium">
              <li>
                <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Google Chrome
                </a>
              </li>
              <li>
                <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastreo-preferencias" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Apple Safari
                </a>
              </li>
              <li>
                <a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Microsoft Edge
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
