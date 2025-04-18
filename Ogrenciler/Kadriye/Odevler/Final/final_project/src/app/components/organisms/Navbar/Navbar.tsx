import "./style.scss"
import CustomizeLinks from "../../molecules/CustomizeLinks/CustomizeLinks"
import NavbarLogo from "../../molecules/NavbarLogo/NavbarLogo"
import NavLinks from "../../molecules/NavLinks/NavLinks"
import { cookies } from "next/headers"
const Navbar = async () => {
    const cookieStore = await cookies();
    const theme = cookieStore.get('theme')?.value || 'light';
    return (
        <div className="navbar">
            <NavbarLogo src="/assets/images/logo.svg" text="Rocket" />

            <div className="navbar-links">
                <NavLinks theme={theme} />
                <CustomizeLinks />
            </div>

        </div>
    )
}

export default Navbar