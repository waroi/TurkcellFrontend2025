import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

export const createUser = async (email, password, publisher) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("User signed up:", user);
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      email,
      publisher, 
    });
    return user;
  } catch (error) {
    console.error("Signup error:", error.message);
    throw error;
  }
};

export const login = async (email, password) => {
  try {
    const loginCredential = await signInWithEmailAndPassword(auth, email, password);
    const loggedUser = loginCredential.user;
    console.log("User logged in:", loggedUser);
    return loggedUser;
  } catch (error) {
    console.error("Login error:", error.message);
    throw error;
  }
};

export const fetchUserPublisher = async (uid) => {
  try {
    const usersRef = collection(db, "users"); 
    const q = query(usersRef, where("userUID", "==", uid)); 
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      const userData = querySnapshot.docs[0].data();
      return userData.PublisherId; 
    } else {
      console.log("No such user!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching publisher:", error.message);
    throw error;
  }
};