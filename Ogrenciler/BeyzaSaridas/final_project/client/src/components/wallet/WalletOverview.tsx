import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CryptoIcon from "../common/CryptoIcon";

interface CryptoAsset {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
  balance?: number;
  onOrder?: number;
  fiatValue?: number;
}

interface WalletOverviewProps {
  onSelectAsset: (symbol: string) => void;
}

const WalletOverview = ({ onSelectAsset }: WalletOverviewProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showBalance, setShowBalance] = useState(true);

  const { data: assets, isLoading, isError } = useQuery<CryptoAsset[]>({
    queryKey: ["cryptoAssets"],
    queryFn: async () => {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      return response.json();
    },
    staleTime: 60000,
  });

  const filteredAssets = assets
    ? assets.filter(
        (asset) =>
          asset.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          asset.symbol.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading assets.</div>;
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
        <h2 className="text-xl font-bold mb-2 md:mb-0">Overview</h2>
        <div className="flex items-center">
          <div className="relative mr-4">
            <Input
              type="text"
              placeholder="Search"
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="h-5 w-5 text-gray-500 absolute left-3 top-2.5" />
          </div>
          <Button onClick={() => setShowBalance(!showBalance)}>
            {showBalance ? "Hide balance" : "Show balance"}
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-4 px-2 text-left text-sm font-medium text-gray-500">#</th>
              <th className="py-4 px-2 text-left text-sm font-medium text-gray-500">Asset</th>
              <th className="py-4 px-2 text-left text-sm font-medium text-gray-500">Current Price</th>
              <th className="py-4 px-2 text-left text-sm font-medium text-gray-500">24h Change</th>
            </tr>
          </thead>
          <tbody>
            {filteredAssets.map((asset, index) => (
              <tr
                key={asset.id}
                className="hover:bg-gray-50 cursor-pointer"
                onClick={() => onSelectAsset(asset.symbol)}
              >
                <td className="py-4 px-2">
                  <span>{index + 1}</span>
                </td>
                <td className="py-4 px-2">
                  <div className="flex items-center">
                    <CryptoIcon symbol={asset.symbol} size={32} className="mr-3" />
                    <div>
                      <div className="font-medium">{asset.symbol.toUpperCase()}</div>
                      <div className="text-sm text-gray-500">{asset.name}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-2">${asset.current_price.toFixed(2)}</td>
                <td className="py-4 px-2">
                  <span
                    className={
                      asset.price_change_percentage_24h >= 0
                        ? "text-green-600"
                        : "text-red-600"
                    }
                  >
                    {asset.price_change_percentage_24h.toFixed(2)}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WalletOverview;
