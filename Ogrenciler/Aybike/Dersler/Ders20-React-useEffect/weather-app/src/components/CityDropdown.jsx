import React from "react";
import { citiesMap } from "../cityData/cities";

function CityDropdown() {
	return (
		<select>
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
