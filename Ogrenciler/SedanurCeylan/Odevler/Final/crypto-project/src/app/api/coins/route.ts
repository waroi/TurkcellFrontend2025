
export async function GET() {
    const apiKey = process.env.NEXT_PUBLIC_CMC_API_KEY;

    try {
        const res = await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
            headers: {
                'X-CMC_PRO_API_KEY': apiKey!,
            },
        });

        const data = await res.json();
        return new Response(JSON.stringify(data.data), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Veri alınamadı' }), {
            status: 500,
        });
    }

}
