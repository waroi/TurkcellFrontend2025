"use client"

import { useRouter } from "next/navigation";
import { useAuthRedirect } from "../utils/hooks/useAuthRedirect";
import styles from "../styles/auth.module.css";
import LoginRedirectMessage from "../components/RedirectMessage/LoginRedirectMessage";
import LoginForm from "../components/LoginForm/LoginForm";
import BackButton from "../components/BackButton/BackButton";

const Login = () => {
  const router = useRouter();
  const { status } = useAuthRedirect("/blog", 1)

  const handleSuccess = () => {
    router.push("/blog")
  }

  return (
    <>
      <BackButton />
      <div className={styles.container}>
        <div className={styles.formWrapper}>
          {status === "authenticated" ? (
            <LoginRedirectMessage />
          ) : (
            <LoginForm onSuccess={handleSuccess} />
          )}
        </div>
      </div>
    </>
  );
}

export default Login