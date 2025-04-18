import dotenv from 'dotenv';
dotenv.config();
const API_KEY = process.env.NEXT_PUBLIC_CMC_API_KEY;
console.log("API_KEY:", API_KEY);
import { CryptoInfo, CryptoPrice } from "@/app/types"; 

export const fetchCryptoData = async (type: 'listings' | 'info', ids?: string[]): Promise<any> => {
  const query = type === 'info' && ids ? `?type=info&ids=${ids.join(',')}` : '?type=listings';
  const response = await fetch(`/api/crypto-price${query}`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data;
};


export const fetchCryptoPrices = async (): Promise<CryptoPrice[]> => {
  try {
    const response = await fetch('/api/crypto-price');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.data.map((crypto: any) => ({
      id: crypto.id,
      name: crypto.name,
      symbol: crypto.symbol,
      quote: {
        USD: {
          price: crypto.quote.USD.price,
          market_cap: crypto.quote.USD.market_cap,
          volume_change_24h: crypto.quote.USD.volume_change_24h,
        },
      },
    }));
  } catch (error) {
    console.error('Error fetching crypto prices:', error);
    throw error;
  }
};
export const fetchCryptoHistory = async (id: string) => {
  const response = await fetch(`/api/crypto-price?type=historical&ids=${id}`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data.data?.[id]?.quotes || [];
};






