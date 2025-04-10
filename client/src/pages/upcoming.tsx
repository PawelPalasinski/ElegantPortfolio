import { AnimatedText } from "@/components/ui/animated-text";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const upcomingReleases = [
  {
    title: "Zimowa Opowieść",
    date: "Jesień 2024",
    description: "Tajemnicza podróż przez ośnieżone krajobrazy Norwegii",
    imageUrl: "https://images.unsplash.com/photo-1487088678257-3a541e6e3922"
  },
  {
    title: "Echa Jutra",
    date: "Zima 2024",
    description: "Thriller sci-fi, który kwestionuje naturę rzeczywistości",
    imageUrl: "https://images.unsplash.com/photo-1645785328498-fc3483dc7b2d"
  }
];

export default function Upcoming() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <AnimatedText
          text="Nadchodzące Premiery"
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        />
        <AnimatedText
          text="Zobacz, co pojawi się wkrótce"
          className="text-xl text-muted-foreground text-center mb-16"
          delay={0.2}
        />

        <div className="max-w-4xl mx-auto grid gap-8">
          {upcomingReleases.map((release, index) => (
            <motion.div
              key={release.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="overflow-hidden">
                <div className="p-8 flex flex-col lg:flex-row gap-10">
                  <div className="lg:w-1/3 flex flex-col items-center">
                    <div className="relative overflow-hidden rounded-lg shadow-2xl w-full max-w-sm mb-6">
                      <img
                        src={release.imageUrl}
                        alt={release.title}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <div className="flex items-center text-muted-foreground mt-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      {release.date}
                    </div>
                  </div>
                  <div className="lg:w-2/3">
                    <h1 className="text-3xl md:text-4xl font-serif mb-2">{release.title}</h1>
                    <p className="text-muted-foreground mt-6">{release.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}