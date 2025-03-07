import { handleSignInAndGetRole } from "../../../firebase/authControl";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import { query } from "firebase/firestore";
import { useState } from "react";
import { getUserBooks } from "../../../firebase/dbController";

const SignIn = () => {
  const messagesRef = collection(db, "users");
  const [books] = useCollection(query(messagesRef));
  const [publisherId, setPublisherId] = useState("");
  getUserBooks("o8bAvImQIuzpzbQg8VUM");
  return (
    <div>
      <input
        type="text"
        value={publisherId}
        onChange={(e) => setPublisherId(e.target.value)}
      />
      <button onClick={() => handleSignInAndGetRole(publisherId)}>Giriş</button>
      {books?.docs.map((doc) => {
        return <div>1-{doc.data().category}</div>;
      })}
    </div>
  );
};
export default SignIn;
