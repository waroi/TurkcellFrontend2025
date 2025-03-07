import {
  registerWithGoogle,
  signInWithGoogle,
} from "../../../firebase/authControl";
import { useState } from "react";
import { NavLink } from "react-router";

const SignIn = () => {
  const [publisherId, setPublisherId] = useState("");
  return (
    <div className="vh-100 justify-content-center align-items-center d-flex">
      <div className="row justify-content-center gap-2 border p-5 border-primary rounded-3 border-3  bg-primary bg-opacity-10">
        <input
          className="col-6 form-control w-50"
          type="text"
          placeholder="Yayın Evi ID Giriniz"
          value={publisherId}
          onChange={(e) => setPublisherId(e.target.value)}
        />
        <NavLink to={`/books/${publisherId}`} className="col-6 btn btn-primary my-3" onClick={registerWithGoogle}>
            Kaydol
        </NavLink>
        <hr className="w-50" />
        <NavLink to={`/books`} className="col-6 btn btn-secondary" onClick={signInWithGoogle}>
            Giriş
        </NavLink>
      </div>
    </div>
  );
};
export default SignIn;
