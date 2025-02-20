/*import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import search_icon from './assets/search.png';
import clear_icon from './assets/clear.png';
import cloud_icon from './assets/cloud.png';
import drizzle_icon from './assets/drizzle.png';
import humidity_icon from './assets/humidity.png';
import rain_icon from './assets/rain.png';
import snow_icon from './assets/snow.png';
import wind_icon from './assets/wind.png';
import { useEffect, useState } from "react";
import './App.css';

function App() {
  //weatherData api den veri çektiği için ilk başta null tanımlanmalı
  const [weatherData, setWeatherData] = useState(null); 
  const [city, setCity] = useState(""); 
  //setCity string olduğu için "" tanımlanmalı
  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  };

  const search = async (city) => {
    if(city===""){
      alert("Lütfen şehir ismi giriniz!");
      return;
    }
    try {
      const API_KEY = "968847ac9142dfac1f25e0602c656a54";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();

      console.log(data);
      if(!response.ok){
        alert(data.message);
      }

      const icon = allIcons[data.weather[0].icon] || clear_icon; 
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        min_temp:Math.floor(data.main.temp_min),
        max_temp:Math.floor(data.main.temp_max),
        feels_like:Math.floor(data.main.feels_like),
        location: data.name,
        icon: icon,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //mount
  useEffect(() => {
    search("Konya");
  }, []);

  //mantığını anlamamışız hocaya soralım
  //unmount
  
  useEffect(() => {
    search("Konya");
  
    return () => {
      console.log("Bileşen kaldırıldı!");
      alert("bileşen kaldırıldı!");
    };
  }, []);
  
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bgg">
      <div className="c1 card text-center text-white p-4 shadow-lg" >
        <h4>{weatherData ? weatherData.location : "--"}<br></br> Hava Durumu</h4>
        <div className="input-group mb-3">
          <input
            type="text"
            id="search"
            className="form-control rounded-pill"
            placeholder="Search..."
            value={city} 
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e)=>{
              if(e.key==="Enter"){
                search(city);
                setCity('');
                
              }
            }}
          />
          <span className="input-group-text bg-white border-0 ms-3 rounded-pill">
            <img
              className="searchBar"
              src={search_icon}
              alt="Search"
              onClick={() => search(city)} 
            />
          </span>
        </div>

        <img
          src={weatherData ? weatherData.icon : clear_icon}
          className="wi mx-auto d-block mb-3"
          alt="Weather Icon"
        />

        <h1 className="fw-bold">{weatherData ? weatherData.temperature : "--"}°C</h1>
        <h5>Feels Like:{weatherData ? weatherData.feels_like: "--"}°C</h5>
        <h4>{weatherData ? weatherData.location : "--"}</h4>

        <h5>Min Temp: {weatherData ? weatherData.min_temp : "--"}°C</h5>
        <h5>Max Temp: {weatherData ? weatherData.max_temp : "--"}°C</h5>

        {weatherData && (
          <div className="row mt-4">
            <div className="col d-flex align-items-center justify-content-center">
              <img src={humidity_icon} className="icon"alt="Humidity" />
              <div>
                <p className="mb-0 fw-bold">{weatherData.humidity}%</p>
                <small>Humidity</small>
              </div>
            </div>
            <div className="col d-flex align-items-center justify-content-center">
              <img src={wind_icon} alt="Wind Speed" className="icon" />
              <div>
                <p className="mb-0 fw-bold">{weatherData.windSpeed} Km/h</p>
                <small>Wind Speed</small>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
*/

// App.jsx
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useEffect, useState } from "react";
import './App.css';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import clear_icon from './assets/clear.png';
import cloud_icon from './assets/cloud.png';
import drizzle_icon from './assets/drizzle.png';
import rain_icon from './assets/rain.png';
import snow_icon from './assets/snow.png';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");

  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  };

  const search = async (searchCity) => {
    if (searchCity === "") {
      alert("Lütfen şehir ismi giriniz!");
      return;
    }
    try {
      const API_KEY = "968847ac9142dfac1f25e0602c656a54";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&units=metric&appid=${API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
      }

      const icon = allIcons[data.weather[0].icon] || clear_icon;
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        min_temp: Math.floor(data.main.temp_min),
        max_temp: Math.floor(data.main.temp_max),
        feels_like: Math.floor(data.main.feels_like),
        location: data.name,
        icon: icon,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    search("Konya");
    return () => {
      console.log("Bileşen kaldırıldı!");
      alert("bileşen kaldırıldı!");
    };
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bgg">
      <div>
        <SearchBar city={city} setCity={setCity} onSearch={search} />
        <WeatherCard weatherData={weatherData} />
      </div>
    </div>
  );
}

export default App;