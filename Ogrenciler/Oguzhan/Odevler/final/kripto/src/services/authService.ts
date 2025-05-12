// src/services/authService.ts
import { auth, db } from '@/lib/firebase';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
  updateEmail,
  onAuthStateChanged,
  User as FirebaseUser
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

export type UserData = {
  uid: string;
  email: string;
  name: string;
  surname: string;
  createdAt: Date;
};

export const AuthService = {


   async fetchUserData(uid: string): Promise<UserData> {
    const docSnap = await getDoc(doc(db, 'users', uid));
    if (!docSnap.exists()) throw new Error('Kullanıcı bulunamadı');
    return docSnap.data() as UserData;
  },

  onAuthChanged(callback: (user: UserData | null) => void) {
    return onAuthStateChanged(auth, async (firebaseUser: FirebaseUser | null) => {
      if (firebaseUser) {
        const userData = await this.fetchUserData(firebaseUser.uid);
        callback(userData);
      } else {
        callback(null);
      }
    });
  },

  async login(email: string, password: string): Promise<UserData> {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return this.fetchUserData(userCredential.user.uid);
  },


  async register(email: string, password: string, name: string, surname: string): Promise<UserData> {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, 'users', userCredential.user.uid), {
      uid: userCredential.user.uid,
      email,
      name,
      surname,
      createdAt: new Date()
    });
    return this.fetchUserData(userCredential.user.uid);
  },


  async logout(): Promise<void> {
    await signOut(auth);
  },


  async changePassword(currentPassword: string, newPassword: string): Promise<void> {
    if (!auth.currentUser) throw new Error('Kullanıcı bulunamadı');
    
    const credential = EmailAuthProvider.credential(
      auth.currentUser.email!,
      currentPassword
    );
    await reauthenticateWithCredential(auth.currentUser, credential);
    await updatePassword(auth.currentUser, newPassword);
  },

  async updateProfile(data: { 
    name: string; 
    surname: string; 
    email: string 
  }): Promise<UserData> {
    const user = auth.currentUser;
    if (!user) throw new Error('Kullanıcı bulunamadı');

    try {
  
      if (data.email !== user.email) {
        await updateEmail(user, data.email);
      }

      await setDoc(doc(db, 'users', user.uid), {
        name: data.name,
        surname: data.surname,
        email: data.email
      }, { merge: true });

    
      return await this.fetchUserData(user.uid);
      
    } catch (error: any) {
      throw new Error(`Profil güncellenemedi: ${error.message}`);
    }
  },

 
};