import styles from "./showresult.styles.module.css";

const ShowResults = ({ selectedWeather }) => {
  const renderWeatherIcon = () => {
    const description = selectedWeather.description.toLowerCase();

    if (description.includes("clear")) {
      return (
        <img
          src="https://cdn-icons-png.flaticon.com/512/6974/6974833.png"
          alt="Açık hava"
          width="100"
        />
      );
    } else if (description.includes("cloud")) {
      return (
        <img
          src="https://cdn-icons-png.flaticon.com/512/414/414927.png"
          alt="Bulutlu"
          width="100"
        />
      );
    } else if (description.includes("rain")) {
      return (
        <img
          src="https://cdn-icons-png.flaticon.com/512/3351/3351979.png"
          alt="Yağmurlu"
          width="100"
        />
      );
    } else if (description.includes("snow")) {
      return (
        <img
          src="https://cdn-icons-png.flaticon.com/512/2315/2315309.png"
          alt="Karlı"
          width="100"
        />
      );
    }

    return (
      <img
        src="https://cdn-icons-png.flaticon.com/512/1163/1163661.png"
        alt="Hava durumu"
        width="100"
      />
    );
  };

  return (
    <div className={styles.body}>
      {renderWeatherIcon()}
      <p>Tarih: {selectedWeather.date}</p>
      <h2>Sıcaklık: {selectedWeather.temp} °C</h2>
      <h3>Hissedilen: {selectedWeather.feels_like} °C</h3>
      <p>
        <strong>
          {selectedWeather.city} ({selectedWeather.country})
        </strong>
      </p>

      <div className={styles.textBody}>
        <p>
          Gün:<strong> {selectedWeather.day}</strong>
        </p>
        <p>
          Durum: <strong> {selectedWeather.description}</strong>{" "}
        </p>
        <p>
          Nem: <strong> {selectedWeather.humidity}%</strong>
        </p>
      </div>
    </div>
  );
};

export default ShowResults;
