import React from 'react';
import './Result.css'
import useTestResult from '../../../utils/hooks/useTestResult';
import { useEffect } from 'react';

const Result = ({ questions, answers }) => {
    const { userMail, score, isResultSaved, error, retryResultSave } = useTestResult(questions, answers)


    return (
        <div className="test-result-container">
            <div className="result-card">
                <div className="result-header">
                    <div className={`result-badge ${score >= 60 ? 'success' : 'failure'}`}>
                        {score >= 60 ? (
                            <i className="bi bi-check-lg"></i>
                        ) : (
                            <i className="bi bi-x-lg"></i>
                        )}
                    </div>
                    <h2 className="result-title">Test Sonucu</h2>
                </div>

                <div className="result-content">
                    {userMail && (
                        <div className="result-info">
                            <span className="info-label">E-posta:</span>
                            <span className="info-value">{userMail}</span>
                        </div>
                    )}

                    <div className="result-info score-info">
                        <span className="info-label">Puanınız:</span>
                        <span className={`info-value score-value ${score >= 60 ? 'success-score' : 'failure-score'}`}>
                            {score}%
                        </span>
                    </div>

                    {score >= 60 ? (
                        <p className="success-message">
                            <i className="bi bi-trophy-fill"></i> Tebrikler! Testi başarıyla tamamladınız.
                        </p>
                    ) : (
                        <p className="failure-message">
                            <i className="bi bi-exclamation-triangle-fill"></i> Üzgünüz, testi geçmek için en az 60% puan almanız gerekmektedir.
                        </p>
                    )}
                </div>

                <div className="result-footer">
                    {isResultSaved ? (
                        <p className="save-success">
                            <i className="bi bi-cloud-check-fill"></i> Sonucunuz başarıyla kaydedildi.
                        </p>
                    ) : error ? (
                        <div className="save-error">
                            <p><i className="bi bi-exclamation-circle-fill"></i> {error}</p>
                            <button className="retry-button" onClick={retryResultSave}>
                                <i className="bi bi-arrow-repeat"></i> Tekrar Kaydetmeyi Dene
                            </button>
                        </div>
                    ) : (
                        <p className="saving-message">
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            Sonucunuz kaydediliyor...
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Result