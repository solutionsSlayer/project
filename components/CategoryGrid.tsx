"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import type { Category } from "@/lib/types";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

interface CategoryGridProps {
  categories: Category[];
}

export function CategoryGrid({ categories }: CategoryGridProps) {
  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {categories.map((category) => (
        <motion.div key={category.idCategory} variants={item}>
          <Link href={`/categories/${category.strCategory}`}>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <motion.div 
                className="relative h-48"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src={category.strCategoryThumb}
                  alt={category.strCategory}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </motion.div>
              <CardHeader>
                <CardTitle>{category.strCategory}</CardTitle>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {category.strCategoryDescription}
                </p>
              </CardHeader>
            </Card>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}