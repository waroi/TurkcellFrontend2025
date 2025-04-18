import "./style.scss"
import { useTranslations } from "next-intl";
import InfoCard from "../../molecules/Card/InfoCard"
import InfoTitle from "../../molecules/InfoTitle/InfoTitle"

const Info = () => {
    const t = useTranslations('Info');
    return (
        <div className="info">
            <InfoTitle />
            <div className="info-cards">
                <InfoCard src="bitcoin_cloud" alt="bitcoin cloud image" step={t('step_1')} title={t('title_1')} text={t('text_1')} />
                <InfoCard src="bitcoin_wallet" alt="bitcoin wallet image" step={t('step_2')} title={t('title_2')} text={t('text_2')} />
                <InfoCard src="bitcoin_mining" alt="bitcoin mining image" step={t('step_3')} title={t('title_3')} text={t('text_3')} />
                <InfoCard src="bitcoin_comparison" alt="bitcoin comparison image" step={t('step_4')} title={t('title_4')} text={t('text_4')} />
            </div>
        </div>
    )
}

export default Info