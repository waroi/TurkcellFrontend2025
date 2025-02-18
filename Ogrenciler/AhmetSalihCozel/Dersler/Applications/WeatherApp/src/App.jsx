import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Data } from "../fetch";
import { TurkeyMap } from "./components/TurkeyMap";

function App() {
  const [count, setCount] = useState(0);
  const [weather, setWeather] = useState({});

  useEffect(() => {
    async function get() {
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?units=metric&lang=tr&appid=4d8fb5b93d4af21d66a2948710284366&q=Antalya`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setWeather(data);
          console.log(weather);
        });
    }
    get();

    const sehirler = document.getElementsByTagName("g")[0].childNodes
    console.log(sehirler)
    sehirler.map((sehir)=>{
      console.log(sehir)
      const ilAdi = sehir.getAttribute("data-iladi")
      sehir.appendChild(ilAdi)
    })
  }, []);

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
