import React from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import { useTranslations } from "next-intl";
import { createTrade } from "@/app/utils/actions";
import Icon from "../Icon";
import TradeForm from "./TradeForm";
import { useExchangeStore } from "@/app/[locale]/store/ExchangeStore";

const BuyForm = ({ side = "buy" }: { side: "buy" | "sell" }) => {
  const { receiveSymbol, paySymbol, rate } = useExchangeStore();
  const t = useTranslations("TradePage");
  return (
    <form
      action={createTrade}
      className="d-flex flex-column justify-content-between  gap-3 p-5"
    >
      <div className="d-flex text-secondary">
        <span className="body3">
          1 {paySymbol} ≈ {rate?.toFixed(2) + " " + receiveSymbol}{" "}
        </span>{" "}
      </div>
      <div className="d-flex justify-content-between align-items-center gap-3">
        {" "}
        <TradeForm type="pay" side={side} />
        <span>
          {" "}
          <Icon name="turnAround" />
        </span>
        <TradeForm type="receive" side={side} />
      </div>
      <PrimaryButton type="submit" className="px-5 py-3 align-self-end">
        {side == "buy" ? t("buttons.buy") : t("buttons.sell")}
      </PrimaryButton>

      {/* <input type="text" name="paySymbol"  />
  <input type="text" name="receiveSymbol"  />
  <input  type="text" name="quantity"  /> */}
  <input hidden  name="side" defaultValue={side} />

    </form>
  );
};

export default BuyForm;
