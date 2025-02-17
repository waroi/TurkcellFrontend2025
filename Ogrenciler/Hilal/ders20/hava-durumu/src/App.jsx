import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import WeatherCard from './components/WeatherCard';

function App() {
  const [cardData, setCardData] = useState({});
  const [search, setSearchValue] = useState('bursa');

  const handleSearchButtonClick = () => {
    fetchWeatherData();
  };

  const fetchWeatherData = async () => {
    try {
      const url = `${
        import.meta.env.VITE_WEATHER_API_URL
      }/data/2.5/forecast?q=${search}&appid=${
        import.meta.env.VITE_WEATHER_API_KEY
      }&units=metric`;
      const response = await fetch(url);
      if (!response.ok) {
        console.error('Hata Kodu:', response.status);
        return;
      }
      const data = await response.json();
      setCardData({
        cityName: data.city.name,
        temperature: data.list[0].main.temp,
        maxTemp: data.list[0].main.temp_max,
        minTemp: data.list[0].main.temp_min,
        windSpeed: data.list[0].wind.speed,
        humidity: data.list[0].main.humidity,
        description: data.list[0].weather[0].description,
        imgURL: `https://openweathermap.org/img/wn/${data.list[0]?.weather[0].icon}@2x.png`,
      });
      console.log(data);
    } catch (error) {
      console.error('API çağrısı başarısız:', error);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);
  return (
    <>
      <NavBar
        handleSearchButtonClick={handleSearchButtonClick}
        setSearchValue={setSearchValue}
      />
      {/* Hello,weather data from <strong>{data && data.city.name}</strong> city
      <div>Temperature {dataList && dataList[0]?.main.temp}</div>
      <div>Max Temperature :{dataList && dataList[0]?.main.temp_max}</div>
      <div>Min Temperature :{dataList && dataList[0]?.main.temp_min}</div>
      <div>Wind Speed {dataList && dataList[0]?.wind.speed}</div>
      <div>Humidity:{dataList && dataList[0]?.main.humidity}</div>
      <div>{dataList && dataList[0]?.weather[0].description}</div>
      {dataList && (
        <img
          src={`https://openweathermap.org/img/wn/${dataList[0]?.weather[0].icon}@2x.png`}
          alt='weather-icon'
        />
      )} */}
      <WeatherCard cardData={cardData} />
      <footer></footer>
    </>
  );
}

export default App;
