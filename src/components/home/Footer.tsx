export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-12 sm:px-6 lg:px-8">
        <img
          src="/doobot/logo-blanco-300x40-2.png"
          alt="doobot.ai"
          className="h-9 w-auto"
        />
        <p className="max-w-2xl text-center text-sm text-primary-foreground/70">
          Copyright ©2026 doobot.ai – Todos los derechos reservados – doobot.ai es una
          empresa del grupo eCUSTOMER.
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-primary-foreground/70">
          <li>
            <a href="/politica-de-privacidad/" className="hover:text-primary-foreground">
              Política de privacidad
            </a>
          </li>
          <li>
            <a href="/aviso-legal/" className="hover:text-primary-foreground">
              Aviso legal
            </a>
          </li>
          <li>
            <a
              href="/politica-de-seguridad-de-la-informacion/"
              className="hover:text-primary-foreground"
            >
              Política de seguridad de la información
            </a>
          </li>
          <li>
            <a href="/politica-de-cookies/" className="hover:text-primary-foreground">
              Política de cookies
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
