import { NextApiRequest, NextApiResponse } from 'next';
import crypto from 'crypto';

const apiKey = process.env.BINANCE_API_KEY!;
const apiSecret = process.env.BINANCE_API_SECRET!;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const timestamp = Date.now();
  const query = `timestamp=${timestamp}`;
  const signature = crypto
    .createHmac('sha256', apiSecret)
    .update(query)
    .digest('hex');

  const url = `https://testnet.binance.vision/api/v3/account?${query}&signature=${signature}`;

  try {
    const response = await fetch(url, {
      headers: {
        'X-MBX-APIKEY': apiKey,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data });
    }

    res.status(200).json({ balances: data.balances });
  } catch (err) {
    res.status(500).json({ error: 'Wallet fetch failed' });
  }
}
