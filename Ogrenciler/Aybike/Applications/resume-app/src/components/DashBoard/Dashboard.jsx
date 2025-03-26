import './Dashboard.css';
import useTestAccess from '../../utils/hooks/useTestAccess';

const Dashboard = () => {
    const { isLoading, email, setEmail, handleSubmit } = useTestAccess()

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
                    <p>Bu test 5 sorudan oluşmaktadır ve her soru 30 saniye sürecektir.</p>
                    <p className="privaccy-note">E-posta adresiniz sadece test sonuçlarını kaydetmek için kullanılacaktır (şaka bilgileri satacağız)</p>
                </div>
            </div>
        </div>
    )
}

export default Dashboard