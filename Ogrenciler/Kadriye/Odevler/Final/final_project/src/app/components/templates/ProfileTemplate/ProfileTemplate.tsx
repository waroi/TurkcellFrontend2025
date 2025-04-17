import ChangePasswordForm from "../../organisms/ChangePasswordForm/ChangePasswordForm"
import Discover from "../../organisms/Discover/Discover"
import Footer from "../../organisms/Footer/Footer"
import Navbar from "../../organisms/Navbar/Navbar"


const ProfileTemplate = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <ChangePasswordForm />
            </div>
            <Discover />
            <Footer />
        </>
    )
}

export default ProfileTemplate