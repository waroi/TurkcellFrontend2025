import { addDoc, collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore"
import { db } from "../firebase/Firebase"
import { EmailService } from "./EmailService";

export class TestService {
    static async addNewUser(values) {
        if (!values.phone) values.phone = "Telefon numarası bulunamadı"
        try {
            if (!values?.email) throw new Error("Teste eklenmek için eksik veri");

            const docRef = doc(db, "approved_users", values.email)
            const docSnap = await getDoc(docRef)

            if (docSnap.exists()) {
                console.log('Bu kullanıcıı kayıtlı olduğu için dbye yükleymiyoruz ve mail atmıyoruz broooo')
                return { success: false, message: "Bu kullanıcı zaten kayıtlı dostum" }
            }

            // buradan bir yerden maili de yollayacağız onu authserviceden mi yapsak bilemedim /dashboarda atsak yeter /teste atmamıza gerek yok boşuna atarız yönlendirecek zaten oraya :D
            await setDoc(docRef, { ...values, access: true })

            EmailService.sendTestEmail(values.email)
            return { success: true, message: "Test'e başarıyla eklendin broo :))" }
        } catch (error) {
            console.error("Başvuru eklerken approved_users'da boom-->", error)
            return { success: false, message: error.message }
        }
    }

    static async checkAccess(email) {
        try {
            const docRef = doc(db, "approved_users", email)
            const docSnap = await getDoc(docRef)

            if (!docSnap.exists()) {
                console.log("No access - Kullanıcı bulunamadı go tooooooo ---> dashboard")
                return false
            }

            const userData = docSnap.data()

            if (!userData.access) {
                console.log("No access - Kullanıcı zaten teste giriş yapmış")
                return false
            }


            await updateDoc(docRef, {
                access: false,
                lastAccessDate: new Date().toLocaleDateString("tr-TR")
            })
            localStorage.setItem("userEmail", email);
            console.log("Userın has access - Erişim verildi, artık tekrar giremez")
            return true
        } catch (error) {
            console.error("checkAccess'de bir hata--*-*>", error)
            return false
        }
    }

    static getUser() {
        return localStorage.getItem("userEmail")
    }

    static async completedUser(email) {
        try {
            const docRef = doc(db, "completed_users", email)

            await setDoc(docRef, { email, date: new Date().toLocaleDateString("tr-TR") })
            return { success: true, message: "Test başarıyla tamamlandı" }
        } catch (error) {
            console.error("Başvuru tamamlanırken bir hata oluştu: ", error)
            return { success: false, message: error.message }
        }
    }
}