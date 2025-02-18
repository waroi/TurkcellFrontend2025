import React from "react";

export default function WeatherCard({ name, data }) {
  if (data)
    return (
      <div id="result">
        <h2>{name}</h2>
        <h3>
          {((date) => {
            date = new Date(date * 1000);
            console.log(data);

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
      </div>
    );
}
