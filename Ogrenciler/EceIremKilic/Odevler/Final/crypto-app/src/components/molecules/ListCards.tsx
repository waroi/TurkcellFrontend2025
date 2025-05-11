"use client";
import React from "react";
import { useEffect } from "react";
import { useCoinStore } from "@/store/useCoinStore";
import btc from "cryptocurrency-icons/svg/color/btc.svg";
import { Image } from "react-bootstrap";
import { useTranslations } from "next-intl";
import styles from "../organisms/ListCrypto/ListCrypto.module.scss";
const cryptoIcons = {
  btc,
};

const ListCards = () => {
  const { coins, loading, error, fetchData } = useCoinStore();
  useEffect(() => {
    fetchData();
    console.log("aa", coins);
  }, [coins]);
  const t = useTranslations();
  return (
    <div className="row p-4">
      {coins.slice(0, 4).map((coin) => (
        <div
          className={`col-lg-3 rounded-4 p-3 ${styles.cardCrypto}`}
          key={coin.id}
        >
          <div className="d-flex align-items-center mb-2">
            <Image
              src={coin.image}
              alt={coin.name}
              className="me-2 list-icon"
              width={24}
              height={24}
            />
            <h6 className="me-2 fw-bold mb-0">{coin.name}</h6>
            <h6 className="text-secondary fw-bold mb-0">
              {coin.symbol.toLocaleUpperCase() + "/" + t("listCrypto.currency")}
            </h6>
          </div>
          <h4 className="fw-bold">
            {t("listCrypto.currency") + " " + coin.current_price}
          </h4>
          <p className="mb-0">
            36,641.20{" "}
            <span
              className={
                `badge rounded-pill ms-2 ` +
                (coin?.price_change_percentage_24h?.toString().includes("-")
                  ? "bg-danger"
                  : "bg-success")
              }
            >
              {coin.price_change_percentage_24h}%
            </span>
          </p>
        </div>
      ))}

      <div className="col-lg-3 rounded-4"></div>
      <div className="col-lg-3 rounded-4"></div>
    </div>
  );
};

export default ListCards;
