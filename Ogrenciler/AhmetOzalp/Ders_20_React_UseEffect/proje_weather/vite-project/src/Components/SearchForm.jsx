import React from "react";

const SearchForm = ({
  city,
  startDate,
  endDate,
  setCity,
  setStartDate,
  setEndDate,
  getWeather,
}) => {
  return (
    <div className="row g-3 justify-content-center">
      <div className="col-md-3">
        <input
          type="text"
          className="form-control"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Şehir giriniz..."
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
  );
};

export default SearchForm;
