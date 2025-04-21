import { NextResponse } from "next/server";

export async function GET(request) {
  const url = new URL(request.url);
  const symbol = url.searchParams.get("symbol");

  const data = await fetch(
    `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=${symbol}&convert=USDT`,
    {
      headers: {
        "X-CMC_PRO_API_KEY": "7a553c57-8186-42ae-9646-f20ea3bb559b",
        Accept: "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((response) => response.data);

  return NextResponse.json({ status: "success", data }, { status: 200 });
}
