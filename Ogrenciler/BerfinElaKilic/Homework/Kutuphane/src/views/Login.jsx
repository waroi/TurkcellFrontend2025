import { registerUser, SignIn } from "../services/Api";
import { useState } from "react";
import { MdEmail, MdLock } from "react-icons/md";
import { NavLink, useNavigate } from "react-router";

const Login = () => {
  const [user, setUser] = useState({ mail: "", password: "" });
  const navigate = useNavigate();
  const handleLog = async () => {
    const alreadyUser = await SignIn(user.mail, user.password);
    navigate(`/publisher/${alreadyUser.uid}`);
  };

  return (
    <div className="container mt-5 vh-100">
      <h2 className="text-center mb-4 fw-bold">Giriş Yap</h2>
      <div className="mb-4">
        <label className="form-label">E-Posta:</label>
        <div className="input-group">
          <span className="input-group-text bg-light text-dark">
            <MdEmail size={20} />
          </span>
          <input
            value={user.mail}
            onChange={(e) => setUser({ ...user, mail: e.target.value })}
            type="email"
            className="form-control py-2 shadow-sm"
            placeholder="E-Postanızı girin"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="form-label">Şifre:</label>
        <div className="input-group">
          <input
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            type="password"
            className="form-control  py-2 shadow-sm"
            placeholder="Şifrenizi girin"
          />
          <span className="input-group-text bg-light text-dark">
            <MdLock size={20} />
          </span>
        </div>
      </div>
      <button
        className="btn btn-primary w-100 rounded-pill py-2 shadow-lg transition-all hover-shadow"
        onClick={handleLog}
      >
        Giriş Yap
      </button>
      <p className="text-center mt-3">
        Hesabınız yok mu?{" "}
        <NavLink
          to="/register"
          className="text-primary fw-bold text-decoration-none"
        >
          Kayıt Ol
        </NavLink>
      </p>
    </div>
  );
};

export default Login;
