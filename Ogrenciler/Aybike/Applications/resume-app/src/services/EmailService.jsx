import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/Firebase";

export class EmailService {
    static async sendTestEmail(email) {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                return true
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                return false
            });
    }

}