import { useTranslations } from "next-intl";
import H2 from "../../atoms/H2/H2"
import "./style.scss"
import H4 from "../../atoms/H4/H4";
import P from "../../atoms/P/P";
import ImageItem from "../../atoms/ImageItem/ImageItem";

const CustomerLeft = () => {
    const t = useTranslations('Customer');
    return (
        <div className="customer-left">
            <H2 text={t('title')} />
            <H4 text={t('inner_title')} />
            <P text={t('text')} />
            <div className="images">
                <ImageItem src="/assets/images/empty_avatar.svg" width={48} height={48} alt="avatar placeholder image" />
                <ImageItem src="/assets/images/empty_avatar.svg" width={48} height={48} alt="avatar placeholder image" />
                <ImageItem src="/assets/images/empty_avatar.svg" width={48} height={48} alt="avatar placeholder image" />
            </div>
            <div className="review">
                <P text={t('number')} child={<span>{t('review')}</span>
                } />
            </div>
        </div>
    )
}

export default CustomerLeft