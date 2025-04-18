"use client";

import DisplayTable from "../../../_components/ui/CustomTables/DisplayTable";

const fakeOrderBook = {
  asks: [
    { price: 38210.75, quantity: 0.6, amount: 38210.75 * 0.6 },
    { price: 38220.1, quantity: 1.3, amount: 38220.1 * 1.3 },
    { price: 38230.5, quantity: 0.7, amount: 38230.5 * 0.7 },
    { price: 38230.5, quantity: 1.1, amount: 38230.5 * 1.1 },
    { price: 38230.5, quantity: 0.9, amount: 38230.5 * 0.9 },
  ],
  bids: [
    { price: 38200.25, quantity: 0.8, amount: 38200.25 * 0.8 },
    { price: 38190.15, quantity: 1.1, amount: 38190.15 * 1.1 },
    { price: 38185.5, quantity: 0.5, amount: 38185.5 * 0.5 },
    { price: 38190.15, quantity: 1.4, amount: 38190.15 * 1.4 },
    { price: 38190.15, quantity: 1.3, amount: 38190.15 * 1.3 },
  ],
};

const OrderBook = () => {
  return (
    <div className="d-flex flex-column gap-4">
      <h5 className="fw-bold pb-5 border-bottom">Order Book</h5>
      <DisplayTable
        parentKey="order-book"
        data={fakeOrderBook.asks}
        columns={["price", "quantity", "amount"]}
        side="asks"
        translationPage="TradePage"
      ></DisplayTable>

      <DisplayTable
        parentKey="order-book"
        data={fakeOrderBook.bids}
        columns={["price", "quantity", "amount"]}
        side="bids"
        translationPage="TradePage"
      ></DisplayTable>
    </div>
  );
};

export default OrderBook;
