import Discover from "../../organisms/Discover/Discover"
import Footer from "../../organisms/Footer/Footer"
import LoginForm from "../../organisms/LoginForm/LoginForm"
import Navbar from "../../organisms/Navbar/Navbar"


const LoginTemplate = () => {
    return (
        <>
            <Navbar />
            <LoginForm />
            <Discover />
            <Footer />
        </>
    )
}

export default LoginTemplate