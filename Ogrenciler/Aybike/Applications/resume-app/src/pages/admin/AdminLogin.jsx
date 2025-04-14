import { useAdminLogin } from "../../utils/hooks/useAdminLogin";
import styles from './AdminLogin.module.css';

const AdminLogin = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    error,
    handleLogin
  } = useAdminLogin()

  return (
    <div className={`${styles.container} mt-5`}>
      <h2>Admin Girişi</h2>
      {error && <p className={styles.textDanger}>{error}</p>}
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className={styles.formControl}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Şifre</label>
          <input
            type="password"
            className={styles.formControl}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.btnPrimary}>
          Giriş Yap
        </button>
      </form>
    </div>
  )
}

export default AdminLogin