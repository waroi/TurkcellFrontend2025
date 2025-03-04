import { createContext, useState, useEffect, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem("user") || false);
  
  useEffect(() => {
    localStorage.setItem("user", user);
  }, [user]);

  const values = {
    user,
    setUser,
  };

  return (
    <UserContext.Provider value={values}>{children}</UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
