import {useState,useEffect} from 'react'
import { checkIsHeAdmin } from '../services/db_service';
import { auth } from '../../firebase_config';

const useCheckIsHeAdmin = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const checkAdminStatus = async () => {
    setIsLoading(true);
    if (auth.currentUser) {
      try {
        const adminStatus = await checkIsHeAdmin();
        setIsAdmin(adminStatus === true);
      } catch (error) {
        console.error("Admin kontrolü sırasında hata:", error);
        setIsAdmin(false);
      }
    } else {
      console.log("Kullanıcı oturum açmamış.");
      setIsAdmin(false);
    }
  
    setIsLoading(false);
  };
  useEffect(() => {
    const handleAdmin = async () => {
      await checkAdminStatus();
    }
    handleAdmin();
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      console.log("Kullanıcı değişti:", user);
      if (user) {
       await checkAdminStatus();
      } else {
        setIsAdmin(false);
        setIsLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return { isLoading, isAdmin, checkAdminStatus };
};

export default useCheckIsHeAdmin;
