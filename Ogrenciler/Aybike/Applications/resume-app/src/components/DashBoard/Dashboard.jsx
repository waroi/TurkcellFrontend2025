import styles from './Dashboard.module.css';
import useTestAccess from '../../utils/hooks/useTestAccess';

const Dashboard = () => {
    const { isLoading, email, setEmail, handleSubmit } = useTestAccess()

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginCard}>
                <div className={styles.loginHeader}>
                    <h1 className={styles.loginTitle}>Değerlendirme Testi</h1>
                    <p className={styles.loginSubtitle}>Teste başlamak için lütfen e-posta adresinizi doğrulayın</p>
                    <p className={styles.loginSubtitleInfo}>Testi sadece 1 kere görüp çözebilirsiniz her soru için 30 saniyeniz bulunmaktadır başarılar...</p>
                </div>

                <form className={styles.loginForm} onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">E-posta Adresi</label>
                        <input
                            type="email"
                            id="email"
                            className={styles.formControl}
                            placeholder="ornek@mail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={isLoading}
                        />
                    </div>

                    <button
                        type="submit"
                        className={styles.startButton}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <>
                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                Yükleniyor...
                            </>
                        ) : 'Teste Başla'}
                    </button>
                </form>

                <div className={styles.loginFooter}>
                    <p>Bu test 5 sorudan oluşmaktadır ve her soru 30 saniye sürecektir.</p>
                    <p className={styles.privacyNote}>E-posta adresiniz sadece test sonuçlarını kaydetmek için kullanılacaktır (şaka bilgileri satacağız)</p>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
