"use client"
import "./style.scss"
import ButtonItem from "../../atoms/ButtonItem/ButtonItem"
import ImageItem from "../../atoms/ImageItem/ImageItem"
import NavLinkItem from "../../atoms/NavLinkItem/NavLinkItem"
import { useTranslations } from "next-intl"
import SelectItem from "../../atoms/SelectItem/SelectItem"

const CustomizeLinks = () => {
    const t = useTranslations('Navbar.right');
    function handleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
    }
    return (
        <div className="navlinks">
            <NavLinkItem href="/assets" text={t('assets')} src="/assets/images/dark_arrow_down.svg" />
            <NavLinkItem href="/orders-and-trades" text={t('order')} src="/assets/images/dark_arrow_down.svg" />
            <SelectItem />
            <ButtonItem src="/assets/images/sun.svg" width={14} height={14} alt="sun" classProps="icon_btn" event={() => handleTheme()} />
            <ButtonItem src="/assets/images/light_notification.svg" width={14} height={14} alt="notification" classProps="icon_btn" event={() => { }} />
            <ButtonItem classProps="btn" text={t('wallet')} event={() => { }} />
            <ImageItem src="/assets/images/avatar.svg" width={30} height={30} alt="avatar" />
        </div>
    )
}

export default CustomizeLinks;
