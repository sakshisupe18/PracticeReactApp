import React, { useState, useEffect } from "react";
const Weather = () => {
  const [city, setCity] = useState("London"); 
  const [weather, setWeather] = useState(null);
  const [inputCity, setInputCity] = useState("");
  const API_KEY = "9b27db5b96c94041bd84d3d38de480eb";
  useEffect(() => {
    if (!city) return;
    const controller = new AbortController();
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.weatherbit.io/v2.0/current?city=${city}&key=${API_KEY}`,
          { signal: controller.signal }
        );
        if (!response.ok) {
          throw new Error("City not found");
        }
        const data = await response.json();
        setWeather(data.data[0]);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Error:", error);
          setWeather(null);
        }
      }
    };
    fetchWeather();
    return () => controller.abort();
  }, [city]);
  const handleSearch = () => {
    if (inputCity.trim() !== "") {
      setCity(inputCity.trim());
      setInputCity("");
    }
  };
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Weather Dashboard</h1>
      <div>
        <input
          type="text"
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)}
          placeholder="Enter city"
        />
        <button onClick={handleSearch}>Get Weather</button>
      </div>
      {weather ? (
        <div style={{ marginTop: "20px" }}>
          <h2>{weather.city_name}</h2>
          <p>Temperature: {weather.temp}°C</p>
          <p>Weather: {weather.weather.description}</p>
          <p>Humidity: {weather.rh}%</p>
        </div>
      ) : (
        <p style={{ marginTop: "20px" }}>No data available.</p>
      )}
    </div>
  );
};
export default Weather;
