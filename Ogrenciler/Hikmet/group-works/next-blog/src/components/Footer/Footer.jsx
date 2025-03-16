"use client";

import useBlogStore from "@/store/blogStore";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import styles from "./footer.module.css";

function Footer() {
	const theme = useBlogStore((state) => state.theme);
	return (
		<>
			<footer className={`styles.footer ${theme}`}>
				<div className={styles.footerContainer}>
					{/* Sol Kolon - İletişim Bilgileri */}
					<div className={styles.footerColumn}>
						<h3>İletişim</h3>
						<div className={styles.contactItem}>
							<MdLocationOn className={styles.icon} />
							<p>Ataşehir, İstanbul, Türkiye</p>
						</div>
						<div className={styles.contactItem}>
							<MdPhone className={styles.icon} />
							<p>+90 555 123 45 67</p>
						</div>
						<div className={styles.contactItem}>
							<MdEmail className={styles.icon} />
							<p>info@nextblog.com</p>
						</div>
						<div className={styles.socialIcons}>
							<Link href="https://facebook.com" aria-label="Facebook">
								<FaFacebook className={styles.socialIcon} />
							</Link>
							<Link href="https://twitter.com" aria-label="Twitter">
								<FaTwitter className={styles.socialIcon} />
							</Link>
							<Link href="https://instagram.com" aria-label="Instagram">
								<FaInstagram className={styles.socialIcon} />
							</Link>
							<Link href="https://linkedin.com" aria-label="LinkedIn">
								<FaLinkedin className={styles.socialIcon} />
							</Link>
						</div>
					</div>

					{/* Orta Kolon - Navigasyon Linkleri */}
					<div className={styles.footerColumn}>
						<div className={styles.navSection}>
							<h3>Kategoriler</h3>
							<ul className={styles.navLinks}>
								<li>
									<Link href="/category/technology">Teknoloji</Link>
								</li>
								<li>
									<Link href="/category/travel">Seyahat</Link>
								</li>
								<li>
									<Link href="/category/food">Yemek</Link>
								</li>
								<li>
									<Link href="/category/lifestyle">Yaşam</Link>
								</li>
								<li>
									<Link href="/category/business">İş Dünyası</Link>
								</li>
							</ul>
						</div>
					</div>

					{/* Sağ Kolon - Newsletter */}
					<div className={styles.footerColumn}>
						<h3>Bültenimize Abone Olun</h3>
						<p>
							En son blog yazıları, güncellemeler ve özel içerikler için abone
							olun.
						</p>
						<form className={styles.newsletterForm}>
							<input
								type="email"
								placeholder="E-posta adresiniz"
								className={styles.emailInput}
								required
							/>
							<button type="submit" className={styles.subscribeBtn}>
								Abone Ol
							</button>
						</form>
						<p className={styles.privacyText}>
							Kaydolarak{" "}
							<Link href="/privacy-policy">Gizlilik Politikamızı</Link> kabul
							etmiş olursunuz.
						</p>
					</div>
				</div>
			</footer>
			<div className={styles.footerBottom}>
				<p>
					&copy; {new Date().getFullYear()} Next Blog. Tüm hakları saklıdır.
				</p>
			</div>
		</>
	);
}

export default Footer;
