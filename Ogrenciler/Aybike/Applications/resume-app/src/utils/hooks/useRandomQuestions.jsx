import { useState, useEffect } from 'react';
import { allQuestions } from './../constans/questions'

const questionCounts = {
    easy: 2,
    medium: 5,
    hard: 2
}

export const useRandomQuestions = () => {
    const [selectedQuestions, setSelectedQuestions] = useState([])

    useEffect(() => {
        const selected = []

        Object.keys(questionCounts).forEach((category) => {
            const categoryQuestions = allQuestions[category]
            const count = questionCounts[category]

            const shuffled = categoryQuestions.sort(() => Math.random() - 0.5)
            selected.push(...shuffled.slice(0, count))
            console.log(selectedQuestions)
        })

        setSelectedQuestions(selected)
    }, [])
    return { selectedQuestions }
}