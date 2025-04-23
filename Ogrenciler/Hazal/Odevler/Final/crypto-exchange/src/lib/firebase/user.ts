import { db } from '@/lib/firebase/config';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

export const getUserData = async (userId: string) => {
  const userRef = doc(db, 'users', userId);
  const userSnap = await getDoc(userRef);
  
  if (userSnap.exists()) {
    return userSnap.data();
  }
  return null;
};

export const updateUserSettings = async (userId: string, settings: any) => {
  const userRef = doc(db, 'users', userId);
  await updateDoc(userRef, { settings });
};

export const saveUserPortfolio = async (userId: string, portfolio: any) => {
  const userRef = doc(db, 'users', userId);
  await setDoc(userRef, { portfolio }, { merge: true });
};