import { db } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export const getProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    const products = [];
    querySnapshot.forEach((doc) => {
      products.push({ id: doc.id, ...doc.data() });
    });
    return products;
  } catch (error) {
    console.error("Veri çekme hatası: ", error);
    throw new Error("Veri çekme işlemi başarısız.");
  }
};



