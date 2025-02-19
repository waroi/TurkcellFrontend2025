import { useEffect, useState } from "react";
import "./App.css";
import TurkeyMap from "./components/TurkeyMap";
import WeatherCard from "./components/WeatherCard";

function App() {
  function get(city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?appid=4d8fb5b93d4af21d66a2948710284366&units=metric&lang=tr&q=${city.dataset.iladi}`
    )
      .then((response) => response.json())
      .then((data) => setWeather(data));
  }

  const [range, setRange] = useState(1);
  const [weather, setWeather] = useState();
  const [city, setCity] = useState({
    dataset: { iladi: "Antalya" },
    classList: { add: () => {}, remove: () => {} }, //* Default
  });
  const [data, setData] = useState();

  //* On Start
  useEffect(() => {
    document
      .querySelector("input")
      .addEventListener("input", (event) => setRange(event.target.value));

    document
      .querySelectorAll("svg g[data-iladi]")
      .forEach((sehir) =>
        sehir.addEventListener("click", () => setCity(sehir))
      );
  }, []);

  //* On City Change
  useEffect(() => {
    city.classList.add("selected");

    get(city);

    return () => city.classList.remove("selected");
  }, [city]);

  //* On Weather or Range Change
  useEffect(() => {
    if (weather) setData(weather.list[range - 1]);
  }, [weather, range]);

  return (
    <>
      <h1>Hava Durumu</h1>
      <input type="range" min="1" max="40" defaultValue="1" />
      <main>
        <TurkeyMap />
        <WeatherCard data={data} name={weather?.city?.name} />
      </main>
    </>
  );
}

export default App;
