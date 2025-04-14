import React, { createContext, useState, useContext } from "react";


const AuthContext = createContext();

export const useAuthStore = () => useContext(AuthContext);


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);


  const login = (userData) => setUser(userData);
  

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

