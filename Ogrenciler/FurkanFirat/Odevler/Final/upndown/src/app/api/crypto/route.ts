import { NextResponse } from 'next/server';

export async function GET() {
  const res = await fetch(
    'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=1,1027,52,1839,825,5426,52,2010,5805',
    {
      headers: {
        'X-CMC_PRO_API_KEY': '04c6d77a-3237-4c11-8465-f35dfc1977ac' as string,
      },
    }
  );

  if (!res.ok) {
    return NextResponse.json(
      { error: 'Failed to fetch from CMC' },
      { status: 500 }
    );
  }

  const data = await res.json();

  const cryptoListData = {
    1: {
      id: 1,
      name: 'Bitcoin',
      symbol: 'BTC',
      logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png',
    },
    1027: {
      id: 1027,
      name: 'Ethereum',
      symbol: 'ETH',
      logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
    },
    1839: {
      id: 1839,
      name: 'Binance Coin',
      symbol: 'BNB',
      logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png',
    },
    825: {
      id: 825,
      name: 'Tether',
      symbol: 'USDT',
      logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
    },
    5426: {
      id: 5426,
      name: 'Solana',
      symbol: 'SOL',
      logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png',
    },
    52: {
      id: 52,
      name: 'XRP',
      symbol: 'XRP',
      logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/52.png',
    },
    2010: {
      id: 2010,
      name: 'Cardano',
      symbol: 'ADA',
      logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png',
    },
    5805: {
      id: 5805,
      name: 'Avalanche',
      symbol: 'AVAX',
      logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png',
    },
  };

  const result = Object.values(cryptoListData).map((coin: any) => {
    const price = data.data[coin.id]?.quote?.USD;
    return {
      ...coin,
      price: price?.price,
      volume_24h: price?.volume_24h,
      percent_change_24h: price?.percent_change_24h,
    };
  });

  return NextResponse.json(result);
}
