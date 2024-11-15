"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

interface AnimatedCardProps {
  id: string;
  title: string;
  image: string;
  category?: string;
  index: number;
}

export function AnimatedCard({ id, title, image, category, index }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link href={`/recipe/${id}`}>
        <Card className="overflow-hidden hover:shadow-lg transition-shadow">
          <motion.div
            className="relative h-48"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>
          <CardHeader>
            <CardTitle className="text-lg line-clamp-2">{title}</CardTitle>
            {category && (
              <motion.p 
                className="text-sm text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {category}
              </motion.p>
            )}
          </CardHeader>
        </Card>
      </Link>
    </motion.div>
  );
}