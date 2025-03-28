import TestContainer from "../../components/Test/TestContainer/TestContainer"
import { TestService } from "../../services/TestService"
import { useEffect } from "react"
import { useNavigate } from "react-router"
import { useRandomQuestions } from "../../utils/hooks/useRandomQuestions"

const Test = () => {
    const navigate = useNavigate()
    const { selectedQuestions, error } = useRandomQuestions()

    // const [userMail, setUserMail] = useState(TestService.getUser || null) // giren kişinin maili ekrana basabiliriz? ya da şey yaparız resultta alırız bunu result sonucunu dbye atarız boom
    useEffect(() => {
        const checkUser = async () => {
            // return
            // bu alttaki kontrol patladı bir anda anlayamadım :(
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