"use client"

import { signIn } from "next-auth/react";
import Link from "next/link";
import styles from "../../styles/auth.module.css";
import { useState } from "react";

const LoginForm = ({ onSuccess }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleLogin = async (event) => {
        event.preventDefault()
        setError("")

        try {
            const result = await signIn("credentials", {
                redirect: false,
                email,
                password,
            })

            if (result?.error) {
                setError("Giriş başarısız: E-posta veya şifre hatalı")
            } else {
                onSuccess();
            }
        } catch (err) {
            setError("Giriş sırasında bir hata oluştu.")
        }
    }

    return (
        <>
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
        </>
    )
}

export default LoginForm