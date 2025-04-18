export async function GET() {
    const res = await fetch(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=20&convert=USD",
      {
        headers: {
          "X-CMC_PRO_API_KEY": process.env.COINMARKETCAP_API_KEY || "",
          Accept: "application/json",
        },
        cache: "no-store",
      }
    );
  
    const data = await res.json();
    return new Response(JSON.stringify(data.data || []), {
      headers: { "Content-Type": "application/json" },
    });
  }
  
  export class CoinMarketCapService {
    static async getLatestCoins(limit: number = 20) {
      const response = await fetch(
        `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=${limit}&convert=USD`,
        {
          headers: {
            "X-CMC_PRO_API_KEY": process.env.COINMARKETCAP_API_KEY || "",
            Accept: "application/json",
          },
          cache: "no-store",
        }
      );
  
      if (!response.ok) {
        throw new Error("CoinMarketCap API'den veri alınamadı.");
      }
  
      const data = await response.json();
      return data.data || [];
    }
  }

  export const CoinMarketCapService2 = {
    getCountCoins: async (limit: number, includeDetails: boolean) => {
        return []; 
    },
};