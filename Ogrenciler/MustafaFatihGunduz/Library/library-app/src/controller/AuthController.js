import { auth } from "../../firebase";
import { getAuth,signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

export const signWithEmailAndPassword = async (email,password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth,email,password);
        const user = userCredential.user;
        return user;
    } catch (error) {
        console.log("Error in signWithEmailAndPassword: ", error);
    }
}

export const createWithEmailAndPassword = async (email,password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth,email,password);
        const user = userCredential.user;
        return user;
    } catch (error) {
        console.log("Error in signWithEmailAndPassword: ", error);
    }
}