import "./style.scss"
import { useTranslations } from "next-intl";
import H1 from "../../atoms/H1/H1"
import H4 from "../../atoms/H4/H4";

const InfoTitle = () => {
    const t = useTranslations('Info');
    return (
        <div className="info-title">
            <H1 text={t('big_title')} />
            <H4 text={t('big_text')} />
        </div>
    )
}

export default InfoTitle