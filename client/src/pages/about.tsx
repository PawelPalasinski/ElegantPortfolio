import { AnimatedText } from "@/components/ui/animated-text";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedText
            text="About the Author"
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          />
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1499557354967-2b2d8910bcca"
                alt="Author portrait"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            
            <div className="space-y-6">
              <AnimatedText
                text="Bringing Stories to Life"
                className="text-2xl font-semibold"
                delay={0.2}
              />
              
              <AnimatedText
                text="With over a decade of experience in crafting compelling narratives, I've dedicated my life to the art of storytelling. My work spans multiple genres, from contemporary fiction to historical novels, each piece carefully crafted to create immersive experiences for readers."
                className="text-muted-foreground"
                delay={0.4}
              />
              
              <AnimatedText
                text="My journey as an author began in the quiet corners of local libraries and has since evolved into a passionate pursuit of creating worlds that readers can lose themselves in. Each book represents not just a story, but a new adventure, a new perspective, and a new way of seeing the world."
                className="text-muted-foreground"
                delay={0.6}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
