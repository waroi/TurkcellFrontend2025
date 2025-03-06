import {
  getFirestore,
  collection,
  getDocs,
  doc,
  deleteDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import "firebase/firestore";
import "firebase/auth"; // If you want to use Firebase Authentication

const app = initializeApp({
  apiKey: "AIzaSyCEH-o7XYTLPB4tJ3Kc4SKsYKzxtB1pWAg",
  authDomain: "turkcell-library.firebaseapp.com",
  projectId: "turkcell-library",
  storageBucket: "turkcell-library.firebasestorage.app",
  messagingSenderId: "200620714261",
  appId: "1:200620714261:web:6f0641718d7a92d57f611c",
});

const db = getFirestore(app);

// const querySnapshot = await getDocs(collection(db, DEFINEDUSER));

// querySnapshot.forEach((doc) => {
//   console.log(doc.id, "=>", doc.data());
// });

function getBooks(user) {
  return getDocs(collection(db, user)).then((snapshot) =>
    snapshot.docs.map((book) => {
      return { id: book.id, data: book.data() };
    })
  );
}

function deleteBook(user, id) {
  return deleteDoc(doc(db, user, id));
}

function addBook(user, bookId, bookData) {
  console.log("adding..");
  const bookRef = doc(collection(db, user), bookId); // Define the document reference with the custom ID
  return setDoc(bookRef, bookData) // Set the data for the defined document ID
    .then(() => {
      return { id: bookId, data: bookData };
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
}

function editBook(user, bookId, updatedData) {
  const bookRef = doc(db, user, bookId); // Reference the specific document by ID
  return updateDoc(bookRef, updatedData) // Update the document with the new data
    .then(() => {
      return { id: bookId, data: updatedData }; // Return updated info
    })
    .catch((error) => {
      console.error("Error updating document: ", error);
    });
}

// getBooks("userID12345").then((r) => console.log(r));

// deleteBook("userID12345", "docID");

// addBook("userID12345", "x123", { title: "test", author: "ekin aslan" });

// editBook("userID12345", "abcde", { title: "test2", author: "eko" });
