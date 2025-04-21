import { NextResponse } from "next/server";
import Binance from "node-binance-api";

const binance = new Binance().options({
  APIKEY: "CSRup9tYg3NPzEaq20KRhj0i61mgB3EcJdGFTcHTeuDrYrayEy96E3DxnBO1024i",
  APISECRET: "Cb7nuWSP0pJWmJlH13QpySK8yEcmsKF2ySjAwADo7uixLt7aGUwo4wajMdu2HDLs",
  useServerTime: true,
  test: true,
});

export async function POST(request) {
  const { symbol, quantity } = await request.json();

  await binance.marketBuy(`${symbol}USDT`, quantity, () => {});

  return NextResponse.json({ status: "success" }, { status: 200 });
}
