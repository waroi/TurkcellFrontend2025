import { db } from "../../firebase_config";
import { collection, getDocs, addDoc } from "firebase/firestore";

export const fetchApplications = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "applications"));
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Başvurular çekilirken hata oluştu:", error);
    return [];
  }
};

export const saveUser = async (newApplication) => {
  try {
    const docRef = await addDoc(collection(db, "applications"), newApplication);
    console.log("Başvuru başarıyla kaydedildi, ID:", docRef.id);
  } catch (error) {
    console.error("Başvuru kaydedilirken hata oluştu:", error);
    throw error;
  }
}
