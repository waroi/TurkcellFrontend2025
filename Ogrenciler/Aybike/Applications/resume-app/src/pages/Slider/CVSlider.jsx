import { useCVSlider } from '../../utils/hooks/useCVSlider';
import './CVSlider.css';

const CVSlider = () => {
    const { renderStars, getStatusClass, firstRowItems, secondRowItems } = useCVSlider()
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