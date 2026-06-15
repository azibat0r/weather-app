function WeatherCard({ weather }) {
  const { name, main, weather: conditions, wind, sys } = weather;
  const icon = `https://openweathermap.org/img/wn/${conditions[0].icon}@2x.png`;

  return (
    <div className="weather-card">
      <div className="card-header">
        <h2>{name}, {sys.country}</h2>
        <img src={icon} alt={conditions[0].description} />
        <p className="description">{conditions[0].description}</p>
      </div>
      <div className="card-grid">
        <div className="stat-card">
          <p className="stat-label">🌡 Temperature</p>
          <p className="stat-value">{Math.round(main.temp)}°C</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">🤔 Feels Like</p>
          <p className="stat-value">{Math.round(main.feels_like)}°C</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">💧 Humidity</p>
          <p className="stat-value">{main.humidity}%</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">💨 Wind Speed</p>
          <p className="stat-value">{wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;