import styles from "../styles/WeatherCard.module.css";
import CityDropdown from "./CityDropdown";

function WeatherCard({ weather }) {
	return (
		<div className={styles.weatherCard}>
			<CityDropdown />
			{weather}
		</div>
	);
}

export default WeatherCard;
