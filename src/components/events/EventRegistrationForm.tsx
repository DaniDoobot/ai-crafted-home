import { useState } from "react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { submitEventRegistration, type EventRegistrationPayload, type EventRegistrationStatus } from "@/services/eventRegistration";
import { AlertCircle, ArrowRight, CheckCircle2, Info, Loader2, Phone } from "lucide-react";

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  company?: string;
  comments?: string;
  privacyAccepted?: string;
}

export interface EventRegistrationFormProps {
  id?: string;
  badgeText?: string;
  title?: string;
  subtitle?: string;
}

export function EventRegistrationForm({
  id = "inscripcion",
  badgeText = "Inscripción al taller",
  title = "Reserva tu plaza presencial",
  subtitle = "Plazas limitadas por aforo en sala. Completa tus datos para tramitar tu solicitud de asistencia para el 24 de septiembre en Madrid.",
}: EventRegistrationFormProps) {
  const fId = (fieldName: string) => `${id}-${fieldName}`;
  const [formData, setFormData] = useState<EventRegistrationPayload>({
    fullName: "",
    phone: "",
    email: "",
    company: "",
    comments: "",
    privacyAccepted: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<EventRegistrationStatus | "idle">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 3) {
      errs.fullName = "Por favor, introduce tu nombre y apellidos (mínimo 3 caracteres).";
    } else if (formData.fullName.length > 100) {
      errs.fullName = "El nombre no puede superar los 100 caracteres.";
    }

    const phoneClean = formData.phone.trim();
    const phoneRegex = /^[+0-9\s\-().]{8,20}$/;
    if (!phoneClean) {
      errs.phone = "Por favor, introduce un teléfono de contacto.";
    } else if (!phoneRegex.test(phoneClean) || phoneClean.replace(/\D/g, "").length < 8) {
      errs.phone = "Por favor, introduce un número de teléfono válido (mínimo 8 dígitos).";
    }

    const emailClean = formData.email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailClean) {
      errs.email = "Por favor, introduce tu dirección de email.";
    } else if (!emailRegex.test(emailClean)) {
      errs.email = "Por favor, introduce un formato de email válido.";
    } else if (emailClean.length > 120) {
      errs.email = "El email no puede superar los 120 caracteres.";
    }

    if (!formData.company.trim() || formData.company.trim().length < 2) {
      errs.company = "Por favor, indica el nombre de tu empresa u organización.";
    } else if (formData.company.length > 100) {
      errs.company = "El nombre de empresa no puede superar los 100 caracteres.";
    }

    if (formData.comments && formData.comments.length > 1000) {
      errs.comments = "Los comentarios no pueden superar los 1.000 caracteres.";
    }

    if (!formData.privacyAccepted) {
      errs.privacyAccepted = "Debes aceptar la Política de Privacidad para reservar tu plaza.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setSubmissionStatus("idle");

    try {
      const res = await submitEventRegistration(formData);
      setSubmissionStatus(res.status);
      setStatusMessage(res.message);
    } catch {
      setSubmissionStatus("error");
      setStatusMessage("Se produjo un error al procesar tu solicitud. Por favor, inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id={id} className="relative py-12 sm:py-16 lg:py-20 bg-[#030A1D] text-white scroll-mt-24">
      {/* Background Radial Glows */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full opacity-20 blur-[150px]"
        style={{
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.45) 0%, rgba(99, 102, 241, 0.3) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <RevealOnScroll variant="fade-up" duration="fast" delay={0}>
            <span className="inline-block rounded-full bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cyan-300">
              {badgeText}
            </span>
            <h2 className="mt-4 font-display font-bold text-white text-[clamp(28px,3.8vw,48px)] leading-[1.12] tracking-tight">
              {title}
            </h2>
            <p className="mt-3 font-normal text-slate-300 text-[17px] sm:text-[19px] leading-[1.55] max-w-2xl mx-auto">
              {subtitle}
            </p>
          </RevealOnScroll>
        </div>

        {/* Form Container Card */}
        <div className="mt-8 sm:mt-10">
          <RevealOnScroll variant="fade-up" duration="medium" delay={100}>
            <div className="rounded-3xl border border-white/15 bg-slate-900/85 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
              
              {/* Fallback Notice: Disabled Mode */}
              {submissionStatus === "registration_disabled" && (
                <div className="mb-8 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-5 sm:p-6 text-slate-200">
                  <div className="flex items-start gap-3.5">
                    <Info className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                    <div className="space-y-2">
                      <h4 className="font-bold text-white text-base">
                        Registro online disponible próximamente
                      </h4>
                      <p className="text-sm text-slate-200 leading-relaxed">
                        El registro online estará disponible próximamente.
                      </p>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        Para cualquier consulta puedes contactar con nuestro asistente telefónico en el{" "}
                        <a
                          href="tel:+34911674317"
                          className="font-bold text-cyan-300 underline underline-offset-2 hover:text-cyan-200 transition-colors inline-flex items-center gap-1"
                        >
                          <Phone className="h-3.5 w-3.5 inline text-cyan-400" />
                          +34 911 67 43 17
                        </a>
                        .
                      </p>
                      <p className="text-xs text-slate-400 pt-1">
                        Este teléfono conecta con el asistente telefónico de doobot.ai, que puede recoger tu consulta y gestionar la puesta en contacto con el equipo comercial.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Success Notice */}
              {submissionStatus === "success" && (
                <div className="mb-8 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-slate-200 text-center">
                  <CheckCircle2 className="h-10 w-10 text-emerald-400 mx-auto mb-2" />
                  <h4 className="font-bold text-white text-lg">
                    ¡Inscripción recibida!
                  </h4>
                  <p className="mt-1 text-sm text-slate-300">
                    {statusMessage || "Hemos recibido correctamente tu solicitud de inscripción para el taller. Nuestro equipo comercial te responderá en breve por email y WhatsApp."}
                  </p>
                </div>
              )}

              {/* Error Notice */}
              {submissionStatus === "error" && (
                <div className="mb-8 rounded-2xl border border-red-500/30 bg-red-500/10 p-5 text-slate-200 flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-red-200">{statusMessage}</p>
                </div>
              )}

              {/* Actual Form */}
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* 1. Nombre y apellidos */}
                  <div>
                    <label htmlFor={fId("fullName")} className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Nombre y apellidos <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      id={fId("fullName")}
                      name="fullName"
                      autoComplete="name"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                      }}
                      placeholder="Ej. Ana García López"
                      maxLength={100}
                      aria-invalid={!!errors.fullName}
                      aria-describedby={errors.fullName ? fId("fullName-error") : undefined}
                      className={`w-full rounded-xl border bg-slate-950/80 px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-colors ${
                        errors.fullName
                          ? "border-red-500/80 focus:ring-red-500/50"
                          : "border-white/10 focus:border-cyan-400 focus:ring-cyan-500/30"
                      }`}
                    />
                    {errors.fullName && (
                      <p id={fId("fullName-error")} className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* 2. Teléfono */}
                  <div>
                    <label htmlFor={fId("phone")} className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Teléfono <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="tel"
                      id={fId("phone")}
                      name="phone"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: undefined });
                      }}
                      placeholder="+34 600 000 000"
                      maxLength={25}
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? fId("phone-error") : undefined}
                      className={`w-full rounded-xl border bg-slate-950/80 px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-colors ${
                        errors.phone
                          ? "border-red-500/80 focus:ring-red-500/50"
                          : "border-white/10 focus:border-cyan-400 focus:ring-cyan-500/30"
                      }`}
                    />
                    {errors.phone && (
                      <p id={fId("phone-error")} className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* 3. Email */}
                  <div>
                    <label htmlFor={fId("email")} className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      id={fId("email")}
                      name="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      placeholder="nombre@ejemplo.com"
                      maxLength={120}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? fId("email-error") : undefined}
                      className={`w-full rounded-xl border bg-slate-950/80 px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-colors ${
                        errors.email
                          ? "border-red-500/80 focus:ring-red-500/50"
                          : "border-white/10 focus:border-cyan-400 focus:ring-cyan-500/30"
                      }`}
                    />
                    {errors.email && (
                      <p id={fId("email-error")} className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* 4. Empresa */}
                  <div>
                    <label htmlFor={fId("company")} className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Empresa <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      id={fId("company")}
                      name="company"
                      autoComplete="organization"
                      value={formData.company}
                      onChange={(e) => {
                        setFormData({ ...formData, company: e.target.value });
                        if (errors.company) setErrors({ ...errors, company: undefined });
                      }}
                      placeholder="Ej. Contact Solutions S.L."
                      maxLength={100}
                      aria-invalid={!!errors.company}
                      aria-describedby={errors.company ? fId("company-error") : undefined}
                      className={`w-full rounded-xl border bg-slate-950/80 px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-colors ${
                        errors.company
                          ? "border-red-500/80 focus:ring-red-500/50"
                          : "border-white/10 focus:border-cyan-400 focus:ring-cyan-500/30"
                      }`}
                    />
                    {errors.company && (
                      <p id={fId("company-error")} className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                        {errors.company}
                      </p>
                    )}
                  </div>
                </div>

                {/* 5. Comentarios (Opcional) */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor={fId("comments")} className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                      Comentarios <span className="text-slate-400 font-normal normal-case">(opcional)</span>
                    </label>
                    <span className="text-[11px] text-slate-400">
                      {(formData.comments || "").length} / 1000
                    </span>
                  </div>
                  <textarea
                    id={fId("comments")}
                    name="comments"
                    rows={3}
                    value={formData.comments || ""}
                    onChange={(e) => {
                      setFormData({ ...formData, comments: e.target.value });
                      if (errors.comments) setErrors({ ...errors, comments: undefined });
                    }}
                    placeholder="¿Hay algo que quieras indicarnos?"
                    maxLength={1000}
                    aria-invalid={!!errors.comments}
                    aria-describedby={errors.comments ? fId("comments-error") : undefined}
                    className={`w-full rounded-xl border bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-colors resize-y ${
                      errors.comments
                        ? "border-red-500/80 focus:ring-red-500/50"
                        : "border-white/10 focus:border-cyan-400 focus:ring-cyan-500/30"
                    }`}
                  />
                  {errors.comments && (
                    <p id={fId("comments-error")} className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                      {errors.comments}
                    </p>
                  )}
                </div>

                {/* Privacy Checkbox */}
                <div className="pt-2">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      id={fId("privacyAccepted")}
                      name="privacyAccepted"
                      checked={formData.privacyAccepted}
                      onChange={(e) => {
                        setFormData({ ...formData, privacyAccepted: e.target.checked });
                        if (errors.privacyAccepted) setErrors({ ...errors, privacyAccepted: undefined });
                      }}
                      className="mt-1 h-4 w-4 rounded border-white/20 bg-slate-950 text-cyan-500 focus:ring-cyan-500/30"
                    />
                    <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      He leído y acepto la{" "}
                      <a
                        href="/politica-de-privacidad/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-300 underline underline-offset-2 hover:text-cyan-200 transition-colors"
                      >
                        Política de Privacidad
                      </a>
                      . <span className="text-cyan-400">*</span>
                    </span>
                  </label>
                  {errors.privacyAccepted && (
                    <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1 ml-7">
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                      {errors.privacyAccepted}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 px-9 py-4 text-base font-bold text-white shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02] hover:shadow-cyan-500/35 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        <span>Procesando reserva...</span>
                      </>
                    ) : (
                      <>
                        <span>Reservar mi plaza</span>
                        <ArrowRight className="h-5 w-5" />
                      </>
                    )}
                  </button>
                  <p className="mt-3 text-xs text-slate-400">
                    Asistencia presencial gratuita con aforo limitado previa confirmación por el equipo organizador.
                  </p>
                </div>
              </form>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
