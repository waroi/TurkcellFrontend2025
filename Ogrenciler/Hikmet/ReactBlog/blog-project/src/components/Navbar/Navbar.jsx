import logo from "../../assets/Logo.svg";
import styles from "./Navbar.module.css";
import NavbarSearchField from "./NavbarSearchField";
import { NavLinks } from "./NavLinks";

function Navbar() {
	return (
		<nav className={styles.navbar}>
			<img src={logo} alt="logo" />
			<NavLinks />
			<NavbarSearchField />
		</nav>
	);
}

export default Navbar;
