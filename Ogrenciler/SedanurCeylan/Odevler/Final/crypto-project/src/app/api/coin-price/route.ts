export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const coinSymbol = searchParams.get('coin')?.toUpperCase();

    if (!coinSymbol) {
        return new Response('Coin symbol is required', { status: 400 });
    }

    const apiKey = process.env.CMC_API_KEY;
    if (!apiKey) {
        return new Response('Missing CoinMarketCap API key', { status: 500 });
    }

    const apiUrl = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=${coinSymbol}&convert=USD`;

    try {
        const res = await fetch(apiUrl, {
            headers: {
                'X-CMC_PRO_API_KEY': apiKey,
                'Accept': 'application/json'
            },
            cache: 'no-store'
        });

        if (!res.ok) {
            return new Response('CoinMarketCap API error', { status: res.status });
        }

        const data = await res.json();
        const price = data.data?.[coinSymbol]?.quote?.USD?.price;

        return new Response(JSON.stringify({ price: price ?? 0 }), {
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('CoinMarketCap API Error:', error);
        return new Response('Server error', { status: 500 });
    }
}
