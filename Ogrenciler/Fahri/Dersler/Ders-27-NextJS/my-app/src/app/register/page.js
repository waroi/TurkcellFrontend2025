'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AuthService } from "../service/AuthService";
import { generateUserName } from "../utils/getUsername";
import { signIn, useSession } from "next-auth/react";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter()
    const { session, status } = useSession()
    const [count, setCount] = useState(3)

    if (status === "authenticated") {
        setTimeout(() => {

            count === 0 ? router.push('/blog') : setCount(count - 1)
        }, 1000);
        return <p>Giriş yaptığınız için {count} sonra anasayfaya yönlendirileceksiniz...</p>
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        try {
            const data = await AuthService.addUser({ email, password, username: generateUserName(email) })

            const result = await signIn("credentials", {
                redirect: false,
                email,
                password,
            });

            if (result?.error) {
                console.error("Giriş başarısız:", result.error);
            } else {
                router.push('/blog')
            }
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div>
            <h1>Kayıt Ol</h1>
            <form onSubmit={handleRegister}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Şifre"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Kayıt Ol</button>
            </form>
        </div>
    );
}
