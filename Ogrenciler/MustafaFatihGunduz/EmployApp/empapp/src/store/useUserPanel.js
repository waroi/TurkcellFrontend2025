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
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  const { selectedQuestions, setShowTest } = useQuestions();
  const [currentApplication, setCurrentApplication] = useState(null);

  const handleLogout = async () => {
    await signOutFromApp();
    navigate("/");
  };

  const handleTestComplete = async (results) => {
    try {
      if (!currentApplication) return;

      await updateTestResults(currentApplication.id, results);
      setShowTest(false);
      window.location.reload();
    } catch (error) {
      console.error("Test sonucu kaydetme hatası:", error);
    }
  };

  useEffect(() => {
    const getUserApplication = async () => {
      if (auth.currentUser) {
        try {
          const data = await fetchUserApplication(auth.currentUser.email);
          setApplications(data);
        } catch (error) {
          console.error("Error fetching user applications:", error);
          setApplications([]);
        } finally {
          setLoading(false);
        }
      }
    };
    getUserApplication();
  }, []);

  return {
    applications,
    loading,
    selectedQuestions,
    handleLogout,
    handleTestComplete,
    currentApplication,
    setCurrentApplication,
  };
};

export default useUserPanel;
