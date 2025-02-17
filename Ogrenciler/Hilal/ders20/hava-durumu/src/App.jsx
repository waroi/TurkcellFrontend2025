import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  const fetchWeatherData = async () => {
    try {
      const url = `${
        import.meta.env.VITE_WEATHER_API_URL
      }/data/2.5/forecast?lat=44.34&lon=10.99&appid=${
        import.meta.env.VITE_WEATHER_API_KEY
      }`;
      const response = await fetch(url);
      if (!response.ok) {
        console.error("Hata Kodu:", response.status);
        return;
      }
      const data = await response.json();
      setData(data);
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
      Hello,weather data from{" "}
      <strong>{data && data !== null && data.city.name}</strong> city in the
      console.
    </>
  );
}

export default App;
