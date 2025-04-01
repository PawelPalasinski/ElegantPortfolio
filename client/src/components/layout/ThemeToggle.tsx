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
      {/* Artystyczne słońce w stylu young adult */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        className="absolute h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      >
        {/* Centralne słońce */}
        <circle cx="12" cy="12" r="4" fill="currentColor" />
        
        {/* Wewnętrzna poświata */}
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="0.3" strokeOpacity="0.6" fill="none" />
        
        {/* Promienie główne */}
        <path d="M12 4V2M12 22V20M4 12H2M22 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Promienie ukośne */}
        <path d="M6 6L4.5 4.5M18 18L19.5 19.5M6 18L4.5 19.5M18 6L19.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Dodatkowe ozdobne promienie */}
        <path d="M12 7C10 8 10 10 10 12C10 14 9 15 8 16" stroke="currentColor" strokeWidth="0.4" strokeLinecap="round" strokeOpacity="0.7" />
        <path d="M12 7C14 8 14 10 14 12C14 14 15 15 16 16" stroke="currentColor" strokeWidth="0.4" strokeLinecap="round" strokeOpacity="0.7" />
        
        {/* Małe promyki */}
        <path d="M8 8L7 7M16 16L17 17M8 16L7 17M16 8L17 7" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeOpacity="0.9" />
      </svg>

      {/* Artystyczny księżyc w stylu young adult */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        className="absolute h-[1.5rem] w-[1.5rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      >
        {/* Księżyc */}
        <path 
          d="M16 12C16 7.58 12.42 4 8 4C8.5 8 7 12 3.5 14.5C5 17.5 8.5 19 12 19C14.3 19 16 17 16 12Z" 
          fill="currentColor" 
        />
        
        {/* Subtelna poświata */}
        <path 
          d="M17 12C17 7 13 3 8 3C9 8 7 13 3 16C5 19 9 21 13 21C15.5 21 17 17 17 12Z" 
          stroke="currentColor" 
          strokeWidth="0.3" 
          strokeOpacity="0.7"
          fill="none"
        />
        
        {/* Gwiazdy */}
        <path d="M19 5L20 6L19 7L18 6L19 5Z" fill="currentColor" />
        <path d="M21 9L21.7 10.5L20 10.8L19.3 9.5L21 9Z" fill="currentColor" />
        <path d="M19 15L19.7 16L18.5 16.5L18 15.3L19 15Z" fill="currentColor" />
        
        {/* Drobne gwiazdki */}
        <circle cx="20" cy="13" r="0.3" fill="currentColor" />
        <circle cx="18" cy="4" r="0.3" fill="currentColor" />
        <circle cx="21" cy="16" r="0.3" fill="currentColor" />
      </svg>

      <span className="sr-only">Przełącz motyw</span>
    </Button>
  );
}