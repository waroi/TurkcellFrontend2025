import React from "react";
import styles from "./Navbar.module.css";

function NavbarSearchField() {
	return (
		<input
			type="text"
			className={styles.navbarSearchField}
			placeholder="Search Blog"
		/>
	);
}

export default NavbarSearchField;
