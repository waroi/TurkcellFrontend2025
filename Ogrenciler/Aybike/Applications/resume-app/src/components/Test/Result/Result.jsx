import { useGiftView } from '../../../utils/hooks/useGiftView'
import GiftView from '../../../pages/Gift/GiftView'
import './Result.css'
import { useEffect, useState } from 'react'
import { TestService } from '../../../services/TestService'

const Result = ({ answers, questions }) => {
    const { loading } = useGiftView()

    const [userMail, setUserMail] = useState(TestService.getUser || null) // giren kişinin maili ekrana basabiliriz? ya da şey yaparız resultta alırız bunu result sonucunu dbye atarız boom

    useEffect(() => {
        TestService.completedUser(userMail)
    }, [])

    // const correctAnswers = answers.filter((answer, index) =>
    //     answer === questions[index].correctAnswer
    // ).length

    // const score = Math.round((correctAnswers / questions.length) * 100)
    // ------> % lik başarıyı bulduk bunu dbde tutucaz, 80% ve üstü demişti ama bence 75% daha iyi olabilir

    return (
        <>
            <GiftView test={true} />
        </>
    )
}

export default Result