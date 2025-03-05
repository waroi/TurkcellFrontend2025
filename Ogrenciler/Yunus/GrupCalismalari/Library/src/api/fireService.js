import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase";



  const signed =(email='email3@gmail.com', password='12345678') => {
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  }

  export default signed