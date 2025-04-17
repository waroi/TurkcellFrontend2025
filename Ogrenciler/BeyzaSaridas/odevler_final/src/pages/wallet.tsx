import { useContext } from "react";
import { Link, useLocation } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LanguageContext } from "@/context/LanguageContext";
import { useMarketData } from "@/hooks/use-market-data";
import WalletOverview from "@/components/wallet/WalletOverview";
import CryptoBalance from "@/components/wallet/CryptoBalance";

const WalletPage = () => {
  const { t } = useContext(LanguageContext);
  const { wallets, isLoading } = useMarketData();
  const [location] = useLocation();

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="flex justify-center items-center h-60">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  const hasWallets = wallets.some((wallet) => Number(wallet.balance) > 0);

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
          {t("nav.wallet")}
        </span>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h1 className="text-2xl font-semibold mb-4 md:mb-0 dark:text-white">
          {t("nav.wallet")}
        </h1>
        <div className="flex gap-3">
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 dark:border-primary dark:text-primary"
            asChild
          >
            <Link href="/buy-crypto">{t("wallet.buy")}</Link>
          </Button>
          <Button className="bg-primary hover:bg-primary/90 text-white" asChild>
            <Link href="/sell-crypto">{t("wallet.sell")}</Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="col-span-1 bg-white dark:bg-neutral-800 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-700 p-4">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid grid-cols-1 w-full">
              <TabsTrigger value="overview" className="justify-start">
                {t("wallet.overview")}
              </TabsTrigger>
              <TabsTrigger value="balances" className="justify-start">
                Assets
              </TabsTrigger>
              <TabsTrigger value="history" className="justify-start">
                Transaction History
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="col-span-1 md:col-span-3 bg-white dark:bg-neutral-800 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-700 p-6">
          <Tabs defaultValue="overview">
            <TabsContent value="overview">
              {hasWallets ? (
                <WalletOverview />
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium mb-4 dark:text-white">
                    Welcome to your wallet
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                    You don't have any cryptocurrencies yet. Get started by
                    buying some crypto.
                  </p>
                  <Button
                    className="bg-primary hover:bg-primary/90 text-white"
                    asChild
                  >
                    <Link href="/buy-crypto">{t("wallet.buy")} Crypto</Link>
                  </Button>
                </div>
              )}
            </TabsContent>

            <TabsContent value="balances">
              <CryptoBalance />
            </TabsContent>

            <TabsContent value="history">
              <div className="space-y-4">
                <h3 className="text-lg font-medium mb-4 dark:text-white">
                  Transaction History
                </h3>

                <Card className="border-neutral-200 dark:border-neutral-700 dark:bg-neutral-900">
                  <CardContent className="p-0">
                    <div className="text-center py-12 text-neutral-500 dark:text-neutral-400">
                      Your transaction history will appear here
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default WalletPage;
