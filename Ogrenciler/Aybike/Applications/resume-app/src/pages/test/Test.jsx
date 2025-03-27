import { useState } from "react"
import TestContainer from "../../components/Test/TestContainer/TestContainer"
import './Test.css'
import { TestService } from "../../services/TestService"
import { useEffect } from "react"
import { useNavigate } from "react-router"
import { useRandomQuestions } from "../../utils/hooks/useRandomQuestions"
import { allQuestions } from "../../utils/constans/questions"

const Test = () => {
    const navigate = useNavigate()
    const { selectRandomQuestions, selectedQuestions } = useRandomQuestions()

    const [userMail, setUserMail] = useState(TestService.getUser || null) // giren kişinin maili ekrana basabiliriz? ya da şey yaparız resultta alırız bunu result sonucunu dbye atarız boom
    useEffect(() => {
        const checkUser = async () => {
            // return
            // bu alttaki kontrol patladı bir anda anlayamadım :(
            // if (!await TestService.checkAccess(userMail)) navigate('/dashboard')
        }
        checkUser()
    }, [userMail])

    return (
        <>
            <TestContainer questions={selectedQuestions} />
        </>
    )
}

export default Test