import React from 'react';
import useLoginPage from '../store/useLoginPage';

const LoginPage = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    isRegistering,
    setIsRegistering,
    error,
    handleSubmit
  } = useLoginPage();

  return (
    <div className="container">
      <div className="row align-items-center justify-content-center w-100" style={{height :"100vh"}}>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">
                {isRegistering ? "Kayıt Ol" : "Giriş Yap"}
              </h3>
              {error && <div className="alert alert-danger">{error}</div>}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email adresi
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Şifre
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  {isRegistering ? "Kayıt Ol" : "Giriş Yap"}
                </button>
              </form>
              <div className="text-center mt-3">
                <button
                  className="btn btn-link"
                  onClick={() => setIsRegistering(!isRegistering)}
                >
                  {isRegistering
                    ? "Zaten hesabınız var mı? Giriş yapın"
                    : "Hesabınız yok mu? Kayıt olun"}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <img src="https://isbasvuru.konya.bel.tr/assets/images/isbasvuru_link.jpg" alt="basvuru" className='img-fluid object-fit-cover' />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
