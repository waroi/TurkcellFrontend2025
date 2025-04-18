
import { NextResponse } from "next/server";
import fetchService from "@/app/utils/Service";

export async function GET() {
  const url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=10";

  const data = await fetchService(url, "GET", null, {
    headers: {
      "X-CMC_PRO_API_KEY": process.env.NEXT_PUBLIC_CMC_API_KEY!,
    },
    cache: "no-store",
  });

  return NextResponse.json(data);
}
