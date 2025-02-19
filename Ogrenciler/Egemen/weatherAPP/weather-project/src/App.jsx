import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function WeatherApp() {
  const [city, setCity] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [showHourly, setShowHourly] = useState(null);
  const apiKey = "9JJD72ACKV3Z72VZCGUTU6BFV";
  const getWeather = async () => {
    if (!city || !startDate || !endDate) {
      setError("Please enter a city and select dates.");
      return;
    }
    setError(null);

    try {
      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${startDate}/${endDate}?unitGroup=metric&key=${apiKey}&contentType=json&lang=tr`
      );

      if (!response.ok) throw new Error("City not found!");

      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
    }
  };

  const toggleHourly = (date) => {
    setShowHourly((prev) => (prev === date ? null : date));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center fw-bold text-warning mb-5">Hava Durumu</h1>

      <div className="row g-3 justify-content-center">
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city..."
          />
        </div>
        <div className="col-md-2">
          <input
            type="date"
            className="form-control"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="col-md-2">
          <input
            type="date"
            className="form-control"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <div className="col-md-2">
          <button className="btn btn-primary w-100" onClick={getWeather}>
            Hava Durumu Ara
          </button>
        </div>
      </div>

      {error && <p className="text-danger text-center mt-3">{error}</p>}

      {weather && (
        <div className="mt-4 mb-4">
          <h2 className="text-center mb-5 fw-bold text-warning">
            Şehir: {weather.address}
          </h2>
          <div className="row">
            {weather.days.map((day) => (
              <div key={day.datetime} className="col-md-6">
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

                    {showHourly === day.datetime && (
                      <div className="d-flex flex-wrap mt-3">
                        {day.hours.map((hour, index) => (
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
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
export default WeatherApp;
