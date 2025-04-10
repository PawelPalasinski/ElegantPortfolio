import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useInView } from "@/hooks/use-intersection";
import { useState } from "react";

interface BookCardProps {
  title: string;
  description: string;
  imageUrl: string;
  delay?: number;
}

export function BookCard({ title, description, imageUrl, delay = 0 }: BookCardProps) {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <>
      <motion.div
        ref={ref}
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
          <div className="relative max-w-4xl max-h-[90vh]">
            <img 
              src={imageUrl} 
              alt={title} 
              className="object-contain max-h-[90vh]"
            />
            <button
              className="absolute top-4 right-4 bg-primary text-white p-2 rounded-full"
              onClick={toggleFullscreen}
            >
              Zamknij
            </button>
            <div className="absolute bottom-4 left-0 right-0 text-center text-white">
              <h2 className="text-xl font-cinzel mb-2">{title}</h2>
              <p className="text-sm font-cinzel">{description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
