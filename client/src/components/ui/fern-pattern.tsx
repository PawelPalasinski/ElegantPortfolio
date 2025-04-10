import { motion } from "framer-motion";

export function FernPattern() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden opacity-[0.15] dark:opacity-[0.1] pointer-events-none">
      <svg width="100%" height="100%" className="absolute">
        <pattern
          id="fern-pattern"
          x="0"
          y="0"
          width="200"
          height="200"
          patternUnits="userSpaceOnUse"
        >
          {/* Główny wzór gwiazd */}
          <path
            d="M100 0 L105 15 L120 15 L110 25 L115 40 L100 30 L85 40 L90 25 L80 15 L95 15 Z"
            stroke="currentColor"
            fill="none"
            strokeWidth="1"
            className="text-primary"
          />
          
          {/* Mniejsze gwiazdy */}
          <path
            d="M50 50 L52 58 L60 58 L55 62 L57 70 L50 65 L43 70 L45 62 L40 58 L48 58 Z"
            stroke="currentColor"
            fill="none"
            strokeWidth="0.8"
            className="text-primary/80"
          />
          
          <path
            d="M150 150 L152 158 L160 158 L155 162 L157 170 L150 165 L143 170 L145 162 L140 158 L148 158 Z"
            stroke="currentColor"
            fill="none"
            strokeWidth="0.8"
            className="text-primary/80"
          />
          
          {/* Najdrobniejsze punkty gwiazd */}
          <circle cx="25" cy="25" r="1" fill="currentColor" className="text-primary/60" />
          <circle cx="175" cy="75" r="1" fill="currentColor" className="text-primary/60" />
          <circle cx="75" cy="175" r="1" fill="currentColor" className="text-primary/60" />
          <circle cx="175" cy="175" r="1" fill="currentColor" className="text-primary/60" />
          
          {/* Drobne linie - promienie */}
          <line x1="80" y1="80" x2="85" y2="85" stroke="currentColor" strokeWidth="0.5" className="text-primary/40" />
          <line x1="120" y1="120" x2="125" y2="125" stroke="currentColor" strokeWidth="0.5" className="text-primary/40" />
          <line x1="40" y1="160" x2="45" y2="165" stroke="currentColor" strokeWidth="0.5" className="text-primary/40" />
          <line x1="160" y1="40" x2="165" y2="45" stroke="currentColor" strokeWidth="0.5" className="text-primary/40" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#fern-pattern)" />
      </svg>
    </div>
  );
}