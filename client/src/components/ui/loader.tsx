import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./logo";

interface LoaderProps {
  minDisplayTime?: number; // minimalny czas wyświetlania w ms
}

export function Loader({ minDisplayTime = 2000 }: LoaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    // Zapewniamy minimalny czas wyświetlania loadera
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, minDisplayTime);
    
    return () => clearTimeout(timer);
  }, [minDisplayTime]);
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        >
          <div className="relative flex flex-col items-center justify-center">
            {/* Logo z księżycem */}
            <Logo className="w-24 h-24 text-primary" animate={true} />
            
            {/* Tekst "Ładowanie" pod logiem */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-8 text-lg font-serif text-primary"
            >
              Ładowanie...
            </motion.p>
            
            {/* Pasek postępu */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "120px" }}
              transition={{ 
                duration: minDisplayTime / 1000 * 0.8, 
                ease: "easeInOut" 
              }}
              className="w-0 h-0.5 bg-primary/50 mt-4 rounded-full overflow-hidden"
            >
              <motion.div
                animate={{ 
                  x: ["0%", "100%", "0%"],
                  opacity: [0.2, 1, 0.2]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2, 
                  ease: "easeInOut"
                }}
                className="w-12 h-full bg-primary rounded-full"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}