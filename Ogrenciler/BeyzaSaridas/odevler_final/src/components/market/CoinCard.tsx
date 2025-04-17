import { useContext } from "react";
import { Link } from "wouter";
import { MarketData } from "@shared/schema";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { LanguageContext } from "@/context/LanguageContext";

interface CoinCardProps {
  coin: MarketData;
}

const CoinCard = ({ coin }: CoinCardProps) => {
  const { t } = useContext(LanguageContext);
  
  
  const formatPrice = (value: string | number) => {
    const numValue = Number(value);
    if (numValue < 1) {
      return new Intl.NumberFormat('en-US', { 
        style: 'currency', 
        currency: 'USD',
        minimumFractionDigits: 4,
        maximumFractionDigits: 8
      }).format(numValue);
    } else {
      return new Intl.NumberFormat('en-US', { 
        style: 'currency', 
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(numValue);
    }
  };
 
  const PriceChart = () => {
    const isPositive = Number(coin.change24h) >= 0;
    const strokeColor = isPositive ? "#10B981" : "#EF4444";
    const fillColor = isPositive ? "#DCFCE7" : "#FEE2E2";
    
    return (
      <svg viewBox="0 0 300 60" className="w-full">
        <path 
          d="M0,30 C20,28 40,32 60,30 C80,28 100,22 120,24 C140,26 160,36 180,38 C200,40 220,30 240,28 C260,26 280,30 300,28" 
          fill="none" 
          stroke={fillColor} 
          strokeWidth="2"
        />
        <path 
          d="M0,30 C20,28 40,32 60,30 C80,28 100,22 120,24 C140,26 160,36 180,38 C200,40 220,30 240,28 C260,26 280,30 300,28" 
          fill="none" 
          stroke={strokeColor} 
          strokeWidth="2" 
          className="animate-dash"
        />
      </svg>
    );
  };

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex justify-between mb-3">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center text-xs">
              {coin.symbol.slice(0, 3)}
            </div>
            <div>
              <h3 className="font-medium">{coin.name}</h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">{coin.symbol}</p>
            </div>
          </div>
          <div className={`px-2 py-0.5 h-fit text-xs rounded ${
            Number(coin.change24h) >= 0 
              ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-500" 
              : "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-500"
          }`}>
            {Number(coin.change24h) >= 0 ? "+" : ""}{Number(coin.change24h).toFixed(2)}%
          </div>
        </div>
        <div className="mb-4">
          <div className="text-xl font-semibold">{formatPrice(coin.price)}</div>
          <div className="text-sm text-neutral-500 dark:text-neutral-400">{t("market.volume")}: {formatPrice(coin.volume24h)}</div>
        </div>
        <div className="price-chart">
          <PriceChart />
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button variant="outline" size="sm" asChild>
          <Link href={`/buy-crypto?coin=${coin.symbol}`}>
            {t("wallet.buy")}
          </Link>
        </Button>
        <Buttonimport { useContext } from 'react';
import { Link } from 'wouter';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MarketData } from '@shared/schema';
import { LanguageContext } from '@/context/LanguageContext';

interface CoinCardProps {
  coin: MarketData;
}

const CoinCard = ({ coin }: CoinCardProps) => {
  const { t } = useContext(LanguageContext);
 
  const formatPrice = (value: string | number) => {
    const numValue = Number(value);
    if (numValue < 1) {
      return new Intl.NumberFormat('en-US', { 
        style: 'currency', 
        currency: 'USD',
        minimumFractionDigits: 4,
        maximumFractionDigits: 8
      }).format(numValue);
    } else {
      return new Intl.NumberFormat('en-US', { 
        style: 'currency', 
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(numValue);
    }
  };

  const isPositiveChange = Number(coin.change24h) >= 0;

  return (
    <Card className="overflow-hidden dark:bg-neutral-800 dark:border-neutral-700">
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary bg-opacity-10 flex items-center justify-center text-primary text-xs">
              {coin.symbol.slice(0, 3)}
            </div>
            <div>
              <h3 className="font-medium dark:text-white">{coin.name}</h3>
              <span className="text-xs text-neutral-500 dark:text-neutral-400">{coin.symbol}</span>
            </div>
          </div>
          <div className={`text-xs px-2 py-0.5 rounded ${isPositiveChange ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400'}`}>
            {isPositiveChange ? '+' : ''}{Number(coin.change24h).toFixed(2)}%
          </div>
        </div>

        <div className="mb-4">
          <div className="text-xl font-semibold dark:text-white">{formatPrice(coin.price)}</div>
          <div className="flex items-center text-sm">
            {isPositiveChange ? (
              <ArrowUp className="h-3 w-3 text-green-600 dark:text-green-400 mr-1" />
            ) : (
              <ArrowDown className="h-3 w-3 text-red-600 dark:text-red-400 mr-1" />
            )}
            <span className={isPositiveChange ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}>
              {formatPrice(Number(coin.price) * (Number(coin.change24h) / 100))} ({Number(coin.change24h).toFixed(2)}%)
            </span>
          </div>
        </div>

        <div className="price-chart mb-3">
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

        <div className="flex gap-2">
          <Button 
            variant="default" 
            size="sm" 
            className="flex-1 bg-primary hover:bg-primary/90"
            asChild
          >
            <Link href={`/buy-crypto?coin=${coin.symbol}`}>{t('wallet.buy')}</Link>
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1 border-primary text-primary hover:bg-primary/10 dark:border-primary dark:text-primary"
            asChild
          >
            <Link href={`/sell-crypto?coin=${coin.symbol}`}>{t('wallet.sell')}</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CoinCard;