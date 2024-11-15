const API_BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export async function getRandomMeal() {
  const response = await fetch(`${API_BASE_URL}/random.php`);
  const data = await response.json();
  return data.meals[0];
}

export async function getCategories() {
  const response = await fetch(`${API_BASE_URL}/categories.php`);
  const data = await response.json();
  return data.categories;
}

export async function getMealsByCategory(category: string) {
  const response = await fetch(`${API_BASE_URL}/filter.php?c=${category}`);
  const data = await response.json();
  return data.meals;
}

export async function searchMeals(query: string) {
  const response = await fetch(`${API_BASE_URL}/search.php?s=${query}`);
  const data = await response.json();
  return data.meals || [];
}

export async function getMealById(id: string) {
  const response = await fetch(`${API_BASE_URL}/lookup.php?i=${id}`);
  const data = await response.json();
  return data.meals[0];
}

export async function getLatestMeals() {
  const response = await fetch(`${API_BASE_URL}/search.php?f=b`);
  const data = await response.json();
  return data.meals?.slice(0, 6) || [];
}