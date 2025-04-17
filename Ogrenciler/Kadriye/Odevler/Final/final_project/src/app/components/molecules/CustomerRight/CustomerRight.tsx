import "./style.scss"
import ImageItem from "../../atoms/ImageItem/ImageItem"
import { useTranslations } from "next-intl";
import H3 from "../../atoms/H3/H3";
import H4 from "../../atoms/H4/H4";

const CustomerRight = () => {
    const t = useTranslations('Customer');
    return (
        <div className="customer-right">
            <ImageItem src="/assets/images/Quote.svg" width={43} height={30} alt="quote image" classProp="quote" />
            <H3 text={t('message')} />
            <div className="person">
                <div className="person-info">
                    <ImageItem src="/assets/images/empty_avatar.svg" width={48} height={48} alt="avatar placeholder image" />
                    <div className="name">
                        <H4 text={t('name')} />
                        <span>{t('department')}</span>
                    </div>
                </div>
                <ImageItem src="/assets/images/logoipsum.svg" width={112} height={25} alt="logoipsum image" classProp="logo" />
            </div>
        </div>
    )
}

export default CustomerRight