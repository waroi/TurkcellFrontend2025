import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

export class FireStore {

    static async getBooks() {
        const querySnapshot = await getDocs(collection(db, "books"));
        querySnapshot.forEach((doc) => {
            const docId = doc.id
            const docData = doc.data()

            return { docId, docData }
        });
    }

    static async addUser(user) {
        try {
            console.log(user)
            const docRef = await addDoc(collection(db, "users"), user);
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    static async addPublisher() {
        try {
            const docRef = await addDoc(collection(db, "publisher"), {
                first: "HAzalllllllll",
                last: "KÜT KÜTTTTTTTTTTTTTT",
                born: 1815
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    static async addBook(title, posterUrl, description, author, publishedYear, genre, publisher, userId, id) {
        try {
            const bookData = {
                id: id,
                title: title,
                posterUrl: posterUrl,
                description: description,
                author: author,
                publishedYear: publishedYear,
                genre: genre,
                publisher: publisher,
                addedBy: userId,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            };

            const docRef = await addDoc(collection(db, "books"), bookData);

            console.log("Kitap eklendi, ID:", docRef.id);
        } catch (error) {
            console.error("Hata:", error);
        }
    }

    static async deleteBook(bookId) {
        const bookRef = doc(db, "books", bookId);
        try {
            await deleteDoc(bookRef);
            console.log("Kitap silindi");
        } catch (error) {
            console.error("Hata:", error);
        }
    }

    static async updateBook(bookId, newData) {
        const bookRef = doc(db, "books", bookId);
        try {
            await updateDoc(bookRef, {
                ...newData,
                updatedAt: new Date().toISOString()
            });
            console.log("Kitap güncellendi");
        } catch (error) {
            console.error("Hata:", error);
        }
    }
}