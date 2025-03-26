import React, { useState } from "react";
import { useNavigate } from "react-router";

const TestResult = ({ customMessage }) => {
  const navigate = useNavigate();
  const [message, setMessage] = useState(
    "Teknik testi tamamladınız! 🎉 Değerlendirmelerimiz sonucunda sizinle iletişime geçeceğiz."
  );

  const handleClick = () => {
    navigate("/applications");
  };

  return (
    <div className="test-result">
      <div className="card">
        <h2>Tebrikler! 🎊</h2>
        <p>{customMessage ? customMessage : message}</p>
        <button className="btn" onClick={handleClick}>
          Tamam
        </button>
      </div>
    </div>
  );
};

export default TestResult;
