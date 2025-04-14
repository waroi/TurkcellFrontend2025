import styles from './Hero.module.css';
import { Link } from 'react-router';

const Hero = () => {
    return (
        <section className={styles.heroSection}>
            <div className={styles.heroContainer}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Değerlendirme Platformuna Hoş Geldiniz</h1>
                    <p className={styles.heroDescription}>
                        Kariyer yolculuğunuzda bir adım öne çıkın. CV'nizi yükleyin, başvurularınızı takip edin ve
                        profesyonel değerlendirmelerle gelişiminizi hızlandırın.
                    </p>
                    <div className={styles.heroButtons}>
                        <Link to={'/application'} className={`${styles.btn} ${styles.btnPrimary}`}>
                            CV Ekle
                        </Link>
                    </div>
                </div>
                <div className={styles.heroStats}>
                    <div className={styles.statCard}>
                        <span className={styles.statNumber}>500+</span>
                        <span className={styles.statLabel}>Başarılı Başvuru</span>
                    </div>
                    <div className={styles.statCard}>
                        <span className={styles.statNumber}>50+</span>
                        <span className={styles.statLabel}>Partner Şirket</span>
                    </div>
                    <div className={styles.statCard}>
                        <span className={styles.statNumber}>4.8/5</span>
                        <span className={styles.statLabel}>Memnuniyet Oranı</span>
                    </div>
                </div>
            </div>

            <div className={styles.featuredEvaluations}>
                <h2>Öne Çıkan Değerlendirmeler</h2>
                <div className={styles.evaluationCards}>
                    {[
                        { title: "Müşteri Memnuniyeti", company: "ABC Şirketi", rating: "★★★★★ 5/5" },
                        { title: "Kullanıcı Deneyimi", company: "123 Holding", rating: "★★★★☆ 4.5/5" },
                        { title: "Sosyal Medya Etkisi", company: "Global Markets", rating: "★★★★★ 4.7/5" }
                    ].map((item, index) => (
                        <div key={index} className={styles.evaluationCard}>
                            <h3>{item.title}</h3>
                            <p>{item.company}</p>
                            <div className={styles.rating}>{item.rating}</div>
                            <span className={`${styles.status} ${styles.statusSuccess}`}>Kabul Edildi</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Hero