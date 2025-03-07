import { registerUser, SignIn } from "../services/Api";
import { useState } from "react";
import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import { NavLink, useNavigate } from "react-router";

const Register = () => {
  const [user, setUser] = useState({ mail: "", password: "", publisher: "" });
  const navigate = useNavigate();

  const handleUser = async () => {
    const myUser = await registerUser(user.mail, user.password, user.publisher);
    navigate(`/publisher/${myUser.id}`);
  };

  return (
    <div className="container mt-5 vh-100 ">
      <h2 className="text-center mb-4 fw-bold">Kayıt Ol</h2>
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
            className="form-control py-2 shadow-sm"
            placeholder="Şifrenizi girin"
          />
          <span className="input-group-text bg-light text-dark">
            <MdLock size={20} />
          </span>
        </div>
      </div>
      <div className="mb-4">
        <label className="form-label">Yayınevi:</label>
        <div className="input-group">
          <span className="input-group-text bg-light text-dark">
            <MdPerson size={20} />
          </span>
          <input
            value={user.publisher}
            onChange={(e) => setUser({ ...user, publisher: e.target.value })}
            type="text"
            className="form-control py-2 shadow-sm"
            placeholder="Yayınevi Adını Girin"
          />
        </div>
      </div>
      <button
        className="btn btn-primary w-100 rounded-pill py-2 shadow-lg"
        onClick={handleUser}
      >
        Kayıt Ol
      </button>
      <p className="text-center mt-3">
        Zaten hesabınız var mı?{" "}
        <NavLink
          to="/login"
          className="text-primary fw-bold text-decoration-none"
        >
          Giriş Yap
        </NavLink>
      </p>
    </div>
  );
};

export default Register;
