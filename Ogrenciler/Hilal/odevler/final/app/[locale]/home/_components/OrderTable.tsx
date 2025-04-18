"use client";

import clsx from "clsx";
import { useTranslations } from "next-intl";
import Table from "react-bootstrap/Table";
import { formatNumber } from "@/app/utils/helperFunctions";
const orderCols: string[] = [
  "date",
  "pair",
  "buy/sell",
  "price",
  "excuted",
  "total",
];

function OrderTable({ orderHistory }: { orderHistory: any }) {
  const t = useTranslations("TradePage");

  return (
    <Table hover responsive className="body2">
      <thead>
        <tr>
          {orderCols.map((column) => (
            <th key={column} className="text-secondary">
              {t(`orderCols.${column}`)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {orderHistory?.slice(0, 6).map((order: any) => {
          const isBuy = order.side === "BUY";
          const date = new Date(order.time).toISOString().slice(0, 19).replace("T", " ");

          return (
            <tr key={order.orderId}>
              <td className="text-secondary">{date}</td>

              <td className="fw-bold">
                {order.symbol.slice(0, -4)}/{order.symbol.slice(-4)}
              </td>

              <td className={clsx(isBuy ? "text-success" : "text-critical", "fw-bold")}>
                {order.side}
              </td>

              <td>${formatNumber(Number(order.price))}</td>

              <td>{formatNumber(Number(order.executedQty))}</td>

              <td>${formatNumber(Number(order.cummulativeQuoteQty))}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default OrderTable;
