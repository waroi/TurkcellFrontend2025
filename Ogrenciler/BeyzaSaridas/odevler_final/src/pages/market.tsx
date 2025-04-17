import { useContext, useState } from "react";
import { Link } from "wouter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { LanguageContext } from "@/context/LanguageContext";
import { useMarketData } from "@/hooks/use-market-data";
import CoinTable from "@/components/market/CoinTable";
import CoinCard from "@/components/market/CoinCard";

const MarketPage = () => {
  const { t } = useContext(LanguageContext);
  const { marketData, isLoading } = useMarketData();
  const [view, setView] = useState<"table" | "cards">("table");

  const topGainers = [...marketData]
    .filter((coin) => Number(coin.change24h) > 0)
    .sort((a, b) => Number(b.change24h) - Number(a.change24h))
    .slice(0, 4);

  const topLosers = [...marketData]
    .filter((coin) => Number(coin.change24h) < 0)
    .sort((a, b) => Number(a.change24h) - Number(b.change24h))
    .slice(0, 4);

  return (
    <div className="container mx-auto px-4 py-6 md:py-8">
      <div className="flex items-center text-sm mb-6">
        <Link
          href="/"
          className="text-neutral-500 hover:text-primary dark:text-neutral-400 dark:hover:text-primary"
        >
          {t("nav.home")}
        </Link>
        <span className="mx-2 text-neutral-400 dark:text-neutral-600">/</span>
        <span className="font-medium text-neutral-800 dark:text-neutral-200">
          {t("nav.markets")}
        </span>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h1 className="text-2xl font-semibold mb-4 md:mb-0 dark:text-white">
          Cryptocurrency Markets
        </h1>
        <div className="flex gap-2 items-center">
          <span className="text-sm text-neutral-500 dark:text-neutral-400">
            View:
          </span>
          <Tabs
            value={view}
            onValueChange={(v) => setView(v as "table" | "cards")}
          >
            <TabsList>
              <TabsTrigger value="table">Table</TabsTrigger>
              <TabsTrigger value="cards">Cards</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-medium mb-4 dark:text-white">
          Market Highlights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-neutral-200 dark:border-neutral-700 dark:bg-neutral-800">
            <CardContent className="p-4">
              <h3 className="text-lg font-medium mb-3 text-green-600 dark:text-green-400">
                {t("market.topGainers")}
              </h3>
              <div className="space-y-3">
                {topGainers.map((coin) => (
                  <div
                    key={coin.id}
                    className="flex justify-between items-center p-2 hover:bg-neutral-50 dark:hover:bg-neutral-700 rounded-md"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary bg-opacity-10 flex items-center justify-center text-primary text-xs">
                        {coin.symbol.slice(0, 3)}
                      </div>
                      <div>
                        <div className="font-medium dark:text-white">
                          {coin.name}
                        </div>
                        <div className="text-sm text-neutral-500 dark:text-neutral-400">
                          {coin.symbol}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium dark:text-white">
                        $
                        {Number(coin.price).toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })}
                      </div>
                      <div className="text-sm text-green-600 dark:text-green-400">
                        +{Number(coin.change24h).toFixed(2)}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-200 dark:border-neutral-700 dark:bg-neutral-800">
            <CardContent className="p-4">
              <h3 className="text-lg font-medium mb-3 text-red-600 dark:text-red-400">
                {t("market.topLosers")}
              </h3>
              <div className="space-y-3">
                {topLosers.map((coin) => (
                  <div
                    key={coin.id}
                    className="flex justify-between items-center p-2 hover:bg-neutral-50 dark:hover:bg-neutral-700 rounded-md"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary bg-opacity-10 flex items-center justify-center text-primary text-xs">
                        {coin.symbol.slice(0, 3)}
                      </div>
                      <div>
                        <div className="font-medium dark:text-white">
                          {coin.name}
                        </div>
                        <div className="text-sm text-neutral-500 dark:text-neutral-400">
                          {coin.symbol}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium dark:text-white">
                        $
                        {Number(coin.price).toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })}
                      </div>
                      <div className="text-sm text-red-600 dark:text-red-400">
                        {Number(coin.change24h).toFixed(2)}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-medium mb-4 dark:text-white">
          {t("market.allCoins")}
        </h2>

        {view === "table" ? (
          <CoinTable />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {isLoading ? (
              <div className="col-span-full flex justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              </div>
            ) : (
              marketData.map((coin) => <CoinCard key={coin.id} coin={coin} />)
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MarketPage;
