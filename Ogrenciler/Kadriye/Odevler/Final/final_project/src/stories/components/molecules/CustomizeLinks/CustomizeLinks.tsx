import "./style.scss"
import ButtonItem from "../../atoms/ButtonItem/ButtonItem"
import ImageItem from "../../atoms/ImageItem/ImageItem"
import NavLinkItem from "../../atoms/NavLinkItem/NavLinkItem"


const CustomizeLinks = () => {
    return (
        <div className="navlinks">
            <NavLinkItem href="/assets" text="Assets" src="/assets/images/dark_arrow_down.svg" />
            <NavLinkItem href="/orders-and-trades" text="Orders & Trades" src="/assets/images/dark_arrow_down.svg" />
            <ButtonItem text="EN/USD" src="/assets/images/dark_arrow_down.svg" width={8} height={5} alt="EN/USD" />
            <ButtonItem src="/assets/images/sun.svg" width={14} height={14} alt="sun" classProps="icon_btn" />
            <ButtonItem src="/assets/images/light_notification.svg" width={14} height={14} alt="notification" classProps="icon_btn" />

            <ButtonItem classProps="btn" text="Wallet" />
            <ImageItem src="/assets/images/avatar.svg" width={30} height={30} alt="avatar" />
        </div>
    )
}

export default CustomizeLinks