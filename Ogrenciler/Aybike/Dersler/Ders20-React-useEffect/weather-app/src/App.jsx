import { useEffect, useState } from 'react'
import APIRequest from './client/request'

import './App.css'

function App() {
  const [weather, setWeather] = useState(null);
  const lat = 35;
  const lon = 139;
  useEffect(()=>{
    APIRequest.getWeather(lat, lon)
    .then((data) => {
      setWeather(data)
    })
    .catch((error) => {
      console.error('API Error:', error)})
    }
  )

  return (
    <>
      <div>
        <h1>     {weather && weather.main.temp}
        </h1>
      </div>
    </>
  )
}

export default App
