import { BookCard } from "@/components/ui/book-card";
import { AnimatedText } from "@/components/ui/animated-text";

const books = [
  {
    title: "The Silent Echo",
    description: "A journey through time and memory",
    imageUrl: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73"
  },
  {
    title: "Whispers in the Dark",
    description: "A psychological thriller that keeps you guessing",
    imageUrl: "https://images.unsplash.com/photo-1555252586-d77e8c828e41"
  },
  {
    title: "The Last Page",
    description: "Where reality meets fiction",
    imageUrl: "https://images.unsplash.com/photo-1612969308146-066d55f37ccb"
  },
  {
    title: "Beyond the Horizon",
    description: "An epic tale of adventure and discovery",
    imageUrl: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666"
  },
  {
    title: "The Forgotten Path",
    description: "A story of redemption and hope",
    imageUrl: "https://images.unsplash.com/photo-1521105993401-3a51411aff9e"
  },
  {
    title: "Morning Light",
    description: "Finding beauty in everyday moments",
    imageUrl: "https://images.unsplash.com/photo-1459369510627-9efbee1e6051"
  }
];

export default function Books() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <AnimatedText
          text="Published Works"
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        />
        <AnimatedText
          text="Explore my collection of published books"
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
