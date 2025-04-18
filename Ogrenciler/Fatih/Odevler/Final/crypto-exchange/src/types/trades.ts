export interface Trade {
  id: number;
  price: string;
  qty: string;
  quoteQty: string;
  time: number;
  isBuyerMaker: boolean;
}

export interface TradeTabs {
  side: "buy" | "sell";
  onChange: (value: "buy" | "sell") => void;
}

export interface OrderTypeProps {
  selected: string;
  onSelect: (value: string) => void;
}

export interface AmountInputProps {
  label: string;
  value: string;
  onChange?: (value: string) => void;
  currencyIcon: string;
  currencySymbol: string;
  options?: { label: string; value: string }[];
  disabled?: boolean;
}

export interface ExchangeRateProps {
  symbol: string;
  price: number;
}
