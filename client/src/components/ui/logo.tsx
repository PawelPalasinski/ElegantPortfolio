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

  const glowVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: [0.3, 0.5, 0.3],
      transition: {
        repeat: Infinity,
        duration: 3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.svg
      className={className}
      width="120"
      height="50"
      viewBox="0 0 120 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={animate ? "hidden" : "visible"}
      animate="visible"
    >
      {/* Poświata księżyca */}
      <motion.ellipse
        cx="95"
        cy="18"
        rx="16"
        ry="16"
        fill="currentColor"
        opacity="0.1"
        variants={animate ? glowVariants : undefined}
      />
      
      {/* Litera M - stylizowana bardziej mystycznie */}
      <motion.path
        d="M8 42V8H14L25 28L36 8H42V42H36V18L25 35L14 18V42H8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        variants={animate ? pathVariants : undefined}
      />
      
      {/* Dodatkowy ozdobnik M */}
      <motion.path
        d="M8 8C8 8 3 20 8 24C13 28 14 18 14 18"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.6"
        variants={animate ? pathVariants : undefined}
      />
      
      {/* Litera P - stylizowana */}
      <motion.path
        d="M48 42V8H65C71 8 75 13 75 19C75 25 71 30 65 30H54V42H48Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        variants={animate ? pathVariants : undefined}
      />
      
      {/* Dodatkowy ozdobnik P */}
      <motion.path
        d="M54 30C54 30 58 36 68 36"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.6"
        variants={animate ? pathVariants : undefined}
      />
      
      {/* Połączenie P - stylizowane */}
      <motion.path
        d="M54 20V14H63C65 14 67 16 67 19C67 22 65 24 63 24H58"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        variants={animate ? pathVariants : undefined}
      />
      
      {/* Księżyc - bardziej artystyczny */}
      <motion.path
        d="M95 8C87 8 81 14 81 22C81 30 87 36 95 36C91 32 88 27 88 22C88 17 91 12 95 8Z"
        fill="currentColor"
        variants={animate ? moonVariants : undefined}
      />
      
      {/* Gwiazdy artystyczne */}
      <motion.path
        d="M105 8L106 10L108 11L106 12L105 14L104 12L102 11L104 10L105 8Z"
        fill="currentColor"
        variants={animate ? starsVariants : undefined}
      />
      
      <motion.path
        d="M110 18L111 20L113 21L111 22L110 24L109 22L107 21L109 20L110 18Z"
        fill="currentColor"
        variants={animate ? starsVariants : undefined}
      />
      
      <motion.path
        d="M103 28L103.5 29L104.5 29.5L103.5 30L103 31L102.5 30L101.5 29.5L102.5 29L103 28Z"
        fill="currentColor"
        variants={animate ? starsVariants : undefined}
      />
      
      {/* Połączenie między literami */}
      <motion.path
        d="M42 25H48"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="1 2"
        variants={animate ? pathVariants : undefined}
      />
      
      {/* Mała gwiazdka nad M */}
      <motion.path
        d="M20 6L20.5 7L21.5 7.5L20.5 8L20 9L19.5 8L18.5 7.5L19.5 7L20 6Z"
        fill="currentColor"
        variants={animate ? starsVariants : undefined}
      />
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
        <Logo animate={true} className="w-32 h-32 text-primary" />
      </motion.div>
    </div>
  );
}