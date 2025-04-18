import { NextResponse } from "next/server";

const API_URL = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";
const COINMARKETCAP_API_KEY = process.env.NEXT_PUBLIC_COINMARKETCAP_API_KEY;

export async function GET() {
  try {
    const response = await fetch(`${API_URL}?limit=10`, {
      headers: {
        "X-CMC_PRO_API_KEY": COINMARKETCAP_API_KEY!,
        Accept: "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch from CoinMarketCap" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data.data); 
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
