import { useState, useEffect } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTemperatureQuarter, faDroplet, faWind} from "@fortawesome/free-solid-svg-icons";

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
  };
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
      <div className="container bg-blue-1 p-5 rounded-5">
        <h1 className="mb-3">Hava Durumu</h1>
        <input
          type="text"
          placeholder="Şehir giriniz"
          value={city}
          onChange={handleInputChange}
          className="mb-3 me-2 rounded-pill p-2 border-0 text-center"
        />
        <input
          type="date"
          value={date}
          onChange={handleDate}
          className="mb-3 rounded-pill p-2 border-0 text-center"
        />
        {weather ? (
          <div className="weatherCard">
          <h2>{weather.name}</h2>
          <div className="row g-3 justify-content-around">
            <div className="col-lg-5 p-3 rounded-5 bg-blue-2 border-0">
              <p className="display-2">{Math.floor(weather.main.temp)}°C</p>
              <h4>{weather.weather[0].description} <span><img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}></img></span></h4>
            </div>
            <div className="col-lg-5 p-3 rounded-5 bg-blue-2 border-0">
              <p className="fs-4">{weather.dt_txt.slice(0, 10)}</p>
              <p className="fs-5"><span className="me-2"><FontAwesomeIcon icon={faTemperatureQuarter}/></span>Hissedilen Sıcaklık</p>
              <p className="display-5">{Math.floor(weather.main.feels_like)}°C</p>
              <p className="fs-4"><span className="me-2"><FontAwesomeIcon icon={faDroplet}/></span>{weather.main.humidity}% </p>
              <p className="fs-4"><span className="me-2"><FontAwesomeIcon icon={faWind}/></span>{weather.wind.speed}m/s </p>
            </div>
            <div className="col-lg-3 bg-blue-2 rounded-5 border-0">
              {date = "2025-02-20"}
            </div>
          </div>
        </div>
        
        
        ) : (
          <p>Loading</p>
        )}
      </div>
    </>
  );
}

export default App;
