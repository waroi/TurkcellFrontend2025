import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import useUserStore from '../store/users';
import { register as registerFirebase, login as loginFirebase, logout as logoutFirebase } from '@/services/firebase';

export default function useAuth() {
  const router = useRouter();
  const { user, setUser } = useUserStore(); 
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        setUser(user);  
      } catch (error) {
        console.error("localStorage'dan kullanıcı alınırken hata:", error);
      }
    }
  }, [setUser]);

  async function register(formData: { 
    email: string; 
    password: string;  
    nickname: string; 
    phoneNumber: string; 
    countryCode: string; 
    uidCode: string; 
  }) {
    try {
      const user = await registerFirebase(formData.email, formData.password, {
        nickname: formData.nickname,
        phoneNumber: formData.phoneNumber,
        countryCode: formData.countryCode,
        uidCode: formData.uidCode,
      });

      setUser(user);
      localStorage.setItem("user", JSON.stringify(user)); 

      router.push("/login");  
    } catch (error) {
      console.error("Kayıt Hatası:", error);
    }
  }

  async function login(email: string, password: string) {
    try {
      const user = await loginFirebase(email, password);
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));  
      return user; 
    } catch (error) {
      console.error("Giriş Hatası:", error);
      throw error; 
    }
  }
  
  async function logout() {
    if (confirm("Çıkmak istediğinizden emin misiniz?")) {
      try {
        await logoutFirebase();
        setUser(null); 
        localStorage.removeItem("user"); 
        router.push("/login");
      } catch (error) {
        console.error("Çıkış Hatası:", error);
      }
    }
  }

  return {
    user,
    register,
    login,
    logout,
  };
}
