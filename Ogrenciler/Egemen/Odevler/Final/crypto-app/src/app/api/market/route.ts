import { NextResponse } from "next/server";

const BINANCE_TESTNET_URL = "https://testnet.binance.vision/api/v3/ticker/24hr";
const BINANCE_TESTNET_API_KEY = process.env.BINANCE_TESTNET_API_KEY;
const SYMBOLS = [
  "BTCUSDT", "ETHUSDT", "BNBUSDT", "ADAUSDT", "SOLUSDT", "DOGEUSDT", "XRPUSDT",
  "DOTUSDT", "TRXUSDT", "MATICUSDT", "LTCUSDT", "SHIBUSDT", "AVAXUSDT", "LINKUSDT",
  "BCHUSDT", "UNIUSDT", "ATOMUSDT", "XLMUSDT", "TONUSDT", "WBTCUSDT"
];


export async function GET() {
  try {
    const headers: HeadersInit = {};
    if (BINANCE_TESTNET_API_KEY) {
      headers["X-MBX-APIKEY"] = BINANCE_TESTNET_API_KEY;
    }

    const res = await fetch(BINANCE_TESTNET_URL, {
      headers,
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch from Binance Testnet: ${res.status}`);
    }

    const allData = await res.json();
    
    const filteredData = allData.filter((item: any) => 
      SYMBOLS.includes(item.symbol)
    );

    const result = filteredData.map((data: any) => ({
      symbol: data.symbol,
      name: getFullName(data.symbol),
      id: getIdFromSymbol(data.symbol),
      high_24h: parseFloat(data.highPrice),
      low_24h: parseFloat(data.lowPrice),
      turnover_24h: parseFloat(data.quoteVolume),
      change_24h: parseFloat(data.priceChangePercent),
      last_traded_price: parseFloat(data.lastPrice),
      sparkline: [5,10,7,12,6,7,10]
    }));

    return NextResponse.json(result);
  } catch (err) {
    console.error("Fetch error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

function getFullName(symbol: string): string {
  const names: Record<string, string> = {
    "BTCUSDT": "Bitcoin",
    "ETHUSDT": "Ethereum",
    "BNBUSDT": "Binance Coin",
    "ADAUSDT": "Cardano",
    "SOLUSDT": "Solana",
    "DOGEUSDT": "Dogecoin",
    "XRPUSDT": "Ripple",
    "TRXUSDT": "TRON",
    "MATICUSDT": "Polygon",
    "DOTUSDT": "Polkadot",
    "LTCUSDT": "Litecoin",
    "SHIBUSDT": "Shiba Inu",
    "AVAXUSDT": "Avalanche",
    "LINKUSDT": "Chainlink",
    "BCHUSDT": "Bitcoin Cash",
    "UNIUSDT": "Uniswap",
    "ATOMUSDT": "Cosmos",
    "XLMUSDT": "Stellar",
    "TONUSDT": "Toncoin",
    "WBTCUSDT": "Wrapped Bitcoin"
  };
  return names[symbol] || symbol.replace("USDT", "");
}

function getIdFromSymbol(symbol: string): number {
  const ids: Record<string, number> = {
    "BTCUSDT": 1,
    "ETHUSDT": 1027,
    "BNBUSDT": 1839,
    "ADAUSDT": 2010,
    "SOLUSDT": 5426,
    "DOGEUSDT": 74,
    "XRPUSDT": 52,
    "TRXUSDT": 1958,
    "MATICUSDT": 3890,
    "DOTUSDT": 6636,
    "LTCUSDT": 2,
    "SHIBUSDT": 5994,
    "AVAXUSDT": 5805,
    "LINKUSDT": 1975,
    "BCHUSDT": 1831,
    "UNIUSDT": 7083,
    "ATOMUSDT": 3794,
    "XLMUSDT": 512,
    "TONUSDT": 11419,
    "WBTCUSDT": 3717
  };
  return ids[symbol] || 0;
}
