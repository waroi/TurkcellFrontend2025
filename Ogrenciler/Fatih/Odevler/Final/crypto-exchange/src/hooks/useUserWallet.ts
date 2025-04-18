import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { db } from "@/firebase/firebase.config";
import { collection, getDocs } from "firebase/firestore";

interface WalletItem {
  id: string;
  symbol: string;
  name: string;
  image: string;
  totalAmount: number;
  usdValue: number;
  earnApr: number;
  onOrdersAmount: number;
  availableAmount: number;
}

export const useUserWallet = (): WalletItem[] => {
  const user = useSelector((state: RootState) => state.auth.user);
  const [wallet, setWallet] = useState<WalletItem[]>([]);

  useEffect(() => {
    const fetchWallet = async () => {
      if (!user?.uid) return;

      const snapshot = await getDocs(
        collection(db, "users", user.uid, "wallet")
      );
      const rawData = snapshot.docs.map((doc) => doc.data());

      const grouped: Record<string, number> = {};

      for (const item of rawData) {
        const coinId = item.toCurrency || item.receiveCoin;
        const amount = parseFloat(item.receiveAmount || 0);
        if (!coinId || isNaN(amount)) continue;

        if (!grouped[coinId]) grouped[coinId] = 0;
        grouped[coinId] += amount;
      }

      const ids = Object.keys(grouped);
      if (ids.length === 0) {
        setWallet([]);
        return;
      }

      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${ids.join(
          ","
        )}`
      );
      const coinList = await res.json();

      const result: WalletItem[] = ids.map((id) => {
        const coin = coinList.find((c: any) => c.id === id);
        const total = grouped[id];

        const earnApr = parseFloat((Math.random() * 5 + 2).toFixed(2));
        const onOrdersAmount = parseFloat((total * 0.3).toFixed(8));
        const availableAmount = parseFloat((total * 0.7).toFixed(8));

        return {
          id,
          symbol: coin?.symbol?.toUpperCase() || id,
          name: coin?.name || id,
          image: coin?.image || "/icons/coin-placeholder.svg",
          totalAmount: total,
          usdValue: coin?.current_price || 0,
          earnApr,
          onOrdersAmount,
          availableAmount,
        };
      });

      setWallet(result);
    };

    fetchWallet();
  }, [user]);

  return wallet;
};
