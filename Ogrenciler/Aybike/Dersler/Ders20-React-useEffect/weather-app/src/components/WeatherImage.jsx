function WeatherImage({ weather = {} }) {

    const weatherGif = weather.weather[0].main || "";

    return (
        <>
            <img src={`src/assets/${weatherGif}.gif`} alt={weatherGif} style={{ width: 150, height: 150 }} />
        </>
    );
}

export default WeatherImage;

