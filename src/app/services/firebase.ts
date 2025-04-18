import { db, auth } from '../firebase/firebaseConfig';
import { collection, addDoc, query, where, getDocs, deleteDoc, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { Trade, WatchlistItem } from '../types/crypto';
import { updatePassword } from 'firebase/auth';

export interface UserProfile {
  email: string;
  nickname: string;
  phone: string;
  country: string;
  uid: string;
}

export const changeUserPassword = async (newPassword: string): Promise<boolean> => {
  if (!auth.currentUser) return false;

  try {
    await updatePassword(auth.currentUser, newPassword);
    return true;
  } catch (error) {
    console.error("Error changing password:", error);
    return false;
  }
};

export const getUserProfile = async (): Promise<UserProfile | null> => {
  if (!auth.currentUser) return null;

  try {
    const userDoc = await getDoc(doc(db, "users", auth.currentUser.uid));

    if (userDoc.exists()) {
      return userDoc.data() as UserProfile;
    }

    return null;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return null;
  }
};

export const updateUserProfile = async (profileData: Partial<UserProfile>): Promise<boolean> => {
  if (!auth.currentUser) return false;

  try {
    const userRef = doc(db, "users", auth.currentUser.uid);
    const docSnap = await getDoc(userRef);

    if (docSnap.exists()) {
      await updateDoc(userRef, profileData);
    } else {
      await setDoc(userRef, profileData);
    }

    return true;
  } catch (error) {
    console.error("Error updating user profile:", error);
    return false;
  }
};

export const addToWatchlist = async (cryptoId: string) => {
  if (!auth.currentUser) throw new Error('User not authenticated');

  try {
    await addDoc(collection(db, 'watchlist'), {
      userId: auth.currentUser.uid,
      cryptoId,
      createdAt: new Date()
    });
  } catch (error) {
    console.error('Error adding to watchlist:', error);
    throw error;
  }
};

export const removeFromWatchlist = async (itemId: string) => {
  if (!auth.currentUser) throw new Error('User not authenticated');

  try {
    await deleteDoc(doc(db, 'watchlist', itemId));
  } catch (error) {
    console.error('Error removing from watchlist:', error);
    throw error;
  }
};

export const getWatchlist = async (): Promise<WatchlistItem[]> => {
  if (!auth.currentUser) return [];

  try {
    const q = query(
      collection(db, 'watchlist'),
      where('userId', '==', auth.currentUser.uid)
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    } as WatchlistItem));
  } catch (error) {
    console.error('Error getting watchlist:', error);
    return [];
  }
};

export const createTrade = async (trade: Omit<Trade, 'id' | 'userId' | 'timestamp'>) => {
  if (!auth.currentUser) throw new Error('User not authenticated');

  try {
    const tradeData = {
      ...trade,
      userId: auth.currentUser.uid,
      timestamp: new Date()
    };

    const docRef = await addDoc(collection(db, 'trades'), tradeData);
    return docRef.id;
  } catch (error) {
    console.error('Error creating trade:', error);
    throw error;
  }
};

export const getTrades = async (): Promise<Trade[]> => {
  if (!auth.currentUser) return [];

  try {
    const q = query(
      collection(db, 'trades'),
      where('userId', '==', auth.currentUser.uid)
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      timestamp: doc.data().timestamp?.toDate()
    } as Trade));
  } catch (error) {
    console.error('Error getting trades:', error);
    return [];
  }
};
