"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useMarketStore } from "@/app/[locale]/store/MarketStore";
import MainSurfaceButton from "@/app/_components/ui/Buttons/MainSurfaceButton";
import { coinToMoney, formatNumber } from "@/app/utils/helperFunctions";

export type Balance = {
  asset: string;
  free: string;
  locked: string;
};

const BalancePanel = ({ balances }: { balances: Balance[] }) => {
  const [totalBalance, setTotalBalance] = useState<number>(0);
  const { marketData } = useMarketStore();

  useEffect(() => {
    if (!marketData || balances.length === 0) return;

    const total = balances.reduce((prev, balance) => {
      const value = coinToMoney(Number(balance.free), marketData, balance.asset);
      return prev + (value || 0);
    }, 0);

    setTotalBalance(total);
  }, [marketData, balances]);

  return (
    <div className="d-flex flex-column gap-4">
      <div className="p-4 text-center d-flex justify-content-center gap-3 flex-column">
        <p className="text-secondary">Your Balance</p>
        <h3 className="fw-bold">${formatNumber(totalBalance)}</h3>
        <MainSurfaceButton className="border w-100 py-3">
          +Top up balance
        </MainSurfaceButton>
      </div>

      <div className="p-4">
        <h5 className="fw-bold mb-3">Your assets</h5>
        {balances.slice(0, 6).map((b) => (
          <div
            key={b.asset}
            className="d-flex justify-content-between align-items-center py-2 border-bottom"
          >
            <div className="d-flex align-items-center gap-2">
              <Image
                src={`https://cryptoicon-api.pages.dev/api/icon/${b.asset.toLowerCase()}`}
                alt={b.asset}
                width={48}
                height={48}
              />
              <span className="fw-bold">{b.asset}</span>
            </div>
            <div className="text-end">
              <span className="fw-bold body2">
                ${formatNumber(coinToMoney(Number(b.free), marketData, b.asset) ?? 0)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BalancePanel;
