import { motion } from "framer-motion";

export function FernPattern() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden opacity-[0.03] dark:opacity-[0.02] pointer-events-none">
      <svg width="100%" height="100%" className="absolute">
        <pattern
          id="fern-pattern"
          x="0"
          y="0"
          width="100"
          height="100"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M50 0C50 0 45 10 40 15C35 20 25 25 20 35C15 45 15 55 20 65C25 75 35 80 40 85C45 90 50 100 50 100"
            stroke="currentColor"
            fill="none"
            strokeWidth="1"
            className="transform -rotate-45"
          />
          <path
            d="M30 30C30 30 25 35 20 40C15 45 10 50 10 60C10 70 15 75 20 80C25 85 30 90 30 90"
            stroke="currentColor"
            fill="none"
            strokeWidth="0.5"
            className="transform rotate-90"
          />
          <path
            d="M70 30C70 30 75 35 80 40C85 45 90 50 90 60C90 70 85 75 80 80C75 85 70 90 70 90"
            stroke="currentColor"
            fill="none"
            strokeWidth="0.5"
            className="transform -rotate-90"
          />
        </pattern>
        <rect width="100%" height="100%" fill="url(#fern-pattern)" />
      </svg>
    </div>
  );
}
