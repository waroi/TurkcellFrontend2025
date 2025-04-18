"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { db } from "@/firebase/firebase.config";
import {
  collection,
  getDocs,
  setDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useTranslations } from "next-intl";

const tabKeys = ["favorites", "BTC", "ETH", "USDT"];

const MarketsOverview = () => {
  const t = useTranslations("Markets");
  const [coins, setCoins] = useState<any[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState("BTC");

  const user = useSelector((state: RootState) => state.auth.user);
  const theme = useSelector((state: RootState) => state.theme.mode);

  const fetchCoins = async () => {
    const res = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${activeTab.toLowerCase()}&order=market_cap_desc&per_page=20`
    );
    const data = await res.json();
    setCoins(data);
  };

  const fetchFavoriteCoins = async () => {
    if (!user || favorites.length === 0) {
      setCoins([]);
      return;
    }

    const res = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${favorites.join(
        ","
      )}`
    );
    const data = await res.json();
    setCoins(data);
  };

  const fetchFavorites = async () => {
    if (!user) return;
    const favSnap = await getDocs(
      collection(db, "users", user.uid, "favorites")
    );
    const favIds = favSnap.docs.map((doc) => doc.id);
    setFavorites(favIds);
  };

  const toggleFavorite = async (coinId: string) => {
    if (!user) return;
    const ref = doc(db, "users", user.uid, "favorites", coinId);

    if (favorites.includes(coinId)) {
      await deleteDoc(ref);
    } else {
      await setDoc(ref, { id: coinId });
    }

    fetchFavorites();
  };

  useEffect(() => {
    fetchFavorites();
  }, [user]);

  useEffect(() => {
    if (activeTab === "favorites") {
      fetchFavoriteCoins();
    } else {
      fetchCoins();
    }
  }, [activeTab, favorites]);

  const displayedCoins = Array.isArray(coins) ? coins : [];

  return (
    <div className="rounded-4 p-3 shadow-sm mt-4">
      <div className="d-flex align-items-center gap-2 mb-3">
        {tabKeys.map((tab) => {
          const isActive = activeTab === tab;
          const isFavorites = tab === "favorites";

          const btnClass = isActive
            ? theme === "dark"
              ? "btn-dark text-white"
              : "btn-primary text-white"
            : theme === "dark"
            ? "btn-outline-dark text-white"
            : "btn-light text-dark";

          return isFavorites ? (
            <button
              key={tab}
              className={`btn px-3 py-1 rounded-pill fw-semibold d-flex align-items-center gap-2 ${btnClass}`}
              onClick={() => setActiveTab(tab)}
            >
              <Image
                src={isActive ? "/global/star-filled.svg" : "/global/star.svg"}
                width={14}
                height={14}
                alt="Favorites"
              />
            </button>
          ) : (
            <button
              key={tab}
              className={`btn px-3 py-1 rounded-pill fw-semibold ${btnClass}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          );
        })}
      </div>

      <table
        className={`table text-sm ${theme === "dark" ? "table-dark" : ""}`}
      >
        <thead>
          <tr>
            <th>{t("pair")}</th>
            <th>{t("lastPrice")}</th>
            <th>{t("change")}</th>
          </tr>
        </thead>
        <tbody>
          {displayedCoins.map((coin) => (
            <tr key={coin.id}>
              <td className="d-flex align-items-center gap-2">
                <button
                  className="bg-transparent border-0 p-0"
                  onClick={() => toggleFavorite(coin.id)}
                >
                  <Image
                    src={
                      favorites.includes(coin.id)
                        ? "/global/star-filled.svg"
                        : "/global/star.svg"
                    }
                    width={14}
                    height={14}
                    alt="star"
                  />
                </button>
                {coin.symbol.toUpperCase()}/
                {activeTab === "favorites" ? "USD" : activeTab}
              </td>
              <td>{coin.current_price?.toFixed(6)}</td>
              <td
                className={
                  coin.price_change_percentage_24h < 0
                    ? "text-danger"
                    : "text-success"
                }
              >
                {coin.price_change_percentage_24h?.toFixed(2)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MarketsOverview;
