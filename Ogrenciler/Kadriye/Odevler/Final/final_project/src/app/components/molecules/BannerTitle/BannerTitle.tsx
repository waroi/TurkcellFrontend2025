import { useTranslations } from "next-intl";
import H1 from "../../atoms/H1/H1"
import ButtonItem from "../../atoms/ButtonItem/ButtonItem";
import ImageItem from "../../atoms/ImageItem/ImageItem";
import H4 from "../../atoms/H4/H4";
import "./style.scss"
import H3 from "../../atoms/H3/H3";

const BannerTitle = () => {
    const t = useTranslations('Banner');
    return (
        <div className="banner-title">
            <H1 text={t("title")}></H1>
            <H4 text={t("text")}></H4>
            <ButtonItem classProps="primary-btn big-btn" text={t("btn_text")} />
            <H3 text={t('inner_title')} />
            <div className="partners">
                <ImageItem src="/assets/images/profitwell.svg" width={131} height={28} alt="profitwell" />
                <ImageItem src="/assets/images/shipbob.svg" width={103} height={28} alt="shipbob" />
                <ImageItem src="/assets/images/subbly.svg" width={62} height={28} alt="subbly" />
                <ImageItem src="/assets/images/demio.svg" width={131} height={28} alt="demio" />
            </div>
        </div>
    )
}

export default BannerTitle