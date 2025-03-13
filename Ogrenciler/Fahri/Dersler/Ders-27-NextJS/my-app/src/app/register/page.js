"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AuthService } from "../service/AuthService";
import { generateUserName } from "../utils/getUsername";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import styles from "../styles/auth.module.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { session, status } = useSession();
  const [count, setCount] = useState(3);
  const [error, setError] = useState("");

  if (status === "authenticated") {
    setTimeout(() => {
      count === 0 ? router.push("/blog") : setCount(count - 1);
    }, 1000);
    return (
      <div className={styles.container}>
        <div className={styles.formWrapper}>
          <p className={styles.redirectMessage}>
            Giriş yaptığınız için {count} saniye sonra anasayfaya
            yönlendirileceksiniz...
          </p>
        </div>
      </div>
    );
  }

  const handleRegister = async (event) => {
    event.preventDefault();
    setError("");

    try {
      const data = await AuthService.addUser({
        email,
        password,
        username: generateUserName(email),
      });

      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        setError("Giriş başarısız: " + result.error);
      } else {
        router.push("/blog");
      }
    } catch (error) {
      setError("Kayıt işlemi sırasında bir hata oluştu.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h1 className={styles.title}>Kayıt Ol</h1>
        {error && <div className={styles.error}>{error}</div>}
        <form onSubmit={handleRegister} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">E-posta</label>
            <input
              type="email"
              id="email"
              placeholder="ornek@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Şifre</label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={styles.input}
            />
          </div>
          <button type="submit" className={styles.button}>
            Kayıt Ol
          </button>
        </form>
        <p className={styles.authLink}>
          Zaten hesabınız var mı? <Link href="/login">Giriş Yap</Link>
        </p>
      </div>
    </div>
  );
}
