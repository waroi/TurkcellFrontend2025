// src/lib/firebaseService.ts
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
  User,
  updatePassword,
  EmailAuthProvider,
  reauthenticateWithCredential
} from 'firebase/auth';
import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  collection,
  getDocs,
  query,
  where,
  addDoc,
  serverTimestamp,
  Timestamp,
} from 'firebase/firestore';
import { auth, db, googleProvider, COLLECTIONS } from './firebase';

// Kullanıcı kaydı
export const registerWithEmail = async (email: string, password: string, displayName: string) => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(result.user, { displayName });
    await createUserProfile(result.user, { displayName });
    await createUserWallet(result.user.uid);
    return result.user;
  } catch (error) {
    console.error('Error in registration:', error);
    throw error;
  }
};

// Email ile giriş
export const loginWithEmail = async (email: string, password: string) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result.user;
  } catch (error) {
    console.error('Error in login:', error);
    throw error;
  }
};

// Google ile giriş
export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const userDocRef = doc(db, COLLECTIONS.USERS, result.user.uid);
    const userDoc = await getDoc(userDocRef);
    
    if (!userDoc.exists()) {
      await createUserProfile(result.user);
      await createUserWallet(result.user.uid);
    }
    
    return result.user;
  } catch (error) {
    console.error('Error in Google login:', error);
    throw error;
  }
};

// Çıkış işlemi
export const logoutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Error in logout:', error);
    throw error;
  }
};

// Şifre sıfırlama
export const resetPassword = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    console.error('Error in password reset:', error);
    throw error;
  }
};

// Şifre değiştirme
export const changePassword = async (currentPassword: string, newPassword: string) => {
  try {
    const user = auth.currentUser;
    if (!user || !user.email) throw new Error('User not authenticated');
    
    const credential = EmailAuthProvider.credential(user.email, currentPassword);
    await reauthenticateWithCredential(user, credential);
    await updatePassword(user, newPassword);
  } catch (error) {
    console.error('Error changing password:', error);
    throw error;
  }
};

interface AdditionalUserData {
  displayName?: string;
  [key: string]: any;
}

// Kullanıcı profili oluşturma
export const createUserProfile = async (user: User, additionalData: AdditionalUserData = {}) => {
  const userRef = doc(db, COLLECTIONS.USERS, user.uid);
  
  try {
    await setDoc(userRef, {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName || additionalData.displayName || '',
      photoURL: user.photoURL || '',
      createdAt: serverTimestamp(),
      ...additionalData
    });
  } catch (error) {
    console.error('Error creating user profile:', error);
    throw error;
  }
};

// Kullanıcı bilgilerini getirme
export const getUserProfile = async (userId: string) => {
  try {
    const userDocRef = doc(db, COLLECTIONS.USERS, userId);
    const userDoc = await getDoc(userDocRef);
    
    if (userDoc.exists()) {
      return { id: userDoc.id, ...userDoc.data() };
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error getting user profile:', error);
    throw error;
  }
};

// Kullanıcı bilgilerini güncelleme
export const updateUserProfile = async (userId: string, data: any) => {
  try {
    const userDocRef = doc(db, COLLECTIONS.USERS, userId);
    await updateDoc(userDocRef, {
      ...data,
      updatedAt: serverTimestamp()
    });
  } catch (error) {
    console.error('Error updating user profile:', error);
    throw error;
  }
};

// Kullanıcı cüzdanı oluşturma
export const createUserWallet = async (userId: string) => {
  try {
    const walletRef = doc(db, COLLECTIONS.WALLETS, userId);
    await setDoc(walletRef, {
      userId,
      totalBalanceUSD: 10000, 
      cryptoAssets: [
        { 
          symbol: 'BTC', 
          name: 'Bitcoin',
          amount: 0.1,
          currentPriceUSD: 50000,
          valueUSD: 5000
        },
        {
          symbol: 'ETH',
          name: 'Ethereum',
          amount: 2.5,
          currentPriceUSD: 2000,
          valueUSD: 5000
        }
      ],
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
  } catch (error) {
    console.error('Error creating wallet:', error);
    throw error;
  }
};
export const sellCrypto = async (symbol: string, amount: number) => {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error("Kullanıcı oturum açmamış.");

    const walletRef = doc(db, COLLECTIONS.WALLETS, user.uid);
    const walletDoc = await getDoc(walletRef);

    if (!walletDoc.exists()) throw new Error("Cüzdan bulunamadı.");

    const walletData = walletDoc.data();
    const asset = walletData.cryptoAssets.find(
      (asset: any) => asset.symbol === symbol
    );

    if (!asset || asset.amount < amount) {
      throw new Error("Yetersiz bakiye.");
    }

    asset.amount -= amount;
    asset.valueUSD = asset.amount * asset.currentPriceUSD;

    await updateDoc(walletRef, {
      cryptoAssets: walletData.cryptoAssets,
      updatedAt: serverTimestamp(),
    });
  } catch (error) {
    console.error("Error selling crypto:", error);
    throw error;
  }
};
