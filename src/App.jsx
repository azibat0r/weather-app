import { useState } from "react";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchWeather() {
    if (!city) return;
    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const response = await fetch(`http://localhost:3000/weather?city=${city}`);
      if (!response.ok) throw new Error("City not found");
      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") fetchWeather();
  }

  return (
    <div className="app">
      <h1>🌤 Weather App</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter a city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={fetchWeather}>Search</button>
      </div>
      {loading && <p className="status">Loading...</p>}
      {error && <p className="status error">{error}</p>}
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default App;