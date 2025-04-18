import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  updateProfile,
  sendPasswordResetEmail,
  sendEmailVerification,
  User as FirebaseUser
} from 'firebase/auth';
import { auth, db } from './firebase';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';

interface RegisterUserData {
  email: string;
  password: string;
  nickname: string;
  country: string;
  phone: string;
  uidCode?: string;
}

interface LoginUserData {
  email: string;
  password: string;
  rememberMe?: boolean;
}

type AuthResponse = {
  success: boolean;
  user?: FirebaseUser | null;
  error?: string;
};


export const registerUser = async (userData: RegisterUserData): Promise<AuthResponse> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth, 
      userData.email, 
      userData.password
    );
    
    const user = userCredential.user;
    
    await updateProfile(user, {
      displayName: userData.nickname
    });
    
    await setDoc(doc(db, 'users', user.uid), {
      nickname: userData.nickname,
      email: userData.email,
      country: userData.country,
      phone: userData.phone,
      uidCode: userData.uidCode || null,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    
    await sendEmailVerification(user);
    
    return {
      success: true,
      user
    };
  } catch (error: any) {
    return {
      success: false,
      error: error.message
    };
  }
};


export const loginUser = async ({ email, password, rememberMe }: LoginUserData): Promise<AuthResponse> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    if (user) {
      await setDoc(doc(db, 'users', user.uid), {
        lastLogin: serverTimestamp()
      }, { merge: true });
    }
    
    
    return {
      success: true,
      user
    };
  } catch (error: any) {
    return {
      success: false,
      error: error.message
    };
  }
};


export const logoutUser = async (): Promise<AuthResponse> => {
  try {
    await signOut(auth);
    return {
      success: true
    };
  } catch (error: any) {
    return {
      success: false,
      error: error.message
    };
  }
};


export const resetPassword = async (email: string): Promise<AuthResponse> => {
  try {
    await sendPasswordResetEmail(auth, email);
    return {
      success: true
    };
  } catch (error: any) {
    return {
      success: false,
      error: error.message
    };
  }
};


export const getCurrentUser = (): FirebaseUser | null => {
  return auth.currentUser;
};


export const isUserLoggedIn = (): boolean => {
  return !!auth.currentUser;
};


export const getUserProfileData = async (userId: string) => {
  try {
    const userDoc = await getDoc(doc(db, 'users', userId));
    if (userDoc.exists()) {
      return {
        success: true,
        data: userDoc.data()
      };
    } else {
      return {
        success: false,
        error: 'User not found'
      };
    }
  } catch (error: any) {
    return {
      success: false,
      error: error.message
    };
  }
};