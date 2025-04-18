export const getCryptoHistory = async (symbol: string): Promise<number[]> => {
  try {
    const response = await fetch(
      `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=1h&limit=168`
    );

    if (response.status === 200) {
      const data = await response.json();
      return data.map((item: any) => parseFloat(item[4]));
    } else {
      console.error(`Error fetching ${symbol}: ${response.status}`);
      return [];
    }
  } catch (error) {
    console.error("getCryptoHistory Service Error", error);
    return [];
  }
};

export const getMarketData = async () => {
  try {
    const response = await fetch("https://api.binance.com/api/v3/ticker/24hr");
    if (!response.ok) throw new Error("Failed to fetch market data");

    const data = await response.json();

    const filtered = data.slice(0, 10);
    return filtered.map((item: any, index: number) => ({
      id: index + 1,
      name: item.symbol.replace("USDT", ""),
      symbol: item.symbol,
      ticker: item.symbol.replace("USDT", ""),
      price: parseFloat(item.lastPrice).toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      }),
      change: parseFloat(item.priceChangePercent),
      cap: "-",
    }));
  } catch (err) {
    console.error("getMarketData Error", err);
    return [];
  }
};

export const getAllCryptoIcons = async (): Promise<any[]> => {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    return [];
  } catch (error) {
    console.error("getAllCryptoIcons Service Error", error);
    return [];
  }
};

export const fetchMarketData = async () => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&sparkline=true&per_page=8"
  );
  if (!res.ok) throw new Error("Failed to fetch market data");
  return res.json();
};
