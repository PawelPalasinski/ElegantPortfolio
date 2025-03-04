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
      {/* Mistyczne słońce */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2 L12 4 M12 20 L12 22 M2 12 L4 12 M20 12 L22 12" />
        <path d="M4 4 L6 6 M18 18 L20 20 M4 20 L6 18 M18 6 L20 4" />
        <path d="M12 8 C12 8 14 10 14 12 C14 14 12 16 12 16" />
      </svg>

      {/* Mistyczny księżyc */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      >
        <path d="M12 3C8.69 3 6 5.69 6 9c0 3.31 2.69 6 6 6s6-2.69 6-6c0-3.31-2.69-6-6-6z" />
        <path d="M12 3c2.48 0 4.5 2.02 4.5 4.5 c0 2.48-2.02 4.5-4.5 4.5" />
        <path d="M12 8 C12 8 14 9 14 12 C14 15 12 16 12 16" />
        <circle cx="8" cy="6" r="0.5" />
        <circle cx="16" cy="6" r="0.5" />
        <circle cx="12" cy="14" r="0.5" />
      </svg>

      <span className="sr-only">Przełącz motyw</span>
    </Button>
  );
}