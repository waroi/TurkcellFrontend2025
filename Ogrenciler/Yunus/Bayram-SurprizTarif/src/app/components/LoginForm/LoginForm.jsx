import { useLoginForm } from '@/app/lib/hooks/useLoginForm';
import styles from './LoginForm.module.css';

export const LoginForm = () => {
    const {
        email,
        password,
        error,
        handleEmailChange,
        handlePasswordChange,
        handleSubmit
    } = useLoginForm()

    return (
        <div className="mt-5">
            <form onSubmit={handleSubmit} className={styles.form}>
                <h1 className={styles.title}>Giriş Yap</h1>

                {error && <div className={styles.error}>{error}</div>}

                <div className={styles.formGroup}>
                    <label htmlFor="email">E-posta</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                        className={styles.input}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="password">Şifre</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                        className={styles.input}
                    />
                </div>

                <button type="submit" className={styles.button}>
                    Giriş Yap
                </button>
            </form>
        </div>
    )
}