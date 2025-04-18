import { CoinData } from "@/constants/types";
import fetchService from "./Service";

export const getMarketList = (): Promise<{ data:CoinData[]}| undefined> => {
  return fetchService("/api/market", "GET");
};
