import CompanyInfo from "./CompanyInfo";
import FooterBottom from "./FooterBottom";
import Newsletter from "./Newsletter";
import QuickLink from "./QuickLink";
import Resources from "./Resources";

export default function Footer() {
	return (
		<footer className="bg-light border-top pt-5 pb-4 mt-5">
			<div className="container">
				<div className="row">
					<CompanyInfo />
					<QuickLink />
					<Resources />
					<Newsletter />
				</div>
				<hr className="my-4" style={{ opacity: 0.1 }} />
				<FooterBottom />
			</div>
		</footer>
	);
}
