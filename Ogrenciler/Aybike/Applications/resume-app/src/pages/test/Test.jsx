import TestContainer from "../../components/Test/TestContainer/TestContainer"
import './Test.css'

const Test = () => {
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
        <TestContainer questions={questions} />
    )
}

export default Test