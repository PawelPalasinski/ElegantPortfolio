
import { cn } from "@/lib/utils";

export function FernPattern({ className }: { className?: string }) {
  return (
    <div className={cn("fixed inset-0 z-[-1] opacity-10 pointer-events-none", className)}>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-pink-100 dark:from-blue-950 dark:to-purple-950" />
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="fern-pattern"
            patternUnits="userSpaceOnUse"
            width="20"
            height="20"
            patternTransform="rotate(45)"
          >
            <path
              d="M10,0 Q15,10 10,20 M0,10 Q10,15 20,10"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-primary/20"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#fern-pattern)" />
      </svg>
    </div>
  );
}
