import Discover from "../../organisms/Discover/Discover"
import Footer from "../../organisms/Footer/Footer"
import Navbar from "../../organisms/Navbar/Navbar"
import RegisterForm from "../../organisms/RegisterForm/RegisterForm"

const RegisterTemplate = async () => {
    return (
        <>
            <Navbar />
            <RegisterForm />
            <Discover />
            <Footer />
        </>


    )
}

export default RegisterTemplate