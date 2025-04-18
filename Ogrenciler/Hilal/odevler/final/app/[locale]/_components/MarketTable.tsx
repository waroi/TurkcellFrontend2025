import ButtonDefault from "@/app/_components/ui/Buttons/ButtonDefault";
import CryptoLogo from "@/app/_components/ui/Logos/CryptoLogo";
import Icon from "@/app/_components/ui/Icon";
import { CoinData } from "@/constants/types";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import Table from "react-bootstrap/Table";
import { useUserStore } from "../store/UserStore";
import MiniChart from "../../_components/ui/Charts/MiniChart";

const marketCols: string[] = [
  "name",
  "last-price",
  "24h%",
  "market-cap",
  "last-7-days",
];

function MarketTable({ data }: { data: any }) {
  const t = useTranslations("HomePage");
  const { user, toggleFavorite } = useUserStore();

  return (
    <Table hover responsive className="body2">
      <thead>
        <tr>
          <th className="opacity-0">Favorite</th>
          <th className="text-secondary">#</th>
          {marketCols.map((column) => (
            <th
              key={column}
              className={clsx(
                "text-secondary",
                column !== "name" && "text-end"
              )}
            >
              {t(`market-cols.${column}`)}
            </th>
          ))}
          <th className="opacity-0">Trade</th>
        </tr>
      </thead>
      <tbody>
        {data.slice(0, 8).map((coin: CoinData, i: number) => {
          const isFavorite = user.favoriteCoins.includes(coin.symbol);

          return (
            <tr key={coin.id}>
              <td className="align-middle">
                <Icon
                  name={isFavorite ? "favorite" : "nonfavorite"}
                  onClick={() => toggleFavorite(coin.symbol)}
                />
              </td>
              <td>{i + 1}</td>
              <td className="d-flex gap-1 align-items-center ">
                <CryptoLogo coinId={coin.id} coinSymbol={coin.symbol} />
                <span className="pe-2 border-end fw-bold">{coin.name}</span>
                <span className="ps-2 text-secondary caption1 fw-bold">
                  {coin.symbol}
                </span>
              </td>
              <td className="fw-bold text-end">
                ${coin.quote?.USD?.price?.toFixed(2)}
              </td>

              <td
                className={clsx(
                  coin.quote?.USD?.percent_change_24h < 0
                    ? "text-critical"
                    : "text-success",
                  "text-end"
                )}
              >
                {coin.quote?.USD?.percent_change_24h > 0 && <span>+</span>}
                {coin.quote?.USD?.percent_change_24h?.toFixed(2)}%
              </td>
              <td className="fw-bold text-end">
                ${coin.quote?.USD?.market_cap?.toLocaleString()}
              </td>
              <td className="text-end">
                {" "}
                <MiniChart symbol="BINANCE:BTCUSDT" dateRange="5D" />
              </td>
              <td>
                <ButtonDefault className="btn btn-outline-secondary btn-sm">
                  Trade
                </ButtonDefault>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default MarketTable;
