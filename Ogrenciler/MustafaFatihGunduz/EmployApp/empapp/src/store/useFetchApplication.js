import { useState, useEffect } from "react";
import { fetchApplications } from "../services/applicationService";
import useCheckIsHeAdmin from "./useCheckIsHeAdmin";

const useFetchApplication = () => {
  const [applications, setApplications] = useState([]);
  const [show, setShow] = useState(false);
  const { checkAdminStatus, isAdmin, isLoading } = useCheckIsHeAdmin();

  const handleClose = () => setShow(false);

  useEffect(() => {
    const getApplications = async () => {
      const data = await fetchApplications();
      setApplications(data);
    };

    getApplications();
  }, []);

  const handleLogin = async () => {
    setShow(true)
  };

  const handleLoginAndCheckAdmin = async () => {
    handleLogin();
    await checkAdminStatus();
  };

  return {
    applications,
    show,
    handleClose,
    handleLoginAndCheckAdmin,
    isAdmin,
    isLoading,
  };
};

export default useFetchApplication;
