import React from "react";
import HourlyWeather from "./HourlyWeather";

const WeatherCard = ({ day, showHourly, toggleHourly }) => {
  return (
    <div className="col-md-6">
      <div className="card mb-3">
        <div className="card-header bg-info text-white">
          Tarih: {day.datetime}
        </div>
        <div className="card-body">
          <h5 className="card-title">Günlük Bakış</h5>
          <p>
            <strong>En yüksek sıcaklık:</strong> {day.tempmax}°C
          </p>
          <p>
            <strong>En düşük sıcaklık:</strong> {day.tempmin}°C
          </p>

          {day.conditions.includes("Parçalı") && (
            <img
              src="https://img.icons8.com/?size=100&id=69bf287oWHbX&format=png&color=000000"
              alt=""
            />
          )}

          {day.conditions.includes("Açık") && (
            <img
              src="https://img.icons8.com/?size=100&id=6Z2mGj6qDVv4&format=png&color=000000"
              alt=""
            />
          )}

          {day.conditions.includes("Yağmur") && (
            <img
              src="https://img.icons8.com/?size=100&id=AlzZlPZvgLeN&format=png&color=000000"
              alt=""
            />
          )}
          {day.conditions.includes("Kar") && (
            <img
              src="https://img.icons8.com/?size=100&id=664&format=png&color=000000"
              alt=""
            />
          )}

          <p>
            <strong>Durum:</strong> {day.conditions}
          </p>
        </div>

        <div className="card-footer">
          <button
            className="btn btn-info w-100"
            onClick={() => toggleHourly(day.datetime)}
          >
            {showHourly === day.datetime
              ? "Saatlik Durumu Gizle"
              : "Saatlik Durumu Göster"}
          </button>

          {showHourly === day.datetime && <HourlyWeather hours={day.hours} />}
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
