"use client";
import React from "react";
import Button from "../components/Button";
import useGetCryptos from "@/hooks/useGetCryptos";
import SearchInput from "@/components/SearchInput/SearchInput";
import CryptoTable from "@/components/CryptoTable/CryptoTable";
import { useLanguage } from "@/context/LanguageContext";
const CryptoMarket = () => {
  const { translations } = useLanguage();
  const { onlyEigthCrypto } = useGetCryptos();
  return (
    <section className="py-21">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <h2 className="fs-1 fw-bold text-dark">
            {translations.marketUpdate}
          </h2>
          <p className="fs-6 fw-bold text-secondary seeAllCoins">
            {translations.seeAllCoins}
          </p>
        </div>
        <div className="d-flex mb-13 justify-content-between align-items-center">
          <div className="d-flex align-items-center justify-content-center">
            <Button
              color="primary"
              label={translations.viewAll}
              padding="py-98 px-97"
              isBold={true}
            />
            <Button
              color="white"
              textColor="text-secondary"
              label="Metaverse"
              padding="py-98 px-97"
              isBold={true}
            />
            <Button
              color="white"
              textColor="text-secondary"
              label="Entertainment"
              padding="py-98 px-97"
              isBold={true}
            />
            <Button
              color="white"
              textColor="text-secondary"
              label="Energy"
              padding="py-98 px-97"
              isBold={true}
            />
            <Button
              color="white"
              textColor="text-secondary"
              label="NFT"
              padding="py-98 px-97"
              isBold={true}
            />
            <Button
              color="white"
              textColor="text-secondary"
              label="Gaming"
              padding="py-98 px-97"
              isBold={true}
            />
            <Button
              color="white"
              textColor="text-secondary"
              label="Music"
              padding="py-98 px-97"
              isBold={true}
            />
          </div>
          <SearchInput placeholder={translations.searchCoin} />
        </div>
        <CryptoTable cryptos={onlyEigthCrypto} />
      </div>
    </section>
  );
};

export default CryptoMarket;
