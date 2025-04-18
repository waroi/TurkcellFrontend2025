import { useTranslations } from "next-intl";
import LoginPage from "../components/pages/LoginPage/LoginPage"

const page = () => {
    const t = useTranslations('HomePage');

    return (
        <LoginPage />
    )
}

export default page