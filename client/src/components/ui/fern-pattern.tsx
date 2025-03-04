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
          {/* Główny liść paproci */}
          <path
            d="M100 0C100 0 90 20 80 30C70 40 50 50 40 70C30 90 30 110 40 130C50 150 70 160 80 170C90 180 100 200 100 200"
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            className="transform -rotate-45"
          />
          {/* Boczne listki */}
          <path
            d="M60 60C60 60 50 70 40 80C30 90 20 100 20 120C20 140 30 150 40 160C50 170 60 180 60 180"
            stroke="currentColor"
            fill="none"
            strokeWidth="1"
            className="transform rotate-90"
          />
          <path
            d="M140 60C140 60 150 70 160 80C170 90 180 100 180 120C180 140 170 150 160 160C150 170 140 180 140 180"
            stroke="currentColor"
            fill="none"
            strokeWidth="1"
            className="transform -rotate-90"
          />
          {/* Dekoracyjne spirale */}
          <path
            d="M80 80C80 80 85 85 85 90C85 95 80 100 75 100"
            stroke="currentColor"
            fill="none"
            strokeWidth="0.5"
          />
          <path
            d="M120 120C120 120 125 125 125 130C125 135 120 140 115 140"
            stroke="currentColor"
            fill="none"
            strokeWidth="0.5"
          />
        </pattern>
        <rect width="100%" height="100%" fill="url(#fern-pattern)" />
      </svg>
    </div>
  );
}