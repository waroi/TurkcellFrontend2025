import {
  registerWithGoogle,
  signInWithGoogle,
} from "../../../firebase/authControl";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

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
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="sign-in-card p-4 shadow-lg rounded-4">
        <h2 className="text-center mb-4 text-dark">Giriş Yap veya Kaydol</h2>

        <div className="mb-3">
          <input
            className="form-control form-control-lg shadow-sm"
            type="text"
            placeholder="Yayın Evi ID Giriniz"
            value={publisherId}
            onChange={(e) => setPublisherId(e.target.value)}
          />
        </div>

        <button
          className="btn btn-blue card-btn w-100 my-3 shadow-sm"
          onClick={handleRegister}
        >
          Kaydol
        </button>

        <hr className="my-4" />

        <div className="text-center mt-4">
          <p>Veya</p>
          <button
            className="btn btn-red card-btn w-100 shadow-sm"
            onClick={handleClick}
          >
            Google ile Giriş Yap
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
