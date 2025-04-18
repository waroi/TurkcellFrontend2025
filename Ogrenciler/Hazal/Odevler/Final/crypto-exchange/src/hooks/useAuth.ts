import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  registerUser,
  loginUser,
  logoutUser,
  changeUserPassword,
  getUserWallet,
  tradeCrypto,
} from '../firebase/authService';
import { loginStart, loginSuccess, loginFailure, logout } from '../store/slices/authSlice';
import { AuthUser } from '../types/auth';

export const useAuth = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const register = async (
    email: string,
    password: string,
    nickname: string,
    country: string,
    phone: string,
    uidCode: string
  ) => {
    setLoading(true);
    setError(null);
    try {
      const response = await registerUser(email, password, nickname, country, phone, uidCode);
      const user: AuthUser = {
        uid: response.user?.uid || '',
        email: response.user?.email || '',
        displayName: nickname,
      };
      dispatch(loginSuccess(user));
    } catch (error: any) {
      setError(error.message);
      dispatch(loginFailure(error.message));
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const user = await loginUser(email, password);
      const authUser: AuthUser = {
        uid: user.uid,
        email: user.email || '',
        displayName: user.email, // Kullanıcı adı yerine email kullanıldı
      };
      dispatch(loginSuccess(authUser));
    } catch (error: any) {
      setError(error.message);
      dispatch(loginFailure(error.message));
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    setLoading(true);
    setError(null);
    try {
      await logoutUser();
      dispatch(logout());
    } catch (error: any) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const updatePassword = async (newPassword: string) => {
    setLoading(true);
    setError(null);
    try {
      await changeUserPassword(newPassword);
    } catch (error: any) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const getWallet = async () => {
    setLoading(true);
    setError(null);
    try {
      const wallet = await getUserWallet();
      return wallet;
    } catch (error: any) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const trade = async (
    from: string,
    to: string,
    fromCurrent: number,
    toCurrent: number,
    coinId: string
  ) => {
    setLoading(true);
    setError(null);
    try {
      const result = await tradeCrypto(from, to, fromCurrent, toCurrent, coinId);
      return result;
    } catch (error: any) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    register,
    login,
    signOut,
    updatePassword,
    getWallet,
    trade,
  };
};