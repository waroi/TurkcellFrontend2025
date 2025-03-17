import styles from "../../../styles/auth.module.css";

const LoginRedirectMessage = () => {
    return (
        <p className={styles.redirectMessage}>
            Giriş başarılı! Yönlendiriliyorsunuz...
        </p>
    );
};

export default LoginRedirectMessage