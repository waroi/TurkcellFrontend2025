import Footer from "@/components/organism/Footer/Footer"
import InfoSection from "@/components/organism/InfoSection/InfoSection"
import RegisterOrganism from "@/components/organism/Register/Register"

const RegisterPage = () => {
    return (
        <div className="w-100">
            <RegisterOrganism />
            <InfoSection />
            <Footer />
        </div>
    )
}

export default RegisterPage