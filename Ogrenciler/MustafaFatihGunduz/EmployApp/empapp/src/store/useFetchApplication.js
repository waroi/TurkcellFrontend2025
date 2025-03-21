import {useState,useEffect} from 'react'
import { fetchApplications } from '../services/applicationService';

const useFetchApplication = () => {
    const [applications, setApplications] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    useEffect(() => {
      const getApplications = async () => {
        const data = await fetchApplications();
        setApplications(data);
      };
  
      getApplications();
    }, []);
  
    const handleLogin = ()=>{
      setShow(true);
    }
    return {applications,show,handleClose,handleLogin};
}

export default useFetchApplication