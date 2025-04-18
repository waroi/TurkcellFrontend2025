import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const fsym = searchParams.get('fsym') || 'BTC';
  const tsym = 'USDT';
  const limit = 100;

  const url = `https://min-api.cryptocompare.com/data/v2/histohour?fsym=${fsym}&tsym=${tsym}&limit=${limit}`;

  try {
    const res = await fetch(url, {
      cache: 'no-store',
      headers: {
        'User-Agent': 'Mozilla/5.0',
      },
    });

    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to fetch data from CryptoCompare' }, { status: 500 });
    }

    const json = await res.json();

    const rawData = json.Data.Data;

    const formattedData = rawData.map((item: any) => ({
      time: item.time,
      open: item.open,
      high: item.high,
      low: item.low,
      close: item.close,
    }));

    return NextResponse.json(formattedData);
  } catch (error) {
    return NextResponse.json({ error: 'Unexpected error' }, { status: 500 });
  }
}
