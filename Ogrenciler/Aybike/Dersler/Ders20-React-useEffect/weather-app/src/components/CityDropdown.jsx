import React from "react";
import { citiesMap } from "../cityData/cities";
import { useState } from "react";
function CityDropdown() {

	const [selectedCity, setSelectedCity] = useState("");

	const handleChange = (event) => {
		setSelectedCity(event.target.value);
		const { name,latitude, longitude } = citiesMap[selectedCity];
		console.log(name,latitude, longitude);
	};

	return (
		<select onChange={handleChange} value={selectedCity}>
			<option value="">Şehir Seçin</option>
			{Object.entries(citiesMap).map(([key, city]) => (
				<option key={key} value={key}>
					{city.name}
				</option>
			))}
		</select>
	);
}

export default CityDropdown;
