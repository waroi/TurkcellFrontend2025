
import P from "../../atoms/P/P"
import "./style.scss"
import { getTranslations } from "next-intl/server";

const FooterServices = async () => {
    const t = await getTranslations('Footer.services');
    return (
        <div className="footer-services">
            <h5>{t('title')}</h5>
            <P text={t('text_1')} />
            <P text={t('text_2')} />
            <P text={t('text_3')} />
            <P text={t('text_4')} />
            <P text={t('text_5')} />
            <P text={t('text_6')} />
        </div>
    )
}

export default FooterServices
