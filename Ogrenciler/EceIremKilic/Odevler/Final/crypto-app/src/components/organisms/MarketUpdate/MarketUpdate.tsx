"use client";
import { useCoinStore } from "@/store/useCoinStore";
import { faSearch, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";
import React from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";

const MarketUpdate = () => {
  const { coins, addFav, isFav, removeFav, searchCoin } = useCoinStore();
  const t = useTranslations();

  return (
    <Container className="p-5">
      <div className="d-flex justify-content-between mb-4 align-items-center">
        <h2 className="display-4 fw-semibold mb-0">{t("marketUpdate.m1")}</h2>
        <div>
          <p className="mb-0">{t("marketUpdate.m9")}</p>
          <hr className="my-1" />
        </div>
      </div>
      <div className="d-flex justify-content-between mb-5">
        <div className="overflow-x-scroll">
          <Button variant="none" className="px-4 text-secondary fw-semibold">
            {t("marketUpdate.m7")}
          </Button>
          <Button variant="none" className="px-4 text-secondary fw-semibold">
            Metaverse
          </Button>
          <Button variant="none" className="px-4 text-secondary  fw-semibold">
            {t("marketUpdate.m10")}
          </Button>
          <Button variant="none" className="px-4 text-secondary fw-semibold">
            {t("marketUpdate.m11")}
          </Button>
          <Button variant="none" className="px-4 text-secondary fw-semibold">
            NFT
          </Button>
          <Button variant="none" className="px-4 text-secondary fw-semibold">
            {t("marketUpdate.m12")}
          </Button>
          <Button variant="none" className="px-4 text-secondary fw-semibold">
            {t("marketUpdate.m13")}
          </Button>
        </div>
        <div>
          <InputGroup>
            <InputGroup.Text className="rounded-start-pill bg-white s-icon ps-3">
              <FontAwesomeIcon icon={faSearch} color="#d3d3d3" />
            </InputGroup.Text>
            <Form.Control
              type="text"
              className="ps-0 py-2 rounded-end-pill searchbar"
              placeholder={t("marketUpdate.m14")}
              onChange={(e) => searchCoin(e.target.value)}
            ></Form.Control>
          </InputGroup>
        </div>
      </div>
      <table className="w-100 table-fluid table-auto text-left overflow-x-scroll">
        <thead>
          <tr className="border-bottom text-secondary">
            <th className="p-2"></th>
            <th className="p-2">#</th>
            <th className="p-2">{t("marketUpdate.m2")}</th>
            <th className="p-2">{t("marketUpdate.m3")}</th>
            <th className="p-2">{t("marketUpdate.m4")}</th>
            <th className="p-2">{t("marketUpdate.m5")}</th>
            <th className="p-2">{t("marketUpdate.m6")}</th>
            <th className="p-2"></th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin, index) => {
            const fav = isFav(coin.id);

            return (
              <tr key={coin.id} className="border-bottom t-row">
                <td>
                  <Button
                    variant="none"
                    className="p-0 favbtn"
                    onClick={() => {
                      isFav(coin.id) ? removeFav(coin.id) : addFav(coin);
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faStar}
                      color={isFav(coin.id) ? "#ffc107" : "#d3d3d3"}
                    />
                  </Button>
                </td>
                <td className="p-2">{index + 1}</td>
                <td className="p-2">
                  <div className="d-flex align-items-center gap-2">
                    <img
                      src={coin.image}
                      alt={coin.name}
                      width={24}
                      height={24}
                    />

                    <h6 className="fw-bold mb-0">{coin.name}</h6>
                    <div className="text-sm text-gray-500 uppercase">
                      {coin.symbol.toLocaleUpperCase()}
                    </div>
                  </div>
                </td>
                <td className="p-2">${coin.current_price.toLocaleString()}</td>
                <td
                  className={`p-2 font-semibold ${
                    coin.price_change_percentage_24h < 0
                      ? "text-danger"
                      : "text-success"
                  }`}
                >
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </td>
                <td className="p-2">${coin.market_cap.toLocaleString()}</td>
                <td className="p-2">
                  <div className="">
                    <Sparklines data={coin.sparkline_in_7d.price}>
                      <SparklinesLine
                        color={
                          coin.price_change_percentage_24h < 0 ? "red" : "green"
                        }
                        style={{ strokeWidth: 1.5, fill: "none" }}
                      />
                      <SparklinesSpots />
                    </Sparklines>
                  </div>
                </td>
                <td className="p-2 trade">
                  <button className="btn border-1 border-secondary px-3 py-2 rounded-pill text-sm">
                    {t("marketUpdate.m15")}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
};

export default MarketUpdate;
