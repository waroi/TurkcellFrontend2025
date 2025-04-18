
export interface CoinMarketCapResponse {
  data: CoinMarketCapCoin[];
  status: {
    timestamp: string;
    error_code: number;
    error_message: string | null;
  };
}

export interface CoinMarketCapCoin {
  id: number;
  name: string;
  symbol: string;
  quote: {
    USD: {
      price: number;
      percent_change_24h: number;
      market_cap: number;
    };
  };
}

const COINMARKETCAP_API_KEY = process.env.NEXT_PUBLIC_COINMARKETCAP_API_KEY;
console.log(COINMARKETCAP_API_KEY);
const API_URL = 'https://pro-api.coinmarketcap.com/v1';

export async function getTopCryptos(limit: number = 10): Promise<CoinMarketCapCoin[]> {
  try {
    if (!COINMARKETCAP_API_KEY) {
      throw new Error('CoinMarketCap API key is not configured');
    }

    const response = await fetch(
        `${API_URL}/cryptocurrency/listings/latest?limit=${limit}`,
        {
          headers: {
            'X-CMC_PRO_API_KEY': COINMARKETCAP_API_KEY!,
          },
          next: { revalidate: 60 }, 
        }
      );
      
    if (!response.ok) {
      throw new Error('Failed to fetch data from CoinMarketCap');
    }

    const data: CoinMarketCapResponse = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching crypto data:', error);
    throw error;
  }
}