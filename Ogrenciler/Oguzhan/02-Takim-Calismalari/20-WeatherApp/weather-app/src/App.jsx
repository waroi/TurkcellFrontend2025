import { useState } from "react";
import "./App.css";
import SearchParentGroup from "./components/parentComponents/SearchParentGroup/SearchGroup";
import ShowResults from "./components/ShowResults/ShowResults";

const API_KEY = "1773352110716adf6ec1a705cf532c04";

function App() {
  const [selectedWeather, setSelectedWeather] = useState(null);
  const [city, setCity] = useState("Ankara");

  async function getWeather(city) {
    if (typeof city !== "string") {
      console.error("HATA: city bir string değil!", city);
      return;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    console.log("API Request URL:", url);

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.cod === 200) {
          setSelectedWeather({
            date: new Date(data.dt * 1000).toLocaleDateString("tr-TR"),
            day: new Date(data.dt * 1000).toLocaleDateString("tr-TR", {
              weekday: "long",
            }),
            temp: data.main.temp,
            feels_like: data.main.feels_like,
            description: data.weather[0].description,
            humidity: data.main.humidity,
            min: data.main.temp_min,
            max: data.main.temp_max,
            country: data.sys.country,
            city: data.name,
          });
        } else {
          setSelectedWeather(null);
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div className="app-container">
        <h1 className="app-title">Hava Durumu Uygulaması</h1>
        <div className="input-container">
          <SearchParentGroup
            setCity={setCity}
            city={city}
            onClick={() => getWeather(city)}
          />
        </div>

        <div>
          {selectedWeather ? (
            <ShowResults selectedWeather={selectedWeather} />
          ) : (
            <p>Veri bulunamadı</p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
