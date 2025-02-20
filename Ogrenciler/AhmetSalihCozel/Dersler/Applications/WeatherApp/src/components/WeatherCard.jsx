import React from "react";

export default function WeatherCard({ data, name }) {
  if (data)
    return (
      <section>
        <h2>
          {name.includes("Province") ? name.replace(" Province", "") : name}
        </h2>
        <h3>
          {((date) => {
            date = new Date(date * 1000);

            return (
              date.toLocaleDateString("tr-TR", {
                day: "2-digit",
                month: "long",
                year: "numeric",
                weekday: "long",
              }) +
              " " +
              date.toLocaleTimeString("tr-TR", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              })
            );
          })(data.dt)}
        </h3>
        <span>{`${parseInt(data.main.temp)}°C`}</span>
        <i className={iconMap(data.weather[0].icon)}></i>
        <h4>
          {data.weather[0].description
            .split(" ")
            .reduce(
              (string, word) =>
                string + word[0].toUpperCase() + word.substring(1) + " ",
              ""
            )}
        </h4>
      </section>
    );

  function iconMap(icon) {
    switch (icon) {
      case "01d":
        return "fa-solid fa-sun";
      case "01n":
        return "fa-solid fa-moon";
      case "02d":
        return "fa-solid fa-cloud-sun";
      case "02n":
        return "fa-solid fa-cloud-moon";
      case "03d":
      case "03n":
      case "04d":
      case "04n":
        return "fa-solid fa-cloud";
      case "09d":
      case "09n":
        return "fa-solid fa-cloud-showers-heavy";
      case "10d":
        return "fa-solid fa-cloud-sun-rain";
      case "10n":
        return "fa-solid fa-cloud-moon-rain";
      case "11d":
      case "11n":
        return "fa-solid fa-cloud-bolt";
      case "13d":
      case "13n":
        return "fa-solid fa-snowflake";
      case "50d":
      case "50n":
        return "fa-solid fa-smog";
    }
  }
}
