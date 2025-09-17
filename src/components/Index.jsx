// import { useState } from "react";
// import { Search } from "lucide-react";
// import WeatherSearch from "./WeatherSearch";
// import RecipeSearch from "./RecipeSearch";
// import heroBackground from "../assets/hero-background.jpg";

// export default function Index() {
//   const [activeTab, setActiveTab] = useState("home");
//   const [weatherCity, setWeatherCity] = useState("");
//   const [recipeIngredient, setRecipeIngredient] = useState("");

//   const handleWeatherSearch = () => {
//     if (weatherCity.trim()) {
//       setActiveTab("weather");
//     }
//   };

//   const handleRecipeSearch = () => {
//     if (recipeIngredient.trim()) {
//       setActiveTab("recipes");
//     }
//   };

//   if (activeTab === "weather") {
//     return (
//       <div
//         className="min-h-screen"
//         style={{
//           backgroundImage: `linear-gradient(rgba(135, 206, 235, 0.3), rgba(135, 206, 235, 0.3)), url(${heroBackground})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="container mx-auto px-4 py-8">
//           <div className="flex items-center gap-4 mb-8">
//             <button
//               onClick={() => setActiveTab("home")}
//               className="text-white hover:bg-white/20 px-4 py-2 rounded"
//             >
//               ← Back to Home
//             </button>
//             <h1 className="text-3xl font-bold text-white">Weather Now</h1>
//           </div>
//           <WeatherSearch />
//         </div>
//       </div>
//     );
//   }

//   if (activeTab === "recipes") {
//     return (
//       <div
//         className="min-h-screen"
//         style={{
//           backgroundImage: `linear-gradient(rgba(255, 165, 0, 0.3), rgba(255, 165, 0, 0.3)), url(${heroBackground})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="container mx-auto px-4 py-8">
//           <div className="flex items-center gap-4 mb-8">
//             <button
//               onClick={() => setActiveTab("home")}
//               className="text-white hover:bg-white/20 px-4 py-2 rounded"
//             >
//               ← Back to Home
//             </button>
//             <h1 className="text-3xl font-bold text-white">Recipe Ideas</h1>
//           </div>
//           <RecipeSearch />
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div
//       className="min-h-screen w-full flex flex-col"
//       style={{
//         backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroBackground})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Navigation */}
//       <header className="backdrop-blur-sm bg-white/10 border-b border-white/20">
//         <div className="w-full mx-auto px-4 py-4">
//           <nav className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
//             <div className="flex items-center gap-2">
//               <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
//                 <span className="font-bold text-blue-500 text-sm">W</span>
//               </div>
//               <span className="text-xl font-bold text-white">
//                 Weather & Whisk
//               </span>
//             </div>

//             <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
//               <button className="text-white hover:text-white/80 transition-colors w-full md:w-auto">
//                 About
//               </button>
//               <button className="text-white hover:text-white/80 transition-colors w-full md:w-auto">
//                 Features
//               </button>
//               <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded w-full md:w-auto">
//                 Contact
//               </button>
//             </div>
//           </nav>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
//         <div className="text-center mb-8 md:mb-16">
//           <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
//             Your Daily Dose of
//             <br />
//             <span className="text-transparent bg-gradient-to-r from-blue-300 to-orange-300 bg-clip-text">
//               Weather & Whisk
//             </span>
//           </h1>
//         </div>

//         {/* Search Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl w-full">
//           {/* Weather Search */}
//           <div className="p-4 sm:p-6 md:p-8 bg-white/90 rounded-lg shadow hover:bg-white/95 transition-all">
//             <h2 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">
//               Find Weather by City
//             </h2>
//             <p className="text-gray-500 mb-4 md:mb-6 text-xs md:text-sm">
//               e.g. London, Paris, Tokyo
//             </p>
//             <div className="flex flex-col sm:flex-row gap-2">
//               {/* <input
//                 placeholder="Enter city name..."
//                 value={weatherCity}
//                 onChange={(e) => setWeatherCity(e.target.value)}
//                 onKeyDown={(e) => e.key === "Enter" && handleWeatherSearch()}
//                 className="flex-1 border rounded px-3 py-2"
//               /> */}
//               <p className="text-lg md:text-xl font-semibold mb-2 md:mb-4">Search Weather</p>
//               <button
//                 onClick={handleWeatherSearch}
//                 className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
//               >
//                 <Search className="w-4 h-4" />
//               </button>
//             </div>
//           </div>

