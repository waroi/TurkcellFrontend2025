import { useCallback } from "react";
import {
  registerWithEmail,
  loginWithEmail,
  logout,
} from "@/services/authService";

export const useAuth = () => {
  const register = useCallback((email: string, password: string) => {
    return registerWithEmail(email, password);
  }, []);

  const login = useCallback((email: string, password: string) => {
    return loginWithEmail(email, password);
  }, []);

  const signOut = useCallback(() => {
    return logout();
  }, []);

  return { register, login, signOut };
};
