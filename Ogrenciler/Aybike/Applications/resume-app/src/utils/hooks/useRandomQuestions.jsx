import { useState, useEffect } from 'react';
import { allQuestions } from './../constans/questions'
import { TestService } from '../../services/TestService';

export const useRandomQuestions = () => {
    const [selectedQuestions, setSelectedQuestions] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchQuestions = async () => {
            setIsLoading(true)
            try {
                const questionCounts = await TestService.getQuestionSettingsByEmail()
                const selected = []

                Object.entries(questionCounts.data.difficulty).forEach(([category, count]) => {
                    const categoryQuestions = allQuestions[category]
                    const shuffled = [...categoryQuestions].sort(() => Math.random() - 0.5)
                    selected.push(...shuffled.slice(0, count))
                })

                setSelectedQuestions(selected)
            } catch (err) {
                setError("Soru üretilirken bri hata olluştu")
            } finally {
                setIsLoading(false)
            }
        }

        fetchQuestions()
    }, [])

    return { selectedQuestions, isLoading, error }
}