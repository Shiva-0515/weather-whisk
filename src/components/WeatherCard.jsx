import { useState } from "react";

export default function WeatherCard({ weather }) {
  const [selectedDayIdx, setSelectedDayIdx] = useState(0);

  // Map weather code → icon + friendly description
  const getWeatherInfo = (code) => {
    if ([0].includes(code)) return { icon: "☀️", text: "Sunny" };
    if ([1, 2].includes(code)) return { icon: "⛅", text: "Partly Cloudy" };
    if ([3].includes(code)) return { icon: "☁️", text: "Cloudy" };
    if ([45, 48].includes(code)) return { icon: "🌫️", text: "Foggy" };
    if ([51, 53, 55, 61, 63, 65].includes(code)) return { icon: "🌧️", text: "Likely to Rain" };
    if ([71, 73, 75, 77, 85, 86].includes(code)) return { icon: "❄️", text: "Snowy" };
    if ([95, 96, 99].includes(code)) return { icon: "⛈️", text: "Thunderstorm" };
    return { icon: "🌤️", text: "Partly Sunny" };
  };

  const selectedDay = weather.forecast[selectedDayIdx];
  const { icon, text } = getWeatherInfo(selectedDay.weathercode);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-md mx-auto text-center">
      {/* City */}
      <div className="text-lg font-semibold text-gray-700 mb-2">{weather.city}</div>

      {/* Temperature + Icon */}
      <div className="flex items-center justify-center gap-2 text-4xl font-bold mb-2">
        <span>{icon}</span>
        <span>{selectedDay.temp}°C</span>
      </div>

      {/* Friendly description */}
      <div className="text-gray-500 mb-4">{text}</div>

      {/* Forecast buttons */}
      <div className="flex justify-between mt-4 text-sm text-gray-600">
        {weather.forecast.map((day, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedDayIdx(idx)}
            className={`flex flex-col items-center p-2 rounded-md ${
              idx === selectedDayIdx ? "bg-blue-100 font-semibold" : "hover:bg-gray-100"
            }`}
          >
            <span>{day.day}</span>
            <span>{day.temp}°</span>
          </button>
        ))}
      </div>
    </div>
  );
}
