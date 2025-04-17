import { useContext } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  Wallet,
  ChartBar,
  ArrowRightLeft,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useMarketData } from "@/hooks/use-market-data";
import { LanguageContext } from "@/context/LanguageContext";
import CoinCard from "@/components/market/CoinCard";

const HomePage = () => {
  const { t } = useContext(LanguageContext);
  const { marketData, isLoading } = useMarketData();

  const topCoins = [...marketData]
    .sort((a, b) => Number(b.marketCap) - Number(a.marketCap))
    .slice(0, 4);

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="py-10 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">
              Trade Crypto with <span className="text-primary">Confidence</span>
            </h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8">
              Buy, sell, and trade cryptocurrencies with ease on our secure
              platform. Start your journey to financial freedom today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white"
                asChild
              >
                <Link href="/buy-crypto">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
                asChild
              >
                <Link href="/market">Explore Markets</Link>
              </Button>
            </div>
          </div>

          <div className="hidden md:block">
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/cryptocurrency-exchange-5573955-4652896.png"
              alt="Crypto trading illustration"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold dark:text-white">
            Market Overview
          </h2>
          <Link
            href="/market"
            className="text-primary hover:underline flex items-center"
          >
            See All Markets <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {isLoading ? (
            <div className="col-span-full flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          ) : (
            topCoins.map((coin) => <CoinCard key={coin.id} coin={coin} />)
          )}
        </div>
      </section>

      <section className="py-10">
        <h2 className="text-2xl font-semibold mb-8 text-center dark:text-white">
          Why Choose Rocket Exchange
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-neutral-200 dark:border-neutral-700 dark:bg-neutral-800">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Wallet className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2 dark:text-white">
                Secure Wallet
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Your assets are stored in secure wallets with industry-leading
                protection.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-200 dark:border-neutral-700 dark:bg-neutral-800">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <ChartBar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2 dark:text-white">
                Advanced Charts
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Access detailed market analysis with our professional charting
                tools.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-200 dark:border-neutral-700 dark:bg-neutral-800">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <ArrowRightLeft className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2 dark:text-white">
                Low Fees
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Enjoy competitive trading fees and transparent pricing on all
                transactions.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-200 dark:border-neutral-700 dark:bg-neutral-800">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2 dark:text-white">
                24/7 Support
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Our dedicated team is ready to assist you with any questions
                around the clock.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-10">
        <Card className="border-primary/20 bg-primary/5 dark:bg-primary/10 dark:border-primary/30">
          <CardContent className="p-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 dark:text-white">
                Ready to start trading?
              </h2>
              <p className="text-neutral-600 dark:text-neutral-300 mb-6">
                Join thousands of traders who trust Rocket Exchange for their
                cryptocurrency needs. Creating an account takes less than 5
                minutes.
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white"
                asChild
              >
                <Link href="/auth">Create Account</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default HomePage;
