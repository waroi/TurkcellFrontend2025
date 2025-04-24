import { onAuthStateChanged, getAuth, User } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../firebase_config";

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return user;
};
