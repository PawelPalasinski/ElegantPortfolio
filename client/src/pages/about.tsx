import { AnimatedText } from "@/components/ui/animated-text";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedText
            text="O Autorze"
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="aspect-[3/4] relative"
            >
              <img
                src="/images/author-photo.jpg"
                alt="Zdjęcie autorki"
                className="rounded-lg shadow-lg object-cover w-full h-full"
              />
            </motion.div>

            <div className="space-y-6">
              <AnimatedText
                text="Ożywianie Historii"
                className="text-2xl font-semibold"
                delay={0.2}
              />

              <AnimatedText
                text="Marcela Palas urodziła się, wychowała i mieszka w Krakowie. Jej dzieciństwo przypadło na lata 90-te, dzięki czemu miała szczęście spędzić je beztrosko pośród rówieśników na zabawach pod przysłowiowym blokiem oraz zaczytując się wszystkim, co wpadło jej w ręce. Studiowała na Wydziale Filozoficznym Uniwersytetu Jagiellońskiego na kulturoznawczym kierunku Porównawcze Studia Cywilizacji. Po ukończeniu studiów przez kilka lat pracowała w branży zajmującej się sprzedażą i wynajmem nieruchomości. Aktualnie zajmuje się dzieleniem czasu pomiędzy wychowaniem dwójki małych urwisów, Eryka i Olafa, oraz twórczym pisaniem."
                className="text-muted-foreground font-serif"
                delay={0.4}
              />

              <AnimatedText
                text="Prywatnie – pasjonatka literatury i popkultury, o zacięciu kolekcjonerskim. Wraz z mężem metodycznie powiększa księgozbiór literatury fantasy i sci-fi, kolekcję ponad kilkuset komiksów i figurek Funko Pop. W wolnych chwilach uwielbia rodzinne rywalizacje w grach planszowych oraz wycieczki poza miasto. Wilcza Paproć jest jej debiutem literackim. 
"
                className="text-muted-foreground font-serif"
                delay={0.6}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}