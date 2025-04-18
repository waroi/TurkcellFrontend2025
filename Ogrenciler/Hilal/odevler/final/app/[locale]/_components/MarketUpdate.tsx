"use client";
import { useEffect, useState } from "react";
import NavList from "../../_components/ui/NavList";
import { useTranslations } from "next-intl";
import MarketTable from "./MarketTable";
import { getMarketList } from "@/app/utils/queries";
import LinkButton from "@/app/_components/ui/Buttons/LinkButton";
import SearchInput from "@/app/_components/ui/SearchInput";
import { Col, Row } from "react-bootstrap";
import { useMarketStore } from "../store/MarketStore";

const MarketUpdate = () => {
  const t = useTranslations("HomePage");
  const [selectedKey, setSelectedKey] = useState<string>("view-all");
  const [search, setSearch] = useState<string>("");
  const { setMarketData, marketData } = useMarketStore();

  const marketNavs = [
    "view-all",
    "metaverse",
    "entertainment",
    "energy",
    "nft",
    "gaming",
    "music",
  ];

  useEffect(() => {
    const fetchData = async () => {
      const res = await getMarketList();
      setMarketData(res?.data || []);
    };

    fetchData();
  }, []);

  const filteredData = marketData.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="d-flex justify-content-center flex-column gap-2">
      <div className="d-flex justify-content-between align-items-center mt-4">
        <h2>{t("market-title")}</h2>
        <LinkButton>See All Coins</LinkButton>
      </div>
      <Row>
        <Col className="d-flex align-items-center flex-wrap gap-2 d-inline">
          {marketNavs.map((item) => (
            <NavList
              key={item}
              parentKey="market-navs"
              location="HomePage"
              item={item}
              selectedKey={selectedKey}
              setSelectedKey={setSelectedKey}
            />
          ))}
        </Col>
        <Col sm={2} lg={3}>
          {" "}
          <SearchInput
            className="d-inline-block"
            placeholder="Search coin..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Col>
      </Row>

      <MarketTable data={filteredData} />
    </div>
  );
};

export default MarketUpdate;
