
import { db } from '../firebase'; 

import { getDoc, setDoc, doc } from 'firebase/firestore';  

export const readUser = async (userID) => {
  try {
    const userRef = doc(db, "users", userID);  
    const userSnap = await getDoc(userRef);  
    if (userSnap.exists()) {
      return userSnap.data();  
    } else {
      console.log("Böyle bir kullanıcı bulunamadı!");
      return null;  
    }
  } catch (error) {
    console.error("Firestore'dan kullanıcı okuma hatası:", error);
    return null;  
  }
};

export const saveUser = async (user) => {
  try {
    const userRef = doc(db, "users", user.uid);  
    await setDoc(userRef, user); 
    
    return user;  
  } catch (error) {
    
    return null;  
  }
};




