import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useInView } from "@/hooks/use-intersection";
import { useState, useRef } from "react";
import { X } from "lucide-react";

interface BookCardProps {
  title: string;
  description: string;
  imageUrl: string;
  delay?: number;
}

export function BookCard({ title, description, imageUrl, delay = 0 }: BookCardProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const { ref: inViewRef, inView } = useInView({ threshold: 0.1 });

  // Łączenie refów
  const setRefs = (element: HTMLDivElement) => {
    // Funkcja do połączenia refów
    if (cardRef) {
      cardRef.current = element;
    }
    if (typeof inViewRef === 'function') {
      inViewRef(element);
    } else if (inViewRef) {
      inViewRef.current = element;
    }
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <>
      <motion.div
        ref={setRefs}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay }}
      >
        <Card className="overflow-hidden hover:shadow-lg transition-shadow border-primary/20">
          <div 
            className="aspect-[2/3] relative cursor-pointer"
            onClick={toggleFullscreen}
          >
            <img
              src={imageUrl}
              alt={title}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
              <span className="text-white text-sm font-bold">Kliknij, aby powiększyć</span>
            </div>
          </div>
          <CardHeader className="bg-gradient-highlight text-primary-foreground">
            <CardTitle className="font-cinzel">{title}</CardTitle>
            <CardDescription className="font-cinzel text-primary-foreground/80">{description}</CardDescription>
          </CardHeader>
        </Card>
      </motion.div>

      {isFullscreen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={toggleFullscreen}
        >
          <div className="relative max-w-4xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <img 
              src={imageUrl} 
              alt={title} 
              className="object-contain max-h-[90vh]"
            />
            <button
              className="absolute top-4 right-4 bg-primary text-white p-2 rounded-full shadow-xl"
              onClick={toggleFullscreen}
            >
              <X size={24} />
            </button>
            <div className="absolute bottom-4 left-0 right-0 text-center text-white bg-gradient-to-t from-black/60 to-transparent py-8 px-4">
              <h2 className="text-xl font-cinzel mb-2">{title}</h2>
              <p className="text-sm font-cinzel">{description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
