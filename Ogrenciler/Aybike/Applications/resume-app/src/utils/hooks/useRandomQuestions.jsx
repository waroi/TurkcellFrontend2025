import { useState } from 'react';
import { allQuestions } from '../constans/questions';

export const useRandomQuestions = () => {
    const [selectedQuestions, setSelectedQuestions] = useState([])

    const selectRandomQuestions = () => {
        const questionsCopy = [...allQuestions]
        const selected = []

        const count = Math.min(5, questionsCopy.length)

        for (let i = 0; i < count; i++) {
            const randomIndex = Math.floor(Math.random() * questionsCopy.length)

            selected.push(questionsCopy[randomIndex])

            questionsCopy.splice(randomIndex, 1)
        }

        setSelectedQuestions(selected)
    }

    useState(() => {
        selectRandomQuestions()
    }, [])

    return { selectedQuestions, selectRandomQuestions }
}