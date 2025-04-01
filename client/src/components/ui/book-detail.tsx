import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileText, ShoppingCart, Star, File } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
  rating = 4.5,
  buyLink = "#",
  previewPdf = "#",
  previewMobi = "#"
}: BookDetailProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col lg:flex-row gap-10 bg-card rounded-lg overflow-hidden shadow-lg border border-border"
    >
      {/* Lewa kolumna - okładka */}
      <div className="lg:w-1/3 p-8 flex flex-col items-center">
        <div className="relative overflow-hidden rounded-lg shadow-2xl w-full max-w-sm mb-6">
          <motion.img
            src={coverImage}
            alt={`Okładka książki ${title}`}
            className="w-full h-auto object-cover"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Nakładka z gradientem */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 w-full p-4">
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
            <div className="prose prose-lg dark:prose-invert">
              <p>{description}</p>
            </div>
          </TabsContent>
          
          <TabsContent value="preview">
            <div className="rounded-lg bg-primary/5 p-6 mb-4">
              <h3 className="text-lg font-medium mb-4">Pobierz fragment książki</h3>
              <p className="mb-6 text-muted-foreground">
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
  );
}