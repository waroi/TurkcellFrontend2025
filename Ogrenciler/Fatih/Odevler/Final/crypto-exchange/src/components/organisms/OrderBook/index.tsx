import React from "react";
import { useOrderBooks } from "@/hooks/useOrderBooks";
import { useTranslations } from "next-intl";
import OrderBooksTable from "@/components/molecules/OrderBooksTable";
import OrderBookStats from "@/components/molecules/OrderBookStats";
import styles from "./OrderBook.module.css";

const OrderBook = () => {
  const { asks, bids, lastPrice, priceChange } = useOrderBooks();
  const t = useTranslations("Dashboard.OrderBook");

  return (
    <div className={`${styles.wrapper} p-4 rounded-4 shadow-sm mt-4 h-100`}>
      <h5 className={`${styles.title} fw-semibold mb-3`}>{t("orderBook")}</h5>

      <OrderBooksTable type="ask" data={asks} />
      <OrderBookStats lastPrice={lastPrice} priceChange={priceChange} />
      <OrderBooksTable type="bid" data={bids} />
    </div>
  );
};

export default OrderBook;
