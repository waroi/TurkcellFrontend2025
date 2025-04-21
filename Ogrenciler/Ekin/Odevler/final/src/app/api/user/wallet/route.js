import { NextResponse } from "next/server";
import Binance from "node-binance-api";

const binance = new Binance().options({
  APIKEY: "CSRup9tYg3NPzEaq20KRhj0i61mgB3EcJdGFTcHTeuDrYrayEy96E3DxnBO1024i",
  APISECRET: "Cb7nuWSP0pJWmJlH13QpySK8yEcmsKF2ySjAwADo7uixLt7aGUwo4wajMdu2HDLs",
  useServerTime: true,
  test: true,
});

export async function GET() {
  return NextResponse.json(await binance.account((error, account) => account), {
    status: 200,
  });
}
