import { motion } from "framer-motion";
import { AnimatedText } from "@/components/ui/animated-text";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1503455637927-730bce8583c0')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.1
          }}
        />

        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <AnimatedText
              text="Tworzenie inspirujących historii"
              className="text-5xl md:text-7xl font-bold mb-6"
            />
            <AnimatedText
              text="Nagradzany autor, który ożywia wyobraźnię poprzez wciągające narracje i niezapomniane postacie."
              className="text-xl md:text-2xl text-muted-foreground mb-8"
              delay={0.4}
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Link href="/books">
                <Button size="lg" className="mr-4">
                  Odkryj książki
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  Skontaktuj się
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}