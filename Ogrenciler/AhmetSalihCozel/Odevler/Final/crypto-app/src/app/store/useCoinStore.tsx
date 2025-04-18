
 import { CoinData } from "../types/CoinDataType";
 import { create } from 'zustand'

 function localeCurrency(value:number, currency:string){
  const stringValue = value.toLocaleString(currencyLocaleMapping[currency], {
    style: "currency",
    currency: currency,
    currencyDisplay: "symbol",
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
  })
  return stringValue
 }

 async function getCoins(quantity: number, sparkline: boolean, currency: string): Promise<CoinData[]> {
  return fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&per_page=${quantity}&sparkline=${sparkline}&interval=hourly`)
  .then((res) => res.json())
  .then((data) => {
    const obj = data.map((element: any) => ({
      name: element.name,
      symbol: element.symbol,
      image: element.image,
      currency: currency,
      marketCap: localeCurrency(element.market_cap , currency),
      currentPrice: localeCurrency(element.current_price , currency),
      priceChangePercentage24h: element.price_change_percentage_24h.toFixed(2),
      yesterdayPrice:localeCurrency(element.current_price - element.price_change_24h , currency),
      sparklineSevenDays: element.sparkline_in_7d?.price || [],
    }));
    return obj;
  });
}

const currencySymbols = ["aed", "ars", "aud", "bch", "bdt", "bhd", "bits", "bmd", "bnb", "brl", "btc", "cad", "chf", "clp", "cny", "czk", "dkk", "dot", "eos", "eth", "eur", "gbp", "gel", "hkd", "huf", "idr", "ils", "inr", "jpy", "krw", "kwd", "link", "lkr", "ltc", "mmk", "mxn", "myr", "ngn", "nok", "nzd", "php", "pkr", "pln", "rub", "sar", "sats", "sek", "sgd", "thb", "try", "twd", "uah", "usd", "vef", "vnd", "xag", "xau", "xdr", "xlm", "xrp", "yfi", "zar"]
const currencyLocaleMapping: Record<string, string> = {
  aed: "ar-AE",
  ars: "es-AR",
  aud: "en-AU",
  bch: "en-US",
  bdt: "bn-BD",
  bhd: "ar-BH",
  bits: "en-US",
  bmd: "en-US",
  bnb: "en-US",
  brl: "pt-BR",
  btc: "en-US",
  cad: "en-CA",
  chf: "de-CH",
  clp: "es-CL",
  cny: "zh-CN",
  czk: "cs-CZ",
  dkk: "da-DK",
  dot: "en-US",
  eos: "en-US",
  eth: "en-US",
  eur: "de-DE",
  gbp: "en-GB",
  gel: "ka-GE",
  hkd: "zh-HK",
  huf: "hu-HU",
  idr: "id-ID",
  ils: "he-IL",
  inr: "en-IN",
  jpy: "ja-JP",
  krw: "ko-KR",
  kwd: "ar-KW",
  link: "en-US",
  lkr: "si-LK",
  ltc: "en-US",
  mmk: "my-MM",
  mxn: "es-MX",
  myr: "ms-MY",
  ngn: "en-NG",
  nok: "nb-NO",
  nzd: "en-NZ",
  php: "en-PH",
  pkr: "ur-PK",
  pln: "pl-PL",
  rub: "ru-RU",
  sar: "ar-SA",
  sats: "en-US",
  sek: "sv-SE",
  sgd: "en-SG",
  thb: "th-TH",
  try: "tr-TR",
  twd: "zh-TW",
  uah: "uk-UA",
  usd: "en-US",
  vef: "es-VE",
  vnd: "vi-VN",
  xag: "en-US",
  xau: "en-US",
  xdr: "en-US",
  xlm: "en-US",
  xrp: "en-US",
  yfi: "en-US",
  zar: "en-ZA"
};

interface CoinStore {
  currency: string;
  currencyChange: (newCurrency: string) => void;
  coins: CoinData[] | null;
  setCoins: (coinsData: CoinData[]) => void;
}

const useCoinStore = create<CoinStore>((set) => ({
  currency: "usd",
  currencyChange: (newCurrency: string) => set({ currency: newCurrency }),
  coins: null,
  setCoins: (coinsData:CoinData[])=>{set({ coins: coinsData })}
}));
export {getCoins,currencySymbols,useCoinStore}