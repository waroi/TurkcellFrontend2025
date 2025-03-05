import React from "react";

const LoginScreen = () => {
  return (
    <div>
      <div className="form-action sign-up">
        <h1>Hesap Oluştur</h1>
        <div className="social-icons">
          <a href="#" className="social-icon">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-google"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <form action="">
          <input type="text" placeholder="Ad Soyad" />
          <input type="email" placeholder="E-posta" />
          <select name="yayinevi" id="yayinevi">
            <option value="yayinevi">Yayınevi</option>
            <option value="yayinevi">Yayınevi</option>
            <option value="yayinevi">Yayınevi</option>
            <option value="yayinevi">Yayınevi</option>
          </select>
          <input type="password" placeholder="Şifre" />
          <input type="password" placeholder="Şifre Tekrar" />
          <button type="submit">Kayıt Ol</button>
        </form>
        <p>
          Zaten bir hesabın var mı? <a href="#">Giriş Yap </a>
        </p>
      </div>
      <div className="form-action sign-in">
        <h1>Giriş yap</h1>
        <div className="social-icons">
          <a href="#" className="social-icon">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-google"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <form action="">
          <input type="text" placeholder="Ad Soyad" />
          <input type="email" placeholder="E-posta" />
          <input type="password" placeholder="Şifre" />
          <input type="password" placeholder="Şifre Tekrar" />
          <button type="submit">Kayıt Ol</button>
        </form>
        <p>
          Hesabınız yok mu? <a href="#">Hesap Oluştur</a>
        </p>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Tekrardan Hoşgeldin</h1>
            <p>Yandaki bilgileri doldurarak kitap dünyasının içine adım at.</p>
            <button className="hidden" id="login">
              Giriş yap
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Aramıza Hoşgeldin</h1>
            <p>Yandaki bilgileri doldurarak kitap dünyasının içine adım at.</p>
            <button className="hidden" id="login">
              Kayıl Ol
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
