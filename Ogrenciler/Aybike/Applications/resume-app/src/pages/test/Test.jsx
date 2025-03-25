import { useState } from "react"
import TestContainer from "../../components/Test/TestContainer/TestContainer"
import './Test.css'
import { TestService } from "../../services/TestService"
import { useEffect } from "react"
import { useNavigate } from "react-router"

const Test = () => {
    const navigate = useNavigate()
    const [userMail, setUserMail] = useState(TestService.getUser || null) // giren kişinin maili ekrana basabiliriz? ya da şey yaparız resultta alırız bunu result sonucunu dbye atarız boom
    useEffect(() => {
        const checkUser = async () => {
            return
            // bu alttaki kontrolü patladı bir anda anlayamadıKKKKK
            // if (!await TestService.checkAccess(userMail)) navigate('/dashboard')
        }
        checkUser()
    }, [userMail])

    // dbye havuz oluşturup random 5-10 arası çekeriz onları basrız bunlar geçici sorular
    const questions = [
        {
            text: "JavaScript'te değişken tanımlamak için hangi anahtar kelime kullanılmaz?",
            options: ["var", "let", "const", "function"],
            correctAnswer: "function"
        },
        {
            text: "React'ta state güncellemek için hangi hook kullanılır?",
            options: ["useState", "useEffect", "useContext", "useReducer"],
            correctAnswer: "useState"
        },
        {
            text: "CSS'te bir elementin genişliğini ve yüksekliğini içeriğine göre ayarlamak için hangi özellik kullanılır?",
            options: ["width", "height", "fit-content", "auto"],
            correctAnswer: "auto"
        },
        {
            text: "HTML5'te yeni eklenen input türü hangisi değildir?",
            options: ["date", "email", "password", "color"],
            correctAnswer: "password"
        },
        {
            text: "Bootstrap grid sisteminde bir satır kaç sütuna bölünmüştür?",
            options: ["6", "10", "12", "16"],
            correctAnswer: "12"
        }
    ]
    return (
        <>
            <TestContainer questions={questions} />
        </>
    )
}

export default Test