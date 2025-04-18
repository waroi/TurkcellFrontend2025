import { cookies } from "next/headers"
import SectionTitle from "../../molecules/SectionTitle/SectionTitle"
import ChangePasswordForm from "../../organisms/ChangePasswordForm/ChangePasswordForm"
import Discover from "../../organisms/Discover/Discover"
import Footer from "../../organisms/Footer/Footer"
import Navbar from "../../organisms/Navbar/Navbar"


const ProfileTemplate = async () => {
    const cookieStore = await cookies()
    const userData = cookieStore.get('current_user')
    return (
        <>
            <Navbar />
            <SectionTitle section="ProfileTop" />
            {userData && userData.value && userData.value != "no-user" ?
                <div className="container">
                    <ChangePasswordForm />
                </div> : <p className="container">Giriş yapınız</p>
            }
            <Discover />
            <Footer />
        </>
    )
}

export default ProfileTemplate