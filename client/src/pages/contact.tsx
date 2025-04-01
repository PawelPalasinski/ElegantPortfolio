import { AnimatedText } from "@/components/ui/animated-text";
import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <AnimatedText
            text="Kontakt"
            className="text-4xl md:text-5xl font-bold text-center mb-4"
          />
          <AnimatedText
            text="Chętnie odpowiem na Twoje pytania"
            className="text-xl text-muted-foreground text-center mb-16 font-serif"
            delay={0.2}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-center gap-4 text-lg">
                  <Mail className="h-6 w-6" />
                  <a 
                    href="mailto:kontakt@autor.pl" 
                    className="text-primary hover:underline"
                  >
                    kontakt@autor.pl
                  </a>
                </div>
                <p className="text-center mt-4 text-muted-foreground font-serif">
                  Odpowiadam na wszystkie wiadomości w ciągu 48 godzin.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}