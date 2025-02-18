import { useEffect, useState } from "react";
import APIRequest from "./client/request";

import "./App.css";
import WeatherCard from "./components/WeatherCard";

function App() {
	const [weather, setWeather] = useState();
	const lat = 35;
	const lon = 139;

	useEffect(() => {
		APIRequest.getWeather(lat, lon)
			.then((data) => {
				setWeather(data);
				console.log(data);
			})
			.catch((error) => {
				console.error("API Error:", error);
			});
	}, []);

	return (
		<>
			{/* <h1> {weather && weather.main.temp}</h1> */}
			<WeatherCard weather={weather && weather.main.temp} />
		</>
	);
}

export default App;
