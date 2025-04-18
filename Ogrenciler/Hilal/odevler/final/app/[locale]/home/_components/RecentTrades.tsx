"use client";
import DisplayTable from "../../../_components/ui/CustomTables/DisplayTable";

const fakeRecentTrades = [
  { time: "14:22:30", quantity: 38215.5, amount: 0.3 },
  { time: "14:21:50", quantity: 38217.9, amount: 0.6 },
  { time: "14:21:20", quantity: 38210.0, amount: 0.45 },
  { time: "14:20:40", quantity: 38205.2, amount: 0.25 },
  { time: "14:20:10", quantity: 38208.7, amount: 0.9 },
];
const RecentTrades = () => {
  return (
    <div className="d-flex flex-column gap-4">
      <h5 className="fw-bold pb-3 border-bottom">Recent Trades</h5>
      <DisplayTable
        parentKey="recent-trades"
        data={fakeRecentTrades}
        columns={["time", "price", "amount"]}
        translationPage="TradePage"
      />
    </div>
  );
};

export default RecentTrades;
