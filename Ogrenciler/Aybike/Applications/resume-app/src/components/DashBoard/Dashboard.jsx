import React, { useState } from 'react';
import './Dashboard.css';
import { TestService } from '../../services/TestService';
import { useNavigate } from 'react-router';

const Dashboard = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [email, setEmail] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()

        setIsLoading(true)
        const hasAccess = await TestService.checkAccess(email)

        if (hasAccess) navigate("/test")
        else alert("Erişim izniniz yok hemen Yöneticiden onay almaya gidin")

        setIsLoading(false)
    }

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-header">
                    <h1 className="login-title">Değerlendirme Testi</h1>
                    <p className="login-subtitle">Teste başlamak için lütfen e-posta adresinizi doğrulayın</p>
                    <p className="login-subtitle-info">Testi sadece 1 kere görüp çözebilirsiniz her soru için 30 saniyeniz bulunmaktadır başarılar...</p>
                </div>

                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">E-posta Adresi</label>
                        <input
                            type="email"
                            id="email"
                            className={`form-control`}
                            placeholder="ornek@mail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={isLoading}
                        />
                        {/* {error && <div className="invalid-feedback">{error}</div>} */}
                    </div>

                    <button
                        type="submit"
                        className="start-button"
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

                <div className="login-footer">
                    <p>Bu test BENCE 7 sorudan oluşmaktadır ve yaklaşık 30 saniyee sürecektir.</p>
                    <p className="privacy-note">E-posta adresiniz sadece test sonuçlarını kaydetmek için kullanılacaktır (şaka satacağız bilgileri)</p>
                </div>
            </div>
        </div>
    )
}

export default Dashboard