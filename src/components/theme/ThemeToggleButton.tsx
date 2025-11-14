import { Sun, Moon } from "lucide-react";
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
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
}

