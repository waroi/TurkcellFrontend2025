import { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const API_KEY = "968847ac9142dfac1f25e0602c656a54"; // Buraya kendi API anahtarını koy
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    if (!city) return;
    try {
      const response = await axios.get(API_URL, {
        params: {
          q: city,
          appid: API_KEY,
          units: "metric",
          lang: "tr",
        },
      });
      setWeather(response.data);
      setError(null);
    } catch (err) {
      setError("Şehir bulunamadı!");
      setWeather(null);
    }
  };

  return (
    <div className="container mt-5 text-center">
      <h1 className="mb-4">Hava Durumu Uygulaması</h1>
      <input
        type="text"
        className="form-control w-50 mx-auto"
        placeholder="Şehir adı girin..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button className="btn btn-primary mt-3" onClick={fetchWeather}>
        Hava Durumunu Getir
      </button>

      {error && <p className="mt-3 text-danger">{error}</p>}

      {weather && (
        <div className="mt-4">
          <h2>{weather.name}, {weather.sys.country}</h2>
          <p className="lead">{weather.weather[0].description}</p>
          <h3>{weather.main.temp}°C</h3>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="Hava Durumu İkonu"
          />
        </div>
      )}
    </div>
  );
}

export default App;

/*import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  // Mount aşamasında sadece 1 kere çalışır
  useEffect(() => {
    console.log("Mount aşamasında useEffect çalıştı");
  }, []);

  // count state'i her değiştiğinde çalışır (update aşaması)
  useEffect(() => {
    console.log("count değişti, useEffect çalıştı.");
  }, [count]);

  // Her render'da çalışır (hem mount hem update aşamalarında)
  useEffect(() => {
    console.log("Her render'da çalışıyorum.");
  });

  // Unmount aşamasında çalışacak useEffect
  useEffect(() => {
    return () => {
      console.log("Bileşen unmount oldu, temizleme işlemi çalıştı.");
    };
  }, []);

  return (
    <>
      <h1 onClick={() => setCount(count + 1)}>
        React UseEffect - {count} kez tıklandı
      </h1>
    </>
  );
}

export default App;*/

