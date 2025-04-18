import "./style.scss"
import P from "../../atoms/P/P"
import FooterAbout from "../../molecules/FooterAbout/FooterAbout"
import FooterLogo from "../../molecules/FooterLogo/FooterLogo"
import FooterProducts from "../../molecules/FooterProducts/FooterProducts"
import FooterServices from "../../molecules/FooterSevices/FooterSevices"
import FooterSupports from "../../molecules/FooterSupport/FooterSupport"
import ImageItem from "../../atoms/ImageItem/ImageItem"
import { getTranslations } from "next-intl/server"


const Footer = async () => {
    const t = await getTranslations('Footer');
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <FooterLogo />
                    <FooterProducts />
                    <FooterServices />
                    <FooterSupports />
                    <FooterAbout />
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <P text={t('copy')} />
                    <div className="socials">
                        <ImageItem src="assets/images/facebook.svg" width={16} height={16} alt="facebok logo image" />
                        <ImageItem src="assets/images/twitter.svg" width={16} height={16} alt="twitter logo image" />
                        <ImageItem src="assets/images/instagram.svg" width={16} height={16} alt="instagram logo image" />
                        <ImageItem src="assets/images/linkedin.svg" width={16} height={16} alt="linkedin logo image" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer