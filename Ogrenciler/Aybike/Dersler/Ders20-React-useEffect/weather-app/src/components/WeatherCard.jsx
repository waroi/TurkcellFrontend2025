import styles from "../styles/WeatherCard.module.css";
import CityDropdown from "./CityDropdown";

function WeatherCard() {
	return (
		<div className={styles.weatherCard}>
			<CityDropdown />
		</div>
	);
}

export default WeatherCard;
