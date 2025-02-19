import { useEffect, useState } from "react";
import TurkishMap from "./components/TurkishMap";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

export default function App() {
  const [range, setRange] = useState(1);
  const [weather, setWeather] = useState();
  const [city, setCity] = useState({
    dataset: { iladi: "Marmaris" },
    classList: { add: () => {}, remove: () => {} }, //* Required for Initialisation
  });
  const [data, setData] = useState();

  //* Initialise
  useEffect(() => {
    document.querySelector("input").addEventListener("input", (event) => {
      setRange(event.target.value);
      event.target.style.background = `linear-gradient(90deg, var(--white) ${
        (100 * event.target.value) / event.target.max
      }%, var(--light-blue) ${(100 * event.target.value) / event.target.max}%)`;
    });

    document
      .querySelectorAll("svg g[data-iladi]")
      .forEach((sehir) =>
        sehir.addEventListener("click", () => setCity(sehir))
      );
  }, []);

  //* City Change
  useEffect(() => {
    city.classList.add("selected");

    get(city);

    return () => city.classList.remove("selected");
  }, [city]);

  //* Weather or Range Change
  useEffect(() => {
    if (weather) setData(weather.list[range - 1]);
  }, [weather, range]);

  return (
    <>
      <h1>Hava Durumu</h1>
      <input type="range" min="1" max="40" defaultValue="1" />
      <main>
        <TurkishMap />
        <WeatherCard data={data} name={weather?.city?.name} />
      </main>
    </>
  );

  function get(city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?appid=4d8fb5b93d4af21d66a2948710284366&units=metric&lang=tr&q=${city.dataset.iladi}`
    )
      .then((response) => response.json())
      .then((data) => setWeather(data));
  }
}
