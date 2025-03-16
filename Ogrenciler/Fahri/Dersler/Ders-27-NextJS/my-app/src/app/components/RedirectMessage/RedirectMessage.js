import styles from "../../styles/auth.module.css"

const RedirectMessage = ({ count }) => {
    return (
        <p className={styles.redirectMessage}>
            Giriş yaptığınız için {count} saniye sonra anasayfaya
            yönlendirileceksiniz...
        </p>
    );
};

export default RedirectMessage