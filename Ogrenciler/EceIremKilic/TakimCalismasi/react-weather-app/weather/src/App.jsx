import { useState, useEffect } from 'react';
import './App.css'

const API_KEY = "58f3c3cbfbb22141a8c7a164b9db122e";

function App() {

  const [city, setCity] = useState("istanbul");
  const [date, setDate] = useState("");
  const [weather, setWeather] = useState("");
  const handleInputChange = (e) => {
    setCity(e.target.value);
  };
  const handleDate = (e) => {
    setDate(e.target.value);
  }

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=tr&units=metric&appid=${API_KEY}`
      );
      console.log("API Response Status:", response.status);

      if (!response.ok) {
        throw new Error(`Hata! HTTP Durumu: ${response.status}`);
      }
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();

      
      if (data.list && data.list.length > 0) {
        const selectedWeather = data.list.find((item) =>
          item.dt_txt.startsWith(date) 
        );

        if (selectedWeather) {
          setWeather(selectedWeather);
        } else {
          setWeather(null); 
        }
      }
    } catch (error) {
      console.error("API hatası:", error);
    }
  };


  useEffect(() => {
    fetchData();
  }, [date, city]);

  return (
    <>
      <div className="container">
        <h1>Hava Durumu</h1>
        <input type="text"
          placeholder="Şehir giriniz"
          value={city}
          onChange={handleInputChange}
        />
        <input type="date"
          value={date}
          onChange={handleDate}
        />
        {weather ? (<div className="weatherCard">
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Description: {weather.weather[0].description}</p>
          <p>Feels like : {weather.main.feels_like}°C</p>
          <p>Humidity : {weather.main.humidity}%</p>
          <p>Pressure : {weather.main.pressure}</p>
          <p>Wind Speed : {weather.wind.speed}m/s</p>
        </div>) : (<p>Loading</p>)}
      </div>

    </>
  )
}

export default App
