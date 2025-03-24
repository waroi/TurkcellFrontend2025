import {useState,useEffect} from 'react'
import { auth } from '../../firebase_config';
const useLoggedIn = () => {
      const [isLoggedIn, setIsLoggedIn] = useState(false);
      useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
          setIsLoggedIn(user !== null);
        });
    
        return () => unsubscribe();
      }, []);
    return {isLoggedIn};
}

export default useLoggedIn