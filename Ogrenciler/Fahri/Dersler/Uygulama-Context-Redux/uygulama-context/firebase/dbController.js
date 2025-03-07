import { addDoc, collection, query, where } from "firebase/firestore";
import { db } from "./firebase";
import { doc, getDoc, getDocs, deleteDoc} from "firebase/firestore";
import { auth } from "../firebase/firebase";

export async function getUserBooks() {
    const user = auth.currentUser;
    if (!user) {
        console.error("Kullanıcı oturum açmamış!");
        return;
    }
    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);
    if (!userSnap.exists()) {
        console.error("Kullanıcı bilgisi bulunamadı!");
        return;
    }
    const publisherId = userSnap.data().publisherId;
    const booksRef = collection(db, "books");
    const q = query(booksRef, where("publisherId", "==", publisherId));
    const querySnapshot = await getDocs(q);
    const books = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
    console.log("Kullanıcının yayınevine ait kitaplar:", books);
    return books;
}
export async function getBook(id) {
    const bookRef = doc(db, "books", id);
    const bookSnap = await getDoc(bookRef);
    return bookSnap.data();
}
export async function deleteBook(id) {
    const bookRef = doc(db, "books", id);
    await deleteDoc(bookRef);
}
export async function addedBook(book) {
    const bookRef = await addDoc(collection(db, "books"), book);
}