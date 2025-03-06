import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import WeatherCard from "./components/WeatherCard";
import StateSelector from "./components/StateSelector";

export default function Home() {
  const API_KEY = "d52ed2320a254889834141533253001";
  const [selectedState, setSelectedState] = useState("Mumbai"); 
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
 

  const states = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata", "Hyderabad"];

  useEffect(() => {
    async function fetchWeather() {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${selectedState}`
        );
        setWeatherData(response.data);
      } catch (err) {
        setError("Failed to fetch weather data");
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, [selectedState]); 
  

  return (
    <div >
      <Navbar />
      <div className="container main-area mt-4 ">
        <div>
        <StateSelector states={states} selectedState={selectedState} onChange={setSelectedState} />
        </div>
        <div>
       
        {loading && <p className="text-primary mt-3">Loading weather data...</p>}

        {error && <p className="text-danger mt-3">{error}</p>}


        {!loading && !error && weatherData && (
          <WeatherCard weatherData={weatherData} />
        )}

        </div>
      </div>
    </div>
  );
}

