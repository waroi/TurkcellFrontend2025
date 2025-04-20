import { useEffect, useState } from 'react';
import { useStore } from '@/store/useStore';
import { fetchMarketData } from '@/lib/api/market';
import { PortfolioItem } from '@/types';

export function usePortfolio() {
  const portfolio = useStore((state) => state.portfolio);
  const [portfolioValue, setPortfolioValue] = useState(0);
  const [loading, setLoading] = useState(true);
  const [profitLoss, setProfitLoss] = useState(0);
  const [chartData, setChartData] = useState<any>([]);

  const calculatePortfolio = async () => {
    if (portfolio.length === 0) {
      setPortfolioValue(0);
      setLoading(false);
      return;
    }

    setLoading(true);
    try {
      const marketData = await fetchMarketData();
      let totalValue = 0;
      let totalInvested = 0;
      const newChartData: any = [];

      portfolio.forEach((item: PortfolioItem) => {
        const coin = marketData.find((c) => c.id === item.coinId);
        if (coin) {
          const currentValue = coin.current_price * item.amount;
          totalValue += currentValue;
          totalInvested += item.buyPrice * item.amount;
          newChartData.push({
            coinId: item.coinId,
            name: coin.name,
            amount: item.amount,
            buyPrice: item.buyPrice,
            currentPrice: coin.current_price,
            value: currentValue,
            profit: currentValue - item.buyPrice * item.amount,
          });
        }
      });

      setPortfolioValue(totalValue);
      setProfitLoss(totalValue - totalInvested);
      setChartData(newChartData);
    } catch (error) {
      console.error('Error calculating portfolio:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    calculatePortfolio();
  }, [portfolio]);

  return {
    portfolioValue,
    profitLoss,
    chartData,
    loading,
    refresh: calculatePortfolio,
  };
}