import "./style.scss"
import { useTranslations } from "next-intl";
import H2 from "../../atoms/H2/H2"
import H4 from "../../atoms/H4/H4";
import ImageItem from "../../atoms/ImageItem/ImageItem";
import P from "../../atoms/P/P";
import H3 from "../../atoms/H3/H3";
import ButtonItem from "../../atoms/ButtonItem/ButtonItem";


const MoneyAndInvest = () => {
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
            <ButtonItem text={t('btn_text')} />
        </div>
    )
}

export default MoneyAndInvest