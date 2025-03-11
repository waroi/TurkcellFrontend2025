import styles from "./Navbar.module.css";

const navLinks = [
	{
		id: 0,
		title: "Home",
		href: "/",
	},
	{
		id: 1,
		title: "Blogs",
		href: "/blogs",
	},
	{
		id: 2,
		title: "About",
		href: "/about",
	},
];

export function NavLinks() {
	return (
		<ul className={styles.navLinks}>
			{navLinks.map((link) => (
				<li key={link.id}>
					<a href={link.href}>{link.title}</a>
				</li>
			))}
		</ul>
	);
}
