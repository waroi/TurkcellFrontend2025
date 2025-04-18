export async function GET() {
    const res = await fetch(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=20&convert=USD",
      {
        headers: {
          "X-CMC_PRO_API_KEY": "db5080f3-6d21-42e2-866b-0758dab48340",
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
  