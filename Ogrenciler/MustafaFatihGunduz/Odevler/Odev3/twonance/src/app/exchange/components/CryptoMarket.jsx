"use client";

const CryptoMarket = ({ orderBook, recentTrades }) => {
  const staticOrderHistory = [
    {
      date: "2025-04-18 12:30",
      pair: "BTC/USDT",
      type: "BUY",
      price: "64350.25",
      executed: true,
      total: "0.015",
    },
    {
      date: "2025-04-17 17:45",
      pair: "ETH/USDT",
      type: "SELL",
      price: "3100.50",
      executed: false,
      total: "0.250",
    },
    {
      date: "2025-04-16 09:15",
      pair: "SOL/USDT",
      type: "BUY",
      price: "145.20",
      executed: true,
      total: "10",
    },
  ];

  return (
    <div className="p-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 bg-white p-4 rounded-2xl shadow">
        <h2 className="text-xl font-bold mb-4">Order History</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-gray-600">
            <thead>
              <tr className="text-left border-b">
                <th className="p-2">Date</th>
                <th className="p-2">Pair</th>
                <th className="p-2">Buy/Sell</th>
                <th className="p-2">Price</th>
                <th className="p-2">Executed</th>
                <th className="p-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {staticOrderHistory.map((order, index) => (
                <tr key={index} className="border-b last:border-0">
                  <td className="p-2">{order.date}</td>
                  <td className="p-2">{order.pair}</td>
                  <td
                    className={`p-2 font-semibold ${
                      order.type === "BUY" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {order.type}
                  </td>
                  <td className="p-2">${order.price}</td>
                  <td className="p-2">
                    {order.executed ? (
                      <span className="text-green-600">✔️</span>
                    ) : (
                      <span className="text-red-600">❌</span>
                    )}
                  </td>
                  <td className="p-2">{order.total} BTC</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="space-y-6">
        <div className="bg-white p-4 rounded-2xl shadow">
          <h2 className="text-xl font-bold mb-4">Order Book</h2>
          <div>
            {orderBook.map((item, i) => (
              <div key={i} className="flex justify-between py-1">
                <span
                  className={`font-mono ${
                    item.type === "sell" ? "text-red-600" : "text-green-600"
                  }`}
                >
                  {item.price}
                </span>
                <span>{item.amount} ETH</span>
                <span>{item.total} BTC</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow">
          <h2 className="text-xl font-bold mb-4">Recent Trades</h2>
          <div>
            {recentTrades.map((trade, i) => (
              <div key={i} className="flex justify-between py-1">
                <span className="text-gray-500">{trade.time}</span>
                <span
                  className={`font-mono ${
                    trade.type === "sell" ? "text-red-600" : "text-green-600"
                  }`}
                >
                  {trade.price}
                </span>
                <span>{trade.amount} ETH</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CryptoMarket;
