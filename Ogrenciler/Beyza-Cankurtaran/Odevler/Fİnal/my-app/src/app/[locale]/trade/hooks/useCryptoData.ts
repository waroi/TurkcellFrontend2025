import { useState, useEffect } from 'react';
import { CryptoCurrency, TimeFrame } from '../types/crypto';
import { fetchCryptoCurrencies, fetchCryptoChartData } from '../services/api';

export const useCryptoData = (selectedCoin: string = 'bitcoin', timeframe: TimeFrame = '24h') => {
  const [cryptocurrencies, setCryptocurrencies] = useState<CryptoCurrency[]>([]);
  const [chartData, setChartData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const cryptos = await fetchCryptoCurrencies();
        setCryptocurrencies(cryptos);
        
        if (cryptos.length > 0) {
          const coinId = selectedCoin || cryptos[0].id;
          const chartData = await fetchCryptoChartData(coinId, timeframe);
          setChartData(chartData);
        }
        
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch cryptocurrency data');
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedCoin, timeframe]);

  return { cryptocurrencies, chartData, loading, error };
};