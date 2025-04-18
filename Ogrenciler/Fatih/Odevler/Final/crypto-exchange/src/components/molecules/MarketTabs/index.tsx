import React from "react";

const categories = [
  "Crypto",
  "DeFi",
  "BSC",
  "NFT",
  "Metaverse",
  "Polkadot",
  "Solana",
  "Opensea",
  "Makersplace",
];

const MarketTabs = () => {
  return (
    <div className="d-flex gap-3 mb-4 flex-wrap container border-bottom pb-2">
      {categories.map((cat, idx) => (
        <button
          key={cat}
          className={`px-3 py-2 rounded-pill fw-medium border-0 ${
            idx === 0
              ? "bg-primary text-white"
              : "text-secondary bg-transparent"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default MarketTabs;
