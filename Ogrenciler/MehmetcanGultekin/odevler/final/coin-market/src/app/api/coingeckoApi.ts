export interface CoinSummary {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    price_change_percentage_24h: number;
    market_cap: number;
    sparkline_in_7d: {
      price: number[];
    };
  }
  
  export async function getTopCoins(): Promise<CoinSummary[]> {
    try {
      const res = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&sparkline=true'
      );
  
      if (!res.ok) {
        const errorText = await res.text();
        console.error('[CoinGecko ERROR]', res.status, errorText);
        return [];
      }
  
      const data = await res.json();
  
      return data.map((coin: any) => ({
        id: coin.id,
        symbol: coin.symbol.toUpperCase(),
        name: coin.name,
        image: coin.image,
        current_price: coin.current_price,
        price_change_percentage_24h: coin.price_change_percentage_24h,
        market_cap: coin.market_cap,
        sparkline_in_7d: coin.sparkline_in_7d,
      }));
    } catch (err) {
      console.error('[FETCH ERROR]', err);
      return [];
    }
  }
  