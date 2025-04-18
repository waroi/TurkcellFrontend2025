"use client"
import "./style.scss"
import NavLinkItem from "../../atoms/NavLinkItem/NavLinkItem"
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

const NavLinks = ({ theme }: { theme: string }) => {
    const t = useTranslations('Navbar.left');
    const currentPath = usePathname();
    return (
        <div className="navlinks">
            <NavLinkItem href="/" text={t('home')} src={`/assets/images/dark_arrow_down.svg`} classProp={currentPath === "/" ? "active" : ""} />
            <NavLinkItem href="/buy-crypto" text={t('buy')} classProp={currentPath === "/buy-crypto" ? "active" : ""} />
            <NavLinkItem href="/market" text={t('market')} classProp={currentPath === "/market" ? "active" : ""} />
            <NavLinkItem href="/exchange" text={t('exchange')} classProp={currentPath === "/exchange" ? "active" : ""} />
            <NavLinkItem href="/spot" text={t('spot')} classProp={currentPath === "/spot" ? "active" : ""} />
            <NavLinkItem href="/BITUSDT" text={t('bitusdt')} src="/assets/images/fire.svg" classProp={currentPath === "/BITUSDT" ? "active" : ""} />
            <NavLinkItem href="/Pages" text={t('pages')} src={`/assets/images/${theme}_arrow_down.svg`} classProp={currentPath === "/Pages" ? "active" : ""} />
        </div>
    )
}

export default NavLinks