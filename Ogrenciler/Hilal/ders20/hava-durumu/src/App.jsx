import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [dataList, setDataList] = useState(null);
  const [city, setCity] = useState("bursa");

  const fetchWeatherData = async () => {
    try {
      const url = `${
        import.meta.env.VITE_WEATHER_API_URL
      }/data/2.5/forecast?q=${city}&appid=${
        import.meta.env.VITE_WEATHER_API_KEY
      }&units=metric`;
      const response = await fetch(url);
      if (!response.ok) {
        console.error("Hata Kodu:", response.status);
        return;
      }
      const data = await response.json();
      setData(data);
      const DataList = data.list;
      setDataList(DataList);
      console.log("datalist", data.list);
      console.log(data);
    } catch (error) {
      console.error("API çağrısı başarısız:", error);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []); // ilk yüklemede datamızı alıyoruz, sonra ilgili state güncellendikce yeni istekler atacağız, update useEffect'itanımlayıp

  return (
    <>
      Hello,weather data from <strong>{data && data.city.name}</strong> city
      <div>Temperature {dataList && dataList[0]?.main.temp}</div>
      <div>Max Temperature :{dataList && dataList[0]?.main.temp_max}</div>
      <div>Min Temperature :{dataList && dataList[0]?.main.temp_min}</div>
      <div>Wind Speed {dataList && dataList[0]?.wind.speed}</div>
      <div>Humidity:{dataList && dataList[0]?.main.humidity}</div>
      <div>{dataList && dataList[0]?.weather[0].description}</div>
      {dataList && (
        <img
          src={`https://openweathermap.org/img/wn/${dataList[0]?.weather[0].icon}@2x.png`}
          alt="weather-icon"
        />
      )}
      <footer></footer>
    </>
  );
}

export default App;
