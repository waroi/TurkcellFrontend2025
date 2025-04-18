"use client";

import NavList from "@/app/_components/ui/NavList";
import { useMarketStore } from "@/app/[locale]/store/MarketStore";
import { useUserStore } from "@/app/[locale]/store/UserStore";
import Icon from "@/app/_components/ui/Icon";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { useState } from "react";

const Navs = ["BTC", "ETH", "USDT"];
const columns = ["pair", "last-price", "change"];

const CoinList = () => {
  const [selectedKey, setSelectedKey] = useState("BTC");
  const { marketData } = useMarketStore();
  const { user, toggleFavorite } = useUserStore();
  const t = useTranslations("TradePage");

  return (
    <div className="d-flex flex-column gap-2">
      <div className="d-flex text-secondary fw-bold border-bottom pb-3">
        {Navs.map((item) => (
          <NavList
            key={item}
            item={item}
            selectedKey={selectedKey}
            setSelectedKey={setSelectedKey}
            parentKey="coin-tabs"
            location="TradePage"
          />
        ))}
      </div>
      <div className="d-flex flex-column gap-3">
        <div className="d-flex justify-content-between body2 fw-bold">
          {columns.map((key) => (
            <span key={key}>{t(`coins.${key}`)}</span>
          ))}
        </div>
        {marketData &&
          marketData.map((coin) => {
            const isFavorite = user.favoriteCoins.includes(coin.symbol);
            return (
              <div
                key={coin.id}
                className="d-flex justify-content-between align-items-center border-bottom py-2 body3 "
              >
                <div className="d-flex align-items-center gap-2">
                  <Icon
                    name={isFavorite ? "favorite" : "nonfavorite"}
                    onClick={() => toggleFavorite(coin.symbol)}
                  />
                  <span className="">{coin.symbol}</span>
                </div>

                <div className="d-flex gap-4 align-items-center">
                  <span className="text-end">
                    ${coin.quote.USD.price.toFixed(2)}
                  </span>
                </div>

                <div
                  className={clsx(
                    coin.quote?.USD?.percent_change_24h < 0
                      ? "text-critical"
                      : "text-success",
                    "text-end"
                  )}
                >
                  {coin.quote?.USD?.percent_change_24h > 0 && <span>+</span>}
                  {coin.quote?.USD?.percent_change_24h?.toFixed(2)}%
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default CoinList;
