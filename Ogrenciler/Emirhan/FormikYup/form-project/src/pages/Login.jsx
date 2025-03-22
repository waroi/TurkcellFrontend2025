import React, { useState } from "react";
import { useNavigate } from "react-router";
import {SignIn} from "../api/api";
function Login() {
  const [user, setUser] = useState({ mail: "", password: "" });
  const navigate = useNavigate();
  const handleLogin = async () => {
    const alreadyUser = await SignIn(user.mail, user.password);
    navigate(`/`);
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center form-container">
      <div className="h-auto login-form-width shadow p-4 mb-5 bg-white rounded">
        <div className="w-100 py-3 d-flex flex-column justify-content-center align-items-center">
          <i class="fa-solid fa-user-tie fs-1 mb-3"></i>
          <h4 className="fs-4">Zencode'a hoşgeldin</h4>
          <h6 className="fs-6 text-secondary fw-normal">Hesabına giriş yap</h6>
        </div>
        <div className="mb-3">
          <label for="InputEmail" className="form-label fs-6">
            Email
          </label>
          <input
            type="email"
            className="custom-input"
            id="InputEmail"
            placeholder="E-mail giriniz..."
            aria-describedby="emailHelp"
            onChange={(e) => setUser({ ...user, mail: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label for="InputPassword" className="form-label">
            Parola
          </label>
          <input
            type="password"
            className="custom-input"
            id="InputPassword1"
            placeholder="Şifre giriniz..."
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>

        <button type="button" className="primary-button" onClick={handleLogin}>
          Giriş Yap
        </button>
        <div className="form-helper-text mt-4 w-100 d-flex justify-content-center gap-2">
          <span>Hesabınız yok mu?</span>
          <a href="/register"> Hesap Oluşturun</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
