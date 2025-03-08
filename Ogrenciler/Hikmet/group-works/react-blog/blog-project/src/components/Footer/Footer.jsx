import logo from "../../assets/Logo.svg";
import styles from "./Footer.module.css";

function Footer() {
	return (
		<footer>
			<div className={styles.footerContainer}>
				<section className={styles.footerSection}>
					<div>
						<h3>Company</h3>
						<ul>
							<li>About</li>
							<li>Blog</li>
							<li>Press</li>
							<li>Jobs</li>
						</ul>
					</div>
					<div>
						<h3>Product</h3>
						<ul>
							<li>Features</li>
							<li>Integrations</li>
							<li>FAQ</li>
						</ul>
					</div>
					<div>
						<h3>Support</h3>
						<ul>
							<li>Help Center</li>
							<li>Terms of Service</li>
							<li>Legal</li>
							<li>Privacy Policy</li>
						</ul>
					</div>
				</section>
				<section className={styles.footerBottom}>
					<img src={logo} alt="" />
					<p>© 2021 Your Company, Inc. All rights reserved.</p>
				</section>
			</div>
		</footer>
	);
}

export default Footer;
