import { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase/config';

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
      } else {
        setCurrentUser(null);
        setIsLoggedIn(false);
      }
      setIsLoading(false);
    });

    return unsubscribe;
  }, [currentUser]);

  const registerUser = async (fullName, email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log('User registered:', userCredential.user);

      await updateProfile(userCredential.user, {
        displayName: fullName,
      });

      const userRef = doc(db, 'users', userCredential.user.uid);
      await setDoc(userRef, {
        fullName,
        email,
        role: 'user',
        createdAt: new Date(),
      });

      console.log('User details saved to Firestore');
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
