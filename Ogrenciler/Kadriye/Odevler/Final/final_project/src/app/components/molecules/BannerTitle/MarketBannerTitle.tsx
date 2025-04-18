import "./style.scss"
import H1 from '../../atoms/H1/H1'
import H4 from '../../atoms/H4/H4'
import { useTranslations } from 'next-intl';

const MarketBannerTitle = () => {
    const t = useTranslations('Market');
    return (
        <div className="banner-title">
            <H1 text={t("title")}></H1>
            <H4 text={t("text.start")} child={<span>{t("text.end")}</span>}></H4>
        </div>
    )
}

export default MarketBannerTitle