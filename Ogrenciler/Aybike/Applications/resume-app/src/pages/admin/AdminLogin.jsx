import { useAdminLogin } from "../../utils/hooks/useAdminLogin";
import './AdminLogin.css'

const AdminLogin = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    error,
    handleLogin
  } = useAdminLogin();


  return (
    <div className="container mt-5 admin-container">
      <h2>Admin Girişi</h2>
      {error && <p className="text-danger">{error}</p>}
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Şifre</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Giriş Yap
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
