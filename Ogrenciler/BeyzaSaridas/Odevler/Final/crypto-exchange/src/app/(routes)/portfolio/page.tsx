"use client";

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Layout from "../../../components/layout/Layout";
import CryptoIcon from "../../../components/common/CryptoIcon";
import Button from "../../../components/ui/Button";
import { formatCurrency, formatNumber } from "../../../lib/utils";
import {
  BarChart,
  PieChart,
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
  Wallet,
  RefreshCw,
  Clock,
  Plus,
  Minus,
} from "lucide-react";
import "./portfolio.scss";

interface CryptoCurrency {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  image?: string;
}

interface Asset {
  id: string;
  symbol: string;
  name: string;
  amount: number;
  purchasePrice: number;
  purchaseDate: string;
}

interface Wallet {
  balance: number;
  currency: string;
  assets: Asset[];
}

interface Transaction {
  id: string;
  type: "buy" | "sell" | "deposit" | "withdraw";
  symbol?: string;
  name?: string;
  amount: number;
  price?: number;
  date: string;
}

const PortfolioPage: React.FC = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<
    "overview" | "assets" | "transactions"
  >("overview");
  const [wallet, setWallet] = useState<Wallet | null>(null);
  const [cryptocurrencies, setCryptocurrencies] = useState<CryptoCurrency[]>(
    []
  );
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [totalValue, setTotalValue] = useState(0);
  const [totalProfit, setTotalProfit] = useState(0);
  const [profitPercentage, setProfitPercentage] = useState(0);

  useEffect(() => {
    const mockCryptos: CryptoCurrency[] = [
      {
        id: "bitcoin",
        name: "Bitcoin",
        symbol: "btc",
        current_price: 54321.23,
        price_change_percentage_24h: 2.45,
      },
      {
        id: "ethereum",
        name: "Ethereum",
        symbol: "eth",
        current_price: 2456.78,
        price_change_percentage_24h: -1.23,
      },
      {
        id: "ripple",
        name: "XRP",
        symbol: "xrp",
        current_price: 0.98,
        price_change_percentage_24h: -2.56,
      },
      {
        id: "litecoin",
        name: "Litecoin",
        symbol: "ltc",
        current_price: 187.25,
        price_change_percentage_24h: 0.87,
      },
    ];

    const mockWallet: Wallet = {
      balance: 5000,
      currency: "USD",
      assets: [
        {
          id: "bitcoin",
          symbol: "btc",
          name: "Bitcoin",
          amount: 0.05,
          purchasePrice: 52000,
          purchaseDate: "2023-01-15",
        },
        {
          id: "ethereum",
          symbol: "eth",
          name: "Ethereum",
          amount: 1.2,
          purchasePrice: 2300,
          purchaseDate: "2023-02-20",
        },
        {
          id: "ripple",
          symbol: "xrp",
          name: "XRP",
          amount: 500,
          purchasePrice: 1.05,
          purchaseDate: "2023-03-10",
        },
      ],
    };

    const mockTransactions: Transaction[] = [
      { id: "1", type: "deposit", amount: 2000, date: "2023-01-05" },
      {
        id: "2",
        type: "buy",
        symbol: "btc",
        name: "Bitcoin",
        amount: 0.05,
        price: 52000,
        date: "2023-01-15",
      },
      { id: "3", type: "deposit", amount: 3000, date: "2023-02-10" },
      {
        id: "4",
        type: "buy",
        symbol: "eth",
        name: "Ethereum",
        amount: 1.2,
        price: 2300,
        date: "2023-02-20",
      },
      {
        id: "5",
        type: "buy",
        symbol: "xrp",
        name: "XRP",
        amount: 500,
        price: 1.05,
        date: "2023-03-10",
      },
      {
        id: "6",
        type: "sell",
        symbol: "eth",
        name: "Ethereum",
        amount: 0.3,
        price: 2400,
        date: "2023-04-05",
      },
    ];

    setCryptocurrencies(mockCryptos);
    setWallet(mockWallet);
    setTransactions(mockTransactions);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (wallet && cryptocurrencies.length > 0) {
      let total = wallet.balance;
      let totalInvestment = wallet.balance;
      let profit = 0;

      wallet.assets.forEach((asset) => {
        const crypto = cryptocurrencies.find(
          (c) =>
            c.id === asset.id ||
            c.symbol.toLowerCase() === asset.symbol.toLowerCase()
        );

        if (crypto) {
          const currentValue = asset.amount * crypto.current_price;
          const investmentValue = asset.amount * asset.purchasePrice;

          total += currentValue;
          totalInvestment += investmentValue;
          profit += currentValue - investmentValue;
        }
      });

      setTotalValue(total);
      setTotalProfit(profit);

      const percentage =
        totalInvestment > 0 ? (profit / totalInvestment) * 100 : 0;
      setProfitPercentage(percentage);
    }
  }, [wallet, cryptocurrencies]);

  useEffect(() => {
    if (activeTab === "overview" && !loading) {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        "symbol": "FX:EURUSD",
        "width": "100%",
        "height": 220,
        "locale": "en",
        "dateRange": "12M",
        "colorTheme": "light",
        "isTransparent": false,
        "autosize": true,
        "largeChartUrl": ""
      });

      const widgetContainer = document.querySelector('.portfolio-page__distribution-widget');
      if (widgetContainer && !widgetContainer.querySelector('script')) {
        widgetContainer.appendChild(script);
      }
    }
  }, [activeTab, loading]);

  if (loading) {
    return (
      <Layout>
        <div className="portfolio-page">
          <div className="container">
            <div className="portfolio-page__loading">
              <div className="portfolio-page__loading-spinner"></div>
              <p>Portföy bilgileriniz yükleniyor...</p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="portfolio-page">
        <div className="container">
          <div className="portfolio-page__header">
            <h1 className="portfolio-page__title">{t("portfolio.title")}</h1>
            <p className="portfolio-page__subtitle">
              Portföyünüzü yönetin ve yatırımlarınızı takip edin
            </p>
          </div>

          <div className="portfolio-page__overview">
            <div className="portfolio-page__card portfolio-page__total-value">
              <div className="portfolio-page__card-icon">
                <BarChart />
              </div>
              <div className="portfolio-page__card-info">
                <h3 className="portfolio-page__card-title">
                  {t("portfolio.totalValue")}
                </h3>
                <div className="portfolio-page__card-value">
                  {formatCurrency(totalValue)}
                </div>
                <div
                  className={`portfolio-page__card-change ${profitPercentage >= 0
                    ? "portfolio-page__card-change--positive"
                    : "portfolio-page__card-change--negative"
                    }`}
                >
                  {profitPercentage >= 0 ? (
                    <ArrowUpRight size={16} />
                  ) : (
                    <ArrowDownRight size={16} />
                  )}
                  {Math.abs(profitPercentage).toFixed(2)}%
                </div>
              </div>
            </div>

            <div className="portfolio-page__card portfolio-page__balance">
              <div className="portfolio-page__card-icon">
                <Wallet />
              </div>
              <div className="portfolio-page__card-info">
                <h3 className="portfolio-page__card-title">
                  {t("portfolio.balance")}
                </h3>
                <div className="portfolio-page__card-value">
                  {wallet ? formatCurrency(wallet.balance) : formatCurrency(0)}
                </div>
                <Link href="/deposit" className="portfolio-page__card-action">
                  <Plus size={14} />
                  Para Yatır
                </Link>
              </div>
            </div>

            <div className="portfolio-page__card portfolio-page__profit">
              <div className="portfolio-page__card-icon">
                <DollarSign />
              </div>
              <div className="portfolio-page__card-info">
                <h3 className="portfolio-page__card-title">
                  {t("portfolio.profit")}
                </h3>
                <div
                  className={`portfolio-page__card-value ${totalProfit >= 0
                    ? "portfolio-page__profit--positive"
                    : "portfolio-page__profit--negative"
                    }`}
                >
                  {formatCurrency(totalProfit)}
                </div>
                <div className="portfolio-page__card-actions">
                  <Link
                    href="/buy-crypto"
                    className="portfolio-page__card-action"
                  >
                    <Plus size={14} />
                    Satın Al
                  </Link>
                  <Link
                    href="/sell-crypto"
                    className="portfolio-page__card-action"
                  >
                    <Minus size={14} />
                    Sat
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="portfolio-page__content">
            <div className="portfolio-page__tabs">
              <button
                className={`portfolio-page__tab ${activeTab === "overview" ? "portfolio-page__tab--active" : ""
                  }`}
                onClick={() => setActiveTab("overview")}
              >
                <PieChart size={16} />
                Genel Bakış
              </button>
              <button
                className={`portfolio-page__tab ${activeTab === "assets" ? "portfolio-page__tab--active" : ""
                  }`}
                onClick={() => setActiveTab("assets")}
              >
                <BarChart size={16} />
                Varlıklar
              </button>
              <button
                className={`portfolio-page__tab ${activeTab === "transactions"
                  ? "portfolio-page__tab--active"
                  : ""
                  }`}
                onClick={() => setActiveTab("transactions")}
              >
                <RefreshCw size={16} />
                İşlem Geçmişi
              </button>
            </div>

            <div className="portfolio-page__tab-content">
              {activeTab === "overview" && (
                <div className="portfolio-page__overview-tab">
                  <div className="portfolio-page__section">
                    <h3 className="portfolio-page__section-title">
                      Portföy Dağılımı
                    </h3>
                    <div className="portfolio-page__distribution">
                      <div className="portfolio-page__distribution-widget tradingview-widget-container">
                        <div className="tradingview-widget-container__widget"></div>
                        <div className="tradingview-widget-copyright">
                          <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
                            <span className="blue-text">Track all markets on TradingView</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="portfolio-page__section">
                    <h3 className="portfolio-page__section-title">
                      En Değerli Varlıklar
                    </h3>
                    {wallet && wallet.assets.length > 0 ? (
                      <div className="portfolio-page__assets-list">
                        {wallet.assets
                          .map((asset) => {
                            const crypto = cryptocurrencies.find(
                              (c) =>
                                c.id === asset.id ||
                                c.symbol.toLowerCase() ===
                                asset.symbol.toLowerCase()
                            );

                            const currentValue = crypto
                              ? asset.amount * crypto.current_price
                              : 0;
                            return {
                              ...asset,
                              currentValue,
                              priceChange:
                                crypto?.price_change_percentage_24h || 0,
                            };
                          })
                          .sort((a, b) => b.currentValue - a.currentValue)
                          .slice(0, 3)
                          .map((asset) => (
                            <div
                              key={asset.id}
                              className="portfolio-page__asset-item"
                            >
                              <div className="portfolio-page__asset-icon">
                                <CryptoIcon symbol={asset.symbol} size={36} />
                              </div>
                              <div className="portfolio-page__asset-info">
                                <div className="portfolio-page__asset-name">
                                  {asset.name}
                                </div>
                                <div className="portfolio-page__asset-amount">
                                  {formatNumber(asset.amount)}{" "}
                                  {asset.symbol.toUpperCase()}
                                </div>
                              </div>
                              <div className="portfolio-page__asset-value">
                                <div className="portfolio-page__asset-price">
                                  {formatCurrency(asset.currentValue)}
                                </div>
                                <div
                                  className={`portfolio-page__asset-change ${asset.priceChange >= 0
                                    ? "portfolio-page__asset-change--positive"
                                    : "portfolio-page__asset-change--negative"
                                    }`}
                                >
                                  {asset.priceChange >= 0 ? "+" : ""}
                                  {asset.priceChange.toFixed(2)}%
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    ) : (
                      <div className="portfolio-page__empty-state">
                        <p>Henüz hiç kripto para varlığınız yok.</p>
                        <Link href="/buy-crypto">
                          <Button>İlk Kripto Paranızı Alın</Button>
                        </Link>
                      </div>
                    )}
                  </div>

                  <div className="portfolio-page__section">
                    <h3 className="portfolio-page__section-title">
                      Son İşlemler
                    </h3>
                    {transactions.length > 0 ? (
                      <div className="portfolio-page__transactions-list">
                        {transactions
                          .sort(
                            (a, b) =>
                              new Date(b.date).getTime() -
                              new Date(a.date).getTime()
                          )
                          .slice(0, 3)
                          .map((transaction) => (
                            <div
                              key={transaction.id}
                              className="portfolio-page__transaction-item"
                            >
                              <div
                                className={`portfolio-page__transaction-icon portfolio-page__transaction-icon--${transaction.type}`}
                              >
                                {transaction.type === "buy" && <Plus />}
                                {transaction.type === "sell" && <Minus />}
                                {transaction.type === "deposit" && (
                                  <DollarSign />
                                )}
                                {transaction.type === "withdraw" && <Wallet />}
                              </div>
                              <div className="portfolio-page__transaction-info">
                                <div className="portfolio-page__transaction-title">
                                  {transaction.type === "buy" &&
                                    `${transaction.name} Satın Alındı`}
                                  {transaction.type === "sell" &&
                                    `${transaction.name} Satıldı`}
                                  {transaction.type === "deposit" &&
                                    "Para Yatırma"}
                                  {transaction.type === "withdraw" &&
                                    "Para Çekme"}
                                </div>
                                <div className="portfolio-page__transaction-date">
                                  <Clock size={12} />
                                  {new Date(
                                    transaction.date
                                  ).toLocaleDateString()}
                                </div>
                              </div>
                              <div className="portfolio-page__transaction-amount">
                                {transaction.type === "buy" &&
                                  `${formatNumber(
                                    transaction.amount
                                  )} ${transaction.symbol?.toUpperCase()}`}
                                {transaction.type === "sell" &&
                                  `${formatNumber(
                                    transaction.amount
                                  )} ${transaction.symbol?.toUpperCase()}`}
                                {(transaction.type === "deposit" ||
                                  transaction.type === "withdraw") &&
                                  formatCurrency(transaction.amount)}
                              </div>
                            </div>
                          ))}
                      </div>
                    ) : (
                      <div className="portfolio-page__empty-state">
                        <p>Henüz hiç işlem yapmadınız.</p>
                      </div>
                    )}

                    <div className="portfolio-page__view-all">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setActiveTab("transactions")}
                      >
                        Tüm İşlemleri Görüntüle
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "assets" && (
                <div className="portfolio-page__assets-tab">
                  {wallet && wallet.assets.length > 0 ? (
                    <div className="portfolio-page__assets-table-container">
                      <table className="portfolio-page__assets-table">
                        <thead>
                          <tr>
                            <th className="portfolio-page__th">Varlık</th>
                            <th className="portfolio-page__th">Miktar</th>
                            <th className="portfolio-page__th">Alış Fiyatı</th>
                            <th className="portfolio-page__th">Güncel Fiyat</th>
                            <th className="portfolio-page__th">Güncel Değer</th>
                            <th className="portfolio-page__th">Kâr/Zarar</th>
                            <th className="portfolio-page__th">İşlemler</th>
                          </tr>
                        </thead>
                        <tbody>
                          {wallet.assets.map((asset) => {
                            const crypto = cryptocurrencies.find(
                              (c) =>
                                c.id === asset.id ||
                                c.symbol.toLowerCase() ===
                                asset.symbol.toLowerCase()
                            );

                            const currentPrice = crypto
                              ? crypto.current_price
                              : 0;
                            const currentValue = asset.amount * currentPrice;
                            const investmentValue =
                              asset.amount * asset.purchasePrice;
                            const profit = currentValue - investmentValue;
                            const profitPercentage =
                              investmentValue > 0
                                ? (profit / investmentValue) * 100
                                : 0;

                            return (
                              <tr key={asset.id} className="portfolio-page__tr">
                                <td className="portfolio-page__td">
                                  <div className="portfolio-page__asset-cell">
                                    <CryptoIcon
                                      symbol={asset.symbol}
                                      size={32}
                                    />
                                    <div className="portfolio-page__asset-cell-info">
                                      <div className="portfolio-page__asset-cell-name">
                                        {asset.name}
                                      </div>
                                      <div className="portfolio-page__asset-cell-symbol">
                                        {asset.symbol.toUpperCase()}
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="portfolio-page__td">
                                  <div className="portfolio-page__asset-amount">
                                    {formatNumber(asset.amount)}
                                  </div>
                                </td>
                                <td className="portfolio-page__td">
                                  <div className="portfolio-page__asset-price">
                                    {formatCurrency(asset.purchasePrice)}
                                  </div>
                                </td>
                                <td className="portfolio-page__td">
                                  <div className="portfolio-page__asset-price">
                                    {formatCurrency(currentPrice)}
                                  </div>
                                </td>
                                <td className="portfolio-page__td">
                                  <div className="portfolio-page__asset-value">
                                    {formatCurrency(currentValue)}
                                  </div>
                                </td>
                                <td className="portfolio-page__td">
                                  <div
                                    className={`portfolio-page__asset-profit ${profit >= 0
                                      ? "portfolio-page__asset-profit--positive"
                                      : "portfolio-page__asset-profit--negative"
                                      }`}
                                  >
                                    <div className="portfolio-page__asset-profit-value">
                                      {formatCurrency(profit)}
                                    </div>
                                    <div className="portfolio-page__asset-profit-percentage">
                                      {profitPercentage >= 0 ? "+" : ""}
                                      {profitPercentage.toFixed(2)}%
                                    </div>
                                  </div>
                                </td>
                                <td className="portfolio-page__td">
                                  <div className="portfolio-page__asset-actions">
                                    <Link
                                      href={`/buy-crypto?symbol=${asset.symbol}`}
                                    >
                                      <Button size="sm" variant="outline">
                                        Satın Al
                                      </Button>
                                    </Link>
                                    <Link
                                      href={`/sell-crypto?symbol=${asset.symbol}`}
                                    >
                                      <Button size="sm" variant="outline">
                                        Sat
                                      </Button>
                                    </Link>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="portfolio-page__empty-state">
                      <p>Henüz hiç kripto para varlığınız yok.</p>
                      <Link href="/buy-crypto">
                        <Button>İlk Kripto Paranızı Alın</Button>
                      </Link>
                    </div>
                  )}
                </div>
              )}

              {activeTab === "transactions" && (
                <div className="portfolio-page__transactions-tab">
                  {transactions.length > 0 ? (
                    <div className="portfolio-page__transactions-table-container">
                      <table className="portfolio-page__transactions-table">
                        <thead>
                          <tr>
                            <th className="portfolio-page__th">İşlem</th>
                            <th className="portfolio-page__th">Tarih</th>
                            <th className="portfolio-page__th">Miktar</th>
                            <th className="portfolio-page__th">Fiyat</th>
                            <th className="portfolio-page__th">Toplam</th>
                          </tr>
                        </thead>
                        <tbody>
                          {transactions
                            .sort(
                              (a, b) =>
                                new Date(b.date).getTime() -
                                new Date(a.date).getTime()
                            )
                            .map((transaction) => (
                              <tr
                                key={transaction.id}
                                className="portfolio-page__tr"
                              >
                                <td className="portfolio-page__td">
                                  <div className="portfolio-page__transaction-cell">
                                    <div
                                      className={`portfolio-page__transaction-cell-icon portfolio-page__transaction-cell-icon--${transaction.type}`}
                                    >
                                      {transaction.type === "buy" && (
                                        <Plus size={16} />
                                      )}
                                      {transaction.type === "sell" && (
                                        <Minus size={16} />
                                      )}
                                      {transaction.type === "deposit" && (
                                        <DollarSign size={16} />
                                      )}
                                      {transaction.type === "withdraw" && (
                                        <Wallet size={16} />
                                      )}
                                    </div>
                                    <div className="portfolio-page__transaction-cell-info">
                                      <div className="portfolio-page__transaction-cell-type">
                                        {transaction.type === "buy" &&
                                          "Satın Alma"}
                                        {transaction.type === "sell" && "Satış"}
                                        {transaction.type === "deposit" &&
                                          "Para Yatırma"}
                                        {transaction.type === "withdraw" &&
                                          "Para Çekme"}
                                      </div>
                                      {(transaction.type === "buy" ||
                                        transaction.type === "sell") && (
                                          <div className="portfolio-page__transaction-cell-asset">
                                            {transaction.name}
                                          </div>
                                        )}
                                    </div>
                                  </div>
                                </td>
                                <td className="portfolio-page__td">
                                  <div className="portfolio-page__transaction-date">
                                    {new Date(
                                      transaction.date
                                    ).toLocaleDateString()}
                                  </div>
                                </td>
                                <td className="portfolio-page__td">
                                  <div className="portfolio-page__transaction-amount">
                                    {transaction.type === "buy" &&
                                      `+${formatNumber(
                                        transaction.amount
                                      )} ${transaction.symbol?.toUpperCase()}`}
                                    {transaction.type === "sell" &&
                                      `-${formatNumber(
                                        transaction.amount
                                      )} ${transaction.symbol?.toUpperCase()}`}
                                    {transaction.type === "deposit" &&
                                      `+${formatCurrency(transaction.amount)}`}
                                    {transaction.type === "withdraw" &&
                                      `-${formatCurrency(transaction.amount)}`}
                                  </div>
                                </td>
                                <td className="portfolio-page__td">
                                  <div className="portfolio-page__transaction-price">
                                    {(transaction.type === "buy" ||
                                      transaction.type === "sell") &&
                                      transaction.price
                                      ? formatCurrency(transaction.price)
                                      : "-"}
                                  </div>
                                </td>
                                <td className="portfolio-page__td">
                                  <div className="portfolio-page__transaction-total">
                                    {(transaction.type === "buy" ||
                                      transaction.type === "sell") &&
                                      transaction.price
                                      ? formatCurrency(
                                        transaction.amount * transaction.price
                                      )
                                      : transaction.type === "deposit" ||
                                        transaction.type === "withdraw"
                                        ? formatCurrency(transaction.amount)
                                        : "-"}
                                  </div>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="portfolio-page__empty-state">
                      <p>Henüz hiç işlem yapmadınız.</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PortfolioPage;