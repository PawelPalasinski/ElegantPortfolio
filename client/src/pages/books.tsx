import { AnimatedText } from "@/components/ui/animated-text";
import { BookDetail } from "@/components/ui/book-detail";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

import { useState } from "react";
import { motion } from "framer-motion";

// Obecna książka
const currentBook = {
  title: "Wilcza Paproć",
  author: "Marcela Pałas",
  coverImage: "/images/book-cover-1.jpg",
  description: `Kiedy Lenne Ashen, niepokorna córka władcy Sawady, dowiaduje się, że ojciec chce wydać ją za mąż za księcia sąsiadującej krainy, myśli, że jej świat się właśnie skończył. Książę Bluewater, powszechnie znany jako groźny Sinobrody, cieszy się złą sławą, a jego osiem poprzednich żon zginęło w niewyjaśnionych okolicznościach. Los Lenne został jednak przesądzony. Młoda dziewczyna wyrusza w podróż do księstwa Kaspii pełna najgorszych przeczuć. Tam czeka na nią jej nowy dom – zamek Sinych Wód, ponura twierdza ukryta głęboko pośród nieprzystępnych moczarów i otoczona jeszcze bardziej niebezpieczną Olszową Puszczą. Spowitym wieczną mgłą lesie, pełnym magii i morderczych sekretów…`,
  publishDate: "2025-05-25",
  pages: 350,
  genre: ["Retelling", "Romantasy", "Gotycki Horror"],
  // rating: 4.7,
  buyLink: "#",
  previewPdf: "#",
  previewMobi: "#"
};

// Nadchodzące książki (przyszłe wydania)
const upcomingBooks = [
  {
    title: "Róże z piasku",
    description: "PEŁNA SPISKÓW I DWORSKICH INTRYG PRZYGODA INSPIROWANA BAŚNIĄ O LAMPIE ALADYNA. Torlaf Ashen zostaje zaręczony z córką władcy Tis-Ahany, księżniczką Alyasmin. By poznać przyszłą małżonkę wyrusza do Fatan, spalonej słońcem stolicy piaszczystej krainy. Tam, w otoczeniu dworskich spisków i nieprzychylnych mu intrygantów, musi zmierzyć się nie tylko z własnym przeznaczeniem, ale i dawno zapomnianą przepowiednią. A wszystko skomplikuje się jeszcze bardziej, gdy na drodze staną mu przewodząca rebelii zamaskowana złodziejka i…jego własny bliźniak. Arien Ashen ucieka od własnego losu, odpowiedzialności i wyrzutów sumienia. Gonią go własne demony, a do przodu pcha go tylko jedno… zemsta. Gdy dociera do Tis-Ahany bez zastanowienia dołącza do Kolców, złodzeji, którzy wypowiedzieli niepisaną wojnę wezyrowi Al-Jafiemu. Nie ma nic do stracenia, a wiele do zyskania, szczególnie, gdy do jego rąk trafi spełniająca życzenia lampa…",
    imageUrl: "/images/book-upcoming-1.jpg"
  }
];

export default function Books() {
  const [showUpcoming, setShowUpcoming] = useState(false);
  const [showFullImage, setShowFullImage] = useState(false);

  return (
    <div className="min-h-screen py-16 relative overflow-hidden">

      
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
              <p className="text-center text-muted-foreground mb-10 font-serif">
                Obecnie pracuję nad nowymi książkami, które zostaną wydane w najbliższej przyszłości.
                Poniżej znajdziesz informacje o projektach, nad którymi pracuję.
              </p>
              
              {upcomingBooks.map((book, index) => (
                <motion.div
                  key={book.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: index * 0.2 } 
                  }}
                  className="p-8 flex flex-col lg:flex-row gap-10 bg-card rounded-lg shadow-lg border border-border mb-8"
                >
                  <div className="lg:w-1/3 flex flex-col items-center">
                    <div 
                      className="relative overflow-hidden rounded-lg shadow-2xl w-full max-w-sm mb-6 cursor-pointer"
                      onClick={() => setShowFullImage(true)}
                    >
                      <motion.img
                        src={book.imageUrl}
                        alt={book.title}
                        className="w-full h-auto object-cover"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                        <span className="text-white text-sm font-bold">Kliknij, aby powiększyć</span>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-2/3">
                    <h3 className="text-3xl md:text-4xl font-serif mb-2">{book.title}</h3>
                    <p className="text-muted-foreground mt-6 font-serif">{book.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Dialog dla pełnoekranowego podglądu */}
        <Dialog open={showFullImage} onOpenChange={setShowFullImage}>
          <DialogContent className="max-w-6xl w-full h-[90vh] bg-black/90 border-none p-0">
            <div className="relative h-full w-full flex items-center justify-center">
              <button 
                onClick={() => setShowFullImage(false)}
                className="absolute top-4 right-4 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full z-10"
              >
                <X size={24} />
              </button>
              
              <div className="h-[85vh] max-h-full flex items-center justify-center">
                <motion.img
                  src={upcomingBooks[0]?.imageUrl}
                  alt={upcomingBooks[0]?.title}
                  className="max-h-full max-w-full object-contain"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                <h2 className="text-2xl font-serif text-white">{upcomingBooks[0]?.title}</h2>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}