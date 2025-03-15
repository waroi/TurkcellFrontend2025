import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/authContext";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser } = useAuth();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Lütfen tüm alanları doldurun!");
      return;
    }
    loginUser(email, password);
    setEmail("");
    setPassword("");
    router.push("/");
  };
  return (
    <div
      className="card p-4 shadow-lg"
      style={{ maxWidth: "400px", width: "100%" }}
    >
      <h3 className="text-center mb-3 color-grey">Giriş Yap</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label color-grey">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label color-grey">Şifre</label>
          <div className="input-group">
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn-orange w-100">
          Giriş Yap
        </button>
      </form>
      <p className="text-center mt-3 color-grey">
        Hesabın yok mu?{" "}
        <Link href="/signup" className="color-orange">
          Kayıt Ol
        </Link>
      </p>
    </div>
  );
}
