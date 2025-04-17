import { useState, useContext } from "react";
import { useMarketData } from "@/hooks/use-market-data";
import { MarketData } from "@shared/schema";
import { Search, ArrowUpDown, ChevronUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { LanguageContext } from "@/context/LanguageContext";
import { Link } from "wouter";

type SortField = "name" | "price" | "change24h" | "volume24h" | "marketCap";
type SortDirection = "asc" | "desc";

const CoinTable = () => {
  const { marketData, isLoading } = useMarketData();
  const { t } = useContext(LanguageContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortField, setSortField] = useState<SortField>("marketCap");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");

  const filteredCoins = marketData.filter(
    (coin) =>
      coin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedCoins = [...filteredCoins].sort((a, b) => {
    let comparison = 0;

    switch (sortField) {
      case "name":
        comparison = a.name.localeCompare(b.name);
        break;
      case "price":
        comparison = Number(a.price) - Number(b.price);
        break;
      case "change24h":
        comparison = Number(a.change24h) - Number(b.change24h);
        break;
      case "volume24h":
        comparison = Number(a.volume24h) - Number(b.volume24h);
        break;
      case "marketCap":
        comparison = Number(a.marketCap) - Number(b.marketCap);
        break;
      default:
        comparison = 0;
    }

    return sortDirection === "asc" ? comparison : -comparison;
  });

  const toggleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("desc");
    }
  };

  const getSortIcon = (field: SortField) => {
    if (sortField !== field) {
      return <ArrowUpDown className="h-4 w-4 ml-1" />;
    }

    return sortDirection === "asc" ? (
      <ChevronUp className="h-4 w-4 ml-1" />
    ) : (
      <ChevronDown className="h-4 w-4 ml-1" />
    );
  };

  const formatCurrency = (value: string | number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(Number(value));
  };

  const formatNumber = (value: string | number) => {
    return new Intl.NumberFormat("en-US").format(Number(value));
  };

  const formatPrice = (value: string | number) => {
    const numValue = Number(value);
    if (numValue < 1) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 4,
        maximumFractionDigits: 8,
      }).format(numValue);
    } else {
      return formatCurrency(numValue);
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
        <div className="relative w-full md:w-64">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-500" />
          <Input
            placeholder={t("market.search")}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8 dark:bg-neutral-800 dark:border-neutral-700"
          />
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-sm text-neutral-500 dark:text-neutral-400">
            {t("market.filter")}:
          </span>
          <Button
            variant="outline"
            size="sm"
            className={
              sortField === "marketCap" && sortDirection === "desc"
                ? "bg-primary text-white"
                : ""
            }
            onClick={() => {
              setSortField("marketCap");
              setSortDirection("desc");
            }}
          >
            {t("market.rank")}
          </Button>
          <Button
            variant="outline"
            size="sm"
            className={
              sortField === "change24h" && sortDirection === "desc"
                ? "bg-primary text-white"
                : ""
            }
            onClick={() => {
              setSortField("change24h");
              setSortDirection("desc");
            }}
          >
            {t("market.topGainers")}
          </Button>
          <Button
            variant="outline"
            size="sm"
            className={
              sortField === "change24h" && sortDirection === "asc"
                ? "bg-primary text-white"
                : ""
            }
            onClick={() => {
              setSortField("change24h");
              setSortDirection("asc");
            }}
          >
            {t("market.topLosers")}
          </Button>
        </div>
      </div>

      <div className="border rounded-md dark:border-neutral-800">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-neutral-100 dark:hover:bg-neutral-800">
              <TableHead className="w-[60px]">#</TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => toggleSort("name")}
              >
                <div className="flex items-center">
                  {t("market.name")}
                  {getSortIcon("name")}
                </div>
              </TableHead>
              <TableHead
                className="cursor-pointer text-right"
                onClick={() => toggleSort("price")}
              >
                <div className="flex items-center justify-end">
                  {t("market.price")}
                  {getSortIcon("price")}
                </div>
              </TableHead>
              <TableHead
                className="cursor-pointer text-right"
                onClick={() => toggleSort("change24h")}
              >
                <div className="flex items-center justify-end">
                  {t("market.change")}
                  {getSortIcon("change24h")}
                </div>
              </TableHead>
              <TableHead
                className="cursor-pointer text-right hidden md:table-cell"
                onClick={() => toggleSort("volume24h")}
              >
                <div className="flex items-center justify-end">
                  {t("market.volume")}
                  {getSortIcon("volume24h")}
                </div>
              </TableHead>
              <TableHead
                className="cursor-pointer text-right hidden md:table-cell"
                onClick={() => toggleSort("marketCap")}
              >
                <div className="flex items-center justify-end">
                  {t("market.marketCap")}
                  {getSortIcon("marketCap")}
                </div>
              </TableHead>
              <TableHead className="text-right">{t("market.action")}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-8">
                  <div className="flex justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                  </div>
                </TableCell>
              </TableRow>
            ) : sortedCoins.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={7}
                  className="text-center py-8 text-neutral-500 dark:text-neutral-400"
                >
                  No coins found
                </TableCell>
              </TableRow>
            ) : (
              sortedCoins.map((coin, index) => (
                <TableRow
                  key={coin.id}
                  className="hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center text-xs">
                        {coin.symbol.slice(0, 3)}
                      </div>
                      <div>
                        <div className="font-medium">{coin.name}</div>
                        <div className="text-xs text-neutral-500 dark:text-neutral-400">
                          {coin.symbol}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right font-medium">
                    {formatPrice(coin.price)}
                  </TableCell>
                  <TableCell
                    className={`text-right ${
                      Number(coin.change24h) >= 0
                        ? "text-green-600 dark:text-green-500"
                        : "text-red-600 dark:text-red-500"
                    }`}
                  >
                    {Number(coin.change24h) >= 0 ? "+" : ""}
                    {Number(coin.change24h).toFixed(2)}%
                  </TableCell>
                  <TableCell className="text-right hidden md:table-cell">
                    {formatCurrency(coin.volume24h)}
                  </TableCell>
                  <TableCell className="text-right hidden md:table-cell">
                    {formatCurrency(coin.marketCap)}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end space-x-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/buy-crypto?coin=${coin.symbol}`}>
                          {t("wallet.buy")}
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/sell-crypto?coin=${coin.symbol}`}>
                          {t("wallet.sell")}
                        </Link>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CoinTable;
