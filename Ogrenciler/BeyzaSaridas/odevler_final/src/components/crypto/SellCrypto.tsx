import { useState, useContext, useEffect } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";
import { LanguageContext } from "@/context/LanguageContext";
import { useMarketData } from "@/hooks/use-market-data";
import { nanoid } from "nanoid";

const formSchema = z.object({
  fromCurrency: z.string().min(1, "Please select a currency"),
  toCurrency: z.string().min(1, "Please select a currency"),
  fromAmount: z.string().min(1, "Amount is required"),
});

type SellCryptoFormValues = z.infer<typeof formSchema>;

interface SellCryptoProps {
  onComplete: (data: any) => void;
  initialCrypto?: string;
}

const SellCrypto = ({ onComplete, initialCrypto }: SellCryptoProps) => {
  const { t } = useContext(LanguageContext);
  const { marketData, wallets } = useMarketData();
  const [toAmount, setToAmount] = useState("0");

  const activeWallets = wallets.filter((wallet) => Number(wallet.balance) > 0);

  const form = useForm<SellCryptoFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fromCurrency:
        initialCrypto ||
        (activeWallets.length > 0 ? activeWallets[0].currency : "BTC"),
      toCurrency: "USDT",
      fromAmount: "0.001",
    },
  });

  const fromCurrency = form.watch("fromCurrency");
  const toCurrency = form.watch("toCurrency");
  const fromAmount = form.watch("fromAmount");

  const getAvailableBalance = () => {
    const wallet = wallets.find((w) => w.currency === fromCurrency);
    return wallet ? Number(wallet.balance) : 0;
  };

  useEffect(() => {
    if (!fromAmount || !fromCurrency || !toCurrency) {
      setToAmount("0");
      return;
    }

    const fromCoin = marketData.find((coin) => coin.symbol === fromCurrency);
    const toCoin = marketData.find((coin) => coin.symbol === toCurrency);

    if (fromCoin && toCoin && fromAmount) {
      const fromValueInUSD = Number(fromAmount) * Number(fromCoin.price);
      const toAmount = fromValueInUSD / Number(toCoin.price);
      setToAmount(toAmount.toFixed(6));
    }
  }, [fromAmount, fromCurrency, toCurrency, marketData]);

  const onSubmit = (values: SellCryptoFormValues) => {
    const availableBalance = getAvailableBalance();
    const fromAmountNum = Number(values.fromAmount);

    if (fromAmountNum > availableBalance) {
      form.setError("fromAmount", {
        type: "manual",
        message: `Insufficient balance. You have ${availableBalance} ${values.fromCurrency} available.`,
      });
      return;
    }

    const transactionData = {
      type: "sell",
      fromCurrency: values.fromCurrency,
      toCurrency: values.toCurrency,
      fromAmount: values.fromAmount,
      toAmount: toAmount,
      status: "completed",
      transactionId: `S${nanoid(10)}`,
    };

    onComplete(transactionData);
  };

  return (
    <Card className="border-neutral-200 dark:border-neutral-700 dark:bg-neutral-800">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-6 dark:text-white">
          {t("wallet.sell")} Crypto
        </h2>

        <div className="flex items-center justify-between mb-8 relative">
          <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-1 bg-neutral-200 dark:bg-neutral-700 z-0"></div>

          <div className="flex flex-col items-center relative z-10">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-medium">
              <Check className="w-5 h-5" />
            </div>
            <span className="text-sm font-medium mt-2 dark:text-white">
              {t("buySell.selectCrypto")}
            </span>
          </div>

          <div className="flex flex-col items-center relative z-10">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-medium">
              2
            </div>
            <span className="text-sm font-medium mt-2 dark:text-white">
              {t("buySell.enterAmount")}
            </span>
          </div>

          <div className="flex flex-col items-center relative z-10">
            <div className="w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-400 flex items-center justify-center text-sm font-medium">
              3
            </div>
            <span className="text-sm font-medium mt-2 dark:text-neutral-500">
              {t("buySell.paymentDetails")}
            </span>
          </div>

          <div className="flex flex-col items-center relative z-10">
            <div className="w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-400 flex items-center justify-center text-sm font-medium">
              4
            </div>
            <span className="text-sm font-medium mt-2 dark:text-neutral-500">
              {t("buySell.confirmation")}
            </span>
          </div>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="fromCurrency"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-neutral-700 dark:text-neutral-300">
                    From
                  </FormLabel>
                  <div className="flex items-end gap-2">
                    <div className="flex-1">
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="dark:bg-neutral-900 dark:border-neutral-700 dark:text-white">
                            <SelectValue placeholder="Select currency" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="dark:bg-neutral-800 dark:border-neutral-700">
                          {marketData.map((coin) => (
                            <SelectItem key={coin.symbol} value={coin.symbol}>
                              {coin.symbol} - {coin.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">
                      Available: {getAvailableBalance().toFixed(6)}{" "}
                      {fromCurrency}
                    </div>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="toCurrency"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-neutral-700 dark:text-neutral-300">
                    To
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="dark:bg-neutral-900 dark:border-neutral-700 dark:text-white">
                        <SelectValue placeholder="Select currency" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="dark:bg-neutral-800 dark:border-neutral-700">
                      {marketData.map((coin) => (
                        <SelectItem
                          key={coin.symbol}
                          value={coin.symbol}
                          disabled={coin.symbol === fromCurrency}
                        >
                          {coin.symbol} - {coin.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="fromAmount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-neutral-700 dark:text-neutral-300">
                    {t("buySell.youSend")}
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        {...field}
                        type="number"
                        placeholder="0.00"
                        className="pr-16 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white"
                      />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-500 dark:text-neutral-400">
                        {fromCurrency}
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div>
              <FormLabel className="text-neutral-700 dark:text-neutral-300">
                {t("buySell.youReceive")}
              </FormLabel>
              <div className="relative">
                <Input
                  value={toAmount}
                  disabled
                  className="pr-16 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white opacity-70"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-500 dark:text-neutral-400">
                  {toCurrency}
                </div>
              </div>
            </div>

            <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-md border border-neutral-200 dark:border-neutral-700">
              <div className="text-sm text-neutral-600 dark:text-neutral-400 flex justify-between">
                <span>Exchange Rate:</span>
                <span className="font-medium dark:text-neutral-300">
                  1 {fromCurrency} ≈{" "}
                  {(() => {
                    const fromCoin = marketData.find(
                      (coin) => coin.symbol === fromCurrency
                    );
                    const toCoin = marketData.find(
                      (coin) => coin.symbol === toCurrency
                    );
                    if (fromCoin && toCoin) {
                      const rate =
                        Number(fromCoin.price) / Number(toCoin.price);
                      return rate.toFixed(6);
                    }
                    return "0.00";
                  })()}{" "}
                  {toCurrency}
                </span>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full py-3 bg-primary hover:bg-primary/90 text-white"
            >
              Continue <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default SellCrypto;
