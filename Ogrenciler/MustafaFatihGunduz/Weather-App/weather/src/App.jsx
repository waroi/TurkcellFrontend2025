import React, { useState, useEffect } from 'react';
import GetWeather from './components/weather_api.jsx';
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('');
  const [weather, setWeather] = useState('');

  const handleSearch = async () => {
    const data = await GetWeather(inputValue);
    setWeather(data);
  };
  return (
    <>
      <h1>Weather App</h1>
      <input type="text" id='cityInput' placeholder='Lütfen şehir ismi giriniz.' onChange={(e) =>  setInputValue(e.target.value) }/>
      <button id='searchButton' onClick={()=> handleSearch()}>Ara</button>
      <div id='weatherContainer'>
        <div id='weatherIcon'></div>
        <div id='weatherInfo'>
          <div id='weatherCity'>{weather?.city}</div>
          <div id='weatherDesc'>{weather?.description}</div>
          <div id='weatherDegree'>{weather?.temperature}</div>
        </div>
      </div>
    </>
  )
}

export default App
