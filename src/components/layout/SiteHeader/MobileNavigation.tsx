import { NAVIGATION_LINKS } from "../../../constants/navigation";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  activePath: string;
}

export function MobileNavigation({
  isOpen,
  onClose,
  activePath,
}: MobileNavigationProps) {
  return (
    <>
      <div
        className={clsx(
          "fixed inset-0 z-30 bg-black/50 transition-opacity duration-300 md:hidden",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={onClose}
        aria-hidden={!isOpen}
      />

      <aside
        className={clsx(
          "fixed inset-y-0 right-0 z-40 w-72 max-w-full bg-brand-lightBg/95 p-6 shadow-lg transition-transform duration-300 md:hidden",
          "border-l border-black/10 backdrop-blur-md dark:border-white/10 dark:bg-brand-darkBg/95",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between">
          <span className="text-base font-semibold uppercase tracking-[0.2rem] text-brand-accent">
            Navegação
          </span>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-primary/20 text-brand-primary transition hover:border-brand-primary hover:text-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent dark:border-white/10 dark:text-brand-darkText dark:hover:border-brand-primary/40 dark:hover:text-brand-primary"
            aria-label="Fechar menu de navegação"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav
          className="mt-8 flex flex-col gap-4 text-sm font-medium uppercase tracking-wide text-brand-lightTextMuted dark:text-brand-darkTextMuted"
          aria-label="Navegação secundária"
        >
          {NAVIGATION_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={onClose}
              className={clsx(
                "rounded-lg px-3 py-2 transition-colors duration-200 hover:bg-brand-primary/10 hover:text-brand-primary dark:hover:bg-white/5",
                activePath === link.to &&
                  "bg-brand-primary/15 text-brand-primary dark:bg-white/10"
              )}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}

