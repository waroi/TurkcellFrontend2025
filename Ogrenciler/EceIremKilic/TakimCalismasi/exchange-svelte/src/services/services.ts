import type { Currency, CurrencyRates } from "../types/type";

export async function fetchCurrencyRates(base: string): Promise<CurrencyRates> {
  const response = await fetch(
    `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_fSMzNhNtA6yKAtBve6QaWU3DGqtrzTQww3crk9jv&base_currency=${base}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch currency data");
  }

  const data = await response.json();
  return data.data;
}

export function parseToCurrencyList(data: CurrencyRates): Currency[] {
  return Object.entries(data).map(([key, value]) => ({
    key,
    value: Number(value),
  }));
}
