"use client"

import { useRouter } from "next/navigation";
import { useAuthRedirect } from "../utils/useLikeHooks/useAuthRedirect";
import styles from "../styles/auth.module.css";
import RedirectMessage from "../components/RedirectMessage/RedirectMessage";
import RegisterForm from "../components/RegisterForm.js/RegisterForm";
import BackButton from "../components/BackButton/BackButton";

export default function Register() {
  const router = useRouter()
  const { status, count } = useAuthRedirect("/blog")

  const handleSuccess = () => {
    router.push("/blog")
  }

  return (
    <>
      <BackButton />
      <div className={styles.container}>
        <div className={styles.formWrapper}>
          {status === "authenticated" ? (
            <RedirectMessage count={count} />
          ) : (
            <RegisterForm onSuccess={handleSuccess} />
          )}
        </div>
      </div>
    </>
  )
}