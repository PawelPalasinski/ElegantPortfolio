
import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedText } from "@/components/ui/animated-text";

// Przykładowe zdjęcia - podmień te linki na swoje
const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73",
    title: "Zdjęcie 1",
    description: "Opis zdjęcia 1"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1555252586-d77e8c828e41",
    title: "Zdjęcie 2",
    description: "Opis zdjęcia 2"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1612969308146-066d55f37ccb",
    title: "Zdjęcie 3",
    description: "Opis zdjęcia 3"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666",
    title: "Zdjęcie 4",
    description: "Opis zdjęcia 4"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1521105993401-3a51411aff9e",
    title: "Zdjęcie 5",
    description: "Opis zdjęcia 5"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1459369510627-9efbee1e6051",
    title: "Zdjęcie 6",
    description: "Opis zdjęcia 6"
  }
];

export default function SimpleGallery() {
  return (
    <div className="w-full max-w-6xl mx-auto p-4 space-y-8">
      <AnimatedText
        text="Galeria zdjęć"
        className="text-4xl md:text-5xl font-bold text-center mb-4"
      />
      <AnimatedText
        text="Moja kolekcja zdjęć"
        className="text-xl text-muted-foreground text-center mb-8"
        delay={0.2}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 backdrop-blur-sm bg-card/60 border border-primary/30"
          >
            <div className="relative aspect-[4/3]">
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 bg-black/40 backdrop-blur-sm">
              <h3 className="text-lg font-medium text-primary">{image.title}</h3>
              <p className="text-sm text-muted-foreground">{image.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
