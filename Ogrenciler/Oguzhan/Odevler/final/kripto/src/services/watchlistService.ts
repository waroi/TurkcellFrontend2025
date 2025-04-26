import { db } from "@/lib/firebase";
import { doc, setDoc, updateDoc, arrayUnion, arrayRemove, getDoc } from "firebase/firestore";

export const addToWatchlist = async (userId: string, coinId: string) => {
  const userRef = doc(db, "users", userId);

  const docSnap = await getDoc(userRef);
  if (!docSnap.exists()) {
    await setDoc(userRef, { watchlist: [coinId] });
  } else {
    await updateDoc(userRef, {
      watchlist: arrayUnion(coinId),
    });
  }
};

export const removeFromWatchlist = async (userId: string, coinId: string) => {
  const userRef = doc(db, "users", userId);
  await updateDoc(userRef, {
    watchlist: arrayRemove(coinId),
  });
};

export const fetchWatchlist = async (userId: string): Promise<string[]> => {
  const userRef = doc(db, "users", userId);
  const docSnap = await getDoc(userRef);

  if (docSnap.exists()) {
    const data = docSnap.data();
    return data.watchlist || [];
  }
  return [];
};
