import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const OrderHistory = () => {
  const t = useTranslations();
  const orders = [
    {
      date: "24-04 14:40",
      pair: "BTC/ETH",
      type: t("Buy"),
      price: "$222",
      executed: true,
      total: "0.4314 BTC",
    },
    {
      date: "24-04 14:40",
      pair: "BTC/ETH",
      type: t("Sell"),
      price: "$222",
      executed: true,
      total: "0.4314 BTC",
    },
    {
      date: "24-04 14:40",
      pair: "BTC/ETH",
      type: t("Buy"),
      price: "$222",
      executed: false,
      total: "0.4314 BTC",
    },
    {
      date: "24-04 14:40",
      pair: "BTC/ETH",
      type: t("Buy"),
      price: "$222",
      executed: true,
      total: "0.4314 BTC",
    },
    {
      date: "24-04 14:40",
      pair: "BTC/ETH",
      type: t("Sell"),
      price: "$222",
      executed: false,
      total: "0.4314 BTC",
    },
    {
      date: "24-04 14:40",
      pair: "BTC/ETH",
      type: t("Sell"),
      price: "$222",
      executed: true,
      total: "0.4314 BTC",
    },
  ];

  return (
    <div className="container my-4 order-history py-4">
      <ul className="nav nav-tabs mb-3 border-0 fs-4 fw-bold">
        <li className="nav-item">
          <a
            className="nav-link active text-black border-0 border-bottom border-2 border-primary"
            href="#"
          >
            {t("Order History")}
          </a>
        </li>
        <li className="nav-item d-none d-md-block">
          <a
            className="nav-link text-muted border-0 border-bottom border-1 border-secondary"
            href="#"
          >
            {t("Open Orders")}
          </a>
        </li>
        <li className="nav-item d-none d-md-block">
          <a
            className="nav-link text-muted border-0 border-bottom border-1 border-secondary"
            href="#"
          >
            {t("Closed Orders")}
          </a>
        </li>
        <li className="ms-auto">
          <input
            type="text"
            placeholder={t("Search By Date")}
            className="form-control form-control-sm"
          />
        </li>
      </ul>

      <table className="table table-hover table-borderless align-middle text-center fs-18 fw-bold">
        <thead>
          <tr>
            <th className="py-3 text-muted d-none d-md-table-cell">{t("Date")}</th>
            <th className="py-3 text-muted">{t("Pair")}</th>
            <th className="py-3 text-muted">{t("Buy/Sell")}</th>
            <th className="py-3 text-muted">{t("Price")}</th>
            <th className="py-3 text-muted d-none d-md-table-cell">{t("Executed")}</th>
            <th className="py-3 text-muted">{t("Total")}</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td className="d-none d-md-table-cell">{order.date}</td>
              <td>{order.pair}</td>
              <td
                className={
                  order.type === "Buy" || order.type === "Satın Al"
                    ? "text-success"
                    : "text-danger"
                }
              >
                {order.type}
              </td>

              <td>{order.price}</td>
              <td className="d-none d-md-table-cell">
                {order.executed ? (
                  <span className="text-success">
                    <Image
                      src="/check-circle.svg"
                      alt="Executed"
                      width={24}
                      height={24}
                      className="img-fluid"
                    />
                  </span>
                ) : (
                  <span className="text-danger">
                    <Image
                      src="/x-circle.svg"
                      alt="Not Executed"
                      width={24}
                      height={24}
                      className="img-fluid"
                    />
                  </span>
                )}
              </td>
              <td>{order.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderHistory;
