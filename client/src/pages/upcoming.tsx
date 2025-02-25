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
              <Card>
                <div className="md:grid md:grid-cols-2 gap-6">
                  <div className="aspect-[16/9] md:aspect-square relative">
                    <img
                      src={release.imageUrl}
                      alt={release.title}
                      className="object-cover w-full h-full rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl">{release.title}</CardTitle>
                    <div className="flex items-center text-muted-foreground mt-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      {release.date}
                    </div>
                    <CardContent className="px-0">
                      <p className="text-muted-foreground">{release.description}</p>
                    </CardContent>
                  </CardHeader>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}