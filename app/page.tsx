import { getLatestMeals } from "@/lib/api";
import { AnimatedCard } from "@/components/AnimatedCard";
import { PageTitle } from "@/components/PageTitle";

export default async function Home() {
  const meals = await getLatestMeals();

  return (
    <div className="space-y-8">
      <PageTitle>Featured Recipes</PageTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {meals.map((meal, index) => (
          <AnimatedCard
            key={meal.idMeal}
            id={meal.idMeal}
            title={meal.strMeal}
            image={meal.strMealThumb}
            category={meal.strCategory}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}