//           {/* Recipe Search */}
//           <div className="p-4 sm:p-6 md:p-8 bg-white/90 rounded-lg shadow hover:bg-white/95 transition-all">
//             <h2 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">
//               Discover Recipes by Ingredients
//             </h2>
//             <p className="text-gray-500 mb-4 md:mb-6 text-xs md:text-sm">
//               e.g. chicken, pasta, tomatoes
//             </p>
//             <div className="flex flex-col sm:flex-row gap-2">
//               <input
//                 placeholder="Enter ingredients..."
//                 value={recipeIngredient}
//                 onChange={(e) => setRecipeIngredient(e.target.value)}
//                 onKeyDown={(e) => e.key === "Enter" && handleRecipeSearch()}
//                 className="flex-1 border rounded px-3 py-2"
//               />
//               <button
//                 onClick={handleRecipeSearch}
//                 className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded"
//               >
//                 <Search className="w-4 h-4" />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Description */}
//         <div className="text-center mt-8 md:mt-16">
//           <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto">
//             Get instant weather updates and recipe ideas
//             <br />
//             tailored to your pantry.
//           </p>
//         </div>
//       </main>
//     </div>
//   );
// }
import { useState } from "react";
import { Search } from "lucide-react";
import RecipeSearch from "./RecipeSearch";
import RecipeList from "./RecipeList";
// import RecipesTab from "./RecipeTab";
import RecipeDetail from "./RecipeDetails";
import WeatherSearch from "./WeatherSearch";
import WeatherCard from "./WeatherCard";
import heroBackground from "../assets/hero-background.jpg";

export default function Index() {
  const [activeTab, setActiveTab] = useState("home");
  const [weather , setWeather] = useState(null);
  const [meals, setMeals] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [recipeIngredient, setRecipeIngredient] = useState("Explore");
  const [selectedMeal, setSelectedMeal] = useState(null);

  if (activeTab === "weather") {
    return (
      <div
        className="min-h-screen"
        style={{
          backgroundImage: `linear-gradient(rgba(135, 206, 235, 0.3), rgba(135, 206, 235, 0.3)), url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full px-4 py-8">
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={() => setActiveTab("home")}
              className="text-white hover:bg-white/20 px-4 py-2 rounded"
            >
              ← Back to Home
            </button>
            <h1 className="text-3xl font-bold text-white">{selectedCity} Weather Now</h1>
          </div>
           <WeatherSearch onWeatherFetched={setWeather} setSelectedCity = {setSelectedCity}/>

          {weather && <WeatherCard weather={weather} />}
        </div>
      </div>
    );
  }

  if (activeTab === "recipes") {
    return (
      <div
        className="min-h-screen"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 165, 0, 0.3), rgba(255, 165, 0, 0.3)), url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full px-4 py-8">
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={() => setActiveTab("home")}
              className="text-white hover:bg-white/20 px-4 py-2 rounded"
            >
              ← Back to Home
            </button>
            <h1 className="text-3xl font-bold text-white">{recipeIngredient} Recipe Ideas</h1>
          </div>
          {/* Search bar */}
          <RecipeSearch onMealsFetched={setMeals} setRecipeIngredient={setRecipeIngredient} />
           
          {/* Grid and details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-30 mt-4">
            {/* Recipe list */}
            <div className="md:col-span-3">
              <RecipeList meals={meals} onSelect={setSelectedMeal} />
            </div>

            {selectedMeal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-3/4 max-w-4xl p-6 relative max-h-[80vh] overflow-hidden">
                    <button
                        onClick={() => setSelectedMeal(null)}
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-lg font-bold"
                    >
                        ✕
                    </button>
                    <div className="overflow-y-auto max-h-[70vh]">
                        <RecipeDetail recipe={selectedMeal} />
                    </div>
                    </div>
                </div>
                )}

          </div>
        </div>
      </div>
    );
  }
 
  return (
    <div
      className="min-h-screen w-full flex flex-col"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Navigation */}
      <header className="backdrop-blur-sm bg-white/10 border-b border-white/20">
        <div className="w-full mx-auto px-4 py-4">
          <nav className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="font-bold text-blue-500 text-sm">W</span>
              </div>
              <span className="text-xl font-bold text-white">
                Weather & Whisk
              </span>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
              <button className="text-white hover:text-white/80 transition-colors w-full md:w-auto">
                About
              </button>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded w-full md:w-auto">
                Contact
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <div className="text-center mb-8 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Your Daily Dose of
            <br />
            <span className="text-transparent bg-gradient-to-r from-blue-300 to-orange-300 bg-clip-text">
              Weather & Whisk
            </span>
          </h1>
        </div>

        {/* Cards for Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl w-full">
          {/* Weather Card */}
          <div className="p-6 md:p-8 bg-white/90 rounded-lg shadow flex items-center justify-between hover:bg-white/95 transition-all">
            <h2 className="text-lg md:text-xl font-semibold">Search Weather</h2>
            <button
              onClick={() => setActiveTab("weather")}
              className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Recipe Card */}
          <div className="p-6 md:p-8 bg-white/90 rounded-lg shadow flex items-center justify-between hover:bg-white/95 transition-all">
            <h2 className="text-lg md:text-xl font-semibold">Search Recipes</h2>
            <button
              onClick={() => setActiveTab("recipes")}
              className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Description */}
        <div className="text-center mt-8 md:mt-16">
          <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto">
            Get instant weather updates and recipe ideas
            <br />
            tailored to your pantry.
          </p>
        </div>
      </main>
    </div>
  );
}
