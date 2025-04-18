
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc ,doc} from "firebase/firestore";
import { db, auth } from '../services/firebase';

interface RegisterUserProps {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }
  
  const registerUser = async ({
    email,
    password,
    firstName,
    lastName
  }: RegisterUserProps): Promise<void> => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
  
    await setDoc(doc(db, "users", user.uid), {
      firstName,
      lastName,
      displayName: `${firstName} ${lastName}`,
      email: user.email,
      phoneNumber: "",
      location: "United States",
      currency: "USD"
    });
  };
  