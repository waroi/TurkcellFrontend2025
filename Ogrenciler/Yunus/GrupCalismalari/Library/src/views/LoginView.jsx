import { onAuthStateChanged } from "firebase/auth";
import Login from "../components/Login/Login"
import { auth } from "../firebase/firebase";
import { Navigate, useNavigate } from "react-router";
import { useEffect } from "react";

const LoginView = () => {
    const navigate = useNavigate()
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                return navigate('/')
            }
        });
    }, [])
    return (
        <Login />
    )
}

export default LoginView