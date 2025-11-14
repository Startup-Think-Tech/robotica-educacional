import { Menu } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { NAVIGATION_LINKS } from "../../constants/navigation";
import { ThemeToggleButton } from "../theme/ThemeToggleButton";
import { MobileNavigation } from "./SiteHeader/MobileNavigation";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location.pathname, closeMenu]);

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
  }, [closeMenu]);

  return (
    <header
      className={`site-header fixed top-0 left-0 right-0 z-50 border-b border-black/5 bg-brand-lightBg/95 backdrop-blur-xl transition-all duration-300 dark:border-white/10 dark:bg-brand-darkBg/95 md:sticky md:bg-brand-lightBg/85 md:dark:bg-brand-darkBg/85 ${
        isSticky ? "shadow-light dark:shadow-accent" : ""
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 md:px-8">
        <NavLink
          to="/"
          onClick={closeMenu}
          className="text-base font-semibold uppercase tracking-[0.15rem] text-brand-primary transition-colors hover:text-brand-accent sm:text-lg sm:tracking-[0.2rem] dark:text-brand-accent dark:hover:text-brand-primary lg:text-xl"
        >
          Robótica Educacional
        </NavLink>

        <nav
          className="hidden items-center gap-6 text-xs font-medium uppercase tracking-wide text-brand-lightTextMuted transition-colors dark:text-brand-darkTextMuted sm:gap-8 sm:text-sm md:flex"
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

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggleButton />
          <button
            type="button"
            onClick={toggleMenu}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-brand-primary/20 bg-brand-primary/10 text-brand-primary transition hover:border-brand-primary hover:text-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent dark:border-white/10 dark:bg-white/5 dark:text-brand-darkText dark:hover:border-brand-primary/40 dark:hover:text-brand-primary sm:h-11 sm:w-11 md:hidden"
            aria-label="Abrir menu de navegação"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Menu</span>
            <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
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

