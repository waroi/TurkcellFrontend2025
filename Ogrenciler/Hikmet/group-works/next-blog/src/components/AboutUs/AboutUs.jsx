import { getCurrentUser } from "@/store/firebaseStore";
import Image from "next/image";
import Link from "next/link";
import styles from "./aboutUs.module.css";

export default function AboutUs() {
	const teamMembers = [
		{
			name: "Hikmet Melik FIRAT",
			role: "Yazılım Geliştirici",
			image: "https://avatars.githubusercontent.com/u/77413392?v=4",
			bio: "Teknoloji tutkunu ve deneyimli bir yazılım geliştirici.",
		},
		{
			name: "Ahmet Salih ÇÖZEL",
			role: "Yazılım Geliştirici",
			image: "https://avatars.githubusercontent.com/u/98326924?v=4",
			bio: "İçerik stratejisi ve dijital pazarlama konusunda uzman.",
		},
		{
			name: "Oğuzhan DOĞDU",
			role: "Yazılım Geliştirici",
			image: "https://avatars.githubusercontent.com/u/109076888?v=4",
			bio: "Frontend ve backend teknolojilerinde deneyimli geliştirici.",
		},
	];
	const checkExistingUser = getCurrentUser();
	console.log(checkExistingUser);

	return (
		<div className={styles.aboutContainer}>
			<section className={styles.heroSection}>
				<div>
					{!checkExistingUser ? (
						<div className="alert alert-danger" role="alert">
							You are not authorized to view this page.
						</div>
					) : (
						""
					)}
				</div>
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<h1 className={styles.heroTitle}>Hakkımızda</h1>
							<p className={styles.heroSubtitle}>
								Teknoloji ve yazılım dünyasındaki en güncel bilgileri paylaşan
								bir blog platformu
							</p>
						</div>
						<div className="col-lg-6">
							<div className={styles.heroImageContainer}>
								<Image
									src="/next.svg"
									alt="NextBlog Logo"
									width={400}
									height={200}
									className={styles.heroImage}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className={styles.missionSection}>
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<div className={styles.missionCard}>
								<div className={styles.missionIcon}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="40"
										height="40"
										fill="currentColor"
										viewBox="0 0 16 16">
										<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
										<path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
									</svg>
								</div>
								<h3>Misyonumuz</h3>
								<p>
									Teknoloji ve yazılım dünyasındaki en güncel bilgileri,
									anlaşılır ve erişilebilir bir şekilde paylaşmak.
								</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className={styles.missionCard}>
								<div className={styles.missionIcon}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="40"
										height="40"
										fill="currentColor"
										viewBox="0 0 16 16">
										<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.25-14.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 1.5 0zm0 10.5v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 1.5 0zM1.5 8.75h1.5a.75.75 0 0 1 0 1.5H1.5a.75.75 0 0 1 0-1.5zm12.5 0h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1 0-1.5zm-10.5-7 1.06 1.06a.75.75 0 1 1-1.06 1.06L2.44 2.81a.75.75 0 0 1 1.06-1.06zm9 9 1.06 1.06a.75.75 0 1 1-1.06 1.06l-1.06-1.06a.75.75 0 0 1 1.06-1.06zm-9 0a.75.75 0 0 1 1.06 0l1.06 1.06a.75.75 0 1 1-1.06 1.06L2.44 11.81a.75.75 0 0 1 0-1.06zm9-9a.75.75 0 0 1 0 1.06L11.94 3.87a.75.75 0 1 1-1.06-1.06l1.06-1.06a.75.75 0 0 1 1.06 0z" />
									</svg>
								</div>
								<h3>Vizyonumuz</h3>
								<p>
									Teknoloji ve yazılım alanında Türkiye'nin en güvenilir ve
									kapsamlı bilgi kaynağı olmak.
								</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className={styles.missionCard}>
								<div className={styles.missionIcon}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="40"
										height="40"
										fill="currentColor"
										viewBox="0 0 16 16">
										<path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
									</svg>
								</div>
								<h3>Değerlerimiz</h3>
								<p>
									Doğruluk, şeffaflık, erişilebilirlik ve topluluk odaklı içerik
									üretimi.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className={styles.storySection}>
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<div className={styles.storyImageContainer}>
								<Image
									src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
									alt="Our Team"
									width={500}
									height={350}
									className={styles.storyImage}
								/>
							</div>
						</div>
						<div className="col-lg-6">
							<div className={styles.storyContent}>
								<h2>Hikayemiz</h2>
								<p>
									2024 yılında kurulan NextBlog, teknoloji ve yazılım
									dünyasındaki gelişmeleri takip etmek isteyen herkes için bir
									bilgi kaynağı olarak doğdu.
								</p>
								<p>
									Platformumuz, teknoloji meraklıları, geliştiriciler ve
									yaratıcı zihinlerin bir araya gelerek bilgi paylaşımı
									yapabilecekleri bir merkez olarak hizmet veriyor.
								</p>
								<p>
									Amacımız, karmaşık teknolojik konuları herkesin anlayabileceği
									bir dille anlatmak ve Türkçe kaynak eksikliğini gidermek.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className={styles.teamSection}>
				<div className="container">
					<h2 className={styles.sectionTitle}>Ekibimiz</h2>
					<div className="row">
						{teamMembers.map((member, index) => (
							<div className="col-md-4" key={index}>
								<div className={styles.teamCard}>
									<div className={styles.teamImageContainer}>
										<img
											src={member.image}
											alt={member.name}
											className={styles.teamImage}
										/>
									</div>
									<h3 className={styles.teamName}>{member.name}</h3>
									<p className={styles.teamRole}>{member.role}</p>
									<p className={styles.teamBio}>{member.bio}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className={styles.ctaSection}>
				<div className="container">
					<div className={styles.ctaContent}>
						<h2>Bizimle İletişime Geçin</h2>
						<p>
							Sorularınız, önerileriniz veya işbirliği teklifleriniz için
							bizimle iletişime geçebilirsiniz.
						</p>
						<Link href="/contact" className={styles.ctaButton}>
							İletişim
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
