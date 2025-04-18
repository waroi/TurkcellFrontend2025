import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    User,
    signOut,
    reauthenticateWithCredential,
    updatePassword,
    EmailAuthProvider,
} from 'firebase/auth';
import { app, auth } from './firebase';

export const registerUser = async (
    email: string,
    password: string
): Promise<User> => {
    const auth = getAuth(app);
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error('Hata:', error.message);
        }
        throw error;
    }
};

export const signIn = async (
    email: string,
    password: string
): Promise<{ uid: string; email: string | null }> => {
    const auth = getAuth(app);
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log('Kullanıcı giriş yaptı:', userCredential.user);
        return {
            uid: userCredential.user.uid,
            email: userCredential.user.email,
        };
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error('Hata:', error.message);
        }
        throw error;
    }
};

export const logoutUser = async () => {
    const auth = getAuth(app);
    try {
        await signOut(auth);
        console.log('Kullanıcı çıkış yaptı');
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error('Çıkış hatası:', error.message);
        }
    }
};

export const changePassword = async (
    email: string,
    currentPassword: string,
    newPassword: string
) => {
    try {
        const user = auth.currentUser;
        if (!user) throw new Error('Kullanıcı oturumu bulunamadı');

        const credential = EmailAuthProvider.credential(email, currentPassword);
        await reauthenticateWithCredential(user, credential);

        await updatePassword(user, newPassword);
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error('Şifre değiştirme hatası:', error.message);
        }
        throw error;
    }
};
