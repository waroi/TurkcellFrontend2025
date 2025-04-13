import "./style.scss"
import CustomizeLinks from "../../molecules/CustomizeLinks/CustomizeLinks"
import NavbarLogo from "../../molecules/NavbarLogo/NavbarLogo"
import NavLinks from "../../molecules/NavLinks/NavLinks"

const Navbar = () => {
    return (
        <div className="navbar">
            <NavbarLogo src="/assets/images/logo.svg" text="Rocket" />
            <div className="navbar-links">
                <NavLinks />
                <CustomizeLinks />
            </div>

        </div>
    )
}

export default Navbar