import { useState } from "react";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebase_config";
import useAdminPanel from "./useAdminPanel";

const useAdminTest = () => {
    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => setShowModal(false);
    const { handleApprove } = useAdminPanel();
    const [totalQuestion, setTotalQuestion] = useState("");
    const [hardQuestion, setHardQuestion] = useState("");
    const [mediumQuestion, setMediumQuestion] = useState("");

    const handleModal = async (app, total, hard, medium) => {
        setShowModal(true);
        try {
            await handleApprove(app);
            await setDoc(doc(db, "tests", auth.currentUser.uid), {
                totalQuestion: total,
                hardQuestion: hard,
                mediumQuestion: medium,
                userId: auth.currentUser.uid,
            });
            setTotalQuestion(total);
            setHardQuestion(hard);
            setMediumQuestion(medium);
    
            console.log("Test bilgileri Firestore'a kaydedildi");
            fetchTestDetails(app.id);
        } catch (error) {
            console.log("Test kaydetme hatası:", error);
        }
    };
    

    const fetchTestDetails = async (userId) => {
        try {
            const testRef = doc(db, "tests", userId); 
            const testSnap = await getDoc(testRef);
    
            if (testSnap.exists()) {
                const data = testSnap.data();
                setTotalQuestion(data.totalQuestion);
                setHardQuestion(data.hardQuestion);
                setMediumQuestion(data.mediumQuestion);
                console.log("Gelen soru sayıları useAdminTest : ", totalQuestion, mediumQuestion, hardQuestion);
            } else {
                console.log("Test verisi bulunamadı!");
            }
        } catch (error) {
            console.error("Test bilgileri alınamadı:", error);
        }
    };
    

    return { showModal, handleCloseModal, handleModal, totalQuestion, mediumQuestion, hardQuestion, fetchTestDetails };
};

export default useAdminTest;
