import "./style.scss"
import NavLinkItem from "../../atoms/NavLinkItem/NavLinkItem"
import { useTranslations } from "next-intl";
import { cookies } from "next/headers";


const NavLinks = async () => {
    const t = useTranslations('Navbar.left');
    const cookieStore = await cookies();
    const theme = cookieStore.get('theme')?.value || 'light';

    return (
        <div className="navlinks">
            <NavLinkItem href="/" text={t('home')} src={`/assets/images/dark_arrow_down.svg`} classProp="active" />
            <NavLinkItem href="/buy-crypto" text={t('buy')} />
            <NavLinkItem href="/markets" text={t('market')} />
            <NavLinkItem href="/exchange" text={t('exchange')} />
            <NavLinkItem href="/spot" text={t('spot')} />
            <NavLinkItem href="/BITUSDT" text={t('bitusdt')} src="/assets/images/fire.svg" />
            <NavLinkItem href="/Pages" text={t('pages')} src={`/assets/images/${theme}_arrow_down.svg`} />
        </div>
    )
}

export default NavLinks