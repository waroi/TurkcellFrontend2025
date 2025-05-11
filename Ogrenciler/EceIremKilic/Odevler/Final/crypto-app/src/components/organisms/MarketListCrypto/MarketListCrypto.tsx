"use client";
import ListCards from "@/components/molecules/ListCards";
import ListTabs from "@/components/molecules/ListTabs";
import { useCoinStore } from "@/store/useCoinStore";
import { useTranslations } from "next-intl";
import React from "react";
import { Button, Col, Container, Image, Table, Row } from "react-bootstrap";
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";

const MarketListCrypto = () => {
  const { allCoins } = useCoinStore();
  const t = useTranslations();
  return (
    <Container className="mlist">
      <div className="card border-0 shadow p-3 rounded-4">
        <ListTabs />
        <hr className="mx-2" />
        <Row>
          {allCoins.slice(0, 4).map((coin) => (
            <div className="col-lg-3 rounded-4 px-5 py-4" key={coin.id}>
              <div className="d-flex align-items-center justify-content-between mb-2">
                <Image
                  src={coin.image}
                  alt={coin.name}
                  className="list-icon"
                  width={44}
                  height={44}
                />
                <Col lg={6} className="d-flex flex-column align-items-end">
                  <Sparklines data={coin.sparkline_in_7d.price}>
                    <SparklinesLine
                      color={
                        coin.price_change_percentage_24h < 0 ? "red" : "green"
                      }
                      style={{ strokeWidth: 1.5, fill: "none" }}
                    />
                    <SparklinesSpots />
                  </Sparklines>
                </Col>
              </div>
              <div className="d-flex justify-content-between mt-3">
                <p>{coin.name}</p>
                <p className="mb-0">
                  <span
                    className={
                      `badge rounded-pill ms-2 ` +
                      (coin?.price_change_percentage_24h
                        ?.toString()
                        .includes("-")
                        ? "bg-danger"
                        : "bg-success")
                    }
                  >
                    {coin.price_change_percentage_24h}%
                  </span>
                </p>
              </div>
              <div className="d-flex justify-content-between">
                <h4 className="fw-bold">
                  {" "}
                  {t("currency") + " " + coin.current_price}
                </h4>
                <h6 className="text-secondary fw-bold mb-0">
                  {coin.symbol.toLocaleUpperCase()}
                </h6>
              </div>
            </div>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default MarketListCrypto;
