import { useState, useEffect } from "react";
import "./App.css";

const api = {
  key: "bcb32cf4bb949b61d79d06ce9317df11",
  url: "https://api.openweathermap.org/data/2.5/weather",
};

function App() {
  const [city, setCity] = useState("Sakarya");
  const [debouncedCity, setDebouncedCity] = useState(city);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedCity(city);
    }, 500); // Kullanıcı yazmayı bitirince istek atılmasını sağlar

    return () => clearTimeout(timer);
  }, [city]);

  useEffect(() => {
    if (!debouncedCity.trim()) {
      setWeather(null);  // Input boşsa hava durumu verisini sıfırla
      return;
    }

    const fetchWeather = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${api.url}?q=${debouncedCity}&appid=${api.key}&units=metric`
        );

         //todo bunu silince sayfadaki veriler gidiyor
        if (!response.ok) {
          setWeather(null);
          return;
        }

        const result = await response.json();
        setWeather(result);
      } catch (error) {
        console.error("Hava durumu alınırken hata oluştu:", error);
        setWeather(null);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [debouncedCity]);

  const getWeatherEmoji = (description) => {
    switch (description) {
      case 'clear sky':
        return '☀️';
      case 'few clouds':
        return '🌤️';
      case 'scattered clouds':
        return '🌥️';
      case 'broken clouds':
        return '☁️';
      case 'shower rain':
        return '🌧️';
      case 'rain':
        return '🌧️';
      case 'thunderstorm':
        return '⛈️';
      case 'snow':
        return '❄️';
      case 'mist':
      case 'fog':
        return '🌫️';
      default:
        return '🌈';
    }
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Şehir ismi giriniz"
        className="input"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      {city.trim() === "" ? (
        <p className="error-message">Şehir giriniz</p>
      ) : loading ? (
        <p className="loading">Yükleniyor...</p>
      ) : weather ? (
        <div className="weather-info">
          <h2>{weather.name}{getWeatherEmoji(weather.weather[0].description)}</h2>
          <p>Sıcaklık: {weather.main.temp}°C</p>
          <p>Açıklama: {weather.weather[0].description}</p>
          <p>Hissedilen: {weather.main.feels_like}°C</p>
          <p>Nem: {weather.main.humidity}%</p>
          <p>Rüzgar Hızı: {weather.wind.speed} m/s</p>
        </div>
      ) : (
        <p className="error-message">Hava durumu bilgisi bulunamadı</p>
      )}
    </div>
  );
}

export default App;
