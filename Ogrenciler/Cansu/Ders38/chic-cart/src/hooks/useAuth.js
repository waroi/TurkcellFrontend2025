import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig"; 

export const useAuth = () => {
  const [user, setUser] = useState(null); 

  useEffect(() => {
    
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
    
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        });
      } else {
        setUser(null); 
      }
    });


    return () => unsubscribe();
  }, []);

  return user;
};

