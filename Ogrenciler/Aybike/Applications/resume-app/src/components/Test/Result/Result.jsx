import { useGiftView } from '../../../utils/hooks/useGiftView';
import GiftView from '../../../pages/Gift/GiftView';
import './Result.css';

const Result = ({ answers, questions }) => {
    const { loading } = useGiftView()

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