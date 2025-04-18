
import H3 from "../../atoms/H3/H3"
import NavbarLogo from "../NavbarLogo/NavbarLogo"
import "./style.scss"
import P from "../../atoms/P/P";
import { getTranslations } from "next-intl/server";

const FooterLogo = async () => {
    const t = await getTranslations('Footer.main');
    return (
        <div className="footer-logo">
            <NavbarLogo src="/assets/images/logo.svg" text="Rocket" />
            <H3 text={t('title')} />
            <P text={t('text_1')} />
            <P text={t('text_2')} />
            <P text={t('text_3')} />
        </div>
    )
}

export default FooterLogo