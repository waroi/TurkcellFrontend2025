import React from "react";

export default function WeatherCard({ name, data }) {
  if (data)
    return (
      <div id="result">
        <h2>
          {(() =>
            name.includes("Province") ? name.replace(" Province", "") : name)()}
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
        <img
          src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${data.weather[0].icon}.svg`}
          alt="Weather"
        />
        <h4>
          {data.weather[0].description
            .split(" ")
            .reduce(
              (string, word) =>
                string + word[0].toUpperCase() + word.substring(1) + " ",
              ""
            )}
        </h4>
      </div>
    );
}
