export async function GET() {
    const res = await fetch(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=20&convert=USD",
      {
        headers: {
          "X-CMC_PRO_API_KEY": process.env.COINMARKETCAP_API_KEY || "",
          Accept: "application/json",
        },
        cache: "no-store",
      }
    );
  
    const data = await res.json();
    return new Response(JSON.stringify(data.data || []), {
      headers: { "Content-Type": "application/json" },
    });
  }
  