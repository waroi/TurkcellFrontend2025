import { doc, setDoc } from 'firebase/firestore';
import { db } from './firebase';
import { User } from 'firebase/auth';

export const registerUserWithBalance = async (user: User) => {
    const uid = user.uid;
    const email = user.email || '';

    await setDoc(doc(db, 'users', uid), {
        uid,
        email,
        nickname: '',
        phone: '',
        country: '',
        balance: 1000,
        wallet: {}
    });
};
