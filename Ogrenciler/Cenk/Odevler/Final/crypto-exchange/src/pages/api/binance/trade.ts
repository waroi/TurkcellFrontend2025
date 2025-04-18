import type { NextApiRequest, NextApiResponse } from 'next';
import crypto from 'crypto';

const apiKey = process.env.BINANCE_API_KEY!;
const apiSecret = process.env.BINANCE_API_SECRET!;
const baseUrl = process.env.BINANCE_BASE_URL!;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Only POST allowed' });

  const { symbol, quantity, side } = req.body;

  const params = new URLSearchParams({
    symbol,
    side, 
    type: 'MARKET',
    quantity: quantity.toString(),
    timestamp: Date.now().toString()
  });

  const signature = crypto
    .createHmac('sha256', apiSecret)
    .update(params.toString())
    .digest('hex');

  params.append('signature', signature);

  const response = await fetch(`${baseUrl}/api/v3/order`, {
    method: 'POST',
    headers: {
      'X-MBX-APIKEY': apiKey,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: params.toString()
  });

  const data = await response.json();

  if (!response.ok) {
    console.error('Binance API error:', data);
    return res.status(response.status).json({ error: data });
  }

  res.status(200).json(data);
}
