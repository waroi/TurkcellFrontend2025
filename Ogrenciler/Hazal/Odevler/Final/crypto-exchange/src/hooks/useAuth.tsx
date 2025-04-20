import { useEffect, useState } from 'react';
import { getCurrentUser, login, register, logout, resetPassword } from '@/lib/firebase/auth';
import { User } from 'firebase/auth';
import { useRouter } from 'next/navigation';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    let isMounted = true; 

    const fetchUser = async () => {
      try {
        const user = await getCurrentUser();
        if (isMounted) {
          setUser(user);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching user:', error);
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchUser();

    return () => {
      isMounted = false; 
    };
  }, []);

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    try {
      const userCredential = await login(email, password);
      setUser(userCredential.user);
      router.push('/dashboard');
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (email: string, password: string) => {
    setLoading(true);
    try {
      const userCredential = await register(email, password);
      setUser(userCredential.user);
      router.push('/dashboard');
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    await logout();
    setUser(null);
    router.push('/login');
  };

  const resetPass = async (email: string) => {
    await resetPassword(email);
  };

  return {
    user,
    loading,
    signIn,
    signUp,
    signOut,
    resetPass,
    isAuthenticated: !!user,
  };
}