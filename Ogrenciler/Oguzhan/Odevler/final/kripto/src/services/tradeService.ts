import { db } from "@/lib/firebase";
import { doc, updateDoc, arrayUnion, arrayRemove, getDoc } from "firebase/firestore";

interface Trade {
  coinId: string;
  type: "BUY" | "SELL";
  amount: number;
  price: number;
  timestamp: number;
}

export const saveTrade = async (userId: string, trade: Trade) => {
  const userRef = doc(db, "users", userId);
  await updateDoc(userRef, {
    portfolio: arrayUnion(trade),
  });
};

export const getPortfolio = async (userId: string): Promise<Trade[]> => {
  const userRef = doc(db, "users", userId);
  const docSnap = await getDoc(userRef);
  return docSnap.data()?.portfolio || [];
};