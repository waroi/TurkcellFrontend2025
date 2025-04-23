import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  DocumentData,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyAQc86Q3VSFru-KMR3vl_bSZLPGnq27sUM",
  authDomain: "crypto-42beb.firebaseapp.com",
  projectId: "crypto-42beb",
  storageBucket: "crypto-42beb.firebasestorage.app",
  messagingSenderId: "752355011497",
  appId: "1:752355011497:web:eb6a09250341842f23f2b8",
  measurementId: "G-ZBWYTHSH67"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export type User = {
  uid: string;
  email: string;
  name: string;
  nickname?: string;
  phoneNumber?: string;
  countryCode?: string;
  uidCode?: string;
  avatarUrl?: string;
};


function convertToUser(doc: DocumentData): User {
  return {
    uid: doc.uid,
    email: doc.email,
    name: doc.name,
    nickname: doc.nickname || '',
    phoneNumber: doc.phoneNumber || '',
    countryCode: doc.countryCode || '',
    uidCode: doc.uidCode || '',
    avatarUrl: doc.avatarUrl || '',
  };
}

export async function register(email: string, password: string, userData: {
  nickname: string;
  phoneNumber: string;
  countryCode: string;
  uidCode: string;
}) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await updateProfile(user, {
      displayName: userData.nickname,
    });

    const userDoc = {
      uid: user.uid,
      email: user.email,
      phoneNumber: userData.phoneNumber || null,
      nickname: userData.nickname || '',
      countryCode: userData.countryCode || '',
      uidCode: userData.uidCode || '',
      createdAt: new Date(),
      avatarUrl: '',
    };

    console.log("Kullanıcı verisi:", userDoc);

    await setDoc(doc(db, "users", user.uid), userDoc);

    return convertToUser(userDoc);
  } catch (error) {
    console.error("Kayıt hatası:", error);
    throw error;
  }
}

export async function login(email: string, password: string) {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  const docSnap = await getDoc(doc(db, "users", user.uid));
  if (docSnap.exists()) {
    return convertToUser(docSnap.data() as DocumentData);
  } else {
    return null;
  }
}

export async function logout() {
  return signOut(auth);
}
export async function uploadAvatar(file: File, uid: string): Promise<string> {
  const storageRef = ref(storage, `avatars/${uid}`);
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);
  return url;
}
import { updatePassword, EmailAuthProvider, reauthenticateWithCredential } from "firebase/auth";

export async function changePassword(currentPassword: string, newPassword: string) {
  console.log("Firebase changePassword →", currentPassword, newPassword);
  const user = auth.currentUser;
  if (!user || !user.email) throw new Error("Kullanıcı oturumu bulunamadı.");

  const credential = EmailAuthProvider.credential(user.email, currentPassword);

  await reauthenticateWithCredential(user, credential); 


  try {
    await reauthenticateWithCredential(user, credential);
    await updatePassword(user, newPassword);
    return true;
  } catch (error) {
    console.error("Şifre değiştirme hatası:", error);
    throw error;
  }
}
