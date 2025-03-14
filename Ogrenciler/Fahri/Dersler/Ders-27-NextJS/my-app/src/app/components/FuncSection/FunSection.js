import { useState } from 'react';
import './FunSection.css'

const FunSection = () => {
    const [activeTab, setActiveTab] = useState('memes')
    const [quizScore, setQuizScore] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [hasAnswered, setHasAnswered] = useState(false)
    const [feedbackMessage, setFeedbackMessage] = useState('')

    const memes = [
        { id: 1, title: 'Callback Hell', imageUrl: './callback-hell.jpg', description: 'JavaScript callback cehennemi yaşayanlar bilir...' },
        { id: 2, title: 'CSS Pozisyonlama', imageUrl: '/css-positioning.webp', description: 'Position: absolute; top: -9999px;' },
        { id: 3, title: 'React Lifecycle', imageUrl: '/lifecycle.png', description: 'useEffect içinde sonsuz döngüye girdiğiniz o an...' }
    ]

    const quizQuestions = [
        {
            question: 'JavaScript\'te "==" ve "===" arasındaki fark nedir?',
            options: [
                'Hiçbir fark yoktur',
                '=== daha hızlı çalışır',
                '== değer eşitliğini kontrol eder, === hem değer hem tip eşitliğini kontrol eder',
                '=== sadece değer eşitliğini kontrol eder'
            ],
            correctAnswer: 2
        }
    ]


    const handleAnswerSubmit = (selectedIndex) => {
        setSelectedAnswer(selectedIndex)
        setHasAnswered(true)

        if (selectedIndex === quizQuestions[0].correctAnswer) {
            setQuizScore(quizScore + 1)
            setFeedbackMessage('Doğru cevap! 🎉')
        } else {
            setFeedbackMessage('Yanlış cevap. Tekrar deneyin!')
        }
    }

    const resetQuiz = () => {
        setSelectedAnswer(null)
        setHasAnswered(false)
        setFeedbackMessage('')
    }

    return (
        <section className="fun-section">
            <h2 className="section-title">Oyun Köşesi</h2>

            <div className="tab-container">
                <button
                    className={`tab-button ${activeTab === 'memes' ? 'active' : ''}`}
                    onClick={() => setActiveTab('memes')}
                >
                    Yazılımcı Meme'leri
                </button>
                <button
                    className={`tab-button ${activeTab === 'quiz' ? 'active' : ''}`}
                    onClick={() => setActiveTab('quiz')}
                >
                    Teknoloji Quizi
                </button>
            </div>

            <div className="tab-content">
                {activeTab === 'memes' && (
                    <div className="memes-container">
                        <div className="meme-grid">
                            {memes.map(meme => (
                                <div key={meme.id} className="meme-card">
                                    <h4>{meme.title}</h4>
                                    <div className={`meme-image-placeholder`}>
                                        <img src={meme.imageUrl} className='object-fit-cover img-fluid w-100 object-fit-cover h-100' />
                                    </div>
                                    <p>{meme.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'quiz' && (
                    <div className="quiz-container">
                        <h3>Web Geliştirici Bilgi Yarışması</h3>
                        <div className="quiz-question">
                            <p>{quizQuestions[0].question}</p>
                            <div className="quiz-options">
                                {quizQuestions[0].options.map((option, index) => (
                                    <button
                                        key={index}
                                        className={`quiz-option ${selectedAnswer === index ? 'selected' : ''} ${hasAnswered && index === quizQuestions[0].correctAnswer ? 'correct' : ''} ${hasAnswered && selectedAnswer === index && index !== quizQuestions[0].correctAnswer ? 'incorrect' : ''}`}
                                        onClick={() => !hasAnswered && handleAnswerSubmit(index)}
                                        disabled={hasAnswered}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                            {feedbackMessage && (
                                <div className="quiz-feedback">
                                    <p>{feedbackMessage}</p>
                                    <button className="reset-quiz-button" onClick={resetQuiz}>Tekrar Dene</button>
                                </div>
                            )}
                            <div className="quiz-score">
                                Puanınız: {quizScore}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default FunSection