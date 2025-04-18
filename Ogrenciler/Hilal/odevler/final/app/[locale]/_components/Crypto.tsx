"use client";

import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import CryptoCard from "./CryptoCard";
import NavList from "../../_components/ui/NavList";
import { getMarketList } from "@/app/utils/queries";
import { CoinData } from "@/constants/types";

const Crypto = () => {
  const [selectedKey, setSelectedKey] = useState<string>("CRYPTO");
  const [marketData, setMarketData] = useState<any[]>([]);

  const cryptoList = [
    "CRYPTO",
    "DEFI",
    "BSC",
    "NFT",
    "METAVERSE",
    "POLKADOT",
    "SOLANS",
    "OPENSEAS",
    "MAKERSPLACE",
  ];

  useEffect(() => {
    const fetchData = async () => {
      const res = await getMarketList();
      setMarketData(res?.data || []);
    };

    fetchData();
  }, []);

  return (
    <Container className="bg-body rounded px-5 shadow mt-9">
      <div className="d-flex align-items-center justify-content-start border-bottom py-3 flex-wrap ">
        {cryptoList.map((item) => (
          <NavList
            key={item}
            parentKey="Crypto-list"
            location="HomePage"
            item={item}
            selectedKey={selectedKey}
            setSelectedKey={setSelectedKey}
          />
        ))}
      </div>
      <div
        className="d-flex flex-row gap-3 py-4 overflow-auto mt-3 "
        style={{ scrollbarWidth: "none" }}
      >
        {marketData.slice(0, 10).map((coin: CoinData) => (
          <div key={coin.id} className="crypto-card">
            <CryptoCard coin={coin} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Crypto;
