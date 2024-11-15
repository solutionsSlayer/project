"use client";

import Image from "next/image";
import { getMealById } from "@/lib/api";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default async function RecipePage({
  params,
}: {
  params: { id: string };
}) {
  const recipe = await getMealById(params.id);

  const ingredients = Object.keys(recipe)
    .filter((key) => key.startsWith("strIngredient") && recipe[key])
    .map((key, index) => ({
      ingredient: recipe[key],
      measure: recipe[`strMeasure${index + 1}`],
    }));

  return (
    <motion.div 
      className="max-w-4xl mx-auto space-y-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="relative h-96"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 1200px) 100vw, 1200px"
        />
      </motion.div>

      <motion.div 
        className="space-y-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h1 className="text-4xl font-bold">{recipe.strMeal}</h1>
        <div className="flex gap-4 text-sm text-muted-foreground">
          <p>Category: {recipe.strCategory}</p>
          <p>Cuisine: {recipe.strArea}</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
            <ul className="grid grid-cols-2 gap-2">
              {ingredients.map(({ ingredient, measure }, index) => (
                <motion.li 
                  key={index} 
                  className="flex gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <span className="font-medium">{ingredient}:</span>
                  <span>{measure}</span>
                </motion.li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
            <div className="prose max-w-none">
              {recipe.strInstructions.split("\n").map((step, index) => (
                <motion.p 
                  key={index} 
                  className="mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (0.1 * index) }}
                >
                  {step}
                </motion.p>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}