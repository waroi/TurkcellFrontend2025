import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [weather, setWeather] = useState(null)
 
  
  const [city, setCity] = useState('Istanbul')


  const apiKey = "756ab17bb304eea0e17054d3d1f4a998"

  const getWeather = async () => {
    try {
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      const data = await response.json()
      setWeather(data) 
    } catch (error) {
      console.error('Error fetching weather:', error)
    }
  }

 
  useEffect(() => {
    getWeather()
  }, []) 

  return (
    <div className="weather-container">
      <h1>Hava Durumu</h1>
      <div className="search-container">
        <input 
          type="text" 
          value={city} 
          onChange={(e) => setCity(e.target.value)} 
          placeholder="Şehir giriniz..."
        />
        <button onClick={getWeather} className="search-button">
          Hava Durumunu Getir
        </button>
      </div>
      
      {weather && weather.main ? ( 
        <div className="weather-info">
          <h2>{weather.name}</h2>
          <p>Sıcaklık: {Math.round(weather.main.temp)}°C</p>
          <p>Durum: {weather.weather[0].description}</p>
          <p>Nem: {weather.main.humidity}%</p>
        </div>
      ) : (
        <p>Şehir seçip butona basınız</p>
      )}
    </div>
  )
}

export default App
