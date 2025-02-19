import { useState, useEffect } from "react";
import "./App.css";
import SearchParentGroup from "./components/parentComponents/SearchParentGroup/SearchGroup";

const API_KEY = "1773352110716adf6ec1a705cf532c04";
function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [selectedWeather, setSelectedWeather] = useState(null);

  const [city, setCity] = useState("Ankara");

  async function getWeather(city) {
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setWeatherData(data.result);
          setSelectedWeather(data.result[0]);
          console.log(data);
        } else {
          setSelectedWeather(null);
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div className="app-container">
        <h1 className="app-title">Hava Durumu Uygulaması</h1>
        <div className="input-container">
          <SearchParentGroup>
            setCity={setCity}
            city={city}
            onClick={getWeather}
          </SearchParentGroup>
        </div>
      </div>

      <div>
        {/* <p> {selectedWeather.date}</p> */}
        {/* day={selectedWeather.day}
        degree={selectedWeather.degree}
        description={selectedWeather.description}
        humidity={selectedWeather.humidity}
        min={selectedWeather.min}
        max={selectedWeather.max}
        night={selectedWeather.night} */}
      </div>

      {/* {weatherData ? (
        <div className="weather-container">
          <h2>
            {weatherData.name} ({weatherData.sys.country})
          </h2>
          <img
            className="weather-icon"
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt={weatherData.weather[0].description}
          />
          <p>Sıcaklık: {weatherData.main.temp} °C</p>
          <p>Hissedilen: {weatherData.main.feels_like} °C</p>
          <p>Hava Durumu: {weatherData.weather[0].description}</p>
        </div>
      ) : (
        <p>Yükleniyor...</p>
      )} */}
    </>
  );
}

export default App;
