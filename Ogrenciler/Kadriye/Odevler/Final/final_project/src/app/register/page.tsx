
import { useTranslations } from 'next-intl';
import RegisterPage from '../components/pages/RegisterPage/RegisterPage'

const page = () => {
    const t = useTranslations('HomePage');
    return (
        <RegisterPage />
    )
}

export default page