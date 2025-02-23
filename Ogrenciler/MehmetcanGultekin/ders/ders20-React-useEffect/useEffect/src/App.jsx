import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [weatherHistory, setWeatherHistory] = useState([]) // Remove unused weather state
  const [city, setCity] = useState('Istanbul')
  const apiKey = "756ab17bb304eea0e17054d3d1f4a998"

  // Sayfa ilk yüklendiğinde Istanbul'un hava durumunu getir
  useEffect(() => {
    if (city) {
      getWeather()
    }
  }, []) // Add getWeather to dependency array to avoid lint warnings

  const getWeather = async () => {
    try {
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      const data = await response.json()
      
      if (data.main) {
        setWeatherHistory(prev => [data, ...prev])
        setCity('')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && city.trim()) {
      getWeather()
    }
  }

  return (
    <div className="app-container">
      <header className="search-header">
        <h1>Hava Durumu</h1>
        <div className="search-box">
          <input 
            type="text" 
            value={city} 
            onChange={(e) => setCity(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Şehir giriniz..."
          />
          <button 
            onClick={getWeather} 
            className="search-button"
            disabled={!city.trim()}
          >
            Ara
          </button>
        </div>
      </header>

      <div className="weather-grid">
        {weatherHistory.map((data, index) => (
          <div key={`${data.name}-${index}`} className="weather-card">
            <h2>{data.name}</h2>
            <div className="weather-info">
              <p className="temp">{Math.round(data.main.temp)}°C</p>
              <p className="desc">{data.weather[0].description}</p>
              <p className="humidity">Nem: {data.main.humidity}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
