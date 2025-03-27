import { useState, useEffect } from "react";
import questions from "../questions/question.json";
import useAdminTest from "./useAdminTest"; 
import { auth } from "../../firebase_config";

const useQuestions = () => {
    const [selectedQuestions, setSelectedQuestions] = useState([]);
    const [showTest, setShowTest] = useState(false);
    const { totalQuestion, hardQuestion, mediumQuestion, fetchTestDetails } = useAdminTest();

    useEffect(() => {
        console.log("Gelen sorular :", selectedQuestions);
    }, [selectedQuestions]);

    const handleStartTest = async () => {
            await fetchTestDetails(auth.currentUser.uid)
        const randomQuestions = questions.questions
            .sort(() => Math.random() - 0.5)
            .slice(0, Number(totalQuestion));
        setSelectedQuestions(randomQuestions);
        setShowTest(true);
    };

    return {
        selectedQuestions,
        showTest,
        setShowTest,
        handleStartTest,
    };
};

export default useQuestions;
