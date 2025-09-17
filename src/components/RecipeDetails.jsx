import { useState, useEffect } from "react";

export default function RecipeDetail({ recipe }) {
  const [fullRecipe, setFullRecipe] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!recipe) {
      setFullRecipe(null);
      return;
    }

    const fetchFullRecipe = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipe.idMeal}`);
        const data = await res.json();
        setFullRecipe(data.meals[0]);
      } catch (err) {
        console.error("Error fetching recipe details:", err);
        setFullRecipe(null);
      } finally {
        setLoading(false);
      }
    };

    fetchFullRecipe();
  }, [recipe]);

  if (!recipe) return <div className="text-gray-500">Select a recipe to see details.</div>;
  if (loading) return <div className="text-gray-500">Loading recipe details...</div>;
  if (!fullRecipe) return <div className="text-gray-500">Failed to load recipe details.</div>;

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <img src={fullRecipe.strMealThumb} alt={fullRecipe.strMeal} className="h-1/2 rounded-md mb-4" />
      <h2 className="text-xl font-bold mb-2">{fullRecipe.strMeal}</h2>

      <h3 className="font-semibold">Ingredients</h3>
      <ul className="list-disc ml-5 mb-4">
        {Object.keys(fullRecipe)
          .filter((key) => key.startsWith("strIngredient") && fullRecipe[key])
          .map((key, idx) => (
            <li key={idx}>{fullRecipe[key]}</li>
          ))}
      </ul>

      <h3 className="font-semibold">Instructions</h3>
      <p className="text-sm text-gray-700">{fullRecipe.strInstructions}</p>
    </div>
  );
}
