import { NextResponse } from 'next/server';
import axios from 'axios';

const COINGECKO_API_KEY = "CG-2cqbdWwXAA4c16N7YrfywHDe";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const action = searchParams.get('action');
  
  try {
    switch (action) {
      case 'getMarket': {
        const currency = searchParams.get('currency') || 'usd';
        const per_page = searchParams.get('per_page') || '50';
        const page = searchParams.get('page') || '1';
        const sparkline = searchParams.get('sparkline') || 'true';
        
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
          params: {
            vs_currency: currency,
            order: 'market_cap_desc',
            per_page,
            page,
            sparkline,
            price_change_percentage: '24h'
          },
          headers: COINGECKO_API_KEY ? { 'x-cg-pro-api-key': COINGECKO_API_KEY } : {}
        });
        
        return NextResponse.json(response.data);
      }
      case 'getGlobal': {
        try {
          console.log('Fetching global market data...');
          const response = await axios.get('https://api.coingecko.com/api/v3/global', {
            headers: COINGECKO_API_KEY ? { 'x-cg-pro-api-key': COINGECKO_API_KEY } : {}
          });
          console.log('Global response:', response.data);
          return NextResponse.json(response.data);
        } catch (innerError) {
          console.error('Error inside getGlobal:', innerError);
          return NextResponse.json({ error: 'Global fetch failed' }, { status: 500 });
        }
      }
      case 'getBinancePrice': {
        const symbol = searchParams.get('symbol') || 'BTCUSDT';
        const response = await axios.get(`https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`);
        return NextResponse.json(response.data);
      }
      default:
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }
  } catch (error: any) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Server error', details: error.message }, { status: 500 });
  }
}
