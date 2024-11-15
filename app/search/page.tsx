import { searchMeals } from "@/lib/api";
import { RecipeCard } from "@/components/RecipeCard";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q: string };
}) {
  const meals = await searchMeals(searchParams.q);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">
        Search Results for "{searchParams.q}"
      </h1>
      {meals.length === 0 ? (
        <p className="text-muted-foreground">No recipes found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {meals.map((meal) => (
            <RecipeCard
              key={meal.idMeal}
              id={meal.idMeal}
              title={meal.strMeal}
              image={meal.strMealThumb}
              category={meal.strCategory}
            />
          ))}
        </div>
      )}
    </div>
  );
}