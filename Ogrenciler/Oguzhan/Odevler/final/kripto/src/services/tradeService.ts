import { db } from "@/lib/firebase";
import { doc, updateDoc, arrayUnion, getDoc, setDoc } from "firebase/firestore";

export type Trade = {
  coinId: string;
  type: "BUY" | "SELL";
  amount: number;
  price: number;
  timestamp: number;
};


export const saveTradeAndBalance = async (
  userId: string,
  trade: Trade,
  newBalance: number
) => {
  const userRef = doc(db, "users", userId);
  await setDoc(
    userRef,
    {
      trades: arrayUnion(trade),
      balance: newBalance,
    },
    { merge: true } 
  );
};


export const getTradesAndBalance = async (
  userId: string
): Promise<{ trades: Trade[]; balance: number }> => {
  const userRef = doc(db, "users", userId);
  const docSnap = await getDoc(userRef);
  return {
    trades: docSnap.data()?.trades || [],
    balance: docSnap.data()?.balance || 100000, 
  };
};