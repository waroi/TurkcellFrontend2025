import { NextRequest } from "next/server";
import crypto from "crypto";
import axios from "axios";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { symbol, side, quantity } = body;

    const apiKey = process.env.BINANCE_API_KEY!;
    const secretKey = process.env.BINANCE_SECRET_KEY!;
    const baseUrl = process.env.BINANCE_BASE_URL!; 

    const timestamp = Date.now();
    const query = `symbol=${symbol}&side=${side}&type=MARKET&quantity=${quantity}&timestamp=${timestamp}`;
    const signature = crypto
      .createHmac("sha256", "aPmccwoWt4Vdem73oI9f9wgHRlGKNKgQMAxAwwO4jrDTwjyK5SZWJpBaZlCIcZix")
      .update(query)
      .digest("hex");

    const response = await axios.post(
      `https://testnet.binance.vision/api/v3/order?${query}&signature=${signature}`,
      null, 
      {
        headers: {
          "X-MBX-APIKEY": "jJ7zH7eTDzt47eLa6Sx7cHtNKkzTZkhgMYVMU9QomusworvCsI6JcjYkVdQQyHDL",
        },
      }
    );

    return new Response(JSON.stringify(response.data), { status: 200 });
  } catch (error: any) {
    return new Response(
      JSON.stringify({
        error: "Order failed",
        detail: error.response?.data || error.message,
      }),
      { status: 500 }
    );
  }
}