"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import styles from "../styles/auth.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const [count, setCount] = useState(1);
  const { status } = useSession();

  if (status === "authenticated") {
    setTimeout(() => {
      count === 0 ? router.push("/blog") : setCount(count - 1);
    }, 1000);
    return (
      <div className={styles.container}>
        <div className={styles.formWrapper}>
          <p className={styles.redirectMessage}>
            Giriş başarılı! Yönlendiriliyorsunuz...
          </p>
        </div>
      </div>
    );
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    setError("");

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        setError("Giriş başarısız: E-posta veya şifre hatalı");
      } else {
        router.push("/blog");
      }
    } catch (err) {
      setError("Giriş sırasında bir hata oluştu.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h1 className={styles.title}>Giriş Yap</h1>
        {error && <div className={styles.error}>{error}</div>}
        <form onSubmit={handleLogin} className={styles.form}>
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
            Giriş Yap
          </button>
        </form>
        <p className={styles.authLink}>
          Hesabınız yok mu? <Link href="/register">Kayıt Ol</Link>
        </p>
      </div>
    </div>
  );
}
