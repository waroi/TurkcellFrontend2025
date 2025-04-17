import { useContext } from "react";
import { Link } from "wouter";
import { useMarketData } from "@/hooks/use-market-data";
import { LanguageContext } from "@/context/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CryptoBalance = () => {
  const { wallets, marketData } = useMarketData();
  const { t } = useContext(LanguageContext);

  const formatCurrency = (value: string | number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(Number(value));
  };

  const calculateTotalBalanceInUSD = () => {
    let total = 0;

    wallets.forEach((wallet) => {
      const coin = marketData.find((data) => data.symbol === wallet.currency);
      if (coin) {
        total += Number(wallet.balance) * Number(coin.price);
      }
    });

    return total;
  };

  return (
    <div>
      <Card className="border-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 mb-6">
        <CardContent className="p-4">
          <h3 className="text-lg font-medium mb-2 dark:text-white">
            Total Portfolio Value
          </h3>
          <div className="text-2xl font-bold mb-4 dark:text-white">
            {formatCurrency(calculateTotalBalanceInUSD())}
          </div>
          <div className="flex space-x-2">
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-white"
            >
              <Link href="/buy-crypto">{t("wallet.buy")}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
            >
              <Link href="/sell-crypto">{t("wallet.sell")}</Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      <h3 className="text-lg font-medium mb-4 dark:text-white">Your Assets</h3>

      <div className="space-y-3">
        {wallets.map((wallet) => {
          const coin = marketData.find(
            (data) => data.symbol === wallet.currency
          );
          if (!coin || Number(wallet.balance) <= 0) return null;

          const valueInUSD = Number(wallet.balance) * Number(coin.price);
          const percentChange = Number(coin.change24h);
          const isPositiveChange = percentChange >= 0;

          return (
            <Card
              key={wallet.id}
              className="border-neutral-200 dark:border-neutral-700 dark:bg-neutral-900"
            >
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary bg-opacity-10 rounded-full flex items-center justify-center text-primary">
                      {wallet.currency.slice(0, 2)}
                    </div>
                    <div>
                      <div className="font-medium dark:text-white">
                        {coin.name}
                      </div>
                      <div className="text-sm text-neutral-500 dark:text-neutral-400">
                        {wallet.currency}
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="text-right font-medium dark:text-white">
                      {Number(wallet.balance).toFixed(8)} {wallet.currency}
                    </div>
                    <div className="text-sm text-right flex items-center justify-end">
                      <span className="text-neutral-600 dark:text-neutral-400 mr-2">
                        {formatCurrency(valueInUSD)}
                      </span>
                      <span
                        className={
                          isPositiveChange
                            ? "text-green-600 dark:text-green-400"
                            : "text-red-600 dark:text-red-400"
                        }
                      >
                        {isPositiveChange ? "+" : ""}
                        {percentChange.toFixed(2)}%
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}

        {wallets.filter((wallet) => Number(wallet.balance) > 0).length ===
          0 && (
          <div className="text-center p-8 text-neutral-500 dark:text-neutral-400">
            <p>You don't have any crypto assets yet.</p>
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-white mt-4"
            >
              <Link href="/buy-crypto">{t("wallet.buy")} Crypto Now</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CryptoBalance;
