export interface WalletItem {
  id: string;
  toCurrency: string;
  receiveAmount: string;
  createdAt?: any;
}

export interface WalletOverviewItem {
  id: string;
  symbol: string;
  name: string;
  image: string;
  totalAmount: number;
  usdValue: number;
  earnApr?: number;
  onOrdersAmount?: number;
  availableAmount?: number;
}

export interface Asset {
  name: string;
  symbol: string;
  image: string;
  amount: number;
  usdValue: number;
  change: number;
}

export interface WalletOverviewProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

export interface WalletTableProps {
  data: WalletOverviewItem;
  searchQuery: string;
}
