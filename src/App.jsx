import React, { useState, useEffect } from "react";
import Header from "./component/Header";
import WeatherDisplay from "./component/WeatherDisplay";
import WeatherCard from "./component/WeatherCard";

const App = () => {
  const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

  const [suggestion, setSuggestion] = useState([]);
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Mumbai"); // default city

  useEffect(() => {
    if (!city) return;

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.cod === 200) {
          setWeatherData({
            temperature: data.main.temp,
            condition: data.weather[0].main,
            city: data.name,
            wind: data.wind.speed,
            humidity: data.main.humidity,
            pressure: data.main.pressure,
            feelsLike: data.main.feels_like,
          });
        } else {
          console.error("City not found");
          setWeatherData(null);
        }
      })
      .catch((err) => console.error(err));
  }, [city, API_KEY]);

  return (
    <div className="relative flex justify-center min-h-screen items-start bg-gradient-to-br from-purple-200 via-blue-200 to-green-200 p-5">
      {weatherData ? (
        <div className="max-w-5xl w-full p-8 rounded-2xl bg-white/20 backdrop-blur-lg shadow-xl">
          {/* Header with Search */}
          <Header
            suggestion={suggestion}
            setSuggestion={setSuggestion}
            setCity={setCity} // allows search to update city
          />

          {/* Weather Display (temp, city, condition + icon) */}
          <WeatherDisplay
            temperature={weatherData.temperature}
            city={weatherData.city}
            condition={weatherData.condition}
          />

          {/* Info Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10">
            <WeatherCard
              icon={<i className="fa-solid fa-wind fa-2xl"></i>}
              title="Wind"
              value={`${weatherData.wind} m/s`}
            />
            <WeatherCard
              icon={<i className="fa-solid fa-droplet fa-2xl"></i>}
              title="Humidity"
              value={`${weatherData.humidity}%`}
            />
            <WeatherCard
              icon={<i className="fa-solid fa-compass fa-2xl"></i>}
              title="Pressure"
              value={`${weatherData.pressure} hPa`}
            />
            <WeatherCard
              icon={<i className="fa-solid fa-gauge-high fa-2xl"></i>}
              title="Feels Like"
              value={`${weatherData.feelsLike} °C`}
            />
          </div>
        </div>
      ) : (
        <p className="text-gray-700 text-xl">
          Loading weather data or city not found...
        </p>
      )}
    </div>
  );
};

export default App;

