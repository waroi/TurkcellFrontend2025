import { sendEmailVerification } from "firebase/auth";
import { auth, db } from "../../firebase_config";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";

class UserService {
  async saveUser(userData) {
    try {
      const docRef = await addDoc(collection(db, "applications"), userData);
      console.log("Başvuru başarıyla kaydedildi, ID:", docRef.id);
    } catch (error) {
      console.error("Başvuru kaydedilirken hata oluştu:", error);
      throw error;
    }
  }
}



export const userService = new UserService();
