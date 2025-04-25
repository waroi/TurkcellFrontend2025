export const fetchTopCoins = async () => {
    const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=8&page=1");
    if (!res.ok) throw new Error("Failed to fetch coins");
    return res.json();
  };
  