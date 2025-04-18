import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut as firebaseSignOut,
    UserCredential
} from 'firebase/auth';
import { auth } from './firebase';

export const signIn = async (email: string, password: string): Promise<{
    user: UserCredential['user'] | null
    error: string | null
}> => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return { user: userCredential.user, error: null }
    } catch (error: any) {
        return { user: null, error: error.message }
    }
}

export const signUp = async (email: string, password: string): Promise<{
    user: UserCredential['user'] | null;
    error: string | null;
}> => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return { user: userCredential.user, error: null }
    } catch (error: any) {
        return { user: null, error: error.message }
    }
}

export const signOut = async (): Promise<{ error: string | null }> => {
    try {
        await firebaseSignOut(auth)
        return { error: null }
    } catch (error: any) {
        return { error: error.message }
    }
}
