import { useRegisterForm } from '@/app/lib/hooks/useRegisterForm';
import styles from './RegisterForm.module.css';

export const RegisterForm = () => {
    const {
        email,
        password,
        confirmPassword,
        error,
        handleEmailChange,
        handlePasswordChange,
        handleConfirmPasswordChange,
        handleSubmit
    } = useRegisterForm()

    return (
        <div className="mt-5">
            <form onSubmit={handleSubmit} className={styles.form}>
                <h1 className={styles.title}>Kayıt Ol</h1>

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

                <div className={styles.formGroup}>
                    <label htmlFor="confirmPassword">Şifre Tekrar</label>
                    <input
                        id="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        required
                        className={styles.input}
                    />
                </div>

                <button type="submit" className={styles.button}>
                    Kayıt Ol
                </button>
            </form>
        </div>
    )
}