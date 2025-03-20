import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

class UserService {
  async saveUser(userData) {
    try {
      console.log("Firestore'a gönderilecek veri:", userData); // Debugging için
      const docRef = await addDoc(collection(db, "applications"), userData);
      console.log("Başvuru başarıyla kaydedildi, ID:", docRef.id);
    } catch (error) {
      console.error("Başvuru kaydedilirken hata oluştu:", error);
      throw error;
    }
  }
}

export const userService = new UserService();
