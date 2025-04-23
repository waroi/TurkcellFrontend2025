import React from "react";
import Image from "next/image";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { commafy } from "../../utils/commafy";
import { safeParseFloat } from "../../utils/safeParseFloat";
const CryptoTable = ({
  cryptos,
  isMarketCapAvaible = true,
  isLast7DaysAvaible = true,
  isHomePage = true,
  isHasStars = true,
}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          {isHasStars ? <th></th> : null}
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Last Price</th>
          <th scope="col">24h %</th>
          {isMarketCapAvaible ? <th scope="col">Market Cap</th> : null}
          {isLast7DaysAvaible ? <th scope="col">Last 7 Days</th> : null}
          <th></th>
        </tr>
      </thead>
      <tbody>
        {cryptos.length !== 0
          ? cryptos.map((crypto, index) => (
              <tr key={index}>
                {isHasStars ? (
                  <td>
                    <i scope="row" className="fa fa-star checked"></i>
                  </td>
                ) : null}
                <th>{index + 1}</th>
                <td>
                  <div
                    className={`${
                      isHomePage ? "d-flex align-items-center" : "d-flex"
                    }`}
                  >
                    {isHomePage ? (
                      <Image
                        src={crypto.image}
                        width={24}
                        height={24}
                        alt={crypto.symbol}
                      />
                    ) : (
                      <Image
                        src={crypto.image}
                        width={40}
                        height={40}
                        alt={crypto.symbol}
                      />
                    )}
                    {isHomePage ? (
                      <div className="span">
                        <span className="fw-bold fs-5 text-dark ms-98">
                          {crypto.name}
                        </span>
                        <span className="border-start ps-2 ms-2 fs-6 text-secondary fw-normal">
                          {crypto.symbol.replace("USDT", "")}
                        </span>
                      </div>
                    ) : (
                      <div className="d-flex flex-column ps-11">
                        <p className="text-dark fs-6 fw-bold mb-99">
                          {crypto.name}
                        </p>
                        <p className="text-secondary display-3 fw-bold">
                          {" "}
                          {crypto.symbol.replace("USDT", "")}
                        </p>
                      </div>
                    )}
                  </div>
                </td>
                <td
                  className={`${
                    isHomePage ? "fs-5" : "fs-6"
                  } text-dark fw-bold`}
                >
                  {`$ ${commafy(crypto.history[crypto.history.length - 1])}`}
                </td>
                <td
                  className={`${
                    crypto.dailyPercent < 0 ? "text-danger" : "text-success"
                  } fw-normal ${isHomePage ? "fs-5" : "fs-6"}`}
                >
                  {` ${
                    parseFloat(crypto.dailyPercent) > 0 ? `+` : ""
                  }${parseFloat(crypto.dailyPercent).toFixed(2)}%`}
                </td>
                {isMarketCapAvaible ? (
                  <td className="fs-5 text-dark fw-bold">
                    {"$" + crypto.marketCap.toLocaleString()}
                  </td>
                ) : null}
                {isLast7DaysAvaible ? (
                  <td>
                    {crypto.weeklyChange !== null ? (
                      <Sparklines
                        data={crypto.weeklyChange.map((week) =>
                          safeParseFloat(week[4])
                        )}
                        width={100}
                        height={20}
                      >
                        <SparklinesLine
                          color={
                            safeParseFloat(crypto.weeklyChange[6][4]) >
                            safeParseFloat(crypto.weeklyChange[0][4])
                              ? "green"
                              : "red"
                          }
                        />
                      </Sparklines>
                    ) : (
                      <span>Veri Yok</span>
                    )}
                  </td>
                ) : null}
              </tr>
            ))
          : null}
      </tbody>
    </table>
  );
};

export default CryptoTable;
