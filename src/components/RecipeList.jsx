export default function RecipeList({ meals, onSelect }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {meals.map((meal) => (
        <div
          key={meal.idMeal}
          className="bg-white rounded-lg shadow hover:scale-105 transition cursor-pointer"
          onClick={() => onSelect(meal)}
        >
          <img src={meal.strMealThumb} alt={meal.strMeal} className="rounded-t-lg" />
          <h3 className="p-2 font-semibold">{meal.strMeal}</h3>
        </div>
      ))}
    </div>
  );
}
