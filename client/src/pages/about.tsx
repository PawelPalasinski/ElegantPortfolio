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
                src="/attached_assets/_8988a4dc-dd51-447c-b7fb-aa47adb4ed8b.jpeg"
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
                text="Z ponad dziesięcioletnim doświadczeniem w tworzeniu wciągających narracji, poświęciłam życie sztuce opowiadania historii. Moja praca obejmuje różne gatunki, od fikcji współczesnej po powieści historyczne, każda starannie napisana, by stworzyć niezapomniane doświadczenia dla czytelników."
                className="text-muted-foreground font-serif"
                delay={0.4}
              />

              <AnimatedText
                text="Moja podróż jako autorki rozpoczęła się w cichych zakątkach lokalnych bibliotek i przerodziła się w pasję tworzenia światów, w których czytelnicy mogą się zatracić. Każda książka reprezentuje nie tylko historię, ale nową przygodę, nową perspektywę i nowy sposób patrzenia na świat."
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