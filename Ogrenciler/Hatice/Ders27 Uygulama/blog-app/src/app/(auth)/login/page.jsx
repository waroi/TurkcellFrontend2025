"use client";
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../utils/firebaseConfig";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [error, setError] = useState(""); 
  const router = useRouter(); 

  const handleLogin = async (e) => {
    e.preventDefault(); 
    setError(""); 

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/"); 
    } catch (err) {
      setError("Giriş başarısız: " + err.message);
    }
  };

  return (
    <div className="auth">
      <h2>Giriş Yap</h2>
      <form onSubmit={handleLogin} className="input-div">
        <input
          name="email"
          type="text"
          placeholder="Email adresi"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          required
        />
        {error && <p className="text-warning" aria-live="polite">{error}</p>}
        <div>
          <button type="submit" className="button-div">Giriş Yap</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
