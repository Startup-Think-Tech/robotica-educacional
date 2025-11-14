import { NavLink } from "react-router-dom";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-black/5 bg-brand-lightBg/90 py-6 text-brand-lightText transition-colors sm:py-8 md:py-10 dark:border-white/10 dark:bg-brand-darkBg/90 dark:text-brand-darkText">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center sm:gap-5 md:flex-row md:gap-4 md:px-8 md:text-left">
        <NavLink
          to="/contato"
          className="text-xs font-semibold uppercase tracking-wide text-brand-primary transition hover:text-brand-accent sm:text-sm dark:text-brand-accent dark:hover:text-brand-primary"
        >
          Entre em contato
        </NavLink>

        <div className="text-xs text-brand-lightTextMuted sm:text-sm dark:text-brand-darkTextMuted">
          <p>&copy; {currentYear} Think Tech - Todos os direitos reservados.</p>
          <p>Desenvolvimento em equipe para projeto acadêmico.</p>
        </div>
      </div>
    </footer>
  );
}

