import { useState, useEffect } from 'react';
import { TestService } from '../../services/TestService';
import { useNavigate } from 'react-router';

const useTestResult = (questions, answers) => {
    const [userMail, setUserMail] = useState(TestService.getUser() || localStorage.getItem("userEmail"))
    const [score, setScore] = useState(0)
    const [isResultSaved, setIsResultSaved] = useState(false)
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const calculateScore = () => {
            const correctAnswers = answers.filter((answer, index) =>
                answer === questions[index].correctAnswer
            ).length
            return Math.round((correctAnswers / questions.length) * 100)
        }

        const calculatedScore = calculateScore()
        setScore(calculatedScore)

        const saveResult = async () => {
            try {
                await TestService.completedUser(userMail, calculatedScore)
                setIsResultSaved(true)
            } catch (err) {
                setError("Sonuç kaydedilemedi. Lütfen daha sonra tekrar deneee")
            }
        };

        if (userMail) {
            saveResult()
        }

        setTimeout(() => {
            navigate('/')
            localStorage.removeItem("userEmail")
        }, 10000);
    }, [questions, answers, userMail])

    const retryResultSave = async () => {
        if (!userMail) {
            setError("Kullanıcı e-posta adresi bulunamadı.")
            return
        }

        try {
            await TestService.completedUser(userMail, score)
            setIsResultSaved(true)
            setError(null)
        } catch (err) {
            console.error("Sonuç kaydedilirken hata oluştu:", err)
            setError("Sonuç kaydedilemedi. Lütfen daha sonra tekrar deneyin.")
        }
    }

    return {
        userMail,
        score,
        isResultSaved,
        error,
        retryResultSave
    }
}

export default useTestResult