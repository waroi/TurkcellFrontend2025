import { useState, useEffect } from 'react';
import Question from '../Question/Question';
import Result from '../Result/Result';
import ProgressBar from '../ProgressBar/ProgressBar';
import './TestContainer.css';

const TestContainer = ({ questions }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [answers, setAnswers] = useState([])
    const [showResult, setShowResult] = useState(false)
    const [timer, setTimer] = useState(30)

    useEffect(() => {
        if (timer > 0 && !showResult) {
            const interval = setInterval(() => {
                setTimer(timer - 1)
            }, 1000)
            return () => clearInterval(interval)
        } else if (timer === 0 && !showResult) {
            handleAnswer(null)
        }
    }, [timer, showResult])

    const handleAnswer = (answer) => {
        setAnswers([...answers, answer]);
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
            setTimer(30)
        } else {
            setShowResult(true)
        }
    }

    return (
        <div className="test-container">
            <div className="card quiz-card">
                {!showResult ? (
                    <>
                        <ProgressBar
                            current={currentQuestion + 1}
                            total={questions.length}
                            timer={timer}
                        />
                        <Question
                            question={questions[currentQuestion]}
                            onAnswer={handleAnswer}
                            currentNumber={currentQuestion + 1}
                            totalQuestions={questions.length}
                        />
                    </>
                ) : (
                    <Result answers={answers} questions={questions} />
                )}
            </div>
        </div>
    )
}

export default TestContainer