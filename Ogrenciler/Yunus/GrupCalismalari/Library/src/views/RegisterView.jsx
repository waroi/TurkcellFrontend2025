import { onAuthStateChanged } from "firebase/auth";
import Register from "../components/Login/Register"
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const RegisterView = () => {
    const navigate = useNavigate()
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                return navigate('/')
            }
        });
    }, [])
    return (
        <Register login={true} />
    )
}

export default RegisterView