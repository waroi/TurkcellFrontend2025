import { NextRequest } from "next/server";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { symbol, side, quantity } = body;

    const apiKey = process.env.BINANCE_API_KEY!;
    const secretKey = process.env.BINANCE_SECRET_KEY!;
    const baseUrl = 'https://testnet.binance.vision/api/v3';

    const timestamp = Date.now();
    const query = `symbol=${symbol}&side=${side}&type=MARKET&quantity=${quantity}&timestamp=${timestamp}`;
    const signature = crypto
      .createHmac("sha256", secretKey)
      .update(query)
      .digest("hex");

    const url = `${baseUrl}/api/v3/order?${query}&signature=${signature}`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "X-MBX-APIKEY": apiKey,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.msg || "Order failed");
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error: any) {
    return new Response(
      JSON.stringify({
        error: "Order failed",
        detail: error.message,
      }),
      { status: 500 }
    );
  }
}