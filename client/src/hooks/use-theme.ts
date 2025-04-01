import { useState, useEffect } from "react";

type Theme = "light" | "dark";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check for saved theme preference
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
    
    // Ustawienie domyślne na ciemny motyw zamiast jasnego
    return "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return { theme, setTheme };
}
