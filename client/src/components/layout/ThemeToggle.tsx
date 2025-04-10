
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative w-9 h-9"
    >
      <img
        src="/images/black-sun-icon-mystic-tatoo-style-fantasy.svg"
        alt="Motyw jasny"
        className="absolute h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      />
      <img
        src="/images/black-moon-icon-mystic-tatoo-style-mystery-fantasy.svg"
        alt="Motyw ciemny"
        className="absolute h-[1.5rem] w-[1.5rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      />
      <span className="sr-only">Przełącz motyw</span>
    </Button>
  );
}
