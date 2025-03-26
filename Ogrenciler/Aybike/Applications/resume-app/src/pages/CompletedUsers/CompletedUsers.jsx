import './CompletedUsers.css';
import useCompletedTests from '../../utils/hooks/useCompletedUsers';

const CompletedUsers = () => {
    const { completions, loading, error } = useCompletedTests()

    if (loading) return <div className="loading">Yükleniyor...</div>
    if (error) return <div className="error">Datayı çekerken bir hata oluştuu {error}</div>

    return (
        <div className="completion-list-container">
            <h2 className="completion-list-title">Testi Tamamlayanlar</h2>
            <div className="completion-list">
                {completions.map((completion) => (
                    <div key={completion.id} className="completion-item">
                        <div className="completion-info">
                            <div className="completion-email">{completion.email}</div>
                            <div className="completion-date">{completion.date}</div>
                        </div>
                        <div className={`completion-score ${completion.score > 60 ? "score-success" : "score-invalid-value"}`}>
                            <span className="score-label">Puan:</span>
                            <span className="score-value">{completion.score}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CompletedUsers