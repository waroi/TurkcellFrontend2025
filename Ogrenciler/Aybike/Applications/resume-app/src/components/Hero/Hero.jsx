import React from 'react';
import './Hero.css';
import { Link } from 'react-router';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">Değerlendirme Platformuna Hoş Geldiniz</h1>
                    <p className="hero-description">
                        Kariyer yolculuğunuzda bir adım öne çıkın. CV'nizi yükleyin, başvurularınızı takip edin ve
                        profesyonel değerlendirmelerle gelişiminizi hızlandırın.
                    </p>
                    <div className="hero-buttons">
                        <Link to={'/application'} className="btn btn-primary">CV Ekle</Link>
                    </div>
                </div>
                <div className="hero-stats">
                    <div className="stat-card">
                        <span className="stat-number">500+</span>
                        <span className="stat-label">Başarılı Başvuru</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-number">50+</span>
                        <span className="stat-label">Partner Şirket</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-number">4.8/5</span>
                        <span className="stat-label">Memnuniyet Oranı</span>
                    </div>
                </div>
            </div>

            <div className="featured-evaluations">
                <h2>Öne Çıkan Değerlendirmeler</h2>
                <div className="evaluation-cards overflow-hidden">
                    <div className="evaluation-card">
                        <h3>Müşteri Memnuniyeti</h3>
                        <p>ABC Şirketi</p>
                        <div className="rating">★★★★★ 5/5</div>
                        <span className="status success">Kabul Edildi</span>
                    </div>
                    <div className="evaluation-card">
                        <h3>Kullanıcı Deneyimi</h3>
                        <p>123 Holding</p>
                        <div className="rating">★★★★☆ 4.5/5</div>
                        <span className="status success">Kabul Edildi</span>
                    </div>
                    <div className="evaluation-card">
                        <h3>Sosyal Medya Etkisi</h3>
                        <p>Global Markets</p>
                        <div className="rating">★★★★★ 4.7/5</div>
                        <span className="status success">Kabul Edildi</span>
                    </div>
                    <div className="evaluation-card">
                        <h3>Sosyal Medya Etkisi</h3>
                        <p>Global Markets</p>
                        <div className="rating">★★★★★ 4.7/5</div>
                        <span className="status success">Kabul Edildi</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero