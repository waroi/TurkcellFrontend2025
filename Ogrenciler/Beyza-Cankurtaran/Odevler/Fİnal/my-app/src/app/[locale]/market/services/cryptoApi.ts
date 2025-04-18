import axios from 'axios';

export interface CryptoCurrency {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  circulating_supply: number;
  sparkline_in_7d: {
    price: number[];
  };
}

export interface MarketData {
  total_market_cap: number;
  total_volume: number;
  market_cap_percentage: {
    btc: number;
    eth: number;
  };
  market_cap_change_percentage_24h_usd: number;
}

const MOCK_DATA_ENABLED = true;
const COINCAP_BASE_URL = 'https://api.coincap.io/v2';
const COINGECKO_BASE_URL = 'https://api.coingecko.com/api/v3';

const api = axios.create();

api.interceptors.response.use(undefined, async (error) => {
  const { config, response } = error;
  
  if (response && response.status === 429 && (!config.retryCount || config.retryCount < 3)) {
    config.retryCount = config.retryCount || 0;
    config.retryCount++;
    
    const delay = 1000 * Math.pow(2, config.retryCount);
    console.log(`Rate limited. Retrying in ${delay}ms...`);
    
    return new Promise(resolve => {
      setTimeout(() => resolve(api(config)), delay);
    });
  }
  
  return Promise.reject(error);
});

const generateMockData = (count = 100): CryptoCurrency[] => {
  const popularCoins = [
    { id: 'bitcoin', symbol: 'btc', name: 'Bitcoin' },
    { id: 'ethereum', symbol: 'eth', name: 'Ethereum' },
    { id: 'tether', symbol: 'usdt', name: 'Tether' },
    { id: 'binancecoin', symbol: 'bnb', name: 'Binance Coin' },
    { id: 'ripple', symbol: 'xrp', name: 'XRP' },
    { id: 'cardano', symbol: 'ada', name: 'Cardano' },
    { id: 'dogecoin', symbol: 'doge', name: 'Dogecoin' },
    { id: 'solana', symbol: 'sol', name: 'Solana' },
    { id: 'polkadot', symbol: 'dot', name: 'Polkadot' },
    { id: 'shibainu', symbol: 'shib', name: 'Shiba Inu' },
    { id: 'avalanche-2', symbol: 'avax', name: 'Avalanche' },
    { id: 'chainlink', symbol: 'link', name: 'Chainlink' },
    { id: 'polygon', symbol: 'matic', name: 'Polygon' },
    { id: 'uniswap', symbol: 'uni', name: 'Uniswap' },
    { id: 'litecoin', symbol: 'ltc', name: 'Litecoin' },
    { id: 'cosmos', symbol: 'atom', name: 'Cosmos' },
    { id: 'stellar', symbol: 'xlm', name: 'Stellar' },
    { id: 'filecoin', symbol: 'fil', name: 'Filecoin' },
    { id: 'vechain', symbol: 'vet', name: 'VeChain' },
    { id: 'theta-token', symbol: 'theta', name: 'Theta Network' }
  ];
  
  const allCoins = [...popularCoins];
  
  if (count > popularCoins.length) {
    for (let i = popularCoins.length; i < count; i++) {
      const uniqueId = `coin-${i}-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
      const randomName = `Coin${i + 1}`;
      const randomSymbol = `c${i}`;
      
      allCoins.push({
        id: uniqueId,
        symbol: randomSymbol,
        name: randomName
      });
    }
  }
  return allCoins.slice(0, count).map((coin, index) => {
    const basePrice = coin.symbol === 'btc' ? 55000 : 
                      coin.symbol === 'eth' ? 3000 : 
                      Math.random() * 1000 + 0.1;
                      
    const priceChange = (Math.random() * 20) - 10; 
    const marketCap = basePrice * (Math.random() * 100000000 + 1000000);
    const volume = marketCap * (Math.random() * 0.5);
    
    const sparklineData = [];
    let currentPrice = basePrice;
    for (let i = 0; i < 168; i++) {
      const volatility = basePrice * 0.02; 
      const trend = (priceChange / 100) * basePrice * (i / 168);
      currentPrice = currentPrice + (Math.random() * volatility * 2 - volatility) + (trend / 24);
      sparklineData.push(Math.max(0.000001, currentPrice));
    }
    
    return {
      id: coin.id,
      symbol: coin.symbol,
      name: coin.name,
      image: `https://assets.coincap.io/assets/icons/${coin.symbol}@2x.png`,
      current_price: basePrice,
      market_cap: marketCap,
      market_cap_rank: index + 1,
      total_volume: volume,
      high_24h: basePrice * (1 + Math.abs(priceChange) / 100),
      low_24h: basePrice * (1 - Math.abs(priceChange) / 100),
      price_change_24h: basePrice * (priceChange / 100),
      price_change_percentage_24h: priceChange,
      circulating_supply: marketCap / basePrice,
      sparkline_in_7d: {
        price: sparklineData
      }
    };
  });
};

const generateMockMarketData = (): MarketData => {
  const total_market_cap = 2500000000000;
  return {
    total_market_cap,
    total_volume: total_market_cap * 0.05, 
    market_cap_percentage: {
      btc: 40 + (Math.random() * 10), 
      eth: 15 + (Math.random() * 10) 
    },
    market_cap_change_percentage_24h_usd: (Math.random() * 10) - 5
  };
};

const transformCoinData = (data: any): CryptoCurrency => {
  const generateSparklineData = () => {
    const basePrice = parseFloat(data.priceUsd);
    const volatility = basePrice * 0.05; 
    return Array(168).fill(0).map(() => 
      basePrice + (Math.random() * volatility * 2 - volatility)
    );
  };
  const image = `https://assets.coincap.io/assets/icons/${data.symbol.toLowerCase()}@2x.png`;

  return {
    id: data.id || `${data.symbol}-${Date.now()}`,
    symbol: data.symbol.toLowerCase(),
    name: data.name,
    image: image,
    current_price: parseFloat(data.priceUsd),
    market_cap: parseFloat(data.marketCapUsd || '0'),
    market_cap_rank: parseInt(data.rank),
    total_volume: parseFloat(data.volumeUsd24Hr || '0'),
    high_24h: parseFloat(data.priceUsd) * 1.01, 
    low_24h: parseFloat(data.priceUsd) * 0.99, 
    price_change_24h: parseFloat(data.priceUsd) * parseFloat(data.changePercent24Hr || '0') / 100,
    price_change_percentage_24h: parseFloat(data.changePercent24Hr || '0'),
    circulating_supply: parseFloat(data.supply || '0'),
    sparkline_in_7d: {
      price: generateSparklineData()
    }
  };
};

export const getCryptocurrencies = async (): Promise<CryptoCurrency[]> => {
  if (MOCK_DATA_ENABLED) {
    console.log('Using mock cryptocurrency data');
    return generateMockData(100);
  }

  try {
    const response = await api.get(`${COINCAP_BASE_URL}/assets`, {
      params: { limit: 100 }
    });
    return response.data.data.map(transformCoinData);
  } catch (error) {
    console.error('Error fetching cryptocurrencies:', error);
    console.log('Falling back to mock cryptocurrency data');
    return generateMockData(100);
  }
};

export const getGlobalMarketData = async (): Promise<MarketData | null> => {
  if (MOCK_DATA_ENABLED) {
    console.log('Using mock market data');
    return generateMockMarketData();
  }

  try {
    const response = await api.get(`${COINCAP_BASE_URL}/rates`);
    const cryptos = await getCryptocurrencies();
    const totalMarketCap = cryptos.reduce((sum, crypto) => sum + crypto.market_cap, 0);
    const totalVolume = cryptos.reduce((sum, crypto) => sum + crypto.total_volume, 0);
    
    const btcCoin = cryptos.find(c => c.symbol === 'btc');
    const ethCoin = cryptos.find(c => c.symbol === 'eth');
    
    const btcDominance = btcCoin ? (btcCoin.market_cap / totalMarketCap) * 100 : 45;
    const ethDominance = ethCoin ? (ethCoin.market_cap / totalMarketCap) * 100 : 18;
    
    return {
      total_market_cap: totalMarketCap,
      total_volume: totalVolume,
      market_cap_percentage: {
        btc: btcDominance,
        eth: ethDominance
      },
      market_cap_change_percentage_24h_usd: cryptos.length > 0 ? 
        cryptos.reduce((sum, crypto) => sum + crypto.price_change_percentage_24h, 0) / cryptos.length : 0
    };
  } catch (error) {
    console.error('Error fetching global market data:', error);
    console.log('Falling back to mock market data');
    return generateMockMarketData();
  }
};
export const getTopGainers = async (limit: number = 20): Promise<CryptoCurrency[]> => {
  try {
    const allCryptos = await getCryptocurrencies();
    return allCryptos
      .filter(crypto => crypto.price_change_percentage_24h > 0)
      .sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h)
      .slice(0, limit);
  } catch (error) {
    console.error('Error fetching top gainers:', error);
    return [];
  }
};
export const getTopLosers = async (limit: number = 20): Promise<CryptoCurrency[]> => {
  try {
    const allCryptos = await getCryptocurrencies();
    return allCryptos
      .filter(crypto => crypto.price_change_percentage_24h < 0)
      .sort((a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h)
      .slice(0, limit);
  } catch (error) {
    console.error('Error fetching top losers:', error);
    return [];
  }
};
export const getTopByTradingVolume = async (limit: number = 20): Promise<CryptoCurrency[]> => {
  try {
    const allCryptos = await getCryptocurrencies();
    return allCryptos
      .sort((a, b) => b.total_volume - a.total_volume)
      .slice(0, limit);
  } catch (error) {
    console.error('Error fetching top by trading volume:', error);
    return [];
  }
};