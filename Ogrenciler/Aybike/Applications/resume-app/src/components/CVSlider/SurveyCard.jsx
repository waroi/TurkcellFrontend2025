const SurveyCard = ({ survey, renderStars, getStatusClass }) => {
    return (
        <div className="survey-card">
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
    )
}

export default SurveyCard