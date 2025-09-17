import { useState } from "react";

function WeatherSearch({ onWeatherFetched , setSelectedCity }) {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!city) return;
    setLoading(true);

    try {
      // 1. Convert city → lat/lon using Open-Meteo geocoding
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
      );
      const geoData = await geoRes.json();

      if (!geoData.results || geoData.results.length === 0) {
        alert("City not found!");
        setLoading(false);
        return;
      }

      const { latitude, longitude, name, country } = geoData.results[0];

      // 2. Fetch weather for that location
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=temperature_2m_max&timezone=auto`
      );
      const weatherData = await weatherRes.json();

      const weather = {
        city: `${name}, ${country}`,
        temperature: weatherData.current_weather.temperature,
        description: `Windspeed: ${weatherData.current_weather.windspeed} km/h`,
        forecast: weatherData.daily.time.slice(0, 5).map((day, i) => ({
          day: new Date(day).toLocaleDateString("en-US", { weekday: "short" }),
          temp: weatherData.daily.temperature_2m_max[i],
        })),
      };

      onWeatherFetched(weather);
        setSelectedCity(name);
    } catch (err) {
      console.error(err);
      alert("Error fetching weather data");
        setSelectedCity("Explore");
    }

    setLoading(false);
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="border rounded-lg px-3 py-2 w-full focus:outline-none"
      />
      <button
        onClick={handleSearch}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        {loading ? "Loading..." : "Search"}
      </button>
    </div>
  );
}

export default WeatherSearch;
