import BottomBanner from "@/components/landing-page/bottom-banner/BottomBanner";
import DownloadApp from "@/components/landing-page/download-app/DownloadApp";
import Hero from "@/components/landing-page/hero/Hero";
import HeroCryptoContainer from "@/components/landing-page/hero/HeroCryptoContainer";
import HowItWork from "@/components/landing-page/how-it-work/HowItWork";
import MarketUpdate from "@/components/landing-page/market-update/MarketUpdate";
import OurCustomers from "@/components/landing-page/our-customers/OurCustomers";
import WhatIsRockie from "@/components/landing-page/what-is-rockie/WhatIsRockie";

export default function Home() {
	return (
		<>
			<section className="bg-body-tertiary">
				<Hero />
			</section>
			<HeroCryptoContainer />

			<MarketUpdate />
			<HowItWork />
			<WhatIsRockie />
			<section className="bg-body-tertiary">
				<DownloadApp />
			</section>
			<OurCustomers />
			<section
				className="bg-primary"
				style={{
					background:
						"linear-gradient(to right, #8444D4, #5B41D9, #383FDE, #5B41D9, #8444D4)",
				}}>
				<BottomBanner />
			</section>
		</>
	);
}
