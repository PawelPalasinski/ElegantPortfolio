import React from "react";
import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
  animate?: boolean;
}

export function Logo({ className = "", animate = true }: LogoProps) {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 1.5, ease: "easeInOut" },
        opacity: { duration: 0.5, ease: "easeInOut" }
      }
    }
  };

  const moonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const starsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 1.2,
        duration: 0.8
      }
    }
  };

  return (
    <motion.svg
      className={className}
      width="84"
      height="42"
      viewBox="0 0 84 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={animate ? "hidden" : "visible"}
      animate="visible"
    >
      {/* Litera M */}
      <motion.path
        d="M4 38V4H8L22 24L36 4H40V38H32V16L22 30L12 16V38H4Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        variants={animate ? pathVariants : undefined}
      />
      
      {/* Litera P */}
      <motion.path
        d="M44 38V4H60C65.5 4 70 8.5 70 14C70 19.5 65.5 24 60 24H52V38H44Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        variants={animate ? pathVariants : undefined}
      />
      
      {/* Połączenie P - kółko */}
      <motion.path
        d="M52 16V12H58C59.1 12 60 12.9 60 14C60 15.1 59.1 16 58 16H52Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        variants={animate ? pathVariants : undefined}
      />
      
      {/* Księżyc */}
      <motion.path
        d="M77 14C77 10.7 74.3 8 71 8C71.8 13.1 68.5 18 64 19.5C64.9 21 66.8 22 69 22C73.4 22 77 18.4 77 14Z"
        fill="currentColor"
        variants={animate ? moonVariants : undefined}
      />
      
      {/* Gwiazda 1 */}
      <motion.circle cx="76" cy="4" r="1" fill="currentColor" variants={animate ? starsVariants : undefined} />
      
      {/* Gwiazda 2 */}
      <motion.circle cx="80" cy="8" r="0.8" fill="currentColor" variants={animate ? starsVariants : undefined} />
      
      {/* Gwiazda 3 */}
      <motion.circle cx="82" cy="17" r="0.6" fill="currentColor" variants={animate ? starsVariants : undefined} />
    </motion.svg>
  );
}

// Wersja animowana dla loadera
export function LogoLoader() {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-32 h-32 flex items-center justify-center"
      >
        <Logo animate={true} className="w-24 h-24 text-primary" />
      </motion.div>
    </div>
  );
}