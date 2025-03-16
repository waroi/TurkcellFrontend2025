"use client";

import useBlogStore from "@/store/blogStore";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import styles from "./footer.module.css";

function Footer() {
	const theme = useBlogStore((state) => state.theme);
	return (
		<footer className={styles.footer}>
			<section className="container">
				<div className="row row-cols-1 row-cols-md-3">
					<div className={styles.footerColumn}>
						<h4 className={styles.footerHeading}>Our Address</h4>
						<p className={styles.footerText}>123 Main Street</p>
						<p className={styles.footerText}>Istanbul, Turkey</p>
						<p className={styles.footerText}>34000</p>
						<p className={styles.footerText}>Email: contact@example.com</p>
						<p className={styles.footerText}>Phone: +90 123 456 7890</p>
					</div>
					<div className={styles.footerColumn}>
						<h4 className={styles.footerHeading}>Links</h4>
						<ul className={styles.footerList}>
							<li className={styles.footerItem}>
								<a href="/" className={styles.footerLink}>
									Home
								</a>
							</li>
							<li className={styles.footerItem}>
								<a href="/about" className={styles.footerLink}>
									About
								</a>
							</li>
							<li className={styles.footerItem}>
								<a href="/contact" className={styles.footerLink}>
									Contact
								</a>
							</li>
						</ul>
					</div>
					<div className={styles.footerColumn}>
						<h4 className={styles.footerHeading}>Follow Us</h4>
						<ul className={styles.footerList}>
							<li className={styles.footerItem}>
								<a href="https://facebook.com" className={styles.footerLink}>
									<FaFacebook /> Facebook
								</a>
							</li>
							<li className={styles.footerItem}>
								<a href="https://twitter.com" className={styles.footerLink}>
									<FaTwitter /> Twitter
								</a>
							</li>
							<li className={styles.footerItem}>
								<a href="https://instagram.com" className={styles.footerLink}>
									<FaInstagram /> Instagram
								</a>
							</li>
							<li className={styles.footerItem}>
								<a href="https://linkedin.com" className={styles.footerLink}>
									<FaLinkedin /> LinkedIn
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className={styles.copyright}>
					© 2025 Next Blog. All rights reserved.
				</div>
			</section>
		</footer>
	);
}

export default Footer;
