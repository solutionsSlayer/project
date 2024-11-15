"use client";

import { useEffect, useState } from "react";
import { Recipe } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Loader2 } from "lucide-react";

export default function RandomRecipePage() {
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchRandomRecipe = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
      const data = await response.json();
      setRecipe(data.meals[0]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomRecipe();
  }, []);

  if (loading || !recipe) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Random Recipe</h1>
        <Button onClick={fetchRandomRecipe}>Get Another Recipe</Button>
      </div>

      <div className="relative h-96">
        <Image
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 1200px) 100vw, 1200px"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-4xl font-bold">{recipe.strMeal}</h2>
        <div className="flex gap-4 text-sm text-muted-foreground">
          <p>Category: {recipe.strCategory}</p>
          <p>Cuisine: {recipe.strArea}</p>
        </div>
      </div>

      <Card>
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4">Instructions</h3>
          <div className="prose max-w-none">
            {recipe.strInstructions.split("\n").map((step, index) => (
              <p key={index} className="mb-4">
                {step}
              </p>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}