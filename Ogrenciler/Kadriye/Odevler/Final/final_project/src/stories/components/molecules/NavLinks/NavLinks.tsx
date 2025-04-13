import "./style.scss"
import NavLinkItem from "../../atoms/NavLinkItem/NavLinkItem"

const NavLinks = () => {
    return (
        <div className="navlinks">
            <NavLinkItem href="/" text="Homepage" src="/assets/images/light_arrow_down.svg" classProp="active" />
            <NavLinkItem href="/buy-crypto" text="Buy Crypto" />
            <NavLinkItem href="/markets" text="Markets" />
            <NavLinkItem href="/exchange" text="Exchange" />
            <NavLinkItem href="/spot" text="Spot" />
            <NavLinkItem href="/BITUSDT" text="BITUSDT" src="/assets/images/fire.svg" />
            <NavLinkItem href="/Pages" text="Pages" src="/assets/images/dark_arrow_down.svg" />
        </div>
    )
}

export default NavLinks