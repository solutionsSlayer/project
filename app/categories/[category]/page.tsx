import { getMealsByCategory } from "@/lib/api";
import { RecipeCard } from "@/components/RecipeCard";

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const meals = await getMealsByCategory(params.category);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">{params.category} Recipes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {meals.map((meal: any) => (
          <RecipeCard
            key={meal.idMeal}
            id={meal.idMeal}
            title={meal.strMeal}
            image={meal.strMealThumb}
          />
        ))}
      </div>
    </div>
  );
}