"use client";
import { useEffect, useState } from "react";
import { auth } from "../../../firebase/firebase";
import type { User } from "firebase/auth";

export function useAuthState() {
  const [userAuth, setUserAuth] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUserAuth(user);
    });
    return () => unsubscribe();
  }, []);

  return userAuth;
}
