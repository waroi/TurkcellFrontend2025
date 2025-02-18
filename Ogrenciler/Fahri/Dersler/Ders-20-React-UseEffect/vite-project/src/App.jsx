import { useState, useEffect } from "react";
import "./App.css";

const api = {
  key: "bcb32cf4bb949b61d79d06ce9317df11",
  url: "https://api.openweathermap.org/data/2.5/weather",
};

function App() {
  const [city, setCity] = useState("Sakarya");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!city.trim()) {
      setWeather(null); // Input boşsa hava durumu verisini sıfırla
      return;
    }
    const fetchWeather = async () => {
      setLoading(true);
      const response = await fetch(
        `${api.url}?q=${city}&appid=${api.key}&units=metric`
      );

      //todo bunu silince sayfadaki veriler gidiyor
      if (!response.ok) {
        setWeather(null);
        return;
      }

      const result = await response.json();
      setWeather(result);
      setLoading(false);
    };
    fetchWeather();
  }, [city]);

  return (
    <div className="App">
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Şehir ismi giriniz"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      {/* aşağıda koşullu rendering yapıyoruz */}
      {city.trim() === "" ? ( // Eğer input boşsa şehir giriniz yazısını göstersin
        <p>Şehir giriniz</p>
      ) : loading ? (
        <p>Yükleniyor...</p>
      ) : (
        weather && ( // weather verisi varsa yazrıdık bilgileri
          <div>
            <h2>Şehir: {weather.name}</h2>
            <p>Sıcaklık: {weather.main.temp}°C</p>
            <p>Açıklama: {weather.weather[0].description}</p>
            <p>Hissedilen: {weather.main.feels_like}°C</p>
            <p>Nem: {weather.main.humidity}%</p>
            <p>Rüzgar Hızı: {weather.wind.speed} m/s</p>
          </div>
        )
      )}
    </div>
  );
}

export default App;
