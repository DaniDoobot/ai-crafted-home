import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { User, Bot, UserCheck, ArrowRight, CheckCircle2 } from "lucide-react";

export function WhatsAppHumanHandoff() {
  return (
    <section className="py-[95px] lg:py-[110px] bg-[#F8F7FF] border-y border-indigo-100/60">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-[850px] text-center">
          <RevealOnScroll variant="fade-left" duration="fast" delay={0}>
            <span className="inline-block rounded-full bg-indigo-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#050547]">
              Atención Híbrida Inteligente
            </span>
            <h2 className="mt-4 font-display font-bold text-[#050547] text-[clamp(32px,3.5vw,50px)] leading-[1.12] tracking-tight">
              Automatización cuando aporta valor. Personas cuando son necesarias.
            </h2>
            <p className="mt-4 font-normal text-[#555B66] text-[18px] sm:text-[20px] leading-[1.6]">
              El asistente puede resolver las gestiones automatizables y derivar la conversación a un agente cuando se cumplen los criterios definidos por la empresa.
            </p>
          </RevealOnScroll>
        </div>

        {/* Workflow Visual Graphic (User -> AI Assistant -> Human Agent) */}
        <div className="mt-14 max-w-[1100px] mx-auto">
          <RevealOnScroll variant="fade-left" duration="medium" delay={150}>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 items-center">
              {/* Step 1: User Contact */}
              <div className="rounded-3xl border border-indigo-100 bg-white p-7 shadow-sm text-center relative group hover:shadow-lg transition-all">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 text-[#050547]">
                  <User className="h-8 w-8" />
                </div>
                <span className="mt-4 inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
                  Paso 1
                </span>
                <h3 className="mt-3 font-display font-bold text-[#050547] text-xl">
                  Contacto del usuario
                </h3>
                <p className="mt-2 text-sm text-[#555B66] leading-relaxed">
                  El cliente escribe una consulta o solicitud a través de WhatsApp en cualquier momento.
                </p>
              </div>

              {/* Step 2: AI Assistant */}
              <div className="rounded-3xl border border-emerald-200 bg-emerald-50/50 p-7 shadow-md text-center relative group hover:shadow-xl transition-all">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#25D366] text-white shadow-md">
                  <Bot className="h-8 w-8" />
                </div>
                <span className="mt-4 inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
                  Paso 2 · IA Autónoma
                </span>
                <h3 className="mt-3 font-display font-bold text-[#050547] text-xl">
                  Asistente IA Doobot
                </h3>
                <p className="mt-2 text-sm text-[#555B66] leading-relaxed">
                  Responde dudas, valida datos, consulta sistemas y resuelve autónomamente.
                </p>
              </div>

              {/* Step 3: Human Agent Transfer */}
              <div className="rounded-3xl border border-indigo-100 bg-white p-7 shadow-sm text-center relative group hover:shadow-lg transition-all">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-900">
                  <UserCheck className="h-8 w-8" />
                </div>
                <span className="mt-4 inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold text-indigo-800">
                  Paso 3 · Agente Humano
                </span>
                <h3 className="mt-3 font-display font-bold text-[#050547] text-xl">
                  Derivación selectiva
                </h3>
                <p className="mt-2 text-sm text-[#555B66] leading-relaxed">
                  Transfiere el contexto completo de la conversación si se requiere asistencia personalizada.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Feature Highlights Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Derivación por reglas y criterios",
              desc: "Configura qué temas, tipos de cliente o situaciones requieren intervención humana directa.",
            },
            {
              title: "Transferencia con contexto",
              desc: "El agente recibe el historial completo para no hacer repetir la información al usuario.",
            },
            {
              title: "Atención sin interrupciones",
              desc: "Mantiene la fluidez del canal sin que el cliente perciba saltos bruscos en el servicio.",
            },
          ].map((item, idx) => (
            <RevealOnScroll
              key={item.title}
              variant="fade-left"
              duration="medium"
              delay={idx * 100}
            >
              <div className="rounded-2xl border border-indigo-100 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-indigo-600 shrink-0" />
                  <h4 className="font-display font-bold text-[#050547] text-lg">
                    {item.title}
                  </h4>
                </div>
                <p className="mt-2.5 text-sm text-[#555B66] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
