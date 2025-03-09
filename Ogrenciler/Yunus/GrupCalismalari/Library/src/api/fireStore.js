import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

export class FireStore {
    static async getAllBooks() {
        const booksData = []
        const querySnapshot = await getDocs(collection(db, "books"))

        querySnapshot.forEach((doc) => {
            const docData = doc.data()
            booksData.push(docData)
        });
        return booksData;
    }

    static async getAllUsers() {
        const usersData = []
        const querySnapshot = await getDocs(collection(db, "users"))

        querySnapshot.forEach((doc) => {
            const docData = doc.data()
            usersData.push(docData)
        });
        return usersData
    }

    static async getPublisherBooks(publisherName) {
        const querySnapshot = await getDocs(collection(db, "books"))
        const booksData = querySnapshot.docs
            .map((doc) => doc.data())
            .filter((book) => book.publisherName === publisherName)
        return booksData
    };

    static async getBookWithId(id) {
        try {
            const docRef = doc(db, "books", id)
            const docSnap = await getDoc(docRef)

            if (docSnap.exists()) {
                const bookData = docSnap.data()
                console.log(bookData)
                return bookData
            } else {
                console.log("Bozuk ID", id)
                return null
            }
        } catch (error) {
            console.error("Kitap çekerken bir hata oluştu", error)
            return null
        }
    }

    static async addUser(user) {
        try {
            const docRef = doc(db, "users", user.uid)
            await setDoc(docRef, user)
            console.log("Document written with ID: ", user.uid)
        } catch (event) {
            console.error("Error adding document: ", event)
        }
    }

    static async addPublisher(data) {
        try {
            const docRef = await addDoc(collection(db, "publisher"), data);
            console.log("Document written with ID: ", docRef.id)
        } catch (e) {
            console.error("Error adding document: ", e)
        }
    }

    static async addBook({ title, posterUrl, description, author, publishedYear, genre, publisherName, id }) {
        try {
            const bookData = {
                id: id,
                title: title,
                posterUrl: posterUrl,
                description: description,
                author: author,
                publishedYear: publishedYear,
                genre: genre,
                publisherName: publisherName,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            };

            const docRef = doc(db, "books", id)
            await setDoc(docRef, bookData)

            console.log("Kitap eklendi, ID:", id)
        } catch (error) {
            console.error("Kitap eklenirken bir hata olluştu:", error)
        }
    }

    static async deleteBook(bookId) {
        const bookRef = doc(db, "books", bookId)
        try {
            await deleteDoc(bookRef)
            console.log("Kitap silindi")
        } catch (error) {
            console.error("Kitap silinirken bir hata olluştu:", error)
        }
    }


    static async updateBook(bookId, newData) {
        const bookRef = doc(db, "books", bookId)
        try {
            await updateDoc(bookRef, {
                ...newData,
                updatedAt: new Date().toISOString()
            });
            console.log("Kitap güncellendi brooooooooooooooooo")
        } catch (error) {
            console.error("Kitap güncellerken bir hata oluştu:", error)
        }
    }
    static async updateUser(userId, userData) {
        const bookRef = doc(db, "users", userId)
        try {
            await updateDoc(bookRef, {
                ...userData,
                state: userData.state,
                updatedAt: new Date().toISOString()
            });
            console.log("Kullanıcı güncellemesi başarılı")
        } catch (error) {
            console.error("Kullanıcı güncellenirken bir hata oluştu:", error)
        }
    }
}