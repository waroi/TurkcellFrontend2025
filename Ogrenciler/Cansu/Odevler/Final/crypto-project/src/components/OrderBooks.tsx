import React from "react";

const orders = [
  { price: 0.022572, amount: 1.262415, total: 15.19648 },
  { price: 0.020371, amount: 1.262415, total: 15.19648 },
  { price: 0.023572, amount: 1.262415, total: 15.19648 },
  { price: 0.032378, amount: 1.262415, total: 15.19648 },
  { price: 0.022573, amount: 1.262415, total: 15.19648 },
];

const OrderBooks = () => {
  const lastPrice = 0.020367;
  const usd = 148.65;
  const change = -0.52;

  return (
    <div className="p-4">
      <h5 className="mb-3 fs-2">Order book</h5>
      <table className="table table-sm table-borderless text-end">
        <thead>
          <tr>
            <th className="fs-18">Price (BTC)</th>
            <th className="fs-18">Amount (ETH)</th>
            <th className="fs-18">Total (BTC)</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => {
            const columns = [order.price, order.amount, order.total];
            return (
              <tr key={index}>
                {columns.map((value, i) => {
                  const isActive = i < Math.max(1, 3 - index);
                  return (
                    <td
                      key={i}
                      className={`text-center td-height fs-4 ${
                        isActive ? "bg-danger bg-opacity-10" : ""
                      } ${i === 0 ? "text-danger" : ""}`}
                    >
                      {typeof value === "number"
                        ? value.toFixed(i === 2 ? 5 : 6)
                        : value}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="d-flex justify-content-between text-center mb-3 border-top border-bottom py-2">
        <div className="flex-fill">
          <div className="fs-5 fw-normal text-muted">Last Price</div>
          <div className="fw-bold fs-3">{lastPrice}</div>
        </div>
        <div className="flex-fill">
          <div className="fs-5 fw-normal text-muted">USD</div>
          <div className="fw-bold fs-3">{usd}</div>
        </div>
        <div className="flex-fill">
          <div className="fs-5 fw-normal text-muted">Change</div>
          <div className="text-danger fs-3 fw-bold">{change}%</div>
        </div>
      </div>

      <table className="table table-sm text-end">
        <tbody>
          {orders.map((order, index) => {
            const columns = [order.price, order.amount, order.total];
            return (
              <tr key={index}>
                {columns.map((value, i) => {
                  const isActive = i <= index;
                  return (
                    <td
                      key={i}
                      className={`text-center fs-4 td-height ${
                        isActive ? "bg-success bg-opacity-10" : ""
                      } ${i === 0 ? "text-success" : ""}`}
                    >
                      {typeof value === "number"
                        ? value.toFixed(i === 2 ? 5 : 6)
                        : value}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OrderBooks;