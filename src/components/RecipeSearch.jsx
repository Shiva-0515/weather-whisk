import { useState } from "react";

function RecipeSearch({ onMealsFetched , setRecipeIngredient }) {
  const [ingredient, setIngredient] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!ingredient) return;
    setLoading(true);
    
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await res.json();

      if (!data.meals) {
        alert("No recipes found!");
        onMealsFetched([]);
        setRecipeIngredient("Explore");
      } else {
        onMealsFetched(data.meals);
        setRecipeIngredient(ingredient);
      }
    } catch (err) {
      console.error(err);
      alert("Error fetching recipes");
    }

    setLoading(false);
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="Enter ingredient..."
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
        className="border rounded-lg px-3 py-2 w-full focus:outline-none"
      />
      <button
        onClick={handleSearch}
        disabled={loading}
        className="bg-green-600 text-white px-4 py-2 rounded-lg"
      >
        {loading ? "Loading..." : "Search"}
      </button>
    </div>
  );
}

export default RecipeSearch;
