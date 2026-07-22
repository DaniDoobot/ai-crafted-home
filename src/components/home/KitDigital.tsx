export function KitDigital() {
  return (
    <section
      className="py-[55px]"
      style={{
        background: "#E1F3FF",
      }}
    >
      <div className="mx-auto max-w-[1300px] px-4 text-center sm:px-6 lg:px-8">
        <p
          className="font-display font-medium text-[#555B66]"
          style={{
            fontSize: "clamp(21px, 1.8vw, 34px)",
            lineHeight: 1.35,
            letterSpacing: "-0.8px",
          }}
        >
          doobot.ai forma parte de Grupo eCUSTOMER agente digitalizador del Kit Digital
          y Kit Consulting
        </p>

        <div className="mt-[32px] flex justify-center">
          <img
            src="/doobot/Kit-digital-1024x209.webp"
            alt="Kit Digital y Kit Consulting"
            loading="lazy"
            className="h-auto w-full max-w-[1050px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
