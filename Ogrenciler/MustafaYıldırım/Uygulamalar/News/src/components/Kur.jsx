import React, { useEffect, useState } from "react";
import KurClient from "../service/dovizSevice";

function Kur() {
  const [gold, setGold] = useState([]);
  const [doviz, setDoviz] = useState([]);
  useEffect(() => {
    const fetchDoviz = async () => {
      const dovizData = await KurClient.getDovizKur();
      setDoviz(dovizData.result);
    };
    const fetchGold = async () => {
      const goldData = await KurClient.getGoldKur();
      setGold(goldData.result);
    };
    fetchDoviz();
    fetchGold();
  }, []);
  const sortedDoviz = doviz
    .sort((a, b) => {
      // En çok bilinenleri (USD, EUR, GBP) üstte göstermek için sıralama
      const commonCurrencies = ["USD", "EUR", "GBP", "JPY", "CHF"];
      const indexA = commonCurrencies.indexOf(a.code);
      const indexB = commonCurrencies.indexOf(b.code);
      return indexA - indexB;
    })
    .slice(0, 5);
  const sortedGold = gold
    .sort((a, b) => {
      // En çok bilinenleri (USD, EUR, GBP) üstte göstermek için sıralama
      const commonCurrencies = ["USD", "EUR", "GBP", "JPY", "CHF"];
      const indexA = commonCurrencies.indexOf(a.code);
      const indexB = commonCurrencies.indexOf(b.code);
      return indexA - indexB;
    })
    .slice(0, 5);
  return (
    <>
      <div className="container mt-4">
        <h2>En Popüler Döviz Kurları</h2>
        <div className="row">
          {sortedDoviz.map((doviz, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    <strong>{doviz.name}</strong> ({doviz.code})
                  </h5>
                  <div className="d-flex justify-content-between">
                    <span className="badge bg-success">
                      Alış: {doviz.buying.toFixed(2)} TL
                    </span>
                    <span className="badge bg-danger">
                      Satış: {doviz.selling.toFixed(2)} TL
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {sortedGold.map((doviz, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    <strong>{doviz.name}</strong>
                  </h5>
                  <div className="d-flex justify-content-between">
                    <span className="badge bg-success">
                      Alış: {doviz.buying} TL
                    </span>
                    <span className="badge bg-danger">
                      Satış: {doviz.selling} TL
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Kur;
