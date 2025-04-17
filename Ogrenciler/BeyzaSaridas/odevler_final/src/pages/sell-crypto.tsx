import { useState, useContext } from "react";
import { Link, useLocation } from "wouter";
import { useSearch } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { LanguageContext } from "@/context/LanguageContext";
import { useMarketData } from "@/hooks/use-market-data";
import SellCrypto from "@/components/crypto/SellCrypto";
import PaymentDetails from "@/components/crypto/PaymentDetails";

const SellCryptoPage = () => {
  const { t } = useContext(LanguageContext);
  const { executeTransaction, refreshWallets } = useMarketData();
  const [location, navigate] = useLocation();
  const [step, setStep] = useState<"form" | "payment" | "success">("form");
  const [transactionData, setTransactionData] = useState<any>(null);
  const search = useSearch();
  const params = new URLSearchParams(search);
  const coinParam = params.get("coin");

  const handleFormComplete = (data: any) => {
    setTransactionData(data);
    setStep("payment");
  };

  const handlePaymentComplete = async () => {
    try {
      const result = await executeTransaction(transactionData);
      setTransactionData(result);

      refreshWallets();
      setStep("success");
    } catch (error) {
      console.error("Transaction failed:", error);
    }
  };

  const handleBack = () => {
    setStep("form");
  };

  const handleReturn = () => {
    navigate("/wallet");
  };

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
        <Link
          href="/wallet"
          className="text-neutral-500 hover:text-primary dark:text-neutral-400 dark:hover:text-primary"
        >
          {t("nav.wallet")}
        </Link>
        <span className="mx-2 text-neutral-400 dark:text-neutral-600">/</span>
        <span className="font-medium text-neutral-800 dark:text-neutral-200">
          {t("wallet.sell")}
        </span>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h1 className="text-2xl font-semibold mb-4 md:mb-0 dark:text-white">
          {t("wallet.sell")} Crypto
        </h1>
      </div>

      <div className="max-w-3xl mx-auto">
        {step === "form" && (
          <SellCrypto
            onComplete={handleFormComplete}
            initialCrypto={coinParam || undefined}
          />
        )}

        {step === "payment" && (
          <PaymentDetails
            transactionData={transactionData}
            onBack={handleBack}
            onComplete={handlePaymentComplete}
          />
        )}

        {step === "success" && (
          <Card className="border-neutral-200 dark:border-neutral-700 dark:bg-neutral-800">
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 mb-4">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h2 className="text-2xl font-semibold mb-2 dark:text-white">
                  {t("buySell.success")}
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {t("buySell.successMessage")} {transactionData?.fromAmount}{" "}
                  {transactionData?.fromCurrency} {t("buySell.for")}{" "}
                  {transactionData?.toAmount} {transactionData?.toCurrency}
                </p>
              </div>

              <div className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg p-4 mb-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-neutral-500 dark:text-neutral-400">
                    {t("buySell.status")}:
                  </span>
                  <span className="font-medium text-green-600 dark:text-green-400">
                    {t("buySell.complete")}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-500 dark:text-neutral-400">
                    {t("buySell.transactionId")}:
                  </span>
                  <span className="font-medium dark:text-white">
                    {transactionData?.transactionId}
                  </span>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-3">
                <Button
                  className="bg-primary hover:bg-primary/90 text-white"
                  onClick={handleReturn}
                >
                  Return to Wallet
                </Button>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 dark:border-primary dark:text-primary"
                  asChild
                >
                  <Link href="/sell-crypto">Sell More Crypto</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default SellCryptoPage;
