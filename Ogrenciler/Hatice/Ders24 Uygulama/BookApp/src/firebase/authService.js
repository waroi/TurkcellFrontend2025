import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { useNavigate } from "react-router";

export const createUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("User signed up:", user);
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

}


const user = auth.currentUser;

if (user) {
  console.log("User:", user);

} else {
  console.log("Kullanıcı yok:", user);

}



/*
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });*/
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed up
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });



