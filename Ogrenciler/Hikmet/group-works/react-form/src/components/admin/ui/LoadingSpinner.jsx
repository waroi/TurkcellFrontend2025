import React from "react";

const LoadingSpinner = ({ message = "Yükleniyor..." }) => {
  return (
    <div
      className="d-flex justify-content-center align-items-center flex-column"
      style={{ height: "100vh" }}
    >
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">{message}</span>
      </div>
      <div className="mt-3">{message}</div>
    </div>
  );
};

export default LoadingSpinner;
