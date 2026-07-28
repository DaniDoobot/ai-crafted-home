import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { FileText, ShieldCheck, TrendingUp, Users } from "lucide-react";

export function SpeechValueSection() {
  const valueProps = [
    {
      icon: FileText,
      title: "Mayor visibilidad sobre tus conversaciones",
      description:
        "Permite procesar y evaluar grandes volúmenes de conversaciones de voz, reduciendo la dependencia de muestreos manuales limitados.",
    },
    {
      icon: TrendingUp,
      title: "Detección rápida de tendencias",
      description:
        "Identifica patrones emergentes, objeciones recurrentes y motivos de contacto para anticipar respuestas comerciales y operativas.",
    },
    {
      icon: ShieldCheck,
      title: "Evaluación objetiva y transparente",
      description:
        "Aplica criterios de calidad predefinidos para analizar el cumplimiento normativo, la cortesía y la resolución de consultas.",
    },
    {
      icon: Users,
      title: "Soporte al equipo de operaciones",
      description:
        "Proporciona a supervisores y responsables de calidad evidencias claras para guiar la formación y optimizar la atención.",
    },
  ];

  return (
    <section className="relative bg-background py-20 lg:py-28 border-b border-border/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <RevealOnScroll variant="fade-up" duration="fast">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-500">
              Valor para el Negocio
            </span>
          </RevealOnScroll>
          <RevealOnScroll variant="fade-up" duration="fast" delay={100}>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Transforma la voz de tus clientes en decisiones operativas informadas
            </h2>
          </RevealOnScroll>
          <RevealOnScroll variant="fade-up" duration="medium" delay={200}>
            <p className="mt-4 text-lg text-muted-foreground">
              Nuestra solución procesa llamadas y archivos de audio para estructurar la información clave, evaluar el rendimiento del servicio y detectar áreas directas de mejora.
            </p>
          </RevealOnScroll>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((prop, idx) => (
            <RevealOnScroll key={prop.title} variant="fade-up" delay={idx * 100}>
              <div className="h-full rounded-2xl border border-border/60 bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-teal-500/40 hover:shadow-elevated">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400">
                  <prop.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                  {prop.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {prop.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
