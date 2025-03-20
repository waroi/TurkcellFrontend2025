import { auth } from "../../firebase_config";
import { readUser, saveUser } from "./db_service";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

export const signWithEmailAndPassword = async (email,password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth,email,password);
       if (userCredential.user !== null) {
              const user = await readUser(userCredential.user.uid);
              return user;
       }
    } catch (error) {
        console.log("Error in signWithEmailAndPassword: ", error);
    }
}

export const createWithEmailAndPassword = async (email,password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth,email,password);
        if (userCredential.user !== null) {
            const user = {
                uid: userCredential.user.uid,
                email: userCredential.user.email,
                isAdmin:false
            }
            await saveUser(user);
            return user;
        }
    } catch (error) {
        console.log("Error in signWithEmailAndPassword: ", error);
    }
}
