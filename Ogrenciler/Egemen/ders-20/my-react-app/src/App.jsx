import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const apiKey = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={f8ac1e165a26eca0c929ce905e2e7c0c}';
import axios from 'axios';



function App() {
  const [city,setCity] = useState('');
  const [weather,setWeather] = useState(null);
  
  const fetchWeather = async() => {
    const response = await axios.get(apiKey);
  }

  setWeather(response.data);

 
}

useEffect(() => {
  if(city){
    fetchWeather();
  }
})

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const apiKey = 'YOUR_API_KEY'; // OpenWeather API anahtarınızı buraya ekleyin

  const fetchWeather = async () => {
    if (!city) return;

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
        params: {
          q: city,
          appid: apiKey,
          units: 'metric', // Sıcaklık birimini Celsius (metric) olarak ayarladık
        },
      });
      setWeather(response.data);
    } catch (error) {
      setError('Hava durumu bilgisi alınırken bir hata oluştu.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (city) {
      fetchWeather();
    }
  }, [city]); // City değiştiğinde fetchWeather fonksiyonunu çalıştırır

  return (
    <div className="App">
      <h1>Hava Durumu Uygulaması</h1>
      <input
        type="text"
        placeholder="Şehir girin"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Hava Durumunu Göster</button>

      {loading && <p>Yükleniyor...</p>}
      {error && <p>{error}</p>}

      {weather && (
        <div>
          <h2>{weather.name}, {weather.sys.country}</h2>
          <p><strong>Sıcaklık:</strong> {weather.main.temp}°C</p>
          <p><strong>Hava Durumu:</strong> {weather.weather[0].description}</p>
          <p><strong>Hızlı:</strong> {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default App;



