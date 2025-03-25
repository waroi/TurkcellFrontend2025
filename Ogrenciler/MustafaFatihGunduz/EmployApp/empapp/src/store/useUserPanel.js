import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase_config";
import {
  fetchUserApplication,
  updateTestResults,
} from "../services/applicationService";
import { signOutFromApp } from "../services/auth_service";
import useQuestions from "./useQuestions";

const useUserPanel = () => {
  const navigate = useNavigate();
  const [application, setApplication] = useState(null);
  const [loading, setLoading] = useState(true);

  const { selectedQuestions, setShowTest } = useQuestions();

  const handleLogout = async () => {
    await signOutFromApp();
    navigate("/");
  };

  const handleTestComplete = async (results) => {
    try {
      await updateTestResults(application.id, results);
      setShowTest(false);
      window.location.reload();
    } catch (error) {
      console.error("Test sonucu kaydetme hatası:", error);
    }
  };

  useEffect(() => {
    const getUserApplication = async () => {
      if (auth.currentUser) {
        const data = await fetchUserApplication(auth.currentUser.email);
        setApplication(data);
        setLoading(false);
      }
    };
    getUserApplication();
  }, []);

  return {
    application,
    loading,
    selectedQuestions,
    handleLogout,
    handleTestComplete,
  };
};

export default useUserPanel;
