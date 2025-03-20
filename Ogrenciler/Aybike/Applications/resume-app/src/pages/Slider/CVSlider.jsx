import './CVSlider.css';

const CVSlider = () => {
    const randomData = [
        {
            id: 126,
            title: 'Müşteri Memnuniyeti',
            company: 'ABC Şirketi',
            rating: 4.8,
            status: 'Kabul Edildi'
        },
        {
            id: 1242,
            title: 'Ürün Değerlendirmesi',
            company: 'XYZ Teknoloji',
            rating: 4.3,
            status: 'Tamamlandı'
        },
        {
            id: 3432,
            title: 'Pazar Araştırması',
            company: '123 Holding',
            rating: 5.0,
            status: 'Kabul Edildi'
        },
        {
            id: 24354,
            title: 'Çalışan Memnuniyeti',
            company: 'Global Markets',
            rating: 3.7,
            status: 'Tamamlandı'
        },
        {
            id: 7725,
            title: 'Ürün Geliştirme',
            company: 'ABC Şirketi',
            rating: 3.6,
            status: 'Değerlendiriliyor'
        },
        {
            id: 236,
            title: 'Müşteri Hizmetleri',
            company: 'XYZ Teknoloji',
            rating: 4.1,
            status: 'Tamamlandı'
        },
        {
            id: 7236,
            title: 'Kullanıcı Deneyimi',
            company: '123 Holding',
            rating: 4.5,
            status: 'Kabul Edildi'
        },
        {
            id: 8235,
            title: 'Web Sitesi Analizi',
            company: 'ABC Şirketi',
            rating: 3.9,
            status: 'Değerlendiriliyor'
        },
        {
            id: 9214,
            title: 'Marka Bilinirliği',
            company: 'XYZ Teknoloji',
            rating: 4.2,
            status: 'Tamamlandı'
        },
        {
            id: 3242,
            title: 'Sosyal Medya Etkisi',
            company: 'Global Markets',
            rating: 4.7,
            status: 'Kabul Edildi'
        },
        {
            id: 234,
            title: 'Mobil Uygulama Testi',
            company: '123 Holding',
            rating: 3.8,
            status: 'Değerlendiriliyor'
        },
        {
            id: 523,
            title: 'E-ticaret Analizi',
            company: 'ABC Şirketi',
            rating: 4.4,
            status: 'Tamamlandı'
        }
    ]

    const renderStars = (rating) => {
        const stars = []
        const fullStars = Math.floor(rating)
        const hasHalfStar = rating % 1 >= 0.5

        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                stars.push(<span key={i} className="star filled">★</span>)
            } else if (i === fullStars && hasHalfStar) {
                stars.push(<span key={i} className="star half-filled">★</span>)
            } else {
                stars.push(<span key={i} className="star">☆</span>)
            }
        }
        return stars
    };

    const getStatusClass = (status) => {
        switch (status) {
            case 'Kabul Edildi':
                return 'success'
            case 'Değerlendiriliyor':
                return 'warning'
            case 'Tamamlandı':
                return 'info'
            default:
                return 'secondary'
        }
    };

    const firstRowItems = randomData.slice(0, 6)
    const secondRowItems = randomData.slice(6, 12)

    return (
        <div className="auto-scrolling-surveys">
            <h2 className="text-center mb-4">Canlı Sonuçlanan Değerlendirmeler</h2>

            <div className="scrolling-row right-to-left">
                <div className="scrolling-content">
                    {firstRowItems.map((survey) => (
                        <div key={survey.id} className="survey-card">
                            <div className="survey-header">
                                <h2 className="survey-title">{survey.title}</h2>
                                <span className="survey-id">Anket #{survey.id}</span>
                            </div>

                            <div className="survey-content">
                                <p className="company-name"><strong>Şirket:</strong> {survey.company}</p>

                                <div className="rating-container">
                                    <div className="stars-container">
                                        {renderStars(survey.rating)}
                                    </div>
                                    <span className="rating-value">{survey.rating}/5</span>
                                </div>

                                <div className="progress-bar-container">
                                    <div
                                        className="progress-bar"
                                        style={{ width: `${(survey.rating / 5) * 100}%` }}
                                    ></div>
                                </div>
                            </div>

                            <div className="survey-footer">
                                <span className={`status-badge ${getStatusClass(survey.status)}`}>
                                    {survey.status}
                                </span>
                            </div>
                        </div>
                    ))}

                    {firstRowItems.map((survey) => (
                        <div key={`copy-${survey.id}`} className="survey-card">
                            <div className="survey-header">
                                <h2 className="survey-title">{survey.title}</h2>
                                <span className="survey-id">Anket #{survey.id}</span>
                            </div>

                            <div className="survey-content">
                                <p className="company-name"><strong>Şirket:</strong> {survey.company}</p>

                                <div className="rating-container">
                                    <div className="stars-container">
                                        {renderStars(survey.rating)}
                                    </div>
                                    <span className="rating-value">{survey.rating}/5</span>
                                </div>

                                <div className="progress-bar-container">
                                    <div
                                        className="progress-bar"
                                        style={{ width: `${(survey.rating / 5) * 100}%` }}
                                    ></div>
                                </div>
                            </div>

                            <div className="survey-footer">
                                <span className={`status-badge ${getStatusClass(survey.status)}`}>
                                    {survey.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="scrolling-row left-to-right">
                <div className="scrolling-content">
                    {secondRowItems.map((survey) => (
                        <div key={survey.id} className="survey-card">
                            <div className="survey-header">
                                <h2 className="survey-title">{survey.title}</h2>
                                <span className="survey-id">Anket #{survey.id}</span>
                            </div>

                            <div className="survey-content">
                                <p className="company-name"><strong>Şirket:</strong> {survey.company}</p>

                                <div className="rating-container">
                                    <div className="stars-container">
                                        {renderStars(survey.rating)}
                                    </div>
                                    <span className="rating-value">{survey.rating}/5</span>
                                </div>

                                <div className="progress-bar-container">
                                    <div
                                        className="progress-bar"
                                        style={{ width: `${(survey.rating / 5) * 100}%` }}
                                    ></div>
                                </div>
                            </div>

                            <div className="survey-footer">
                                <span className={`status-badge ${getStatusClass(survey.status)}`}>
                                    {survey.status}
                                </span>
                            </div>
                        </div>
                    ))}

                    {secondRowItems.map((survey) => (
                        <div key={`copy-${survey.id}`} className="survey-card">
                            <div className="survey-header">
                                <h2 className="survey-title">{survey.title}</h2>
                                <span className="survey-id">Anket #{survey.id}</span>
                            </div>

                            <div className="survey-content">
                                <p className="company-name"><strong>Şirket:</strong> {survey.company}</p>

                                <div className="rating-container">
                                    <div className="stars-container">
                                        {renderStars(survey.rating)}
                                    </div>
                                    <span className="rating-value">{survey.rating}/5</span>
                                </div>

                                <div className="progress-bar-container">
                                    <div
                                        className="progress-bar"
                                        style={{ width: `${(survey.rating / 5) * 100}%` }}
                                    ></div>
                                </div>
                            </div>

                            <div className="survey-footer">
                                <span className={`status-badge ${getStatusClass(survey.status)}`}>
                                    {survey.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CVSlider