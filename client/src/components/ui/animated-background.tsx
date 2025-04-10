import React, { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { useTheme } from "@/hooks/use-theme";

interface AnimatedBackgroundProps {
  className?: string;
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ className }) => {
  const [location] = useLocation();
  const { theme } = useTheme();
  const [positionX, setPositionX] = useState<string>("0%");
  const [positionY, setPositionY] = useState<string>("0%");

  // Zmiana pozycji w zależności od podstrony
  useEffect(() => {
    switch (location) {
      case "/":
        setPositionX("10%");
        setPositionY("15%");
        break;
      case "/about":
        setPositionX("80%");
        setPositionY("10%");
        break;
      case "/books":
        setPositionX("70%");
        setPositionY("70%");
        break;
      case "/gallery":
        setPositionX("20%");
        setPositionY("70%");
        break;
      case "/upcoming":
        setPositionX("50%");
        setPositionY("20%");
        break;
      case "/contact":
        setPositionX("85%");
        setPositionY("85%");
        break;
      default:
        setPositionX("50%");
        setPositionY("50%");
        break;
    }
  }, [location]);

  return (
    <div className={`fixed inset-0 pointer-events-none overflow-hidden ${className}`}>
      <motion.div
        className="absolute"
        animate={{
          x: positionX,
          y: positionY,
          rotate: [0, 360],
        }}
        transition={{
          x: { type: "spring", stiffness: 50, damping: 20 },
          y: { type: "spring", stiffness: 50, damping: 20 },
          rotate: { duration: 60, repeat: Infinity, ease: "linear" },
        }}
      >
        {theme === "dark" ? <MoonSVG /> : <SunSVG />}
      </motion.div>
    </div>
  );
};

const SunSVG: React.FC = () => (
  <motion.img
    src="/images/black-sun-icon-mystic-tatoo-style-fantasy.svg"
    alt="Słońce"
    className="w-[300px] h-[300px] opacity-10 dark:invert"
    animate={{ 
      rotate: 360,
      scale: [1, 1.1, 1]
    }}
    transition={{ 
      rotate: { duration: 60, repeat: Infinity, ease: "linear" },
      scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
    }}
  />
);

const MoonSVG: React.FC = () => (
  <motion.img
    src="/images/black-moon-icon-mystic-tatoo-style-mystery-fantasy.svg"
    alt="Księżyc"
    className="w-[300px] h-[300px] opacity-10 dark:invert"
    animate={{ 
      rotate: 360,
      scale: [1, 1.1, 1]
    }}
    transition={{ 
      rotate: { duration: 80, repeat: Infinity, ease: "linear" },
      scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
    }}
  />
);

export default AnimatedBackground;