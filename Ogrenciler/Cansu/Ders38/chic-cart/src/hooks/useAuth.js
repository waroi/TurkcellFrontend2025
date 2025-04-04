import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase/firebaseConfig';
import useAuthStore from '@/store/authStore';

const useAuth = () => {
  const setUser = useAuthStore((state) => state.setUser);
  const clearUser = useAuthStore((state) => state.clearUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        });
      } else {
        clearUser();
      }
    });

    return () => unsubscribe();
  }, [setUser, clearUser]);

  return;
};

export default useAuth;
