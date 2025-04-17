import { useContext, useState } from "react";
import { Link } from "wouter";
import {
  ChevronDown,
  ArrowRight,
  ArrowRightLeft,
  TrendingUp,
  CheckCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useMarketData } from "@/hooks/use-market-data";
import { LanguageContext } from "@/context/LanguageContext";

const WalletOverview = () => {
  const { t } = useContext(LanguageContext);
  const { wallets, marketData } = useMarketData();
  const [selectedCurrency, setSelectedCurrency] = useState("USDT");

  const selectedWallet = wallets.find(
    (wallet) => wallet.currency === selectedCurrency
  );

  const currencyData = marketData.find(
    (data) => data.symbol === selectedCurrency
  );

  const formatCurrency = (value: string | number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(Number(value));
  };

  const calculateTotalBalance = () => {
    let total = 0;

    wallets.forEach((wallet) => {
      const coinData = marketData.find(
        (data) => data.symbol === wallet.currency
      );
      if (coinData) {
        total += Number(wallet.balance) * Number(coinData.price);
      }
    });

    return total;
  };

  const getCurrencyFullName = (symbol: string) => {
    const coin = marketData.find((data) => data.symbol === symbol);
    return coin ? coin.name : symbol;
  };

  const changePercentage = currencyData ? Number(currencyData.change24h) : 0;
  const isPositiveChange = changePercentage >= 0;

  return (
    <div className="mb-6">
      <div className="flex items-center mb-4">
        <button className="inline-flex items-center space-x-1 focus:outline-none">
          <span className="text-lg font-medium dark:text-white">
            {selectedCurrency}
          </span>
          <ChevronDown className="w-5 h-5 text-neutral-500" />
        </button>
        <span className="text-sm text-neutral-500 dark:text-neutral-400 ml-2">
          {getCurrencyFullName(selectedCurrency)}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card className="border-neutral-200 dark:border-neutral-700 dark:bg-neutral-800">
          <CardContent className="p-4">
            <div className="flex justify-between mb-3">
              <span className="text-sm text-neutral-500 dark:text-neutral-400">
                {selectedCurrency}/USDC
              </span>
              <span
                className={`text-xs px-2 py-0.5 rounded ${
                  isPositiveChange
                    ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                    : "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
                }`}
              >
                {isPositiveChange ? "+" : ""}
                {changePercentage.toFixed(2)}%
              </span>
            </div>

            <div className="mb-4">
              <div className="text-xl font-semibold dark:text-white">
                {selectedWallet
                  ? Number(selectedWallet.balance).toFixed(8)
                  : "0.00000000"}{" "}
                {selectedCurrency}
              </div>
              <div className="text-sm text-neutral-500 dark:text-neutral-400">
                {t("wallet.totalBalance")}:{" "}
                {formatCurrency(calculateTotalBalance())}
              </div>
            </div>

            <div className="price-chart">
              <svg viewBox="0 0 300 60" className="w-full">
                <path
                  d="M0,30 C20,28 40,32 60,30 C80,28 100,22 120,24 C140,26 160,36 180,38 C200,40 220,30 240,28 C260,26 280,30 300,28"
                  fill="none"
                  stroke={isPositiveChange ? "#EBFBEE" : "#FEECEB"}
                  strokeWidth="2"
                  className="dark:opacity-30"
                />
                <path
                  d="M0,30 C20,28 40,32 60,30 C80,28 100,22 120,24 C140,26 160,36 180,38 C200,40 220,30 240,28 C260,26 280,30 300,28"
                  fill="none"
                  stroke={isPositiveChange ? "#34D399" : "#FF9292"}
                  strokeWidth="2"
                />
              </svg>
            </div>
          </CardContent>
        </Card>

        <div>
          <div className="grid grid-cols-2 gap-4">
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-white py-3 h-auto"
            >
              <Link href="/buy-crypto">{t("wallet.buy")}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 py-3 h-auto"
            >
              <Link href="/sell-crypto">{t("wallet.sell")}</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-200 dark:border-neutral-700 pt-6">
        <h3 className="font-medium mb-4 dark:text-white">
          {t("wallet.balance")}
        </h3>

        <div className="space-y-4">
          <Card className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <ArrowRightLeft className="w-5 h-5 text-neutral-500 dark:text-neutral-400 mr-2" />
                  <span className="font-medium dark:text-white">
                    {t("wallet.exchange")}
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-baseline">
                <div>
                  <div className="text-lg font-medium dark:text-white">
                    {wallets.find((w) => w.currency === "USDT")?.balance ||
                      "0.00000000"}{" "}
                    USDT
                  </div>
                  <div className="text-sm text-neutral-500 dark:text-neutral-400">
                    {formatCurrency(
                      Number(
                        wallets.find((w) => w.currency === "USDT")?.balance || 0
                      ) *
                        Number(
                          marketData.find((m) => m.symbol === "USDT")?.price ||
                            1
                        )
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <TrendingUp className="w-5 h-5 text-neutral-500 dark:text-neutral-400 mr-2" />
                  <span className="font-medium dark:text-white">
                    {t("wallet.spot")}
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-baseline">
                <div>
                  <div className="text-lg font-medium dark:text-white">
                    {wallets.find((w) => w.currency === "BTC")?.balance ||
                      "0.00000000"}{" "}
                    BTC
                  </div>
                  <div className="text-sm text-neutral-500 dark:text-neutral-400">
                    {formatCurrency(
                      Number(
                        wallets.find((w) => w.currency === "BTC")?.balance || 0
                      ) *
                        Number(
                          marketData.find((m) => m.symbol === "BTC")?.price || 0
                        )
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-neutral-500 dark:text-neutral-400 mr-2" />
                  <span className="font-medium dark:text-white">
                    {t("wallet.available")}
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-baseline">
                <div>
                  <div className="text-lg font-medium dark:text-white">
                    {wallets.find((w) => w.currency === "ETH")?.balance ||
                      "0.00000000"}{" "}
                    ETH
                  </div>
                  <div className="text-sm text-neutral-500 dark:text-neutral-400">
                    {formatCurrency(
                      Number(
                        wallets.find((w) => w.currency === "ETH")?.balance || 0
                      ) *
                        Number(
                          marketData.find((m) => m.symbol === "ETH")?.price || 0
                        )
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WalletOverview;
