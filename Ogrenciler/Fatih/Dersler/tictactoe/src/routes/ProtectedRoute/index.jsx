import React, { useEffect, useState } from "react";
import { Navigate } from "react-router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../services/firebase";

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);

      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  if (user === null) return null;
  if (!user) return <Navigate to="/login" />;

  return children;
};

export default ProtectedRoute;
