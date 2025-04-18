export const fetchData = async () => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=9&sparkline=true&interval=hourly",
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error("Failed");

  return res.json();
};
