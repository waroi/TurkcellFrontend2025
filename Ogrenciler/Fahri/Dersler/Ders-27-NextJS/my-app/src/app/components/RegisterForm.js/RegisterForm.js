"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { AuthService } from "../../service/AuthService";
import { generateUserName } from "../../utils/getUsername";
import styles from "../../styles/auth.module.css";

const RegisterForm = ({ onSuccess }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleRegister = async (event) => {
        event.preventDefault()
        setError("")

        try {
            await AuthService.addUser({
                email,
                password,
                username: generateUserName(email),
            })

            const result = await signIn("credentials", {
                redirect: false,
                email,
                password,
            })

            if (result?.error) {
                setError("Giriş başarısızzzz: " + result.error);
            } else {
                onSuccess();
            }
        } catch (error) {
            setError("Kayıt işlemi sırasında bir hata oluştu kanki")
        }
    };

    return (
        <>
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
        </>
    );
};

export default RegisterForm