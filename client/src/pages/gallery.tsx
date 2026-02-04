import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { galleryImages } from "@/data/gallery-data";
import { ChevronLeft, ChevronRight, ZoomIn, X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Funkcja do nawigacji między obrazami w trybie pełnoekranowym
  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;

    const newIndex = direction === 'next'
      ? (selectedImage + 1) % galleryImages.length
      : (selectedImage - 1 + galleryImages.length) % galleryImages.length;

    setSelectedImage(newIndex);
  };

  // Obsługa klawiszy strzałek do nawigacji
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;

      if (e.key === 'ArrowRight') {
        navigateImage('next');
      } else if (e.key === 'ArrowLeft') {
        navigateImage('prev');
      } else if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      <h1 className="text-4xl md:text-5xl font-cinzel text-center mb-8 bg-gradient-highlight text-transparent bg-clip-text">
        Galeria
      </h1>

      <p className="text-center mb-12 max-w-2xl mx-auto text-lg font-cinzel">
        Odkryj magiczne miejsca, krajobrazy i motywy, które inspirują mnie podczas pisania.
        Każde zdjęcie opowiada swoją własną historię i ukazuje kawałek mojego świata wyobraźni.
      </p>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {galleryImages.map((image, index) => (
          <GalleryItem 
            key={image.id}
            image={image} 
            index={index}
            onSelect={() => setSelectedImage(index)}
          />
        ))}
      </motion.div>

      {/* Pełnoekranowy widok galerii */}
      {selectedImage !== null && (
        <Dialog open onOpenChange={(open) => !open && setSelectedImage(null)}>
          <DialogContent className="max-w-7xl border-none bg-transparent shadow-none p-0 flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center" onClick={() => setSelectedImage(null)}>
              <img 
                src={galleryImages[selectedImage].src} 
                alt={galleryImages[selectedImage].alt} 
                className="object-contain max-h-[90vh] max-w-[90vw] cursor-default"
                onClick={(e) => e.stopPropagation()}
              />

              <button
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-50"
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} />
              </button>

              <div 
                className="absolute inset-x-0 bottom-0 text-center text-white bg-black/60 py-6 px-4 cursor-default"
                onClick={(e) => e.stopPropagation()}
              >
                <h2 className="text-2xl font-cinzel mb-1">{galleryImages[selectedImage].title}</h2>
                <p className="text-base font-cinzel opacity-90">{galleryImages[selectedImage].description}</p>
              </div>

              {/* Przyciski nawigacji */}
              <button 
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition-colors z-50"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('prev');
                }}
              >
                <ChevronLeft size={30} />
              </button>

              <button 
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition-colors z-50"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('next');
                }}
              >
                <ChevronRight size={30} />
              </button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

interface GalleryItemProps {
  image: typeof galleryImages[0];
  index: number;
  onSelect: () => void;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ image, onSelect }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current!);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative group overflow-hidden rounded-lg shadow-lg border border-gray-200 dark:border-gray-800"
    >
      <div className="aspect-w-16 aspect-h-10 overflow-hidden bg-gray-100 dark:bg-gray-900">
        <img
          src={image.src}
          alt={image.alt}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full">
             <h3 className="text-white text-lg font-semibold">{image.title}</h3>
          </div>
        </div>

        <button
          onClick={onSelect}
          className="absolute top-3 right-3 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Powiększ zdjęcie"
        >
          <ZoomIn size={18} />
        </button>
      </div>

      <div className="p-4 bg-gradient-highlight text-primary-foreground">
        <h3 className="font-cinzel text-lg mb-2">{image.title}</h3>
        <p className="text-primary-foreground/80 text-sm line-clamp-2 font-cinzel">{image.description}</p>
      </div>
    </motion.div>
  );
};

export default Gallery;