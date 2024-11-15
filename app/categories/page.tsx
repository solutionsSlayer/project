import { getCategories } from "@/lib/api";
import { PageTitle } from "@/components/PageTitle";
import { CategoryGrid } from "@/components/CategoryGrid";

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <div className="space-y-8">
      <PageTitle>Recipe Categories</PageTitle>
      <CategoryGrid categories={categories} />
    </div>
  );
}