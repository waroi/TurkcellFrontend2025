import { MarketPair } from "@/types/types";

export const categories = [
  'Crypto',
  'DeFi',
  'BSC',
  'NFT',
  'Metaverse',
  'Polkadot',
  'Solana',
  'Opensea',
  'Makersplace',
];


export const firstMenuItems = [
  {
    name: "Home",
    href: "/home",
    icon: "/sidebarBuyCrypto.svg",
    dropdown: false,
  },
  {
    name: "Buy Crypto",
    href: "/dashboard",
    icon: "/sidebarHome.svg",
    dropdown: false,
  },
  {
    name: "Market",
    href: "/market",
    icon: "/sidebarMarket.svg",
    dropdown: false,
  },
  {
    name: "Exchange",
    href: "/exchange",
    icon: "/sidebarExchange.svg",
    dropdown: false,
  },
  { name: "Spot", href: "/spot", icon: "/sidebarSpot.svg", dropdown: false },
  {
    name: "ByFi Center",
    href: "/byfi-center",
    icon: "/sidebarByFi.svg",
    dropdown: true,
  },
  { name: "More", href: "/more", icon: "/sidebarMore.svg", dropdown: true },
];

export const secondMenuItems = [
  {
    name: "Asset",
    href: "/asset",
    icon: "/sidebarAsset.svg",
    dropdown: true,
  },
  {
    name: "Order & Trades",
    href: "/order-trades",
    icon: "/sidebarOrderTrades.svg",
    dropdown: true,
  },
  {
    name: "Wallet",
    href: "/wallet",
    icon: "/sidebarWallet.svg",
    dropdown: false,
  },
];

export const pairs: MarketPair[] = [
  { pair: "ETH/BTC", lastPrice: 0.022572, change: 1.54, favorite: true },
  { pair: "XRP/BTC", lastPrice: 0.020371, change: 1.54, favorite: true },
  { pair: "USDT/BTC", lastPrice: 0.022572, change: -1.54, favorite: false },
  { pair: "BNB/BTC", lastPrice: 0.022572, change: 1.54, favorite: false },
  { pair: "SOL/BTC", lastPrice: 0.020371, change: 1.54, favorite: false },
  { pair: "ADA/BTC", lastPrice: 0.022572, change: 1.54, favorite: false },
  { pair: "LTC/BTC", lastPrice: 0.022572, change: -1.54, favorite: false },
  { pair: "NEO/BTC", lastPrice: 0.032378, change: 1.54, favorite: false },
  { pair: "MAP/BTC", lastPrice: 0.023572, change: -1.54, favorite: false },
  { pair: "GO/BTC", lastPrice: 0.023572, change: -1.54, favorite: false },
  { pair: "DBC/BTC", lastPrice: 0.032378, change: 1.54, favorite: false },
  { pair: "XMR/BTC", lastPrice: 0.032378, change: 1.54, favorite: false },
  { pair: "TRY/BTC", lastPrice: 0.0322573, change: 1.54, favorite: false },
];
export const orders = [
  { price: 0.022572, amount: 1.262415, total: 15.19648 },
  { price: 0.020371, amount: 1.262415, total: 15.19648 },
  { price: 0.023572, amount: 1.262415, total: 15.19648 },
  { price: 0.032378, amount: 1.262415, total: 15.19648 },
  { price: 0.022573, amount: 1.262415, total: 15.19648 },
];

export const trades = [
  { time: "14:04:54", price: 0.022572, amount: 1.262415 },
  { time: "14:04:54", price: 0.020371, amount: 1.262415 },
  { time: "14:04:54", price: 0.020371, amount: 1.262415 },
  { time: "14:04:54", price: 0.022572, amount: 1.262415 },
  { time: "14:04:54", price: 0.020371, amount: 1.262415 },
  { time: "14:04:54", price: 0.022572, amount: 1.262415 },
  { time: "14:04:54", price: 0.023572, amount: 1.262415 },
  { time: "14:04:54", price: 0.032378, amount: 1.262415 },
  { time: "14:04:54", price: 0.023572, amount: 1.262415 },
  { time: "14:04:54", price: 0.023572, amount: 1.262415 },
  { time: "14:04:54", price: 0.032378, amount: 1.262415 },
  { time: "14:04:54", price: 0.032378, amount: 1.262415 },
  { time: "14:04:54", price: 0.032573, amount: 1.262415 },
];