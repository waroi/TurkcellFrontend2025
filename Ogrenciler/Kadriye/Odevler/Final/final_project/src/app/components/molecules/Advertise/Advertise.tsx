import "./style.scss"
import { useTranslations } from "next-intl";
import H2 from "../../atoms/H2/H2"
import H4 from "../../atoms/H4/H4";
import ImageItem from "../../atoms/ImageItem/ImageItem";
import P from "../../atoms/P/P";
import H3 from "../../atoms/H3/H3";


const Advertise = () => {
    const t = useTranslations('Advertise');
    return (
        <div className="advertise">
            <div className="advertise-head">
                <H2 text={t('title')} />
                <H3 text={t("text")} />
            </div>
            <div className="texts">
                <div className="text">
                    <div className="text-title">
                        <ImageItem src="/assets/images/list_icon.svg" height={20} width={20} alt="list icon" />
                        <H4 text={t('title_1')} />
                    </div>
                    <P text={t('text_1')} />
                </div>
                <div className="text">
                    <div className="text-title">
                        <ImageItem src="/assets/images/list_icon.svg" height={20} width={20} alt="list icon" />
                        <H4 text={t('title_2')} />
                    </div>
                    <P text={t('text_2')} />
                </div>
            </div>
            <div className="images">
                <ImageItem src="/assets/images/google_play.svg" width={130} height={40} alt="google play image" />
                <ImageItem src="/assets/images/app_store.svg" width={120} height={40} alt="app store image" />
            </div>
        </div>
    )
}

export default Advertise 