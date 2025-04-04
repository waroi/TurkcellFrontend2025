import {
  registerWithGoogle,
  signInWithGoogle,
} from "../../firebase/authControl";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setButton } from "../redux/slices/buttonSlice";
import { setUser } from "../redux/slices/userSlice";
import { setCardButton } from "../redux/slices/cardButtonSlice";
import { getUser } from "../../firebase/dbController";

const SignInView = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [publisherId, setPublisherId] = useState("");

  const handleClick = async () => {
    const user = await signInWithGoogle();
    if (user) {
      let user = await getUser();
      navigate("/" + user.role);
      dispatch(setButton("d-block"));
      dispatch(setCardButton("d-block"));
      dispatch(setUser(user));
    }
  };

  const handleRegister = async () => {
    const user = await registerWithGoogle(publisherId);
    if (user) {
      let user = await getUser();
      navigate("/" + user.role);
      dispatch(setButton("d-block"));
      dispatch(setCardButton("d-block"));
      dispatch(setUser(user));
    }
  };

  return (
    <div className="container min-vh-100 d-flex align-items-center">
      <div className="row w-100">
        <div className="col-md-6 d-flex justify-content-center">
          <div className="sign-in-card p-4 shadow-lg rounded-4 w-75 bg-white">
            <h2 className="text-center mb-4 text-dark">
              Giriş Yap veya Kaydol
            </h2>

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
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img
            src="/bookcat.png"
            alt="Login Illustration"
            className="img-fluid w-50"
          />
        </div>
      </div>
    </div>
  );
};

export default SignInView;
