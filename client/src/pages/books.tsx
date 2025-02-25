import { BookCard } from "@/components/ui/book-card";
import { AnimatedText } from "@/components/ui/animated-text";

const books = [
  {
    title: "Cichy Echo",
    description: "Podróż przez czas i pamięć",
    imageUrl: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73"
  },
  {
    title: "Szepty w Ciemności",
    description: "Thriller psychologiczny, który trzyma w napięciu",
    imageUrl: "https://images.unsplash.com/photo-1555252586-d77e8c828e41"
  },
  {
    title: "Ostatnia Strona",
    description: "Gdzie rzeczywistość spotyka fikcję",
    imageUrl: "https://images.unsplash.com/photo-1612969308146-066d55f37ccb"
  },
  {
    title: "Za Horyzontem",
    description: "Epicka opowieść o przygodzie i odkryciach",
    imageUrl: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666"
  },
  {
    title: "Zapomniana Ścieżka",
    description: "Historia o odkupieniu i nadziei",
    imageUrl: "https://images.unsplash.com/photo-1521105993401-3a51411aff9e"
  },
  {
    title: "Poranny Blask",
    description: "Odkrywanie piękna w codziennych chwilach",
    imageUrl: "https://images.unsplash.com/photo-1459369510627-9efbee1e6051"
  }
];

export default function Books() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <AnimatedText
          text="Opublikowane Dzieła"
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        />
        <AnimatedText
          text="Odkryj moją kolekcję opublikowanych książek"
          className="text-xl text-muted-foreground text-center mb-16"
          delay={0.2}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book, index) => (
            <BookCard
              key={book.title}
              {...book}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}