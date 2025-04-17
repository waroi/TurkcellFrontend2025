import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "wouter";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import CryptoIcon from "../common/CryptoIcon";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface AssetDetailProps {
  symbol?: string;
  goBack?: () => void;
}

const chartData = [
  { time: "Jan", price: 3400 },
  { time: "Feb", price: 3200 },
  { time: "Mar", price: 3800 },
  { time: "Apr", price: 4000 },
  { time: "May", price: 3500 },
  { time: "Jun", price: 4200 },
  { time: "Jul", price: 4400 },
  { time: "Aug", price: 5000 },
  { time: "Sep", price: 4900 },
  { time: "Oct", price: 5100 },
  { time: "Nov", price: 5600 },
  { time: "Dec", price: 5400 },
];

const AssetDetail = ({ symbol = "USDT", goBack }: AssetDetailProps) => {
   

  const { data: asset, isLoading, isError } = useQuery({
    queryKey: [`/api/crypto-assets/${symbol}`],
    enabled: !!symbol,
    staleTime: 60000, 
  });

  const demoAsset = {
    id: 1,
    symbol: "USDT",
    name: "Tether USD",
    current_price: 1.00069787,
    price_change_24h: 1.89,
    exchange_balance: 10078.56734568,
    exchange_value: 10085.35,
    spot_balance: 0,
    spot_value: 0,
    available_balance: 0.00004499,
    available_value: 0
  };

  const displayAsset = asset || demoAsset;

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="mb-6">
        <div className="flex items-center">
          <button 
            className="mr-4 text-gray-900 hover:text-primary"
            onClick={goBack}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <h2 className="text-xl font-bold">
            {displayAsset.symbol}{" "}
            <span className="text-sm font-normal text-gray-500">{displayAsset.name}</span>
          </h2>
        </div>
      </div>

      <div className="md:flex items-start mb-6">
        <div className="flex-1 mb-6 md:mb-0">
          <div className="mb-2">
            <div className="text-sm text-gray-500 mb-1">{displayAsset.symbol}/USDC</div>
            <div className="text-xl font-semibold flex items-center">
              <span className="mr-2 bg-green-100 text-green-600 px-1 py-0.5 rounded">
                +{displayAsset.price_change_24h.toFixed(2)}%
              </span>
              <span>{displayAsset.current_price.toFixed(8)} USDC</span>
            </div>
          </div>
          <div className="h-24 md:h-48 mb-4">
            <div className="w-full h-full bg-gray-50 rounded-lg">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={chartData}
                  margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3661FF" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#3661FF" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="time" />
                  <YAxis domain={['auto', 'auto']} hide />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="price"
                    stroke="#3661FF"
                    fillOpacity={1}
                    fill="url(#colorPrice)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="md:w-72 md:ml-6 space-y-3">
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
              <span className="text-sm font-medium">Exchange</span>
            </div>
            <div className="mt-1">
              <div className="font-medium">{displayAsset.exchange_balance.toFixed(8)} {displayAsset.symbol}</div>
              <div className="text-sm text-gray-500">${displayAsset.exchange_value.toFixed(2)}</div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
              <span className="text-sm font-medium">Spot</span>
            </div>
            <div className="mt-1">
              <div className="font-medium">{displayAsset.spot_balance.toFixed(8)} {displayAsset.symbol}</div>
              <div className="text-sm text-gray-500">${displayAsset.spot_value.toFixed(2)}</div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
              <span className="text-sm font-medium">Available</span>
            </div>
            <div className="mt-1">
              <div className="font-medium">{displayAsset.available_balance.toFixed(8)} {displayAsset.symbol}</div>
              <div className="text-sm text-gray-500">${displayAsset.available_value.toFixed(2)}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-3">
        <Button asChild>
          <Link href="/buy-crypto">Buy Crypto</Link>
        </Button>
        <Button variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
          <Link href="/sell-crypto">Sell Crypto</Link>
        </Button>
      </div>
    </div>
  );
};

export default AssetDetail;