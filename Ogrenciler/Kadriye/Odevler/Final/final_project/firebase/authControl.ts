import { createUserWithEmailAndPassword, EmailAuthProvider, reauthenticateWithCredential, signInWithEmailAndPassword, updatePassword } from "firebase/auth";
import { auth, db } from "./firebase";
import { doc, setDoc } from "firebase/firestore";


export function registerFirebase(formData: any) {
    const email = formData.get('email');
    const password = formData.get('password');
    const password2 = formData.get('password2');

    if (password !== password2) {
        console.error("Passwords do not match");
        return;
    }
    const nickname = formData.get('nickName')
    const country = formData.get('country')
    const phone = formData.get('phone')

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setDoc(doc(db, 'users', user.uid), {
                email,
                nickname,
                country,
                phone,
                createdAt: new Date().toISOString()
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(`Error: ${errorCode}, ${errorMessage}`);
        });
}

export async function loginFirebase(formData: any) {
    const email = formData.get('email');
    const password = formData.get('password');
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        return user;
    } catch (error: any) {
        console.error(`Error: ${error.code}, ${error.message}`);
        return null;
    }
}

export async function changePasswordFirebase(formData: any, userData: any) {
    const parsedUser = JSON.parse(userData.value);
    const email = parsedUser.email
    console.log("email: ", email)
    const oldPassword = formData.get('Old Passworld*:');
    const newPassword = formData.get('New Passworld*:');
    const userCredential = await signInWithEmailAndPassword(auth, email, oldPassword);
    const user = userCredential.user;
    if (!user) {
        console.error("Kullanıcı oturum açmamış.");
        return;
    }
    try {
        const credential = EmailAuthProvider.credential(user.email!, oldPassword);
        await reauthenticateWithCredential(user, credential);
        await updatePassword(user, newPassword);
        console.log("Şifre başarıyla güncellendi!");
    } catch (error: any) {
        console.error("Şifre güncellenemedi:", error.message);
    }
}