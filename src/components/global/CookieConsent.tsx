import { useState, useEffect } from "react";
import {
  COOKIE_CONSENT_KEY,
  COOKIE_PREFERENCES_KEY,
  DEFAULT_PREFERENCES,
  type CookiePreferences,
} from "@/config/cookies";
import { Shield, Settings, X, Check } from "lucide-react";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showConfig, setShowConfig] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(DEFAULT_PREFERENCES);

  useEffect(() => {
    try {
      const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
      if (!consent) {
        setIsVisible(true);
      }
    } catch {
      // In case localStorage is blocked by browser
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    saveConsent("accepted", allAccepted);
  };

  const handleRejectOptional = () => {
    const onlyNecessary: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    saveConsent("rejected", onlyNecessary);
  };

  const handleSaveConfig = () => {
    saveConsent("configured", preferences);
  };

  const saveConsent = (state: string, prefs: CookiePreferences) => {
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, state);
      localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(prefs));
    } catch {
      // Storage fallback
    }
    setIsVisible(false);
    setShowConfig(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* ── Main Fixed Bottom Banner ── */}
      {!showConfig && (
        <div
          role="region"
          aria-label="Consentimiento de cookies"
          className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-[460px] z-40 rounded-2xl border border-indigo-100 bg-white p-5 sm:p-6 shadow-2xl transition-all duration-300"
        >
          <div className="flex items-start gap-3.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-[#685EC9]">
              <Shield className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-[#050547] text-base sm:text-lg">
                Tu privacidad es importante
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm font-normal text-[#555B66] leading-relaxed">
                Utilizamos cookies necesarias para el funcionamiento del sitio y, con tu permiso, cookies adicionales para mejorar la experiencia. Consulta nuestra{" "}
                <a
                  href="/politica-de-cookies/"
                  className="font-medium text-[#685EC9] underline hover:text-[#050547]"
                >
                  política de cookies
                </a>.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <button
              onClick={handleAcceptAll}
              className="flex-1 rounded-xl bg-[#050547] px-4 py-2.5 text-xs sm:text-sm font-semibold text-white transition-colors hover:bg-indigo-900"
            >
              Aceptar todas
            </button>

            <button
              onClick={handleRejectOptional}
              className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100"
            >
              Rechazar opcionales
            </button>

            <button
              onClick={() => setShowConfig(true)}
              aria-label="Configurar preferencias de cookies"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 p-2.5 text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900"
            >
              <Settings className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* ── Configuration Preferences Modal ── */}
      {showConfig && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 backdrop-blur-sm p-4">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-modal-title"
            className="w-full max-w-lg rounded-3xl border border-indigo-100 bg-white p-6 sm:p-8 shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-indigo-100 pb-4">
              <h3 id="cookie-modal-title" className="font-display font-bold text-[#050547] text-xl">
                Configuración de Cookies
              </h3>
              <button
                onClick={() => setShowConfig(false)}
                className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-5 flex flex-col gap-4">
              {/* Necessary */}
              <div className="flex items-start justify-between gap-4 rounded-2xl bg-slate-50 p-4 border border-slate-100">
                <div>
                  <span className="font-display font-bold text-[#050547] text-sm sm:text-base">
                    Cookies Necesarias
                  </span>
                  <p className="mt-0.5 text-xs text-[#555B66]">
                    Imprescindibles para el funcionamiento técnico y la seguridad del sitio web. No se pueden desactivar.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 rounded-md bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-800 shrink-0 mt-1">
                  <Check className="h-3.5 w-3.5" />
                  Siempre activas
                </span>
              </div>

              {/* Analytics */}
              <div className="flex items-start justify-between gap-4 rounded-2xl border border-indigo-100 p-4">
                <div>
                  <span className="font-display font-bold text-[#050547] text-sm sm:text-base">
                    Cookies Analíticas
                  </span>
                  <p className="mt-0.5 text-xs text-[#555B66]">
                    Nos ayudan a entender de forma anónima cómo navegan los usuarios para optimizar el contenido.
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) =>
                      setPreferences({ ...preferences, analytics: e.target.checked })
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#685EC9]"></div>
                </label>
              </div>

              {/* Marketing */}
              <div className="flex items-start justify-between gap-4 rounded-2xl border border-indigo-100 p-4">
                <div>
                  <span className="font-display font-bold text-[#050547] text-sm sm:text-base">
                    Cookies de Marketing
                  </span>
                  <p className="mt-0.5 text-xs text-[#555B66]">
                    Permiten mostrar información y contenidos relevantes adaptados a los intereses del usuario.
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) =>
                      setPreferences({ ...preferences, marketing: e.target.checked })
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#685EC9]"></div>
                </label>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3 border-t border-indigo-100 pt-4">
              <button
                onClick={() => setShowConfig(false)}
                className="rounded-xl border border-slate-200 px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Cancelar
              </button>
              <button
                onClick={handleSaveConfig}
                className="rounded-xl bg-[#050547] px-5 py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-indigo-900"
              >
                Guardar preferencias
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
