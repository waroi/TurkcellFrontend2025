'use client';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth } from '../../../firebase/firebaseconfig';
import { createContext, useContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        setIsLoggedIn(true);
        console.log('if user varsa kısmı');
      } else {
        setCurrentUser(null);
        setIsLoggedIn(false);
        console.log('else kısmı');
      }
      setIsLoading(false);
      console.log('Auth durumu:', user ? 'Giriş yapıldı' : 'Giriş yapılmadı');
      console.log('isloggedin: ', isLoggedIn);
      console.log('user: ', user);
    });

    return unsubscribe;
  }, [currentUser]);

  const registerUser = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log('User registered:', userCredential.user);
    } catch (error) {
      console.error('Register error:', error.message);
    }
  };

  const loginUser = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log('User logged in:', userCredential.user);
    } catch (error) {
      console.error('Login error:', error.message);
    }
  };

  const logOutUser = async () => {
    try {
      await signOut(auth);
      console.log('User logged out');
    } catch (error) {
      console.error('Logout error:', error.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        registerUser,
        loginUser,
        logOutUser,
        currentUser,
        isLoggedIn,
        isLoading,
      }}
    >
      {!isLoading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
