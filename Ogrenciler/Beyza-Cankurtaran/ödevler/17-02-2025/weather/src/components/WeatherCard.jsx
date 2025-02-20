
import React from 'react';
import humidity_icon from '../assets/humidity.png';
import wind_icon from '../assets/wind.png';
import clear_icon from '../assets/clear.png';

const WeatherCard = ({ weatherData }) => {
  return (
    <div className="c1 card text-center text-white p-4 shadow-lg">
      <h4>{weatherData ? weatherData.location : "--"}<br></br> Hava Durumu</h4>
      
      <img
        src={weatherData ? weatherData.icon : clear_icon}
        className="wi mx-auto d-block mb-3"
        alt="Weather Icon"
      />

      <h1 className="fw-bold">{weatherData ? weatherData.temperature : "--"}°C</h1>
      <h5>Feels Like:{weatherData ? weatherData.feels_like : "--"}°C</h5>
      <h4>{weatherData ? weatherData.location : "--"}</h4>

      <h5>Min Temp: {weatherData ? weatherData.min_temp : "--"}°C</h5>
      <h5>Max Temp: {weatherData ? weatherData.max_temp : "--"}°C</h5>

      {weatherData && (
        <div className="row mt-4">
          <div className="col d-flex align-items-center justify-content-center">
            <img src={humidity_icon} className="icon" alt="Humidity" />
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
  );
};

export default WeatherCard;