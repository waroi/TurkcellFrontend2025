import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import booksData from "../../data/db.json"; // JSON dosyanı içe aktar

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const uploadBooks = async () => {
  try {
    const booksCollection = collection(db, "books");

    for (const book of booksData.books) {
      await addDoc(booksCollection, book);
    }

    console.log("Tüm kitaplar Firestore'a eklendi!");
  } catch (error) {
    console.error("Hata oluştu:", error);
  }
};

uploadBooks();
