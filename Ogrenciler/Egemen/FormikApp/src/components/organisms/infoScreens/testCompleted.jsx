import React, { useState } from "react";

const TestResult = () => {
  const [message, setMessage] = useState(
    "Teknik testi tamamladınız! 🎉 Değerlendirmelerimiz sonucunda sizinle iletişime geçeceğiz."
  );

  const handleClick = () => {
    setMessage("Başvurunuz değerlendirme aşamasında. Sabırlı olun! 🚀");
  };

  return (
    <div className="test-result">
      <div className="card">
        <h2>Tebrikler! 🎊</h2>
        <p>{message}</p>
        <button className="btn" onClick={handleClick}>
          Tamam
        </button>
      </div>
    </div>
  );
};

export default TestResult;
