import React from "react";

const HourlyWeather = ({ hours }) => {
  return (
    <div className="d-flex flex-wrap mt-3">
      {hours.map((hour, index) => (
        <div key={index} className="p-2 border m-1">
          <strong>{hour.datetime}</strong>
          <p>{hour.temp}°C</p>
          <p>{hour.conditions}</p>

          {hour.conditions.includes("Parçalı Bulutlu") && (
            <img
              src="https://img.icons8.com/?size=30&id=69bf287oWHbX&format=png&color=000000"
              alt=""
            />
          )}

          {hour.conditions.includes("Açık") && (
            <img
              src="https://img.icons8.com/?size=30&id=6Z2mGj6qDVv4&format=png&color=000000"
              alt=""
            />
          )}

          {hour.conditions.includes("Yağmur") && (
            <img
              src="https://img.icons8.com/?size=30&id=AlzZlPZvgLeN&format=png&color=000000"
              alt=""
            />
          )}
          {hour.conditions.includes("Kar") && (
            <img
              src="https://img.icons8.com/?size=30&id=664&format=png&color=000000"
              alt=""
            />
          )}
          {hour.conditions.includes("Bulutlu") && (
            <img
              src="https://img.icons8.com/?size=30&id=2854&format=png&color=000000"
              alt=""
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default HourlyWeather;
