import { collection, doc, getDoc, getDocs, setDoc, updateDoc } from "firebase/firestore"
import { db } from "../firebase/Firebase"
import { EmailService } from "./EmailService";

export class TestService {
    static async addNewUser(values, questionSettings) {
        if (!values.phone) values.phone = "Telefon numarası bulunamadı"
        try {
            if (!values?.email) throw new Error("Teste eklenmek için eksik veri");

            const docRef = doc(db, "approved_users", values.email)
            const docSnap = await getDoc(docRef)

            if (docSnap.exists()) {
                alert("Bu kullanıcı zaten kayıtlı")
                return { success: false, message: "Bu kullanıcı zaten kayıtlı" }
            }

            await setDoc(docRef, { ...values, access: true, questionSettings })

            EmailService.sendTestEmail(values.email)
            return { success: true, message: "Test'e başarıyla eklendi" }
        } catch (error) {
            console.error("Başvuru eklerken bir hata oluştu", error)
            return { success: false, message: error.message }
        }
    }

    static async checkAccess(email) {
        try {
            const docRef = doc(db, "approved_users", email)
            const docSnap = await getDoc(docRef)

            if (!docSnap.exists()) {
                return alert("Kullanıcı bulunamadı, lütfen önce başvuru yapınız")
            }

            const userData = docSnap.data()

            if (!userData.access) {
                return alert("Zaten teste giriş yapmışsınız")
            }

            await updateDoc(docRef, {
                access: false,
                lastAccessDate: new Date().toLocaleDateString("tr-TR")
            })
            localStorage.setItem("userEmail", email);
            return true
        } catch (error) {
            alert("checkAccess'de bir hata", error)
            return false
        }
    }

    static getUser() {
        return localStorage.getItem("userEmail") || null
    }

    static async completedUser(email, score) {
        try {
            const docRef = doc(db, "completed_users", email)

            await setDoc(docRef, { email, score, date: new Date().toLocaleDateString("tr-TR") })
            localStorage.removeItem("userEmail")
            return { success: true, message: "Test başarıyla tamamlandı" }
        } catch (error) {
            alert("Başvuru tamamlanırken bir hata oluştu: ", error)
            return { success: false, message: error.message }
        }
    }

    static async getAllCompletedUsers() {
        const querySnapshot = await getDocs(collection(db, "completed_users"));
        const completedUsersData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return { data: completedUsersData }
    }

    static async getQuestionSettingsByEmail() {
        try {
            const docRef = doc(db, "approved_users", this.getUser())
            const docSnap = await getDoc(docRef)

            if (docSnap.exists()) {
                return { success: true, data: { ...docSnap.data().questionSettings } }
            } else {
                return { success: false, message: "Soru ayarlarınız bulunamadı" }
            }
        } catch (error) {
            console.log("Soru ayarları alınırken hata oluştu:", error)
            return { success: false, message: error }
        }
    }
}