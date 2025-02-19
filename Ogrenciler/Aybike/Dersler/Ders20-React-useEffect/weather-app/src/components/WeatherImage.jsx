import styles from "../styles/WeatherCard.module.css";

function WeatherImage({ weather = {} }) {
    const weatherGif = weather.weather[0].main || "";

    return (
        <img 
            src={`src/assets/${weatherGif}.gif`} 
            alt={weatherGif}
            className={styles.weatherImage}
        />
    );
}

export default WeatherImage;