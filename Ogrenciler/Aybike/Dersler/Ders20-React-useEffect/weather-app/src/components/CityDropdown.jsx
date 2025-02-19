import { useEffect, useState } from "react";
import { citiesMap } from "../cityData/cities";
import APIRequest from "../client/request";
import WeatherImage from "./WeatherImage";

function CityDropdown() {
	const [selectedCity, setSelectedCity] = useState("");
	const [weather, setWeather] = useState(null);
	const [latitude, setLatitude] = useState(null);
	const [longitude, setLongitude] = useState(null);

	const handleChange = (event) => {
		const cityId = event.target.value;
		setSelectedCity(cityId);

		if (citiesMap[cityId]) {
			const { latitude, longitude } = citiesMap[cityId];
			setLatitude(latitude);
			setLongitude(longitude);
		} else {
			console.log("City not found in citiesMap");
		}
	};

	useEffect(() => {
		if (latitude && longitude) {
			APIRequest.getWeather(latitude, longitude)
				.then((data) => {
					setWeather(data);
				})
				.catch((error) => {
					console.error("API Error:", error);
				});
		}
	}, [latitude, longitude]);

	return (
		<>
			<select onChange={handleChange} value={selectedCity}>
				<option value="">Şehir Seçin</option>
				{Object.entries(citiesMap).map(([key, city]) => (
					<option key={key} value={key}>
						{city.name}
					</option>
				))}
			</select>
			{weather && (
				<>
					<h1>{Math.floor(weather.main.temp - 273.15)}°C</h1>
					<WeatherImage weather={weather} />
				</>
			)}
		</>
	);
}

export default CityDropdown;
