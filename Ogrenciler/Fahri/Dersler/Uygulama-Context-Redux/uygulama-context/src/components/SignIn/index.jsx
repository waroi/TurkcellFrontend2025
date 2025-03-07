import {
  // signInWithGoogle,
  handleSignInAndGetRole,
} from "../../../firebase/authControl";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import { query } from "firebase/firestore";

const SignIn = () => {
  const messagesRef = collection(db, "users");
  const [books] = useCollection(query(messagesRef));
  return (
    <div>
      <button onClick={handleSignInAndGetRole}>Giriş</button>

      {books?.docs.map((doc) => {
        return <div>1-{doc.data().category}</div>;
      })}
    </div>
  );
};

export default SignIn;
