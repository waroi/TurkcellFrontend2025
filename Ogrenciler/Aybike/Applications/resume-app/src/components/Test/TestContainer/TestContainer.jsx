import Question from '../Question/Question';
import Result from '../Result/Result';
import useTestContainer from '../../../utils/hooks/useTestContainer';
import ProgressBar from '../ProgressBar/ProgressBar';
import styles from './TestContainer.module.css';

const TestContainer = ({ questions, isLoading, error }) => {
    const {
        currentQuestion,
        answers,
        showResult,
        timer,
        handleAnswer
    } = useTestContainer(questions)

    return (
        <div className={styles.testContainer}>
            <div className={`${styles.quizCard} card`}>
                {!showResult ? (
                    <>
                        <ProgressBar
                            current={currentQuestion + 1}
                            total={questions.length}
                            timer={timer}
                        />
                        <Question
                            error={error}
                            isLoading={isLoading}
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