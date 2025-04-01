import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useInView } from "@/hooks/use-intersection";

interface BookCardProps {
  title: string;
  description: string;
  imageUrl: string;
  delay?: number;
}

export function BookCard({ title, description, imageUrl, delay = 0 }: BookCardProps) {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
        <div className="aspect-[2/3] relative">
          <img
            src={imageUrl}
            alt={title}
            className="object-cover w-full h-full"
          />
        </div>
        <CardHeader>
          <CardTitle className="font-serif">{title}</CardTitle>
          <CardDescription className="font-serif">{description}</CardDescription>
        </CardHeader>
      </Card>
    </motion.div>
  );
}
