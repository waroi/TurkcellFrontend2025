import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase/firebase.config";
import { doc, getDoc } from "firebase/firestore";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe;
  }, []);

  async function initializeUser(user) {
    if (user) {
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);
      console.log(userSnap.data());

      if (userSnap.exists()) {
        const userData = userSnap.data();
        setCurrentUser({ ...user, ...userData });
      } else {
        setCurrentUser({ ...user });
      }

      setIsLoggedIn(true);
    } else {
      setCurrentUser(null);
      setIsLoggedIn(false);
    }

    setLoading(false);
  }

  const values = {
    currentUser,
    isLoggedIn,
    loading,
  };

  return (
    <AuthContext.Provider value={values}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
