import { createUserWithEmailAndPassword, EmailAuthProvider, reauthenticateWithCredential, signInWithEmailAndPassword, updatePassword } from "firebase/auth";
import { auth, db } from "./firebase";
import { doc, setDoc } from "firebase/firestore";


export function registerFirebase(formData: any) {
    const email = formData.get('Email/ID');
    const password = formData.get('Password');
    const password2 = formData.get('Password2');

    if (password !== password2) {
        console.error("Passwords do not match");
        return;
    }
    const nickname = formData.get('NickName')
    const country = formData.get('country')
    const phone = formData.get('Phone')

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

export function loginFirebase(formData: any) {
    const email = formData.get('Email/ID');
    const password = formData.get('Password');
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("login başarılı", auth.currentUser)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(`Error: ${errorCode}, ${errorMessage}`);
        });
}

export async function changePasswordFirebase(formData: any) {
    const user = auth.currentUser;
    console.log(user)
    const oldPassword = formData.get('Old Passworld*:');
    const newPassword = formData.get('New Passworld*:');
    if (!user) {
        console.error("Kullanıcı oturum açmamış.");
        return;
    }
    try {
        // Kullanıcıyı yeniden kimlik doğrulama (güvenlik için şart)
        const credential = EmailAuthProvider.credential(user.email!, oldPassword);
        await reauthenticateWithCredential(user, credential);

        // Şifreyi güncelle
        await updatePassword(user, newPassword);
        console.log("Şifre başarıyla güncellendi!");
    } catch (error: any) {
        console.error("Şifre güncellenemedi:", error.message);
    }
}