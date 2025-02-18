import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Data } from "../fetch";
import { TurkeyMap } from "./components/TurkeyMap";

function App() {
  function get(city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&lang=tr&appid=4d8fb5b93d4af21d66a2948710284366&q=${city.dataset.iladi}`
    )
      .then((response) => response.json())
      .then((data) => setWeather(data));
  }

  const [weather, setWeather] = useState({});
  const [city, setCity] = useState();

  useEffect(() => {
    document
      .querySelectorAll("svg g[data-iladi]")
      .forEach((sehir) =>
        sehir.addEventListener("click", () => setCity(sehir))
      );
  }, []);

  useEffect(() => {
    if (!city) return;

    city.classList.add("selected");

    get(city);

    return () => city.classList.remove("selected");
  }, [city]);

  useEffect(() => {
    console.log(weather);
  }, [weather]);

  return (
    <>
      <div className="mainDiv">
        <h1>Hava Durumu</h1>
        <TurkeyMap></TurkeyMap>
      </div>
    </>
  );
}

export default App;
