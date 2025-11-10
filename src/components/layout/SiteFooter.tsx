import { NavLink } from "react-router-dom";
import { BackToTopButton } from "../common/BackToTopButton";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-black/5 bg-brand-lightBg/90 py-10 text-brand-lightText transition-colors dark:border-white/10 dark:bg-brand-darkBg/90 dark:text-brand-darkText">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 text-center md:flex-row md:gap-4 md:px-8 md:text-left">
        <NavLink
          to="/contato"
          className="text-sm font-semibold uppercase tracking-wide text-brand-primary transition hover:text-brand-accent dark:text-brand-accent dark:hover:text-brand-primary"
        >
          Entre em contato
        </NavLink>

        <div className="text-sm text-brand-lightTextMuted dark:text-brand-darkTextMuted">
          <p>&copy; {currentYear} Think Tech - Todos os direitos reservados.</p>
          <p>Desenvolvimento em equipe para projeto acadêmico.</p>
        </div>

        <BackToTopButton />
      </div>
    </footer>
  );
}

