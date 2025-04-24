import React from "react";
import CustomButton from "../atoms/CustomButton";
const Tabs: string[] = [
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
const ListTabs = () => {
  return (
    <div className="d-flex list-tabs overflow-x-scroll">
      {Tabs.map((tab, index) => (
        <CustomButton
          variant="link"
          label={tab}
          className={`text-decoration-none text-black fw-semibold rounded-pill px-4 ${
            index === 0 ? "first-tab text-white" : ""
          }`}
          key={index}
        />
      ))}
    </div>
  );
};

export default ListTabs;
