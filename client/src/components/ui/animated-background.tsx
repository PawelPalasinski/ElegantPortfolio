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
  <svg
    width="300"
    height="300"
    viewBox="0 0 300 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="opacity-10"
  >
    <circle cx="150" cy="150" r="60" fill="var(--color-accent)" />
    {/* Promienie słońca */}
    {Array.from({ length: 12 }).map((_, i) => (
      <motion.line
        key={i}
        x1="150"
        y1="150"
        x2="150"
        y2="50"
        stroke="var(--color-accent)"
        strokeWidth="3"
        strokeLinecap="round"
        transform={`rotate(${i * 30} 150 150)`}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
      />
    ))}
    {/* Spirale wokół słońca */}
    <motion.path
      d="M150,210 C190,210 220,180 220,140 C220,100 190,70 150,70 C110,70 80,100 80,140 C80,180 110,210 150,210 Z"
      fill="none"
      stroke="var(--color-accent)"
      strokeWidth="1"
      strokeDasharray="5,5"
      animate={{ rotate: 360 }}
      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
    />
    <motion.path
      d="M150,230 C201,230 240,181 240,140 C240,99 201,50 150,50 C99,50 60,99 60,140 C60,181 99,230 150,230 Z"
      fill="none"
      stroke="var(--color-accent)"
      strokeWidth="1"
      strokeDasharray="5,5"
      animate={{ rotate: -360 }}
      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
    />
  </svg>
);

const MoonSVG: React.FC = () => (
  <svg
    width="300"
    height="300"
    viewBox="0 0 300 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="opacity-10"
  >
    <motion.path
      d="M170,100 C170,130 185,155 210,165 C160,185 110,165 90,120 C70,75 85,25 130,10 C110,40 115,70 135,85 C155,100 170,70 170,100 Z"
      fill="var(--color-mystical)"
      animate={{ 
        d: [
          "M170,100 C170,130 185,155 210,165 C160,185 110,165 90,120 C70,75 85,25 130,10 C110,40 115,70 135,85 C155,100 170,70 170,100 Z",
          "M175,105 C175,135 190,160 215,170 C165,190 115,170 95,125 C75,80 90,30 135,15 C115,45 120,75 140,90 C160,105 175,75 175,105 Z",
          "M170,100 C170,130 185,155 210,165 C160,185 110,165 90,120 C70,75 85,25 130,10 C110,40 115,70 135,85 C155,100 170,70 170,100 Z"
        ] 
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
    />
    {/* Gwiazdy wokół księżyca */}
    {Array.from({ length: 20 }).map((_, i) => {
      // Randomowe pozycje gwiazd
      const x = 150 + 120 * Math.cos(i * Math.PI / 10);
      const y = 150 + 120 * Math.sin(i * Math.PI / 10);
      return (
        <motion.circle
          key={i}
          cx={x}
          cy={y}
          r={1 + Math.random() * 2}
          fill="var(--color-mystical-light)"
          animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }}
          transition={{ 
            duration: 2 + Math.random() * 3, 
            repeat: Infinity, 
            delay: i * 0.5,
            ease: "easeInOut"
          }}
        />
      );
    })}
    {/* Orbita księżyca */}
    <motion.ellipse
      cx="150"
      cy="150"
      rx="130"
      ry="120"
      stroke="var(--color-mystical-light)"
      strokeWidth="0.5"
      strokeDasharray="3,3"
      fill="none"
      animate={{ rotate: 360 }}
      transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
    />
  </svg>
);

export default AnimatedBackground;