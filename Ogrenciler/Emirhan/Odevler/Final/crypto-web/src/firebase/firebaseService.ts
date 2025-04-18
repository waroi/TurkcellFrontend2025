import { getAuth, createUserWithEmailAndPassword, User, signInWithEmailAndPassword, onAuthStateChanged, signOut, updatePassword } from "firebase/auth";
import { getFirestore, doc, setDoc, updateDoc, getDoc } from "firebase/firestore";
import { app } from "./firebase";

export interface RegisterResponse {
  success: boolean;
  message: string;
  [key: string]: string | boolean | number | unknown;
}

export const registerUser = async (
  email: string,
  password: string,
  nickname: string,
  country: string,
  phone: string,
  uidCode: string
): Promise<RegisterResponse> => {
  const auth = getAuth(app);
  const db = getFirestore(app);

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;
    console.log("✅ Kullanıcı kaydedildi:", user.uid);

    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      email,
      nickname,
      country,
      phone,
      uidCode,
      createdAt: new Date().toISOString(),
    });

    await setDoc(doc(db, "wallet", user.uid), {
      wallet: {
        USDT: {
          coinId: "825",
          value: 10000,
        },
      },
    });

    return {
      success: true,
      message:
        "Kullanıcı başarıyla kaydedildi, Firestore'a ve wallet koleksiyonuna yazıldı.",
    };
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("❌ Firebase kayıt hatası:", error.message);
    } else {
      console.error("❌ Firebase kayıt hatası: Bilinmeyen bir hata oluştu.", error);
    }
    throw error;
  }

};


export const logoutUser = async (): Promise<{ success: boolean; message: string }> => {
  const auth = getAuth(app);

  try {
    await signOut(auth);
    console.log("👋 Kullanıcı başarıyla çıkış yaptı.");
    return {
      success: true,
      message: "Kullanıcı çıkış yaptı.",
    };
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("❌ Firebase kayıt hatası:", error.message);
    } else {
      console.error("❌ Firebase kayıt hatası: Bilinmeyen bir hata oluştu.", error);
    }
    throw error;
  }

};


export const SignIn = async (
  email: string,
  password: string
): Promise<User> => {
  const auth = getAuth();

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    return userCredential.user;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("❌ Firebase kayıt hatası:", error.message);
    } else {
      console.error("❌ Firebase kayıt hatası: Bilinmeyen bir hata oluştu.", error);
    }
    throw error;
  }

};

type Wallet = {
  [symbol: string]: {
    coinId: string;
    value: number;
  };
};

export const getUserWallet = async (): Promise<Wallet> => {
  const auth = getAuth(app);

  const currentUser = await new Promise<User | null>((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      resolve(user);
    });
  });

  if (!currentUser) {
    throw new Error("Kullanıcı oturum açmamış");
  }

  const db = getFirestore(app);
  const userRef = doc(db, "wallet", currentUser.uid);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    throw new Error("Kullanıcının cüzdan verisi bulunamadı.");
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
  const auth = getAuth();
  const currentUser = auth.currentUser;

  if (!currentUser) {
    throw new Error("Kullanıcı girişi yapılmamış");
  }

  const userId = currentUser.uid;
  const db = getFirestore(app);
  const userRef = doc(db, "wallet", userId);
  const userSnap = await getDoc(userRef);

  let wallet: Record<
    string,
    {
      value: number;
      coinId: string;
    }
  > = {};

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
    console.log(fromCoin?.value, fromCurrent);
    throw new Error("Yetersiz bakiye");
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
  const auth = getAuth(app);
  const currentUser = await new Promise<User | null>((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      resolve(user);
    });
  });


  if (!currentUser) {
    return {
      success: false,
      message: "Kullanıcı oturumu aktif değil.",
    };
  }

  try {
    await updatePassword(currentUser, newPassword);
    return {
      success: true,
      message: "Şifre başarıyla güncellendi.",
    };
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("❌ Firebase kayıt hatası:", error.message);
    } else {
      console.error("❌ Firebase kayıt hatası: Bilinmeyen bir hata oluştu.", error);
    }
    throw error;
  }

};