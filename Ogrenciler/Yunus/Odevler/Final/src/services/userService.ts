import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut as firebaseSignOut,
    updateProfile,
    updatePassword,
} from 'firebase/auth';
import {
    doc,
    setDoc,
    getDoc,
    collection,
    query,
    where,
    getDocs,
    updateDoc
} from 'firebase/firestore';
import { auth, db } from './firebase';

interface UserData {
    uid: string;
    email?: string;
    phoneNumber?: string;
    nickname: string;
    country: string;
    phone: string;
    uidCode?: string;
    createdAt: number;
    updatedAt: number;
}

class UserService {
    static async registerWithEmail(email: string, password: string, userData: Omit<UserData, 'uid' | 'createdAt' | 'updatedAt'>) {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            const user = userCredential.user

            await this.saveUserToFirestore({
                uid: user.uid,
                email,
                ...userData,
                createdAt: Date.now(),
                updatedAt: Date.now()
            })

            if (userData.nickname) {
                await updateProfile(user, {
                    displayName: userData.nickname
                })
            }

            return { user, error: null }
        } catch (error: any) {
            return { user: null, error: "Emaille kaydedilirken bir hata oluştu" }
        }
    }

    static async registerWithPhone(phoneNumber: string, password: string, userData: any) {
        try {
            const temporaryEmail = `${phoneNumber.replace(/[^0-9]/g, '')}@temp.com`
            const userCredential = await createUserWithEmailAndPassword(auth, temporaryEmail, password)
            const user = userCredential.user

            await this.saveUserToFirestore({
                uid: user.uid,
                phoneNumber,
                ...userData,
                createdAt: Date.now(),
                updatedAt: Date.now()
            })

            if (userData.nickname) {
                await updateProfile(user, {
                    displayName: userData.nickname
                })
            }
            return { user, error: null }
        } catch (error: any) {
            return { user: null, error: "Telefonla kayıt olurken bir hata oluştu" }
        }
    }

    static async saveUserToFirestore(userData: UserData) {
        try {
            const userRef = doc(db, 'users', userData.uid)
            await setDoc(userRef, userData)
            return { success: true, error: null }
        } catch (error: any) {
            return { success: false, error: "Kullanıcı database'e kaydedilirken bir hata oluştu" }
        }
    }

    static async getUserData(uid: string) {
        try {
            const userRef = doc(db, 'users', uid)
            const userSnap = await getDoc(userRef)

            if (userSnap.exists()) {
                return { userData: userSnap.data() as UserData, error: null }
            } else {
                return { userData: null, error: "User not found" };
            }
        } catch (error: any) {
            return { userData: null, error: "Kullanıcı bilgilerine ulaşırken hata olşutu" }
        }
    }

    static async updateUserProfile(uid: string, updateData: any) {
        try {
            const userRef = doc(db, 'users', uid)
            await updateDoc(userRef, {
                ...updateData,
                updatedAt: Date.now()
            })
            return { success: true, error: null }
        } catch (error: any) {
            return { success: false, error: "Kullanıcı güncelelnirken hata oluştu:" }
        }
    }

    static async loginWithEmail(email: string, password: string) {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            return { user: userCredential.user, error: null }
        } catch (error: any) {
            return { user: null, error: "Giriş yaparken bir hata oluştu:" }
        }
    }

    static async signOut() {
        try {
            await firebaseSignOut(auth)
            return { success: true, error: null }
        } catch (error: any) {
            return { success: false, error: +"Çıkış yaparken hata oluştu:" }
        }
    }

    static async isNicknameAvailable(nickname: string) {
        try {
            const usersRef = collection(db, 'users')
            const q = query(usersRef, where('nickname', '==', nickname))
            const querySnapshot = await getDocs(q)
            return { isAvailable: querySnapshot.empty, error: null }
        } catch (error: any) {
            return { isAvailable: false, error: "Kullanıcı adı kontrolü sırasında bir hata oluştu" }
        }
    }

    static async changePassword(newPassword: string) {
        try {
            const user = auth.currentUser
            if (!user) return { success: false, error: "Kullanıcı girişi yapılmamış" }
            await updatePassword(user, newPassword)
            return { success: true, error: null }
        } catch (error: any) {
            return { success: false, error: "Şifre değiştirilirken bir hata oluştı:" }
        }
    }
}

export default UserService