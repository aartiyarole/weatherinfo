import React from "react";

export default function WeatherCard({ weatherData }) {
  if (!weatherData) return <p>Loading...</p>;

  return (
    <div className="weather-card">
      <h2>Weather in {weatherData.location.name}, {weatherData.location.region}</h2>
      <img src={weatherData.current.condition.icon} alt="Weather Condition" />
      <h3 style={{fontWeight:"900"}}><p className="text-uppercase text-primary"> {weatherData.current.condition.text}</p></h3>
      <p><strong>Temperature:</strong> {weatherData.current.temp_c}°C</p>
      <p><strong>Humidity:</strong> {weatherData.current.humidity}%</p>
      <p><strong>Wind Speed:</strong> {weatherData.current.wind_kph} km/h</p>
    </div>
  );
}
