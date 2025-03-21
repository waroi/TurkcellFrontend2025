import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Kayıt başarıyla tamamlandı! 🎉 Giriş yapabilirsiniz.");
      navigate("/login");
    } catch (error) {
      toast.error(`Kayıt başarısız: ${error.message}`);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Kayıt Ol</h2>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="E-posta"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control mb-3"
        />
        <input
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control mb-3"
        />
        <button type="submit" className="btn btn-success w-100">
          Kayıt Ol
        </button>
      </form>
      <p className="mt-3">
        Zaten bir hesabın var mı? <a href="/login">Giriş yap</a>
      </p>
    </div>
  );
};

export default Register;
