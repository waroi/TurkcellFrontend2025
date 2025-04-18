"use server";

import crypto from "crypto";
const apiKey = process.env.BINANCE_TESTNET_API_KEY!;
const secretKey = process.env.BINANCE_TESTNET_SECRET_KEY!;
const baseUrl = "https://testnet.binance.vision";

export const createTrade = async (formData: FormData) => {
  const side = formData.get("side") as string;
  const quantity = formData.get("quantity") as string;
  const paySymbol = formData.get("paySymbol") as string;
  const receiveSymbol = formData.get("receiveSymbol") as string;
  const symbol = `${receiveSymbol}${paySymbol}`;

  const timestamp = Date.now();
  const query = `symbol=${symbol}&side=${side}&type=MARKET&quantity=${quantity}&timestamp=${timestamp}`;

  const signature = crypto
    .createHmac("sha256", secretKey)
    .update(query)
    .digest("hex");

  const finalQuery = `${query}&signature=${signature}`;

  const res = await fetch(`${baseUrl}/api/v3/order?${finalQuery}`, {
    method: "POST",
    headers: {
      "X-MBX-APIKEY": apiKey,
    },
  });

  if (!res.ok) {
    const errorBody = await res.text();
    throw new Error(`Failed to create trade: ${res.status} - ${errorBody}`);
  }

  return res.json();
};

export const getTestnetBalance = async () => {

  const timestamp = Date.now();
  const query = `timestamp=${timestamp}`;

  const signature = crypto
    .createHmac("sha256", secretKey)
    .update(query)
    .digest("hex");

  const finalQuery = `${query}&signature=${signature}`;

  const res = await fetch(`${baseUrl}/api/v3/account?${finalQuery}`, {
    method: "GET",
    headers: {
      "X-MBX-APIKEY": apiKey,
    },
  });

  if (!res.ok) {
    const errorBody = await res.text();
    throw new Error(`Failed to fetch balance: ${res.status} - ${errorBody}`);
  }

  const data = await res.json();
  return data.balances.filter((b: any) => parseFloat(b.free) > 0 || parseFloat(b.locked) > 0);
};

export const getOrderHistory = async (symbol: string) => {

  const timestamp = Date.now();
  const query = `symbol=${symbol}&timestamp=${timestamp}`;

  const signature = crypto
    .createHmac("sha256", secretKey)
    .update(query)
    .digest("hex");

  const finalQuery = `${query}&signature=${signature}`;

  const res = await fetch(`${baseUrl}/api/v3/allOrders?${finalQuery}`, {
    headers: {
      "X-MBX-APIKEY": apiKey,
    }
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Failed to fetch order history: ${res.status} - ${error}`);
  }

  return res.json();
};

