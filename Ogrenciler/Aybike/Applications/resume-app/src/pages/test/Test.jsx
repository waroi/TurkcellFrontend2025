import TestContainer from "../../components/Test/TestContainer/TestContainer"
import { TestService } from "../../services/TestService"
import { useEffect } from "react"
import { useNavigate } from "react-router"
import { useRandomQuestions } from "../../utils/hooks/useRandomQuestions"

const Test = () => {
    const navigate = useNavigate()
    const { selectedQuestions, error } = useRandomQuestions()

    useEffect(() => {
        const checkUser = async () => {
            if (!await TestService.getUser()) navigate('/dashboard')
        }
        checkUser()
    }, [])

    return (
        <>
            <TestContainer error={error} questions={selectedQuestions} />
        </>
    )
}

export default Test