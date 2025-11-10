import { useTheme } from "../../contexts/ThemeContext";

export function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-primary/30 bg-brand-primary/10 text-brand-primary transition hover:border-brand-primary hover:bg-brand-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent dark:border-white/10 dark:bg-white/5 dark:text-brand-darkText dark:hover:border-brand-primary/40 dark:hover:text-brand-primary"
      aria-label="Alternar tema"
      aria-pressed={isLight}
    >
      {isLight ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-3.227-1.59 1.591M5.25 12H3m3.227-4.773L4.636 5.636M12 7.5a4.5 4.5 0 0 0 0 9 4.5 4.5 0 0 0 0-9Z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25c0 5.385 4.365 9.75 9.75 9.75a9.753 9.753 0 0 0 8.002-5.998Z"
          />
        </svg>
      )}
    </button>
  );
}

