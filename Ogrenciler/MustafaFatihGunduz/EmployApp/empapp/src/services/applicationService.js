import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

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
