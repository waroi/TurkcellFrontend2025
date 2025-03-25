import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { useConfetti } from '../../utils/hooks/useConfetti.jsx';
import { useBalloons } from '../../utils/hooks/useBalloons.jsx';
import './GiftView.css';
import LoadingSpinner from '../../components/Gift/LoadingSpinner/LoadingSpinner.jsx';
import CelebrationEmoji from '../../components/Gift/CelebrationEmoji/CelebrationEmoji.jsx';
import ProgressBar from '../../components/Gift/ProgressBar/ProgressBar.jsx';
import { useGiftView } from '../../utils/hooks/useGiftView.jsx';

const GiftView = ({ test = false }) => {
    const { loading } = useGiftView()

    return (
        <div className="gift-view-container">
            <div id="confetti-container"></div>
            <div id="balloons-container"></div>

            {loading ? (
                <LoadingSpinner />
            ) : (
                <div className="celebration-card">
                    <CelebrationEmoji />
                    <h1 className="title">TEBRİKLER!</h1>

                    <ProgressBar />

                    <p className="message">
                        {test ? "Değerlendirme testini tamamlandı" : "Başvurunuz başarıyla alındı ve değerlendirme sürecine alındı."}
                        <span className="highlight"> Katıldığınız için teşekkür ederiz!</span>
                    </p>
                    <p className="sub-message">
                        {test ? "Test tamamlandı süreç boyunca mail adresinizi kontrol etmeyi unutmayınız" : " Başvurunuz sistemimize kaydedildi. İnceleme sonrası sizinle iletişime geçeceğiz."}
                    </p>

                    <div className="celebration-buttons">
                        <Link to="/" className="btn btn-primary">
                            Ana Sayfaya Dön
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default GiftView