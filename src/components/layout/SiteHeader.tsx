import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { NAVIGATION_LINKS } from "../../constants/navigation";
import { ThemeToggleButton } from "../theme/ThemeToggleButton";
import { MobileNavigation } from "./SiteHeader/MobileNavigation";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const shouldStick = window.scrollY > 50;
      setIsSticky(shouldStick);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header
      className={`site-header sticky top-0 z-40 border-b border-black/5 bg-brand-lightBg/85 backdrop-blur-xl transition-all duration-300 dark:border-white/10 dark:bg-brand-darkBg/85 ${
        isSticky ? "shadow-light dark:shadow-accent" : ""
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
        <NavLink
          to="/"
          onClick={closeMenu}
          className="text-lg font-semibold uppercase tracking-[0.2rem] text-brand-primary transition-colors hover:text-brand-accent dark:text-brand-accent dark:hover:text-brand-primary lg:text-xl"
        >
          Robótica Educacional
        </NavLink>

        <nav
          className="hidden items-center gap-8 text-sm font-medium uppercase tracking-wide text-brand-lightTextMuted transition-colors dark:text-brand-darkTextMuted md:flex"
          aria-label="Navegação principal"
        >
          {NAVIGATION_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                [
                  "transition-colors duration-200 hover:text-brand-accent dark:hover:text-brand-primary",
                  isActive
                    ? "text-brand-accent underline decoration-brand-primary dark:text-brand-primary"
                    : "",
                ].join(" ")
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggleButton />
          <button
            type="button"
            onClick={toggleMenu}
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-brand-primary/20 bg-brand-primary/10 text-brand-primary transition hover:border-brand-primary hover:text-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent dark:border-white/10 dark:bg-white/5 dark:text-brand-darkText dark:hover:border-brand-primary/40 dark:hover:text-brand-primary md:hidden"
            aria-label="Abrir menu de navegação"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      <MobileNavigation
        isOpen={isMenuOpen}
        onClose={closeMenu}
        activePath={location.pathname}
      />
    </header>
  );
}

