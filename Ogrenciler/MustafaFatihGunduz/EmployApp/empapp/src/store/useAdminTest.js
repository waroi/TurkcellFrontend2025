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
  const [currentApplication, setCurrentApplication] = useState(null);

  const openModal = async (app) => {
    setCurrentApplication(app);
    setShowModal(true);
  };
  const handleSaveTest = async (application, total, hard, medium) => {
    if (!application) {
      console.error("No application selected");
      return;
    }
    if (
      !total ||
      !hard ||
      !medium ||
      isNaN(total) ||
      isNaN(hard) ||
      isNaN(medium)
    ) {
      console.log("Geçersiz test parametreleri:", { total, hard, medium });
      return false;
    }
    try {
      await setDoc(doc(db, "tests", application.id), {
        totalQuestion: total,
        hardQuestion: hard,
        mediumQuestion: medium,
        userId: application.id,
      });
      setTotalQuestion(total);
      setHardQuestion(hard);
      setMediumQuestion(medium);
      const test = await fetchTestDetails(application.id);
      if (test) {
        console.log("Kayıtederken app:",application)
        await handleApprove(application);
      }
      return true;
    } catch (error) {
      console.log("Test kaydetme hatası:", error);
      throw error;
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

        return data;
      } else {
        console.log("Test verisi bulunamadı!");
        return null;
      }
    } catch (error) {
      console.error("Test bilgileri alınamadı:", error);
      return null;
    }
  };

  return {
    showModal,
    setShowModal,
    handleCloseModal,
    openModal,
    handleSaveTest,
    totalQuestion,
    mediumQuestion,
    hardQuestion,
    fetchTestDetails,
    currentApplication,
    setCurrentApplication,
  };
};

export default useAdminTest;
