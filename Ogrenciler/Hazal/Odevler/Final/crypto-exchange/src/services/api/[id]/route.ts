import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  try {
    const res = await fetch(
      `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=${id}&convert=USD`,
      {
        headers: {
          "X-CMC_PRO_API_KEY": process.env.COINMARKETCAP_API_KEY || "",
          Accept: "application/json",
        },
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Coin bilgisi alınamadı");
    }

    const data = await res.json();
    const coinData = data.data?.[id];

    return new Response(JSON.stringify(coinData || {}), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Coin bilgisi alınırken hata oluştu." }),
      {
        headers: { "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
}
