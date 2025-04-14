import "./style.scss"
import NavLinkItem from "../../atoms/NavLinkItem/NavLinkItem"
import { useTranslations } from "next-intl";

const NavLinks = () => {
    const t = useTranslations('Navbar.left');
    return (
        <div className="navlinks">
            <NavLinkItem href="/" text={t('home')} src="/assets/images/light_arrow_down.svg" classProp="active" />
            <NavLinkItem href="/buy-crypto" text={t('buy')} />
            <NavLinkItem href="/markets" text={t('market')} />
            <NavLinkItem href="/exchange" text={t('exchange')} />
            <NavLinkItem href="/spot" text={t('spot')} />
            <NavLinkItem href="/BITUSDT" text={t('bitusdt')} src="/assets/images/fire.svg" />
            <NavLinkItem href="/Pages" text={t('pages')} src="/assets/images/dark_arrow_down.svg" />
        </div>
    )
}

export default NavLinks