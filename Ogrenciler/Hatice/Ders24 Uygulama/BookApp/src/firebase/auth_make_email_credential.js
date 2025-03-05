import { EmailAuthProvider } from "firebase/auth";

const credential = EmailAuthProvider.credential(email, password);
// [END auth_make_email_credential_modular]