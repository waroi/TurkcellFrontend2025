import React from 'react';
import useLoginPage from '../store/useLoginPage';
import '../styles/variables.css';
import styles from './LoginPage.module.css';

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
    <div className={styles.loginContainer}>
      <div className="container">
        <div className="row align-items-center justify-content-center" style={{minHeight: "100vh"}}>
          <div className="col-md-6">
            <div className={styles.loginCard}>
              <div className="card-body p-4">
                <h3 className={`${styles.formTitle} text-center mb-4`}>
                  {isRegistering ? "Kayıt Ol" : "Giriş Yap"}
                </h3>
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="email" className="form-label">
                      Email adresi
                    </label>
                    <input
                      type="email"
                      className={`${styles.formInput} form-control`}
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="password" className="form-label">
                      Şifre
                    </label>
                    <input
                      type="password"
                      className={`${styles.formInput} form-control`}
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <button type="submit" className={styles.submitButton}>
                    {isRegistering ? "Kayıt Ol" : "Giriş Yap"}
                  </button>
                </form>
                <div className="text-center mt-4">
                  <button
                    className={`btn ${styles.switchButton}`}
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
            <div className={styles.imageContainer}>
              <img 
                src="https://isbasvuru.konya.bel.tr/assets/images/isbasvuru_link.jpg" 
                alt="basvuru" 
                className={styles.loginImage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
