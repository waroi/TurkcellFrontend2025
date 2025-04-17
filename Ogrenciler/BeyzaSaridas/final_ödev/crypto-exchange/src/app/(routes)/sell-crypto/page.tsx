"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Layout from "../../../components/layout/Layout";
import Button from "../../../components/ui/Button";
import CryptoIcon from "../../../components/common/CryptoIcon";
import { formatCurrency } from "../../../lib/utils";
import { sellCrypto } from "../../../lib/firebaseService"; // Firebase'den satış işlemi
import "./sell-crypto.scss";

const SellCryptoPage: React.FC = () => {
  const { t } = useTranslation();
  const [selectedCrypto, setSelectedCrypto] = useState<string | null>(null);
  const [amount, setAmount] = useState<number>(0);
  const [loading, setLoading] = useState(false);

  const handleSell = async () => {
    if (!selectedCrypto || amount <= 0) {
      alert("Lütfen bir kripto para seçin ve miktar girin.");
      return;
    }

    setLoading(true);
    try {
      await sellCrypto(selectedCrypto, amount);
      alert("Satış işlemi başarılı!");
    } catch (error) {
      console.error("Satış işlemi başarısız:", error);
      alert("Satış işlemi başarısız oldu.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="sell-crypto-page">
        <div className="sell-crypto-page__header">
          <h1 className="sell-crypto-page__title">{t("sellCrypto.title")}</h1>
          <p className="sell-crypto-page__subtitle">
            {t("sellCrypto.subtitle")}
          </p>
        </div>

        <div className="sell-crypto-page__content">
          <div className="sell-crypto-page__crypto-selection">
            <h3 className="sell-crypto-page__section-title">
              {t("sellCrypto.selectCrypto")}
            </h3>
            <div className="sell-crypto-page__crypto-grid">
              {/* Örnek kripto paralar */}
              {["BTC", "ETH", "XRP"].map((crypto) => (
                <div
                  key={crypto}
                  className={`sell-crypto-page__crypto-item ${
                    selectedCrypto === crypto
                      ? "sell-crypto-page__crypto-item--selected"
                      : ""
                  }`}
                  onClick={() => setSelectedCrypto(crypto)}
                >
                  <CryptoIcon symbol={crypto} size={48} />
                  <div className="sell-crypto-page__crypto-info">
                    <div className="sell-crypto-page__crypto-name">{crypto}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="sell-crypto-page__payment-section">
            <h3 className="sell-crypto-page__section-title">
              {t("sellCrypto.enterAmount")}
            </h3>
            <div className="sell-crypto-page__amount-container">
              <label className="sell-crypto-page__input-label">
                {t("sellCrypto.amount")}
              </label>
              <input
                type="number"
                className="sell-crypto-page__input"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                placeholder={t("sellCrypto.amountPlaceholder")}
              />
            </div>
            <Button
              className="sell-crypto-page__sell-button"
              onClick={handleSell}
              disabled={loading}
            >
              {loading ? t("sellCrypto.loading") : t("sellCrypto.sell")}
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SellCryptoPage;