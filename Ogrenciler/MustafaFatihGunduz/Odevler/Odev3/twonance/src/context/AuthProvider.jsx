"use client";
import { useState, useEffect, createContext, useContext } from "react";
import { auth } from "../../firebase_config";
import { onAuthStateChanged } from "firebase/auth";
import useAuthStore from "@/store/useAuthStore";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const { setUser, setLoading, loading } = useAuthStore();

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser({ uid: user.uid, email: user.email });
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Yükleniyor...</div>;
  }

  return (
    <AuthContext.Provider
      value={
        {
          /* İhtiyaç duyulursa context değerleri */
        }
      }
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
