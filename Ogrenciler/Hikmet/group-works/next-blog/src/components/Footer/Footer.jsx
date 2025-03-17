"use client";

import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import styles from "./footer.module.css";

function Footer() {
	return (
		<footer className={styles.footer}>
			<section className="container">
				<div className="row row-cols-1 row-cols-md-3">
					<div className={styles.footerColumn}>
						<h4 className={styles.footerHeading}>Adresimiz</h4>
						<p className={styles.footerText}>123 Sokak</p>
						<p className={styles.footerText}>Turkey</p>
						<p className={styles.footerText}>12345</p>
						<p className={styles.footerText}>Email: contact@contact.com</p>
						<p className={styles.footerText}>Phone: +90 123 456 7890</p>
					</div>
					<div className={styles.footerColumn}>
						<h4 className={styles.footerHeading}>Bağlantılar</h4>
						<ul className={styles.footerList}>
							<li className={styles.footerItem}>
								<Link href="/" className={styles.footerLink}>
									Home
								</Link>
							</li>
							<li className={styles.footerItem}>
								<Link href="/about" className={styles.footerLink}>
									About
								</Link>
							</li>
							<li className={styles.footerItem}>
								<Link href="/contact" className={styles.footerLink}>
									Contact
								</Link>
							</li>
						</ul>
					</div>
					<div className={styles.footerColumn}>
						<h4 className={styles.footerHeading}>Bizi Takip Edin</h4>
						<ul className={styles.footerList}>
							<li className={styles.footerItem}>
								<Link href="https://facebook.com" className={styles.footerLink}>
									<FaFacebook /> Facebook
								</Link>
							</li>
							<li className={styles.footerItem}>
								<Link href="https://x.com" className={styles.footerLink}>
									<FaTwitter /> Twitter
								</Link>
							</li>
							<li className={styles.footerItem}>
								<Link
									href="https://instagram.com"
									className={styles.footerLink}>
									<FaInstagram /> Instagram
								</Link>
							</li>
							<li className={styles.footerItem}>
								<Link href="https://linkedin.com" className={styles.footerLink}>
									<FaLinkedin /> LinkedIn
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className={styles.copyright}>
					© 2025 Next Blog. Tüm Hakları Saklıdır.
				</div>
			</section>
		</footer>
	);
}

export default Footer;
