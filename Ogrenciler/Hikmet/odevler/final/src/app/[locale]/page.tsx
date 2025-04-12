import Hero from "@/components/landing-page/hero/Hero";
import HeroCryptoContainer from "@/components/landing-page/hero/HeroCryptoContainer";
import HowItWork from "@/components/landing-page/how-it-work/HowItWork";
import MarketUpdate from "@/components/landing-page/market-update/MarketUpdate";
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
		</>
	);
}
