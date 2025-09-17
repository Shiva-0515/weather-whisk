export default function RecipeList({ meals, onSelect }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
      {meals.map((meal) => (
        <div
          key={meal.idMeal}
          className="bg-white rounded-lg shadow hover:scale-105 transition cursor-pointer"
          onClick={() => onSelect(meal)}
        >
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="rounded-t-lg w-full h-50 object-cover"
          />
          <h3 className="p-2 font-semibold text-center">{meal.strMeal}</h3>
        </div>
      ))}
    </div>
  );
}
