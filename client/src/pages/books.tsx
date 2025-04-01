import { AnimatedText } from "@/components/ui/animated-text";
import { BookDetail } from "@/components/ui/book-detail";
import { FernPattern } from "@/components/ui/fern-pattern";
import { useState } from "react";
import { motion } from "framer-motion";

// Obecna książka
const currentBook = {
  title: "Szepty w Ciemności",
  author: "Marta Pankonin",
  coverImage: "https://images.unsplash.com/photo-1555252586-d77e8c828e41?q=80&w=1974&auto=format&fit=crop",
  description: `"Szepty w Ciemności" to fascynująca opowieść o tajemnicach ukrytych w starym, zapomnianym dworku na skraju wsi. 
  
  Główna bohaterka, Anna, wraca do rodzinnej miejscowości po latach nieobecności, aby uporządkować sprawy po zmarłej babci. W opuszczonym domu odkrywa stary dziennik, który prowadzi ją do sekretów sprzed lat.
  
  W miarę jak zagłębia się w historię swojej rodziny, zaczyna doświadczać niewytłumaczalnych zjawisk. Czy to tylko wytwór jej wyobraźni, czy może duch przeszłości domaga się sprawiedliwości? A może tajemnice powinny zostać nieodkryte?
  
  Powieść łączy elementy thrillera psychologicznego z subtelnymi wątkami paranormalnymi, tworząc intrygującą historię o pamięci, winie i odkupieniu.`,
  publishDate: "2023-10-15",
  pages: 342,
  genre: ["Thriller psychologiczny", "Tajemnica", "Literatura polska"],
  rating: 4.7,
  buyLink: "#",
  previewPdf: "#",
  previewMobi: "#"
};

// Nadchodzące książki (przyszłe wydania)
const upcomingBooks = [
  {
    title: "Zapomniana Ścieżka",
    description: "Historia o odkupieniu i nadziei, wydanie już wkrótce",
    imageUrl: "https://images.unsplash.com/photo-1521105993401-3a51411aff9e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Za Horyzontem",
    description: "Epicka opowieść o przygodzie i odkryciach",
    imageUrl: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function Books() {
  const [showUpcoming, setShowUpcoming] = useState(false);

  return (
    <div className="min-h-screen py-16 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <FernPattern />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedText
          text="Moje Książki"
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        />
        <AnimatedText
          text={showUpcoming ? "Przygotowywane do wydania" : "Aktualnie dostępne dzieła"}
          className="text-xl text-muted-foreground text-center mb-16"
          delay={0.2}
        />

        {/* Przycisk przełączania widoku */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center rounded-full border p-1 text-muted-foreground">
            <button
              onClick={() => setShowUpcoming(false)}
              className={`px-4 py-2 rounded-full text-sm ${!showUpcoming ? 'bg-primary text-primary-foreground' : ''}`}
            >
              Wydane
            </button>
            <button
              onClick={() => setShowUpcoming(true)}
              className={`px-4 py-2 rounded-full text-sm ${showUpcoming ? 'bg-primary text-primary-foreground' : ''}`}
            >
              Nadchodzące
            </button>
          </div>
        </div>

        <motion.div
          key={showUpcoming ? "upcoming" : "current"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {!showUpcoming ? (
            // Bieżąca książka ze szczegółami
            <BookDetail {...currentBook} />
          ) : (
            // Komunikat o nadchodzących książkach
            <div className="p-8 bg-card rounded-lg shadow-lg border border-border">
              <h2 className="text-2xl font-serif mb-6 text-center">
                Książki w przygotowaniu
              </h2>
              <p className="text-center text-muted-foreground mb-10">
                Obecnie pracuję nad nowymi książkami, które zostaną wydane w najbliższej przyszłości.
                Poniżej znajdziesz informacje o projektach, nad którymi pracuję.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {upcomingBooks.map((book, index) => (
                  <motion.div
                    key={book.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { delay: index * 0.2 } 
                    }}
                    className="rounded-lg overflow-hidden bg-background shadow-md border border-border"
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={book.imageUrl} 
                        alt={book.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-serif mb-2">{book.title}</h3>
                      <p className="text-muted-foreground">{book.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}