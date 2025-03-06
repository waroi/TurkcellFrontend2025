import { auth } from "../../firebase";
import { readUser, saveUser } from "./DBController";
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

export const createWithEmailAndPassword = async (email,password,publishing) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth,email,password);
        if (userCredential.user !== null) {
            const user = {
                uid: userCredential.user.uid,
                email: userCredential.user.email,
                publishing: publishing,
                isAdmin:false
            }
            await saveUser(user);
            return user;
        }
    } catch (error) {
        console.log("Error in signWithEmailAndPassword: ", error);
    }
}

export const getCurrentUser = () => {
    if (auth.currentUser !== null) {
        return auth.currentUser;
    }
    else {
        return null;
    }
}

export const logOut = async () => {
    try {
        await auth.signOut();
    } catch (error) {
        console.log("Error in logOut: ", error);
    }
}