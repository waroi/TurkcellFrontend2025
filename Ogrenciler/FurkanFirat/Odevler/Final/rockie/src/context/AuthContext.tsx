'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase/firebase';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  initialLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (
    fullName: string,
    email: string,
    password: string
  ) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [initialLoading, setInitialLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setIsLoading(true);

      if (user) {
        try {
          setUser(user);
          setIsLoggedIn(true);
        } catch {
          setUser(null);
          setIsLoggedIn(false);
        } finally {
          setIsLoading(false);
          setInitialLoading(false);
        }
      } else {
        setUser(null);
        setIsLoggedIn(false);
        setIsLoading(false);
        setInitialLoading(false);
      }
    });

    return unsubscribe;
  }, []);

  if (initialLoading) {
    return (
      <div className='d-flex justify-content-center align-items-center vh-100'>
        <Image
          src='/logo.svg'
          alt='Loading...'
          className='loading-logo'
          width={32}
          height={32}
          priority
        />
      </div>
    );
  }

  const register = async (
    fullName: string,
    email: string,
    password: string
  ): Promise<void> => {
    setIsLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const userRef = doc(db, 'users', userCredential.user.uid);
      await setDoc(userRef, {
        fullName,
        email,
        createdAt: new Date(),
      });

      setUser(userCredential.user);
      setIsLoggedIn(true);
      router.push('/');
    } catch {
      throw new Error('register error');
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email: string, password: string): Promise<void> => {
    setIsLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);

      setIsLoggedIn(true);
      router.push('/');
    } catch (error) {
      setUser(null);
      setIsLoggedIn(false);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async (): Promise<void> => {
    setIsLoading(true);
    try {
      await signOut(auth);
      setUser(null);
      setIsLoggedIn(false);
      router.push('/login');
    } catch {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn,
        isLoading,
        initialLoading,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
