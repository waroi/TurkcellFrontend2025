import {
  registerWithGoogle,
  signInWithGoogle,
} from "../../../firebase/authControl";
import { useState } from "react";

const SignIn = () => {
  const [publisherId, setPublisherId] = useState("");
  return (
    <div className="container my-5 py-5">
      <div className="row justify-content-center gap-2">
        <input
          className="col-12"
          type="text"
          value={publisherId}
          onChange={(e) => setPublisherId(e.target.value)}
        />
        <button className="col-12" onClick={registerWithGoogle}>
          Kaydol
        </button>
        <button className="col-12" onClick={signInWithGoogle}>
          Giriş
        </button>
      </div>
    </div>
  );
};
export default SignIn;
