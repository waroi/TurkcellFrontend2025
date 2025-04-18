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
    <div className="d-flex">
      {Tabs.map((tab, index) => (
        <CustomButton
          variant="link"
          label={tab}
          className="text-decoration-none text-black fw-semibold"
          key={index}
        />
      ))}
    </div>
  );
};

export default ListTabs;
