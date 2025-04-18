import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const apiKey = process.env.NEXT_PUBLIC_CMC_API_KEY;

  const response = await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=10', {
    headers: {
      'X-CMC_PRO_API_KEY': apiKey!,
      'Accept': 'application/json'
    },
  });

  if (!response.ok) {
    const text = await response.text(); 
    console.error('CoinMarketCap Hatası:', text);
    return res.status(response.status).send(text);
  }

  const data = await response.json();
  res.status(200).json(data);
}
