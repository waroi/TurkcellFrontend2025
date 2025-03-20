import { createContext, useState, useEffect, useContext } from "react";
import AuthService from "../services/AuthService";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unSubs = AuthService.onAuthStateChange(setUser)
    return () => unSubs()
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);