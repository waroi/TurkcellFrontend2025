import "./style.scss"
import ButtonItem from "../../atoms/ButtonItem/ButtonItem"
import ImageItem from "../../atoms/ImageItem/ImageItem"
import NavLinkItem from "../../atoms/NavLinkItem/NavLinkItem"
import { useTranslations } from "next-intl"
import SelectItem from "../../atoms/SelectItem/SelectItem"

import handleTheme from "@/app/hooks/handleTheme"
import { cookies } from "next/headers"
import ThemeToggleButton from "../../atoms/ButtonItem/ThemeToggleButton"

const CustomizeLinks = async () => {
    const t = useTranslations('Navbar.right');
    const cookieStore = await cookies();
    const theme = cookieStore.get('theme')?.value || 'light';

    return (
        <div className="navlinks">
            <NavLinkItem href="/assets" text={t('assets')} src={`/assets/images/${theme}_arrow_down.svg`} />
            <NavLinkItem href="/orders-and-trades" text={t('order')} src={`/assets/images/${theme}_arrow_down.svg`} />
            <SelectItem theme={theme} />
            <ThemeToggleButton src={`/assets/images/${theme}.svg`} width={14} height={14} alt="theme toggle button" classProps="icon_btn" />
            <ButtonItem src={`/assets/images/${theme}_notification.svg`} width={14} height={14} alt="notification" classProps="icon_btn" />
            <ButtonItem classProps="btn" text={t('wallet')} />
            <ImageItem src="/assets/images/avatar.svg" width={30} height={30} alt="avatar" />
        </div>
    )
}

export default CustomizeLinks;
