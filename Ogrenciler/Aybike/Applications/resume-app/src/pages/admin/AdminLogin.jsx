import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useUser } from "../../context/UserContext";
import AuthService from "../../services/AuthService";
import './AdminLogin.css'

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate()
  const { user } = useUser();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const loginResponse = await AuthService.signIn(email, password)
      console.log(loginResponse)
      if (loginResponse.success) {
        alert("Giriş başarılı!");
        navigate('/')
      }
    } catch (err) {
      setError("Giriş başarısız! Lütfen bilgilerinizi kontrol edin.");
    }
  };

  useEffect(() => {
    user ? navigate('/admin/applications') : ""
  }, [user])


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
