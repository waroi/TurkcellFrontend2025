import {
  registerWithGoogle,
  signInWithGoogle,
} from "../../../firebase/authControl";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const navigate = useNavigate();
  const [publisherId, setPublisherId] = useState("");
  const handleClick = async () => {
    const user = await signInWithGoogle();
    if (user) {
      navigate("/editor");
    }
  };
  const handleRegister = async () => {
    const user = await registerWithGoogle();
    if (user) {
      navigate(`/editor/${publisherId}`);
    }
  };
  return (
    <div className="vh-100 justify-content-center align-items-center d-flex">
      <div className="row justify-content-center gap-2 border p-5 border-primary rounded-3 border-3 bg-primary bg-opacity-10">
        <input
          className="col-6 form-control w-50"
          type="text"
          placeholder="Yayın Evi ID Giriniz"
          value={publisherId}
          onChange={(e) => setPublisherId(e.target.value)}
        />
        <button className="col-6 btn btn-primary my-3" onClick={handleRegister}>
          Kaydol
        </button>
        <hr className="w-50" />
        <button className="col-6 btn btn-secondary" onClick={handleClick}>
          Giriş
        </button>
      </div>
    </div>
  );
};
export default SignIn;
