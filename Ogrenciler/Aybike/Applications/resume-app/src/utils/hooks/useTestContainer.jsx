import { useState, useEffect } from 'react';

const useTestContainer = (questions) => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [answers, setAnswers] = useState([])
    const [showResult, setShowResult] = useState(false)
    const [timer, setTimer] = useState(30)

    useEffect(() => {
        if (timer > 0 && !showResult) {
            const interval = setInterval(() => {
                setTimer(prevTimer => prevTimer - 1)
            }, 1000)
            return () => clearInterval(interval)
        } else if (timer === 0 && !showResult) {
            handleAnswer(null)
        }
    }, [timer, showResult])

    const handleAnswer = (answer) => {
        setAnswers(prevAnswers => [...prevAnswers, answer])

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(prevQuestion => prevQuestion + 1)
            setTimer(30)
        } else {
            setShowResult(true)
        }
    }

    return {
        currentQuestion,
        answers,
        showResult,
        timer,
        handleAnswer
    }
}

export default useTestContainer