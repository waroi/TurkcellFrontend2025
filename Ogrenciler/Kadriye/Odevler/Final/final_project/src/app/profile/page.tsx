import { useTranslations } from "next-intl";
import ProfilePage from "../components/pages/ProfilePage/ProfilePage";

const page = () => {
    const t = useTranslations('HomePage');

    return (
        <ProfilePage />
    )
}

export default page