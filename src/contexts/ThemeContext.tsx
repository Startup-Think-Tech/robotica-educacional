import { createContext, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";

type Theme = "dark" | "light";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const STORAGE_KEY = "theme";

function applyTheme(theme: Theme) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.classList.toggle("light", theme === "light");
  root.setAttribute("data-theme", theme);
  root.style.setProperty(
    "color-scheme",
    theme === "dark" ? "dark" : "light",
  );
}

function getInitialTheme(): Theme {
  if (typeof window === "undefined") {
    return "dark";
  }

  const stored = window.localStorage.getItem(STORAGE_KEY) as Theme | null;
  return stored ?? "dark";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeState, setThemeState] = useState<Theme>(() => {
    const initial = getInitialTheme();
    applyTheme(initial);
    return initial;
  });

  const value = useMemo(() => {
    const setTheme = (theme: Theme) => {
      setThemeState(theme);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(STORAGE_KEY, theme);
      }
      applyTheme(theme);
    };

    const toggleTheme = () => {
      setTheme(themeState === "dark" ? "light" : "dark");
    };

    return {
      theme: themeState,
      toggleTheme,
      setTheme,
    };
  }, [themeState]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme deve ser usado dentro de ThemeProvider");
  }

  return context;
}

