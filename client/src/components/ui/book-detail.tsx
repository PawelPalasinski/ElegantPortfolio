import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileText, ShoppingCart, Star, File, X } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useIntersectionObserver } from "@/hooks/use-intersection";

interface BookDetailProps {
  title: string;
  author: string;
  coverImage: string;
  description: string;
  publishDate: string;
  pages: number;
  genre: string[];
  rating?: number;
  buyLink?: string;
  previewPdf?: string;
  previewMobi?: string;
}

export function BookDetail({
  title,
  author,
  coverImage,
  description,
  publishDate,
  pages,
  genre,
  rating,
  buyLink = "#",
  previewPdf = "#",
  previewMobi = "#"
}: BookDetailProps) {
  // Stan do kontrolowania modala pełnoekranowego
  const [showFullImage, setShowFullImage] = useState(false);
  
  // Efekt animacji przy scrollowaniu do opisu
  const descriptionRef = useRef<HTMLDivElement>(null);
  const isDescriptionVisible = useIntersectionObserver(descriptionRef, {
    threshold: 0.2,
    triggerOnce: true
  });
  
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col lg:flex-row gap-10 bg-card rounded-lg overflow-hidden shadow-lg border border-border"
      >
        {/* Lewa kolumna - okładka */}
        <div className="lg:w-1/3 p-8 flex flex-col items-center">
          <div 
            className="relative overflow-hidden rounded-lg shadow-2xl w-full max-w-sm mb-6 cursor-pointer"
            onClick={() => setShowFullImage(true)}
          >
            <motion.img
              src={coverImage}
              alt={`Okładka książki ${title}`}
              className="w-full h-auto object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Nakładka z gradientem i ikoną powiększenia */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between">
              <div className="p-4 self-end">
                <div className="bg-black/30 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                  </svg>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center text-white">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(rating) ? "fill-primary text-primary" : "fill-none text-gray-400"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-white">{rating}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Przycisk zakupu */}
          <a href={buyLink} target="_blank" rel="noopener noreferrer" className="w-full">
            <Button className="w-full flex items-center justify-center gap-2 text-lg py-6">
              <ShoppingCart className="h-5 w-5" />
              Kup książkę
            </Button>
          </a>
        </div>

        {/* Prawa kolumna - szczegóły i opis */}
        <div className="lg:w-2/3 p-8">
          <h1 className="text-3xl md:text-4xl font-serif mb-2">{title}</h1>
          <p className="text-xl text-muted-foreground mb-6">{author}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {genre.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            <div>
              <p className="text-sm text-muted-foreground">Data wydania</p>
              <p className="font-medium">{publishDate}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Liczba stron</p>
              <p className="font-medium">{pages}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Ocena</p>
              <p className="font-medium flex items-center">
                <Star className="w-4 h-4 fill-primary text-primary mr-1" />
                {rating}/5
              </p>
            </div>
          </div>

          {/* Tabs dla opisu i fragmentów */}
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="w-full mb-6">
              <TabsTrigger value="description" className="flex-1">Opis</TabsTrigger>
              <TabsTrigger value="preview" className="flex-1">Fragment</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="text-lg">
              <div 
                ref={descriptionRef}
                className="prose prose-lg dark:prose-invert"
              >
                {description.split('\n\n').map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isDescriptionVisible ? 
                      { opacity: 1, y: 0 } : 
                      { opacity: 0, y: 20 }
                    }
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.2 + (index * 0.1),
                      ease: "easeOut" 
                    }}
                    className="mb-4 font-serif"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="preview">
              <div className="rounded-lg bg-primary/5 p-6 mb-4">
                <h3 className="text-lg font-medium mb-4">Pobierz fragment książki</h3>
                <p className="mb-6 text-muted-foreground font-serif">
                  Zapoznaj się z fragmentem książki przed zakupem. Dostępne w formatach PDF i MOBI.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={previewPdf} className="flex-1">
                    <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                      <File className="h-5 w-5" />
                      Pobierz PDF
                    </Button>
                  </a>
                  
                  <a href={previewMobi} className="flex-1">
                    <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                      <FileText className="h-5 w-5" />
                      Pobierz MOBI
                    </Button>
                  </a>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </motion.div>
      
      {/* Dialog pełnoekranowy z podglądem okładki */}
      <Dialog open={showFullImage} onOpenChange={setShowFullImage}>
        <DialogContent className="max-w-6xl w-full h-[90vh] bg-black/90 border-none p-0">
          <div className="relative h-full w-full flex items-center justify-center">
            {/* Przycisk zamknięcia */}
            <button 
              onClick={() => setShowFullImage(false)}
              className="absolute top-4 right-4 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full z-10"
            >
              <X size={24} />
            </button>
            
            {/* Okładka na pełnym ekranie */}
            <div className="h-[85vh] max-h-full flex items-center justify-center">
              <motion.img
                src={coverImage}
                alt={`Okładka książki ${title}`}
                className="max-h-full max-w-full object-contain"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            
            {/* Informacje o książce na dole */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
              <h2 className="text-2xl font-serif text-white">{title}</h2>
              <p className="text-gray-300">{author}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}