
import { db } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";


export const fetchAndStoreProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    const products = [];

    querySnapshot.forEach((doc) => {
      products.push({ id: doc.id, ...doc.data() });
    });


    localStorage.setItem("products", JSON.stringify(products));
    return products;
  } catch (error) {
    console.error("Ürünler alınırken hata oluştu:", error);
    return [];
  }
};
