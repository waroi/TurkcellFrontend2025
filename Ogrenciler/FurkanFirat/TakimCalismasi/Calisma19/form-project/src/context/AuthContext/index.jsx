import { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase/config';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setIsLoading(true);

      if (user) {
        try {
          const userRef = doc(db, 'users', user.uid);
          const userSnap = await getDoc(userRef);

          if (userSnap.exists()) {
            setCurrentUser({ ...user, ...userSnap.data() });
          } else {
            setCurrentUser(user);
          }

          setIsLoggedIn(true);
        } catch (error) {
          console.error('Error fetching user data:', error);
          setCurrentUser(null);
          setIsLoggedIn(false);
        } finally {
          setIsLoading(false);
        }
      } else {
        setCurrentUser(null);
        setIsLoggedIn(false);
        setIsLoading(false);
      }
    });

    return unsubscribe;
  }, []);

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

      const userRef = doc(db, 'users', userCredential.user.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        setCurrentUser({ ...userCredential.user, ...userSnap.data() });
      }

      setIsLoggedIn(true);
      setIsLoading(false);

      console.log(userCredential.user);

      return userCredential.user;
    } catch (error) {
      setCurrentUser(null);
      setIsLoggedIn(false);
      setIsLoading(false);

      console.error('Login error:', error.message);

      throw error;
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
