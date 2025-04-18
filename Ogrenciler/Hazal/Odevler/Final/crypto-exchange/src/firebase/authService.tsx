import { auth, db } from './firebaseConfig';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  updatePassword,
  User,
} from 'firebase/auth';
import { doc, setDoc, updateDoc, getDoc } from 'firebase/firestore';

export interface RegisterResponse {
  success: boolean;
  message: string;
  user?: User;
}

export interface Wallet {
  [symbol: string]: {
    coinId: string;
    value: number;
  };
}

export const registerUser = async (
  email: string,
  password: string,
  nickname: string,
  country: string,
  phone: string,
  uidCode: string
): Promise<RegisterResponse> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await setDoc(doc(db, 'users', user.uid), {
      uid: user.uid,
      email,
      nickname,
      country,
      phone,
      uidCode,
      createdAt: new Date().toISOString(),
    });

    await setDoc(doc(db, 'wallet', user.uid), {
      wallet: {
        USDT: {
          coinId: '825',
          value: 10000,
        },
      },
    });

    return {
      success: true,
      message: 'Kullanıcı başarıyla kaydedildi.',
      user,
    };
  } catch (error: any) {
    console.error('Firebase kayıt hatası:', error.message);
    throw error;
  }
};

export const loginUser = async (email: string, password: string): Promise<User> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error: any) {
    console.error('Firebase giriş hatası:', error.message);
    throw error;
  }
};

export const logoutUser = async (): Promise<void> => {
  try {
    await firebaseSignOut(auth);
    console.log('👋 Kullanıcı başarıyla çıkış yaptı.');
  } catch (error: any) {
    console.error('Firebase çıkış hatası:', error.message);
    throw error;
  }
};

export const getUserWallet = async (): Promise<Wallet> => {
  const currentUser = auth.currentUser;

  if (!currentUser) {
    throw new Error('Kullanıcı oturum açmamış');
  }

  const userRef = doc(db, 'wallet', currentUser.uid);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    throw new Error('Kullanıcının cüzdan verisi bulunamadı.');
  }

  const data = userSnap.data();
  return data.wallet as Wallet;
};

export const tradeCrypto = async (
  from: string,
  to: string,
  fromCurrent: number,
  toCurrent: number,
  coinId: string
): Promise<{ success: boolean; message: string }> => {
  const currentUser = auth.currentUser;

  if (!currentUser) {
    throw new Error('Kullanıcı girişi yapılmamış');
  }

  const userRef = doc(db, 'wallet', currentUser.uid);
  const userSnap = await getDoc(userRef);

  let wallet: Record<string, { value: number; coinId: string }> = {};

  if (!userSnap.exists()) {
    wallet = {
      [from]: { value: 0, coinId: from },
      [to]: { value: 0, coinId: coinId },
    };
    await setDoc(userRef, { wallet });
  } else {
    const userData = userSnap.data();
    wallet = userData.wallet || {};
  }

  const fromCoin = wallet[from];
  const toCoin = wallet[to] || { value: 0, coinId: coinId };

  if (!fromCoin || fromCoin.value < fromCurrent) {
    throw new Error('Yetersiz bakiye');
  }

  const updatedWallet = {
    ...wallet,
    [from]: {
      ...fromCoin,
      value: +(fromCoin.value - fromCurrent).toFixed(8),
    },
    [to]: {
      ...toCoin,
      value: +(toCoin.value + toCurrent).toFixed(8),
    },
  };

  await updateDoc(userRef, {
    wallet: updatedWallet,
  });

  return {
    success: true,
    message: `${fromCurrent} ${from} ile ${toCurrent} ${to} alındı.`,
  };
};

export const changeUserPassword = async (newPassword: string): Promise<{ success: boolean; message: string }> => {
  const currentUser = auth.currentUser;

  if (!currentUser) {
    return {
      success: false,
      message: 'Kullanıcı oturumu aktif değil.',
    };
  }

  try {
    await updatePassword(currentUser, newPassword);
    return {
      success: true,
      message: 'Şifre başarıyla güncellendi.',
    };
  } catch (error: any) {
    console.error('Firebase şifre güncelleme hatası:', error.message);
    throw error;
  }
};