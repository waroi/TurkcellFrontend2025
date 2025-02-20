import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchForm from "./components/SearchForm";
import WeatherCard from "./components/WeatherCard";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [showHourly, setShowHourly] = useState(null);
  const apiKey = "9JJD72ACKV3Z72VZCGUTU6BFV";

  const getWeather = async () => {
    if (!city || !startDate || !endDate) {
      setError("Lütfen şehri ve tarihi giriniz !.");
      return;
    } else {
      setError(null);
    }

    try {
      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${startDate}/${endDate}?unitGroup=metric&key=${apiKey}&contentType=json&lang=tr`
      );

      if (!response.ok) throw new Error("Şehir bulunamadı");

      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
    }
  };

  const toggleHourly = (date) => {
    setShowHourly((prev) => (prev === date ? null : date));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center fw-bold text-warning mb-5">Hava Durumu</h1>

      <SearchForm
        city={city}
        startDate={startDate}
        endDate={endDate}
        setCity={setCity}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        getWeather={getWeather}
      />

      {error && <p className="text-danger text-center mt-3">{error}</p>}

      {weather && (
        <div className="mt-4 mb-4">
          <h2 className="text-center mb-5 fw-bold text-warning">
            Şehir: {weather.address}
          </h2>
          <div className="row">
            {weather.days.map((day) => (
              <WeatherCard
                key={day.datetime}
                day={day}
                showHourly={showHourly}
                toggleHourly={toggleHourly}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
