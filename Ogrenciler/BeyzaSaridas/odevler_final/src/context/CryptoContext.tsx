import { createContext, ReactNode, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { MarketData, Wallet, Transaction } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

type CryptoContextType = {
  marketData: MarketData[];
  wallets: Wallet[];
  transactions: Transaction[];
  selectedCrypto: string;
  setSelectedCrypto: (symbol: string) => void;
  isLoading: boolean;
  error: Error | null;
  refreshMarketData: () => void;
  refreshWallets: () => void;
  refreshTransactions: () => void;
  executeTransaction: (transaction: TransactionData) => Promise<Transaction>;
};

type TransactionData = {
  type: "buy" | "sell";
  fromCurrency: string;
  toCurrency: string;
  fromAmount: string;
  toAmount: string;
  status?: string;
  transactionId?: string;
};

export const CryptoContext = createContext<CryptoContextType>({
  marketData: [],
  wallets: [],
  transactions: [],
  selectedCrypto: "BTC",
  setSelectedCrypto: () => {},
  isLoading: false,
  error: null,
  refreshMarketData: () => {},
  refreshWallets: () => {},
  refreshTransactions: () => {},
  executeTransaction: async () => ({ id: 0 } as Transaction),
});

interface CryptoProviderProps {
  children: ReactNode;
}

export const CryptoProvider = ({ children }: CryptoProviderProps) => {
  const [selectedCrypto, setSelectedCrypto] = useState<string>("BTC");

  const {
    data: marketData = [],
    isLoading: isLoadingMarket,
    error: marketError,
    refetch: refreshMarketData,
  } = useQuery<MarketData[]>({
    queryKey: ["/api/market"],
    staleTime: 60000,
  });

  const {
    data: wallets = [],
    isLoading: isLoadingWallets,
    error: walletsError,
    refetch: refreshWallets,
  } = useQuery<Wallet[]>({
    queryKey: ["/api/wallets"],
    staleTime: 5000,
  });

  const {
    data: transactions = [],
    isLoading: isLoadingTransactions,
    error: transactionsError,
    refetch: refreshTransactions,
  } = useQuery<Transaction[]>({
    queryKey: ["/api/transactions"],
    staleTime: 5000,
  });

  const executeTransaction = async (
    transaction: TransactionData
  ): Promise<Transaction> => {
    const response = await apiRequest("POST", "/api/transactions", transaction);
    const data = await response.json();

    refreshWallets();
    refreshTransactions();

    return data;
  };

  const isLoading =
    isLoadingMarket || isLoadingWallets || isLoadingTransactions;

  const error = marketError || walletsError || transactionsError;

  return (
    <CryptoContext.Provider
      value={{
        marketData,
        wallets,
        transactions,
        selectedCrypto,
        setSelectedCrypto,
        isLoading,
        error: error as Error | null,
        refreshMarketData,
        refreshWallets,
        refreshTransactions,
        executeTransaction,
      }}
    >
      {children}
    </CryptoContext.Provider>
  );
};
