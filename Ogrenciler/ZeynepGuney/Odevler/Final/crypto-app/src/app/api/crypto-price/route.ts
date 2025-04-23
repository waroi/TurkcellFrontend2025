import { NextResponse } from 'next/server';

const API_KEY = process.env.NEXT_PUBLIC_CMC_API_KEY;

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const ids = searchParams.get('ids');
  const type = searchParams.get('type');

  try {
    let url = '';

    if (type === 'info' && ids) {
      url = `https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?id=${ids}`;
    }

    else if (type === 'historical' && ids) {
      const timeEnd = new Date().toISOString();
      const timeStart = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
      url = `https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/historical?id=${ids}&interval=1d&time_start=${timeStart}&time_end=${timeEnd}&convert=USD`;
    }

    else if (type === 'ohlcv' && ids) {
      const today = new Date();
      const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    
      const timeEnd = today.toISOString().split('T')[0];      
      const timeStart = sevenDaysAgo.toISOString().split('T')[0];
    
      url = `https://pro-api.coinmarketcap.com/v2/cryptocurrency/ohlcv/historical?id=${ids}&time_start=${timeStart}&time_end=${timeEnd}&time_period=daily&convert=USD`;
    }

    else {
      url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=100';
    }

    const response = await fetch(url, {
      headers: {
        'X-CMC_PRO_API_KEY': API_KEY!,
      },
    });

    if (!response.ok) {
      throw new Error(`CoinMarketCap API error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();

    return NextResponse.json(data);

  } catch (error: any) {
    console.error('Error fetching data from CoinMarketCap:', error.message);

    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
