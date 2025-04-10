import React, { useState } from "react";
import { useNavigate } from "react-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../services/firebase";
import InputGroup from "../../molecules/InputGroup";
import Button from "../../atoms/Button";
import Text from "../../atoms/Text";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Lütfen email ve şifrenizi girin.");
      return;
    }
    setLoading(true);
    setError(null);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/room-select");
    } catch (err) {
      console.log(err);
      setError("Giriş başarısız. Lütfen bilgilerinizi kontrol edin.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card border-0 shadow-lg rounded-4 bg-white bg-opacity-75 p-4">
      <div className="text-center mb-4">
        <Text as="h2" color="primary">
          TicTacToe
        </Text>
      </div>

      <InputGroup
        id="email"
        label="Email"
        icon="bi bi-envelope"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="example@email.com"
      />

      <InputGroup
        id="password"
        label="Şifre"
        icon="bi bi-lock"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="••••••••"
      />

      {error && (
        <Text color="danger" className="mb-3">
          <i className="bi bi-exclamation-triangle me-2"></i>
          {error}
        </Text>
      )}

      <Button onClick={handleLogin} disabled={loading} className="w-100 mb-3">
        {loading ? (
          <>
            <span className="spinner-border spinner-border-sm me-2"></span>
            Yükleniyor...
          </>
        ) : (
          "Giriş Yap"
        )}
      </Button>

      <Text className="text-center">
        Hesabınız yok mu?{" "}
        <span
          className="text-primary fw-semibold cursor-pointer"
          role="button"
          onClick={() => navigate("/register")}
        >
          Kayıt Ol
        </span>
      </Text>
    </div>
  );
};

export default LoginForm;
