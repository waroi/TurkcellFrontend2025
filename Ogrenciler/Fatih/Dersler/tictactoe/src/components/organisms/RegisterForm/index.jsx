import React, { useState } from "react";
import { useNavigate } from "react-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../services/firebase";
import InputGroup from "../../molecules/InputGroup";
import Button from "../../atoms/Text";
import Text from "../../atoms/Text";

function RegisterForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!email || !password) {
      setError("Lütfen email ve şifrenizi girin.");
      return;
    }
    setLoading(true);
    setError(null);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/login");
    } catch (err) {
      console.log(err);
      setError("Kayıt başarısız. Lütfen bilgilerinizi kontrol edin.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card border-0 shadow-lg rounded-4 bg-white bg-opacity-75 p-4">
      <div className="text-center mb-4">
        <Text as="h2" color="primary">
          Kayıt Ol
        </Text>
        <Text color="muted">Yeni hesap oluştur</Text>
      </div>

      <InputGroup
        id="email"
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="example@email.com"
      />

      <InputGroup
        id="password"
        label="Şifre"
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

      <Button
        onClick={handleRegister}
        disabled={loading}
        className="w-100 mb-3"
      >
        {loading ? (
          <>
            <span className="spinner-border spinner-border-sm me-2"></span>
            Yükleniyor...
          </>
        ) : (
          "Kayıt Ol"
        )}
      </Button>

      <Text className="text-center">
        Zaten bir hesabınız var mı?{" "}
        <span
          className="text-primary fw-semibold cursor-pointer"
          role="button"
          onClick={() => navigate("/login")}
        >
          Giriş Yap
        </span>
      </Text>
    </div>
  );
}

export default RegisterForm;
