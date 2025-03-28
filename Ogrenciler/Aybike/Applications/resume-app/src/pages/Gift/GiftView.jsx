import { Link } from 'react-router';
import styles from './GiftView.module.css';
import LoadingSpinner from '../../components/Gift/LoadingSpinner/LoadingSpinner';
import CelebrationEmoji from '../../components/Gift/CelebrationEmoji/CelebrationEmoji';
import ProgressBar from '../../components/Gift/ProgressBar/ProgressBar';
import { useGiftView } from '../../utils/hooks/useGiftView';

const GiftView = ({ test = false }) => {
    const { loading } = useGiftView();

    return (
        <div className={styles.giftViewContainer}>
            {/* <div id="confetti-container"></div>
            <div id="balloons-container"></div> */}

            {loading ? (
                <LoadingSpinner />
            ) : (
                <div className={styles.celebrationCard}>
                    <CelebrationEmoji />
                    <h1 className={styles.title}>TEBRİKLER!</h1>

                    <ProgressBar />

                    <p className={styles.message}>
                        {test ? "Değerlendirme testini tamamlandı" : "Başvurunuz başarıyla alındı ve değerlendirme sürecine alındı."}
                        <span className={styles.highlight}> Katıldığınız için teşekkür ederiz!</span>
                    </p>
                    <p className={styles.subMessage}>
                        {test ? "Test tamamlandı süreç boyunca mail adresinizi kontrol etmeyi unutmayınız" : " Başvurunuz sistemimize kaydedildi. İnceleme sonrası sizinle iletişime geçeceğiz."}
                    </p>

                    <div className={styles.celebrationButtons}>
                        <Link to="/" className={`${styles.btnPrimary} btn`}>
                            Ana Sayfaya Dön
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default GiftView