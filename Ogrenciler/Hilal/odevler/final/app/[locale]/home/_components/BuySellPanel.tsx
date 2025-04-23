"use client";
import NavList from "@/app/_components/ui/NavList";
import React, { useState } from "react";
import TradeForm from "../../../_components/ui/Forms/TradeForm";
import Icon from "@/app/_components/ui/Icon";
import PrimaryButton from "@/app/_components/ui/Buttons/PrimaryButton";
import clsx from "clsx";

import { useTranslations } from "next-intl";
import { useExchangeStore } from "@/app/[locale]/store/ExchangeStore";
import { useNavigation } from "@/utils/navigation";

const BuySellPanel = () => {
  const [selectedKey, setSelectedKey] = useState<string>("limit");
  const [side, setSide] = useState<"buy" | "sell">("buy");
  const{goToBuyCripto} =useNavigation()

  const t = useTranslations("TradePage");
  const BUYSELLNAVS = ["limit", "market", "stopLimit", "stopMarket"];
  const { receiveSymbol, paySymbol, rate } = useExchangeStore();

  const handleBuy=()=>{
    goToBuyCripto()
  }

  return (
    <>
      <div className="d-flex justify-content-around align-items-center">
        <a
          onClick={() => setSide("buy")}
          className={clsx(
            side === "buy" && "border-primary",
            "border-bottom  w-100 text-center pb-2 cursor-pointer text-decoration-none"
          )}
        >
          <h5>{t("buttons.buy")}</h5>
        </a>
        <a
          onClick={() => setSide("sell")}
          className={clsx(
            side === "sell" && "border-primary",
            "border-bottom  w-100 text-center pb-2 cursor-pointer text-decoration-none"
          )}
        >
          <h5>{t("buttons.sell")}</h5>
        </a>
      </div>
      <div className="d-flex align-items-center justify-content-start py-3 flex-wrap gap-0">
        {BUYSELLNAVS.map((nav) => (
          <NavList
            key={nav}
            parentKey="BuySellNavs"
            location="TradePage"
            item={nav}
            selectedKey={selectedKey}
            setSelectedKey={setSelectedKey}
          />
        ))}
      </div>
      <div
        className="d-flex flex-column justify-content-between align-items-center gap-3"
      >
        <TradeForm type="pay" side={side} />
        <TradeForm type="receive" side={side} />
        <div className="d-flex text-secondary">
          <span className="body3">
            1 {paySymbol} ≈ {rate?.toFixed(2) + " " + receiveSymbol}{" "}
          </span>{" "}
          <Icon name="turnAround" className="ms-2" />
        </div>
        <PrimaryButton onClick={handleBuy} className="w-75 py-3">
          {side == "buy" ? t("buttons.buy") : t("buttons.sell")}
        </PrimaryButton>
      </div>
    </>
  );
};

export default BuySellPanel;
